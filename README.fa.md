<p align="center"><img src="assets/banner.svg" width="100%" alt="بنر پوآرو"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v0.0.9-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 زبان‌ها: <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 پوآرو — کارآگاه آی‌پی

> *«کارآگاه خصوصی آی‌پی‌ها؛ هیچ سرنخی از سلول‌های خاکستری او پنهان نمی‌ماند.»*

کنسول شناسایی تمام‌طیفی آی‌پی + **آزمایشگاه نشت LEAK IP 2026** روی **کره واقعی و چرخان زمین** (پروژه‌کشن Globe در MapLibre GL با تایل‌های CARTO / OpenStreetMap / ماهواره‌ای Esri + فال‌بک خودکار Leaflet — نقشه در موبایل و دسکتاپ همیشه رندر می‌شود).

## ✨ امکانات

| لایه | متودها |
|---|---|
| **اجماع جغرافیایی** | ۵ منبع موازی + رأی‌گیری کشور/شهر + میانه مختصات + **شعاع خطا به کیلومتر** + درصد توافق |
| **هویت شبکه** | ISP / Org / ASN + پیشوند زنده BGP (Team Cymru) + PTR معکوس با Cloudflare DoH |
| **امنیت** | گره خروجی Tor، پروکسی، VPN، رنج هاستینگ + یادداشت‌های استنتاجی |
| **آزمایشگاه نشت ۲۰۲۶** | نشت IP عمومی از WebRTC/STUN • نشت آی‌پی LAN • نشت منطقه‌زمانی • نشت زبان • نشت مسیر DNS • **نشت مختصات دقیق GPS** با Δ هاوِرساین و کمان روی کره • امتیاز محافظت • **خروجی JSON** |
| **کارآگاه مودم** | برآورد مودم/روتر از PTR + پایگاه دانش کشورها + کاوش گیت‌وی + WebRTC (با ذکر دلیل) |
| **اثر انگشت** | مرورگر/OS/GPU/صفحه/زبان/اتصال/باتری + ساعت زنده منطقه‌زمانی هدف + فاصله تا شما + کمان «شما ← هدف» |
| **کره** | نشانگرهای شماره‌دار با **ویرایش/حذف/انتخاب روی نقشه**، پین GPS، کمان‌های دایره بزرگ، حلقه‌های پالس، چرخش خودکار، سبک نئون‌تاریک و ماهواره‌ای |
| **برنامه** | رابط سه‌زبانه (فا/ان/رو) با ترجمه کامل • پنل تنظیمات (رنگ اکسنت، کاهش حرکت، سبک نقشه) • PWA آفلاین • بایگانی با جستجو + خروجی/ورودی JSON/CSV • تم سایبرپانک |

## 🚀 استقرار (GitHub Pages)
```bash
# آپلود همه فایل‌ها → Settings → Pages → Branch: main → Save
# https://<username>.github.io/<repo>/
```
محلی: `python -m http.server 8080`

## 🗂 ساختار مخزن
```
index.html            ← کل برنامه (CSS+JS یکپارچه)
sw.js                 ← سرویس‌ورکر آفلاین
manifest.webmanifest  ← PWA
assets/logo.svg · logo-maskable.svg · banner.svg
README.md · README.fa.md · README.ru.md · LICENSE · .nojekyll
```

## ⚖️ اخلاق و دقت
مکان‌یابی عمومی در سطح شهر است؛ پوآرو به‌جای ادعا، **شعاع خطا** نشان می‌دهد. آزمایش GPS فقط **با اجازه کاربر** اجرا می‌شود. فقط برای آی‌پی‌های متعلق به خودتان یا محدوده مجاز استفاده کنید.

## 👨‍ توسعه‌دهنده: THE SAZ 🔱
<p align="center">
<a href="https://t.me/THE_SAZ">تلگرام</a> • <a href="https://github.com/THE-SAZ">گیت‌هاب</a> • <a href="https://zaya.io/thesaz">وب‌سایت اختصاصی</a>
</p>

## 📜 پروانه — MIT (فایل [LICENSE](LICENSE))