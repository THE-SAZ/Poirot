<p align="center"><img src="assets/banner.svg" width="100%" alt="Баннер Poirot"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v1.0.1-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 Пуаро — детектив по IP v1.0.1

Консоль полной IP-аналитики + **лаборатория утечек 2026** на **настоящем вращающемся глобусе** (глобус MapLibre GL с тайлами CARTO/OSM/Esri + автофолбэк Leaflet). **Без багов, готово к продакшену.**

## 🐞 Исправлено в v1.0.1
- Глобус **больше не вращается после скана** — вращение ставится на паузу при скане/выборе метки; продолжить — 🌀.
- **Анимация падения метки + флаг страны** для каждого найденного IP (раньше метка не отображалась).
- Исправлены `ReferenceError` в истории, пустой скриншот, баг таймлайна в RTL, нерабочие слайдеры.

## ✨ Возможности
- **Гео-консенсус** из 5 источников + радиус ошибки + % согласия
- **Сетевая идентичность**: ISP/Org/ASN + живой BGP-префикс + обратный PTR (DoH)
- **Безопасность**: Tor-выход, прокси, VPN, хостинг
- **Лаборатория утечек**: публичный/локальный WebRTC, часовой пояс, язык, путь DNS, точный GPS → оценка защиты + JSON
- **Глобус**: нумерованные метки с флагом и анимацией, GPS-метка, дуги, спутниковый стиль, полный экран, скриншот
- **Архив**: поиск, фильтры время/точность/теги, таймлайн, теги, экспорт JSON/CSV/**KML**, импорт
- **Сравнение** двух дел · Шеринг URL · PWA-уведомления · горячие клавиши
- **Настройки**: 3 языка, тёмная/светлая/авто тема, 6 акцентов, размер шрифта и радиус, звук, приватный режим, настройка движка

## 🚀 Развёртывание
Загрузите файлы → Settings → Pages → Branch: main → Save. Локально: `python -m http.server 8080`

## 👨‍💻 Разработчик: THE SAZ 🔱
<p align="center"><a href="https://t.me/THE_SAZ">Телеграм</a> • <a href="https://github.com/THE-SAZ">GitHub</a> • <a href="https://zaya.io/thesaz">Сайт</a></p>

## 📜 MIT — файл [LICENSE](LICENSE)
