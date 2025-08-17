# 🌟 Retro 80s Frontend Developer Portfolio

Современное портфолио frontend разработчика в стиле ретро 80х с автоматической интеграцией GitHub API.

## ✨ Особенности

- 🎨 **Ретро дизайн 80х** - неоновые цвета, градиенты, синтвейв эстетика
- 🔗 **GitHub API интеграция** - автоматическая загрузка проектов
- 📱 **Полностью адаптивный** - отлично работает на всех устройствах
- ⚡ **Современные технологии** - React 18, TypeScript, Tailwind CSS
- 🎭 **Анимации** - плавные переходы и микро-взаимодействия
- 🚀 **Готов к деплою** - оптимизирован для production

## 🛠 Технологии

- **Frontend**: React 18, TypeScript
- **Стилизация**: Tailwind CSS
- **Анимации**: Framer Motion
- **API**: GitHub REST API
- **Сборка**: Vite
- **Иконки**: Lucide React

## 🚀 Быстрый старт

### 1. Настройка GitHub username

Откройте файл `src/hooks/useGitHub.ts` и измените:

```typescript
const GITHUB_USERNAME = 'octocat'; // Замените на свой GitHub username
```

### 2. Настройка контактов

В файле `src/components/Contact.tsx` обновите:
- Email адрес
- Ссылки на социальные сети
- Другую контактную информацию

### 3. Установка зависимостей

```bash
npm install
```

### 4. Запуск в режиме разработки

```bash
npm run dev
```

### 5. Сборка для production

```bash
npm run build
```

## 📁 Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Hero.tsx        # Главная секция
│   ├── Skills.tsx      # Навыки и технологии
│   ├── Projects.tsx    # Проекты из GitHub
│   ├── Contact.tsx     # Контактная форма
│   ├── Navigation.tsx  # Навигация
│   ├── NeonButton.tsx  # Неоновые кнопки
│   ├── GlitchText.tsx  # Текст с glitch эффектом
│   └── RetroGrid.tsx   # Ретро сетка фона
├── hooks/              # Кастомные хуки
│   └── useGitHub.ts    # GitHub API интеграция
├── types/              # TypeScript типы
│   └── github.ts       # Типы для GitHub API
├── App.tsx             # Главный компонент
└── main.tsx            # Точка входа
```

## 🎨 Кастомизация дизайна

### Цветовая палитра
```css
/* Основные цвета */
--neon-cyan: #00FFFF
--neon-magenta: #FF00FF
--neon-pink: #FF1493
--neon-purple: #8A2BE2
```

### Шрифты
- **Заголовки**: Orbitron (sci-fi стиль)
- **Основной текст**: Roboto Mono (монospace)

## 🔧 Настройка GitHub API

Портфолио автоматически загружает:
- ✅ Публичные репозитории
- ✅ Статистику профиля
- ✅ Информацию о пользователе
- ✅ Языки программирования
- ✅ Темы и теги проектов

**Примечание**: GitHub API имеет лимит 60 запросов в час для неавторизованных запросов.

## 📦 Деплой

### Netlify / Vercel
1. Подключите репозиторий
2. Команда сборки: `npm run build`
3. Папка публикации: `dist`

### GitHub Pages
```bash
npm run build
# Загрузите содержимое папки dist
```

## 🎯 Производительность

- ⚡ **Lazy loading** для изображений
- 🗜 **Code splitting** для оптимального размера бандла
- 🚀 **Оптимизированные анимации** без блокировки UI
- 📱 **Mobile-first** подход

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License - используйте свободно для личных и коммерческих проектов.

## 🙏 Благодарности

- Дизайн вдохновлен эстетикой synthwave/retrowave
- GitHub API для данных о проектах
- Сообществу React и TypeScript

---

**Создано с ❤️ и ностальгией по 80-м**