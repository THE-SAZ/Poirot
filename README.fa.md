<p align="center"><img src="assets/banner.svg" width="100%" alt="بنر پوآرو"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Poirot-v1.0.1-00e5ff?style=for-the-badge">
  <img src="https://img.shields.io/badge/LEAK--LAB-2026-ff2e88?style=for-the-badge">
  <img src="https://img.shields.io/badge/PWA-READY-b6ff3d?style=for-the-badge">
  <img src="https://img.shields.io/badge/i18n-FA%20%C2%B7%20EN%20%C2%B7%20RU-ffc857?style=for-the-badge">
</p>

<h3 align="center">🌐 <a href="README.md">English</a> · <a href="README.fa.md">فارسی</a> · <a href="README.ru.md">Русский</a></h3>

# 🔎 پوآرو — کارآگاه آی‌پی v1.0.1

کنسول شناسایی تمام‌طیفی آی‌پی + **آزمایشگاه نشت ۲۰۲۶** روی **کره واقعی و چرخان** (کره MapLibre GL با تایل‌های CARTO/OSM/Esri + فال‌بک خودکار Leaflet). **بدون باگ و آماده تولید.**

## 🐞 رفع‌شده در v1.0.1
- کره **بعد از اسکن دیگر نمی‌چرخد** — چرخش با اسکن/انتخاب مارکر خودکار متوقف می‌شود؛ ادامه با 🌀.
- **انیمیشن فرود پین + پرچم کشور** برای هر آی‌پی مکان‌یابی‌شده (قبلاً مارکر دیده نمی‌شد).
- رفع خطای `ReferenceError` در انتخاب تاریخچه، اسکرین‌شات سفید، باگ تایم‌لاین راست‌به‌چپ و اسلایدرهای غیرفعال.

## ✨ امکانات
- **اجماع جغرافیایی** ۵ منبع موازی + شعاع خطا + درصد توافق
- **هویت شبکه**: ISP/سازمان/ASN + پیشوند زنده BGP + PTR معکوس (DoH)
- **امنیت**: خروجی Tor، پروکسی، وی‌پی‌ان، هاستینگ
- **آزمایشگاه نشت**: نشت عمومی/داخلی WebRTC، منطقه‌زمانی، زبان، مسیر DNS، نشت دقیق GPS → امتیاز محافظت + خروجی JSON
- **کره**: پین‌های شماره‌دار با پرچم و انیمیشن فرود، پین GPS، کمان‌های دایره بزرگ، سبک ماهواره‌ای، تمام‌صفحه، اسکرین‌شات
- **بایگانی**: جستجو، فیلتر زمان/دقت/برچسب، تایم‌لاین، برچسب‌ها، خروجی JSON/CSV/**KML**، ورود مجدد
- **مقایسه** دو پرونده کنار هم · اشتراک URL · نوتیفیکیشن PWA · میانبرهای صفحه‌کلید
- **تنظیمات**: ۳ زبان، تم تیره/روشن/خودکار، ۶ اکسنت، اندازه فونت و گردی، صدا، حالت خصوصی، تنظیم موتور اسکن

## 🚀 استقرار
آپلود → Settings → Pages → Branch: main → Save. محلی: `python -m http.server 8080`

## 👨‍💻 توسعه‌دهنده: THE SAZ 🔱
<p align="center"><a href="https://t.me/THE_SAZ">تلگرام</a> • <a href="https://github.com/THE-SAZ">گیت‌هاب</a> • <a href="https://zaya.io/thesaz">وب‌سایت اختصاصی</a></p>

## 📜 پروانه MIT — فایل [LICENSE](LICENSE)
