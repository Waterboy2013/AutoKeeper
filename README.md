# AutoKeeper 🛢️
### Vehicle Maintenance Tracker

A clean, private, offline-first web app for tracking everything your car needs — oil changes, tires, fluids, undercoating, and more. Installable on your phone like a native app. No account. No subscription. No ads. Your data never leaves your device.

---

## Features

- **Multiple vehicles** — add as many cars as you own, switch between them instantly
- **Oil change intervals** — choose 3,000 / 5,000 / or a custom mileage interval per vehicle
- **Tire tracking** — separate all-season and winter tire sets, tread depth gauge with wear estimation, per-wheel measurements (FL/FR/RL/RR)
- **Maintenance items** — oil change, caliper grease, undercoat, undercarriage wash, brake fluid, transmission fluid, coolant flush — ordered most to least frequent
- **Status warnings** — color-coded OVERDUE / DUE SOON / OK / LOG IT indicators with progress bars
- **Service log** — tap any item to log a completed service with date, odometer, and notes
- **Maintenance history** — full chronological log of all services across all items
- **CSV export** — download your full service history per vehicle
- **Push notifications** — get alerted when maintenance is overdue or coming up soon
- **Dark / light theme** — automatically follows your phone or computer's system setting
- **Works offline** — fully functional with no internet connection after first load
- **Installable PWA** — add to your home screen and use it like a native app

---

## Files

| File | Purpose |
|---|---|
| `autokeeper.html` | The entire app — open this in any browser |
| `sw.js` | Service worker — enables offline use and PWA installation |
| `manifest.json` | PWA configuration — app name, icon, display mode |
| `README.md` | This file |

---

## How to Use

### Option 1 — Open locally
Download all three app files into the same folder. Double-click `autokeeper.html` to open it in your browser. Bookmark it for quick access. Your data saves automatically.

### Option 2 — Install on your phone (recommended)

**iPhone:**
1. Open the hosted URL in **Safari**
2. Tap the Share button → **Add to Home Screen** → Add
3. Open AutoKeeper from your home screen — it runs full-screen like a native app

**Android:**
1. Open the hosted URL in **Chrome**
2. Tap the ⋮ menu → **Add to Home screen** → Add

> ⚠️ Always open the app from the home screen icon, not directly from the browser, to keep your data consistent.

### Option 3 — Host it yourself (for a permanent URL)
Upload the three app files to any static hosting service:
- [Netlify Drop](https://app.netlify.com/drop) — drag and drop, free, no account needed
- [GitHub Pages](https://pages.github.com) — free, permanent, version-controlled

---

## Data & Privacy

All data is stored locally in your browser's `localStorage`. Nothing is transmitted to any server. There is no backend, no database, no analytics, and no tracking of any kind.

> **Tip:** Export a CSV backup regularly, especially before clearing your browser's cache or storage.

---

## Notifications

AutoKeeper can send push notifications when maintenance is overdue or due soon. Tap the 🔔 bell icon in the top-right corner to enable them. Notifications are checked automatically each time you open the app.

> For the best notification experience, install AutoKeeper to your home screen as a PWA.

---

## Updating

When a new version is released, simply replace `autokeeper.html` (and `sw.js` if updated) with the new files. Your saved vehicles and service history are stored separately in `localStorage` and will not be affected.

The current version is displayed in small text below the app title in the header.

---

## Built With

- [React 18](https://react.dev) — UI
- [Babel Standalone](https://babeljs.io) — in-browser JSX compilation
- [DM Mono + Bebas Neue](https://fonts.google.com) — typography
- Web APIs — `localStorage`, `Notification`, `Service Worker`, `File System Access`

---

*Built with [Claude](https://claude.ai) by Anthropic*
