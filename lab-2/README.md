# ЛР-2. Компоненти, дерево компонентів і пропси

Давид Борщук, група КН313. Сторінка «Команда проєкту».

## Команди

У корені репозиторію: `npm install`. У теці `lab-2/`:

- `npm run dev` — сервер розробки.
- `npm run lint` — ESLint.
- `npm run format:check` — перевірка Prettier.
- `npm run build` — production-збірка в `dist/`.
- `npm run preview` — перегляд production-збірки.

## Дерево рендерингу

Схема складена за JSX; звіряння з React DevTools ще не виконано.
HTML-елементи й StrictMode у цій схемі не показані.

```text
App
├── Header
├── Card «Тімлід»
│   └── Avatar (person: Олена Коваль, size: 120)
└── Card «Команда»
    ├── Profile (key: 1, person: Олена Коваль)
    │   └── Avatar (size не передано → 64)
    ├── Profile (key: 2, person: Андрій Мельник)
    │   └── Avatar (size не передано → 64)
    ├── Profile (key: 3, person: Ірина Бондар)
    │   └── Avatar (size не передано → 64)
    └── Profile (key: 4, person: Максим Ткаченко)
        └── Avatar (size не передано → 64)
```

## Дерево залежностей модулів

Складене за фактичними import. Пакети react і react-dom не включені.

```text
src/main.jsx
├── src/index.css
└── src/App.jsx
    ├── src/components/Header.jsx
    ├── src/components/Avatar.jsx
    ├── src/components/Profile.jsx
    │   └── src/components/Avatar.jsx
    ├── src/components/Card.jsx
    └── src/data.js
```

Зображення з public/avatars/ завантажуються через URL і не є імпортами модулів.

## Пояснення для захисту

- Header отримує рядкові title і subtitle через деструктуризацію props.
- Avatar отримує об’єкт person; size має значення за замовчуванням 64.
  size={120} передає число, а size="120" передав би рядок.
- У Profile size не передано: 64 задається всередині функції, тому цей проп
  не обов’язково видно у DevTools як переданий батьком.
- Profile імпортує Avatar і передає йому person. map створює чотири профілі;
  стабільний key — person.id. key не передається компоненту як звичайний prop.
- Card показує JSX із children. App створює Avatar тімлідки, а Card розміщує
  його у своєму вмісті. Тому дерево розміщення компонентів відрізняється від
  залежностей імпортів і власника, показаного в rendered by.
- Props є вхідними даними тільки для читання; дочірні компоненти їх не змінюють.
- Зміна size у React DevTools тимчасова: після перезавантаження повертається 120.

## Використання AI

AI-агент Codex розпакував стартовий архів, реалізував компоненти, склав дерева,
запустив перевірки та підготував публікацію. Дані й стилі використано з архіву.
Перевірка Components, ручна зміна size на 200 та знімок props залишаються
окремою частиною захисту, яку треба виконати в браузері з React Developer Tools.
