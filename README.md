<p align="center"><img src="assets/banner.svg" width="100%" alt="Poirot banner"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v0.0.9-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 Languages: <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 Poirot — IP Detective

> *"The private detective of IP addresses — nothing escapes his little grey cells."*

A full-spectrum IP intelligence console + **LEAK IP 2026 laboratory**, rendered on a **real rotating globe** (MapLibre GL globe projection with CARTO / OpenStreetMap / Esri satellite tiles, with an automatic Leaflet fallback — the map always renders, on mobile and desktop).

## ✨ Features

| Layer | Methods |
|---|---|
| **Geo consensus** | 5 parallel sources (`ipwho.is`, `ipapi.co`, `ipinfo.io`, `ipapi.is`, `reallyfreegeoip`) + country/city voting + coordinate median + **error radius in km** + agreement % |
| **Network identity** | ISP / Org / ASN + live BGP prefix (Team Cymru DNS) + reverse PTR via Cloudflare DoH |
| **Security** | Tor exit node, proxy, VPN, hosting-range flags + inferential notes |
| **LEAK LAB 2026** | Public IP leak via WebRTC/STUN • LAN IP leak • timezone leak • language leak • DNS resolver path leak (`whoami.cloudflare`) • **precise GPS coordinate leak** with haversine Δ + arc on globe • protection score • **JSON export** |
| **Modem detective** | Modem/router estimate from PTR patterns + country knowledge base + LAN gateway probe + WebRTC (reasons shown) |
| **Fingerprint** | Browser/OS/GPU/screen/languages/connection/battery + live target-timezone clock + distance to you + arc "you ← target" |
| **Globe** | Numbered markers with **edit / delete / pick-on-map**, GPS pin, great-circle arcs, pulse rings, auto-rotate, dark-neon & satellite styles |
| **App** | Trilingual UI (FA/EN/RU) with full translations • settings panel (accent colors, reduce motion, map style) • PWA offline • archive with search + JSON/CSV export/import • cyberpunk theme |

## 🚀 Deploy (GitHub Pages)
```bash
# upload all files → Settings → Pages → Branch: main → Save
# https://<username>.github.io/<repo>/
```
Local: `python -m http.server 8080`

## 🗂 Repository
```
index.html            ← entire app (CSS+JS inline, single file)
sw.js                 ← offline service worker
manifest.webmanifest  ← PWA
assets/logo.svg · logo-maskable.svg · banner.svg
README.md · README.fa.md · README.ru.md · LICENSE · .nojekyll
```

## ⚖️ Ethics & accuracy
Public IP geolocation is city-level; Poirot shows the **error radius** instead of pretending. GPS tests run **only with permission**. Use only on IPs you own or are authorized to inspect.

## 👨‍ Developed by THE SAZ 🔱
<p align="center">
<a href="https://t.me/THE_SAZ">Telegram</a> • <a href="https://github.com/THE-SAZ">GitHub</a> • <a href="https://zaya.io/thesaz">Website</a>
</p>

## 📜 License — MIT (see [LICENSE](LICENSE))