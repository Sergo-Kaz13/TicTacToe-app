# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ❌⭕ Хрестики-Нулики — React-гра

## 🎯 Ціль гри

Двоє гравців по черзі ставлять **X** або **O** на полі 3×3. Перемагає той, хто першим утворить горизонтальний, вертикальний або діагональний ряд із трьох символів.

---

## 🧩 Функціонал гри

1. **Ігрове поле (3x3)**  
   ▫️ Відображення 9 клітинок  
   ▫️ Кожна клітинка — окремий компонент  
   ▫️ Клік по клітинці → встановлює X або O (якщо порожня)

2. **Стан гравця (X або O)**  
   ▫️ Гра починається з гравця X  
   ▫️ Після кожного ходу — зміна гравця

3. **Перевірка переможця**  
   ▫️ Після кожного ходу перевіряється виграшна комбінація  
   ▫️ Якщо є переможець — показати його  
   ▫️ Якщо всі клітинки зайняті — нічия

4. **Перезапуск гри**  
   ▫️ Кнопка «Скинути гру»  
   ▫️ Обнуляється поле, гравець, переможець

5. **(Опціонально) Історія ходів (Undo/Redo)**  
   ▫️ Зберігати попередні стани  
   ▫️ Можливість повернення до попереднього ходу

6. **(Опціонально) Гра проти комп’ютера (AI)**  
   ▫️ Реалізація базового або просунутого алгоритму ходу

---

## 🖼️ UI/UX поради

- 🎨 Використовуй **Tailwind CSS** або **CSS Modules** для стилізації
- 🧑‍🤝‍🧑 Показуй:
  - Поточного гравця
  - Переможця або нічию
  - Кнопку скидання гри
- 🖱️ Додай `hover`-ефекти для інтерактивності клітинок
- 📱 Подбай про адаптивність для мобільних

---

## 🧪 Опціональні фічі (в планах)

- 🔁 Undo/Redo (з історією станів)
- 🤖 AI для гри з комп’ютером
- 🌙 Темна тема
- 📱 Адаптивний дизайн для мобільних пристроїв

---

## 📂 Технології

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🧠 useState / useEffect для керування станом
