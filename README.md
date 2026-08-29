# 🎬 Movies List App

A React movie discovery app built to practice core React concepts — state management, side effects, API integration, and translating a design into a working UI.

---

## 📌 Overview

Movies List App lets users browse popular movies and search for titles by name, using live data from the TMDB API. It was built as a hands-on project while learning React, based on a Js Mastery tutorial, then modified and extended.

---

## ✨ Features

- 🔎 **Movie Search** – Find movies by title, with debounced input to avoid firing a request on every keystroke
- 🏷️ **Genre Labels** – Each movie card resolves TMDB's genre IDs into a readable genre name
- 🧩 **Reusable Components** – `Search` and `Card` are separate, prop-driven components
- 📱 **Responsive Design** – Adapts across screen sizes
- 🎨 **UI from Figma** – Interface implemented from a Figma design file
- ⚠️ **Error Handling** – Surfaces a message when the fetch fails or returns no results

---

## 🛠️ Tech Stack

- React + Vite
- JavaScript
- Tailwind CSS
- TMDB API
- CSS

---

## 📂 Project Structure

```
movies-list-app/
├── components/
│   ├── Search.jsx
│   └── Card.jsx
├── public/
│   ├── logo.png
│   ├── hero-image.png
│   ├── star.svg
│   └── No-Poster.png
├── src/
│   ├── App.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1) Clone the repository

```
git clone https://github.com/omar23py/movies-list-app.git
cd movies-list-app
```

### 2) Install dependencies

```
npm install
```

### 3) Set up environment variables

Create a `.env` file in the root:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Get a key from [TMDB](https://www.themoviedb.org/settings/api).

### 4) Start the development server

```
npm run dev
```

Visit `http://localhost:5173`

---

## 🧠 What I Learned

- Managing state with `useState` across multiple pieces of UI state
- Handling side effects and API calls with `useEffect`
- Debouncing search input with `useDebounce` to reduce unnecessary API requests
- Passing data through props and structuring reusable components
- Working with environment variables to keep API credentials out of source control
- Fetching from a real external API and handling loading/error/empty states
- Translating a Figma design into a working, responsive UI

---

## 🔧 What I Changed from the Base Tutorial

- Added a **genre ID → genre name mapping**, so each movie card shows a readable genre instead of just a raw rating and language
- Fixed the "no results" check to match TMDB's actual response shape (`results.length === 0`) instead of a field the API doesn't return
- Simplified the project by leaving out the tutorial's backend/analytics layer (search-count tracking, trending movies section) to keep the scope focused on core React concepts

**Known gap:** no loading spinner yet — the UI doesn't show a loading state while a fetch is in flight. Planned as a next addition.

---

## 📸 Design Reference

Figma Design: [Movie App w/ React](https://www.figma.com/design/kdu6x1bqzyCMbzezudt6s2/Movie-App-w--React?node-id=89001-1614&t=3rrkcbPJY7uMaVcj-0)

---

## 🙌 Acknowledgments

Built while following the **JS Mastery React tutorial**, then modified and extended as a learning exercise. Design reference via the linked Figma file.

## 📄 License

This project is for educational and portfolio purposes.
