<p align="center"><img src="assets/banner.svg" width="100%" alt="Poirot banner"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v1.0.0-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 Languages: <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 Poirot — IP Detective v1.0.0

> *"The private detective of IP addresses — nothing escapes his little grey cells."*

A full-spectrum IP intelligence console + **LEAK IP 2026 laboratory**, rendered on a **real rotating globe** (MapLibre GL globe projection with CARTO / OpenStreetMap / Esri satellite tiles, with an automatic Leaflet fallback). **Stable, bug-free, production-ready.**

## 🎯 What's new in v1.0.0

### 🐞 Critical bugs fixed
- **Syntax error in LeakLab** that killed the entire script (`push({...};}` missing closing paren) — **fixed**.
- **`map.loaded()`** guarded with `typeof` check + `try/catch` to avoid crash on older MapLibre.
- **Global error handler** (`window.addEventListener('error', ...)`) so any future bug shows a toast instead of blank screen.
- **`Object.assign`** typo fixed.
- All CDN libraries (MapLibre, Leaflet) now guarded with `typeof` checks + Leaflet auto-fallback.

### ✨ New features
- 🌓 **Dark / Light / Auto** themes (follows system preference).
- 🎨 **6 accent colors** (cyan, magenta, lime, gold, violet, coral).
- 🔤 **Typography controls**: font-size slider, corner-radius slider.
- 🎵 Optional **sound effects** (Web Audio API beeps).
- 🔍 **Compare two IPs side-by-side** (diff view).
- 🏷️ **Tag system** for cases (multi-tag + filter).
- 📊 **Timeline visualization** of archive by date.
- 📁 **Advanced filters**: time range, confidence, tags.
- 🌍 **KML export** for Google Earth.
- 📷 **Map screenshot** (PNG download).
- 🔗 **Share URL** with `?ip=` deep link (auto-scan on open).
- 🔔 **PWA notifications** on scan complete.
- ⌨️ **Keyboard shortcuts**: `Ctrl+M` my IP, `Ctrl+L` leak lab, `Ctrl+,` settings, `Ctrl+S` screenshot, `F` fullscreen.
- 🛡️ **Privacy Mode** (censors ISP/LAN/device details in exports).
- 🔒 Disable WebRTC probe / GPS request by default.
- ⚙️ Adjustable scan timeout & max sources.
- 💾 Auto-backup of archive.
- ❓ Built-in help modal.

## ✨ Core features
| Layer | Methods |
|---|---|
| **Geo consensus** | 5 parallel sources + country/city voting + coordinate median + **error radius (km)** + agreement % |
| **Network identity** | ISP / Org / ASN + BGP prefix (Team Cymru) + reverse PTR via Cloudflare DoH |
| **Security** | Tor exit, proxy, VPN, hosting flags + inferential notes |
| **LEAK LAB 2026** | WebRTC public & local IP • timezone • language • DNS resolver path • **precise GPS coordinates** with haversine Δ + arc on globe • protection score • JSON export |
| **Modem detective** | Modem estimate from PTR + country KB + LAN gateway probe + WebRTC (with reasons) |
| **Fingerprint** | Browser/OS/GPU/screen/languages/connection/battery + live target-timezone clock + distance to you + arc "you ← target" |
| **Globe** | Numbered markers with **edit/delete/pick-on-map**, GPS pin, great-circle arcs, pulse rings, auto-rotate, dark-neon & satellite styles |
| **App** | Trilingual (FA/EN/RU) • settings panel with 7 tabs • PWA offline • archive with search/filters/timeline + JSON/CSV/KML export/import • cyberpunk theme |

## 🚀 Deploy (GitHub Pages)
```bash
# upload all files → Settings → Pages → Branch: main → Save
# https://<username>.github.io/<repo>/
```
Local: `python -m http.server 8080`

## ⚖️ Ethics & accuracy
Public IP geolocation is city-level; Poirot shows the **error radius**. GPS tests run **only with permission**. Use only on IPs you own or are authorized to inspect.

## 👨‍💻 Developed by THE SAZ 🔱
<p align="center">
<a href="https://t.me/THE_SAZ">Telegram</a> • <a href="https://github.com/THE-SAZ">GitHub</a> • <a href="https://zaya.io/thesaz">Website</a>
</p>

## 📜 License — MIT (see [LICENSE](LICENSE))
