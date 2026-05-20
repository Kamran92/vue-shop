# vue-shop

## Архитектура

Проект использует методологию Feature-Sliced Design (FSD).

### Слои:
- **app** - Конфигурация приложения (router, store, providers)
- **pages** - Страницы приложения
- **widgets** - Сложные UI компоненты, комбинирующие features и entities
- **features** - Фичи и пользовательские взаимодействия
- **entities** - Бизнес-сущности (category, city, product)
- **shared** - Общие ресурсы (api, ui, lib, assets)

### Правила импортов:
- Каждый слой может импортировать только из самого себя или из нижестоящих слоёв
- `shared` — базовый слой и не может импортировать из других слоёв
- `app` — верхний слой и может импортировать из всех слоёв

## Установка
```
yarn install
```

### VScode
```
  Добавить в vscode/settings.json

  {
    "stylelint.validate": ["vue", "css"],
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true,
      "source.fixAll": true
    }
  }
```

### Запуск в режиме разработки
```
yarn serve
```

### Сборка для продакшена
```
yarn build
```

### Запуск тестов
```
yarn test:unit
```

### Линтинг и исправление файлов
```
yarn lint
```

### Исправление стилей
```
yarn lint:css
```

### Настройка конфигурации

See [Configuration Reference](https://cli.vuejs.org/config/).
