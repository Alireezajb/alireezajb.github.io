'use strict';

const projects = {
  healthcare: {
    title: 'داشبوردهای چندنقشی درمان', category: 'سلامت دیجیتال', image: 'healthcare-cover.svg',
    role: 'توسعه‌دهندهٔ ارشد فرانت‌اند', time: 'مرداد تا شهریور ۱۴۰۴',
    summary: 'یک سامانه با چهار محیط اختصاصی برای مدیر، منشی، پزشک و متخصص؛ با تمرکز بر دسترسی روشن به اطلاعات بیمار.',
    problem: 'کاربران مختلف به اطلاعات و ابزارهای متفاوتی نیاز داشتند. چالش این بود که گردش کار هر نقش، بدون شلوغ شدن رابط و در یک ساختار مشترک پیاده‌سازی شود.',
    points: ['توسعهٔ داشبوردهای اختصاصی و مسیریابی بر اساس نقش کاربر با Angular.', 'پیاده‌سازی جریان‌های مدیریت بیمار، آزمایش‌ها، علائم حیاتی و نوبت‌ها.', 'مدیریت وضعیت رابط با Signals و استفاده از PrimeNG برای اجزای یکپارچه.', 'طراحی واکنش‌گرا و بارگذاری بخش‌های برنامه بر اساس نیاز.'],
    stack: 'Angular 18 · Signals · PrimeNG · RxJS · REST APIs'
  },
  fleet: {
    title: 'سامانهٔ مدیریت و ردیابی ناوگان', category: 'حمل‌ونقل هوشمند', image: 'fleet-management-cover.svg',
    role: 'توسعه‌دهندهٔ فرانت‌اند', time: 'اردیبهشت تا شهریور ۱۴۰۳',
    summary: 'داشبوردی با محوریت نقشه برای مشاهدهٔ موقعیت زندهٔ خودروها، مرور مسیر و مدیریت هشدارهای ناوگان.',
    problem: 'مدیر ناوگان به نمایی یکپارچه از خودروها، مسیرهای طی‌شده و رویدادها نیاز داشت؛ اطلاعاتی که باید در لحظه قابل مشاهده و بررسی باشند.',
    points: ['توسعهٔ رابط نقشه‌محور با Angular و OpenStreetMap.', 'نمایش موقعیت خودروها و دریافت به‌روزرسانی‌های زنده.', 'پیاده‌سازی رابط محدوده‌های جغرافیایی، هشدارها و تاریخچهٔ مسیر.', 'ساخت ابزارهای مشاهدهٔ سرعت، توقف، سوخت و اطلاعات تشخیصی.'],
    stack: 'Angular 14 · OpenStreetMap · WebSockets · RxJS · REST APIs'
  },
  research: {
    title: 'شبکهٔ ارتباط و همکاری پژوهشگران', category: 'ارتباطات علمی', image: 'research-platform-cover.svg',
    role: 'توسعه‌دهندهٔ فرانت‌اند', time: 'آبان ۱۴۰۴',
    summary: 'بستری برای پیدا کردن ارتباط‌های علمی مرتبط میان پژوهشگران، استادان و دانشجویان، با پیشنهادهای مبتنی بر هوش مصنوعی.',
    problem: 'پیدا کردن همکار علمی مناسب و دسترسی به زمینه‌های پژوهشی مشترک، به جست‌وجوی دستی وابسته بود. رابط باید کشف ارتباط‌های مرتبط را ساده می‌کرد.',
    points: ['ساخت رابط پروفایل‌ها، جست‌وجو و پیشنهاد همکار پژوهشی.', 'اتصال رابط به API پیشنهادهای مبتنی بر هوش مصنوعی.', 'مدیریت وضعیت واکنش‌پذیر با Angular Signals.', 'ساختار ماژولار و استفاده از PrimeNG برای نمایش داده‌های متراکم.'],
    stack: 'Angular 18 · Signals · PrimeNG · AI Matching API · RxJS'
  },
  dashcam: {
    title: 'سامانهٔ پایش زندهٔ دوربین خودرو', category: 'پایش تصویری', image: 'dashcam-monitoring-cover.svg',
    role: 'توسعه‌دهندهٔ فرانت‌اند', time: 'آبان تا آذر ۱۴۰۳',
    summary: 'نمایش هم‌زمان دوربین کابین و مسیر، در کنار موقعیت خودرو روی نقشه و ابزارهای بررسی رویداد.',
    problem: 'برای بررسی اتفاقات ناوگان، تصویر زنده و موقعیت خودرو باید در یک محیط قابل مشاهده می‌بود؛ بدون جابه‌جایی مداوم میان ابزارهای جداگانه.',
    points: ['توسعهٔ داشبورد کنترل چند دوربین با Angular.', 'نمایش هم‌زمان جریان ویدئویی داخل و بیرون خودرو.', 'یکپارچه‌سازی نقشه و موقعیت GPS با نمایش زنده.', 'دریافت داده‌های لحظه‌ای و ساخت ابزارهای مرور رویداد.'],
    stack: 'Angular · WebSockets · OpenStreetMap · RxJS · Video Streams'
  },
  didarba: {
    title: 'دیداربا؛ مدیریت هوشمند جلسات', category: 'همکاری آنلاین', image: 'didarba-cover.svg',
    role: 'توسعه‌دهندهٔ فرانت‌اند', time: '۱۴۰۱ تا ۱۴۰۲',
    summary: 'مدیریت چرخهٔ جلسه از برنامه‌ریزی و دعوت تا گفت‌وگوی گروهی و تماس صوتی و تصویری، در یک محیط.',
    problem: 'هماهنگی جلسه میان ابزارهای زمان‌بندی، دعوت، گفت‌وگو و ویدئو پراکنده بود. هر شرکت‌کننده هم بر اساس نقش خود، به دسترسی متفاوتی نیاز داشت.',
    points: ['توسعهٔ رابط زمان‌بندی جلسات و مدیریت دعوت‌شدگان.', 'پیاده‌سازی رابط‌های متناسب با نقش برگزارکننده، ارائه‌دهنده و شرکت‌کننده.', 'اتصال گفت‌وگوی گروهی زنده با SignalR.', 'یکپارچه‌سازی تماس صوتی و تصویری با BigBlueButton.'],
    stack: 'Angular · SignalR · BigBlueButton · RxJS · REST APIs'
  }
};

const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    for (const key of ['title', 'category', 'summary', 'role', 'time', 'problem', 'stack']) {
      document.getElementById(`dialog-${key}`).textContent = project[key];
    }
    const image = document.getElementById('dialog-image');
    image.src = `assets/${project.image}?v=3`;
    image.alt = `تصویرسازی مفهومی ${project.title}`;
    document.getElementById('dialog-points').replaceChildren(...project.points.map(point => {
      const item = document.createElement('li');
      item.textContent = point;
      return item;
    }));
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
document.getElementById('dialog-contact').addEventListener('click', () => dialog.close());

const header = document.querySelector('.header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 48);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
