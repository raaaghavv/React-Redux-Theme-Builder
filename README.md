# React Redux Theme Builder - Appversal Interview Project

This project is a comprehensive Theme Builder application, developed as a technical assignment for React Developer role at **Appversal**. The primary challenge was to translate a detailed Figma mockup into a pixel-perfect, fully responsive, and highly interactive web application. A core requirement was a deep and robust implementation of Redux for complex state management, making this a Redux-heavy application.

[**➡️ View Live Demo**](https://theme-builderr.netlify.app/)

---

## 📸 Project Screenshot

Here is a screenshot of the application's desktop layout, showing the responsive sidebar, the dynamic customization panel, and the live mobile preview.

![Theme Builder Screenshot](./src/screenshot/theme-builder%20screenshot.png) 

---

## 🌟 Core Challenge & Requirements

The assignment was designed to test three key areas of frontend development:

1. **Pixel-Perfect UI Implementation:** Translate a high-fidelity Figma design into a fully functional and visually identical web application using Tailwind CSS.
2. **Advanced Redux State Management:** Architect a complex, centralized state using Redux Toolkit. The state needed to handle a deeply nested theme object, manage the currently selected UI component, and persist changes across sessions.
3. **Complex Responsive Design:** The application required three distinct and seamless layouts for desktop, tablet, and mobile devices, moving from a multi-column dashboard to a single-column, preview-first interface on smaller screens.

## ✨ Key Features

- **Real-time Mobile Preview:** A live, interactive mockup of a mobile screen that instantly reflects every style change made in the builder.
- **Dynamic Customization Panels:** A context-aware panel that displays the correct set of styling controls based on the UI element selected by the user.
- **Component-Based Architecture:** The theme is broken down into logical UI components (Title, CTA, Options List, etc.), each with its own set of customizable properties.
- **Deeply Nested State Management:** Utilizes Redux Toolkit to manage a complex theme object, including colors, text styles, container properties, and corner radiuses for multiple component states.
- **State Persistence:** Implemented Redux middleware to automatically save the entire theme state to `localStorage`, ensuring user's work is preserved across browser sessions.
- **Fully Responsive Layout:**
  - **Desktop:** A three-column professional layout showing the element list, customization panel, and live preview simultaneously.
  - **Tablet & Mobile:** A streamlined, single-column layout that prioritizes the preview, with a dropdown menu to select elements and the customization panel appearing below.

## 🛠️ Tech Stack

- **Framework:** React 18 (with Hooks)
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Hooks:** Custom hooks (`useMediaQuery`) for responsive logic.

## 🏗️ Architecture & State Management

This is a **Redux-heavy application** by design. The entire state of the theme, including every color, font size, and alignment, is managed within the Redux store.

- **`themeBuilderSlice`:** A single, comprehensive slice manages the `currentTheme` object and the `selectedComponent` string.
- **Generic `updateComponentStyle` Action:** A flexible action was created to handle updates to any property, at any level of nesting within the theme object, keeping the component-level code clean and reusable.
- **`localStorage` Middleware:** A custom middleware intercepts actions dispatched by `themeBuilderSlice` and syncs the updated state to the browser's `localStorage`, providing seamless persistence.

## 🚀 Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/React-Redux-Theme-Builder.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd React-Redux-Theme-Builder
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```

The application will now be running on `http://localhost:5173`.
