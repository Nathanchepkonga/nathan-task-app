# Nathan Task App

Nathan Task App is a modern, minimal to‑do list web app built with React + Vite.  
It’s designed to look simple with subtle animations, smart reminders, and an easy interface to keep your day organized.  

---

## Features

- Add, complete & delete tasks – stay on top of your day.
- Categorized tasks – organize by Work, Personal, Study, or see All.
- Reminders with notifications – get 2 browser notifications for each task (one on time, and another one minute later).
- Tasks stay saved – uses `localStorage` so your tasks won’t disappear when you refresh.
- Animations – smooth fade‑in & staggered task entry.
- Responsive design – looks great on desktop and mobile(not complete).

---

## Tech Stack

- React (Hooks) – functional components only (`useState`, `useEffect`)
- Vite – fast dev server and bundler
- Vanilla CSS 
- Browser Notification – sends reminders directly to your device

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Nathanchepkonga/nathan-task-app.git
cd nathan-task-app
```
---

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev

-The app will run at http://localhost:5173/.
```

### 4.Build 

```bash
npm run build
```

Vite will create an optimized build in the dist/ folder.

### Notifications

When you first open the app, your browser will ask:
“This site wants to show notifications.”
Click Allow to enable reminders.
Every task with a set date & time will trigger:
First notification at the exact time.
Second notification one minute later.

### Animations
App fade‑in on load.
Task cards slide up one by one with staggered delay (0.15s apart).
Hover effects on buttons and cards for a polished feel.

### What I’d Add With More Time
Better mobile layout with touch-friendly buttons.
Dark mode toggle for night use.
Cloud sync (log in and see tasks everywhere).
Recurring tasks (daily, weekly reminders).

### Credits
Built by Nathan Chepkonga.