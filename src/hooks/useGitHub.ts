import { useState, useEffect } from "react";
import axios from "axios";
import { GitHubRepo, GitHubUser } from "../types/github";
let staticRepos: GitHubRepo[] | null = null;
try {
  // @ts-expect-error: Dynamic import for static JSON, only at build time
  staticRepos = await import("../data/repos.json");
} catch {
  /* ignore error if file does not exist */
}

const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_USERNAME = "keepsake666";

export const useGitHubUser = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`
        );
        setUser(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch GitHub user data");
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(staticRepos || []);
  const [loading, setLoading] = useState(staticRepos ? false : true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (staticRepos) return; // если есть статические данные, не делаем fetch
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`
        );
        const filteredRepos = response.data.filter(
          (repo: GitHubRepo) => !repo.private
        );
        setRepos(filteredRepos.slice(0, 6));
        setError(null);
      } catch (err) {
        setError("Failed to fetch GitHub repositories");
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return { repos, loading, error };
};
