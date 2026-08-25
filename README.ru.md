<p align="center"><img src="assets/banner.svg" width="100%" alt="Баннер Poirot"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v0.0.9-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 Языки: <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 Пуаро — детектив по IP

> *«Частный детектив IP-адресов — ничто не ускользнёт от его серых клеточек.»*

Консоль полной IP-аналитики + **лаборатория утечек LEAK IP 2026** на **настоящем вращающемся глобусе** (глобус-проекция MapLibre GL с тайлами CARTO / OpenStreetMap / спутником Esri + автоматический фолбэк Leaflet — карта рендерится всегда, на мобильных и десктопе).

## ✨ Возможности

| Слой | Методы |
|---|---|
| **Гео-консенсус** | 5 параллельных источников + голосование страна/город + медиана координат + **радиус ошибки в км** + % согласия |
| **Сетевая идентичность** | ISP / Org / ASN + живой BGP-префикс (Team Cymru DNS) + обратный PTR через Cloudflare DoH |
| **Безопасность** | выходной узел Tor, прокси, VPN, хостинг-диапазоны + выводы |
| **LEAK LAB 2026** | утечка публичного IP через WebRTC/STUN • утечка LAN-адреса • утечка часового пояса • утечка языка • утечка пути DNS (`whoami.cloudflare`) • **точная утечка координат GPS** с Δ по формуле гаверсинусов + дуга на глобусе • оценка защиты • **экспорт JSON** |
| **Детектив модема** | оценка модема/роутера по PTR + база знаний стран + зонд шлюза LAN + WebRTC (с причинами) |
| **Отпечаток** | браузер/ОС/GPU/экран/языки/соединение/батарея + живые часы часового пояса цели + расстояние до вас + дуга «вы ← цель» |
| **Глобус** | нумерованные метки с **редактированием/удалением/выбором на карте**, GPS-метка, дуги большого круга, пульс-кольца, автовращение, стили «неон» и «спутник» |
| **Приложение** | трёхъязычный интерфейс (FA/EN/RU) с полным переводом • панель настроек (акцент, меньше анимаций, стиль карты) • офлайн-PWA • архив с поиском + JSON/CSV экспорт/импорт • киберпанк-тема |

## 🚀 Развёртывание (GitHub Pages)
```bash
# загрузите все файлы → Settings → Pages → Branch: main → Save
# https://<username>.github.io/<repo>/
```
Локально: `python -m http.server 8080`

## 🗂 Репозиторий
```
index.html            ← всё приложение (CSS+JS в одном файле)
sw.js                 ← офлайн service worker
manifest.webmanifest  ← PWA
assets/logo.svg · logo-maskable.svg · banner.svg
README.md · README.fa.md · README.ru.md · LICENSE · .nojekyll
```

## ⚖️ Этика и точность
Публичная геолокация IP точна до города; Пуаро показывает **радиус ошибки**, а не притворяется. Тест GPS работает **только с разрешения**. Используйте только на своих IP или в разрешённых сетях.

## 👨‍ Разработчик: THE SAZ 🔱
<p align="center">
<a href="https://t.me/THE_SAZ">Телеграм</a> • <a href="https://github.com/THE-SAZ">GitHub</a> • <a href="https://zaya.io/thesaz">Сайт</a>
</p>

## 📜 Лицензия — MIT (файл [LICENSE](LICENSE))