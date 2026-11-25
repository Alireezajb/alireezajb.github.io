import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-experience-timeline',
  imports: [TimelineModule],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.scss',
})
export class ExperienceTimeline implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly view = inject(DOCUMENT).defaultView;
  private frame = 0;
  private events: HTMLElement[] = [];

  private readonly update = () => {
    this.frame = 0;
    if (!this.view) return;
    const line = this.view.innerHeight * .7;
    for (const event of this.events) {
      const rect = event.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (line - rect.top) / (rect.height || 1)));
      event.style.setProperty('--progress', String(progress));
    }
  };

  private readonly scheduleUpdate = () => {
    if (this.view && !this.frame) this.frame = this.view.requestAnimationFrame(this.update);
  };

  ngAfterViewInit(): void {
    if (!this.view) return;
    this.events = Array.from(this.element.nativeElement.querySelectorAll<HTMLElement>('.p-timeline-event'));
    this.update();
    this.element.nativeElement.classList.add('has-scroll-progress');
    this.view.addEventListener('scroll', this.scheduleUpdate, { passive: true });
    this.view.addEventListener('resize', this.scheduleUpdate);
  }

  ngOnDestroy(): void {
    this.view?.removeEventListener('scroll', this.scheduleUpdate);
    this.view?.removeEventListener('resize', this.scheduleUpdate);
    if (this.frame) this.view?.cancelAnimationFrame(this.frame);
  }

  protected readonly experiences = [
  {
    "company": "شرکت دانش بنیان رایان اندیشه نصر",
    "employment": "تمام‌وقت · تهران",
    "icon": "pi-objects-column",
    "roles": [
      {
        "title": "راهبر تیم توسعهٔ وب",
        "prefix": "از",
        "start": {
          "label": "۱۴۰۴",
          "date": "2026-01"
        },
        "end": null,
        "description": "در شکل‌دادن و هدایت تیم توسعه نقش دارم؛ از انتخاب روش ساخت محصول و مصاحبه با نیروهای جدید تا راهنمایی هم‌تیمی‌ها و بررسی کیفیت کار. تمرکزم تبدیل قابلیت‌های پیچیده به تجربه‌ای سریع، روشن و قابل استفاده برای کاربران است."
      },
      {
        "title": "توسعه‌دهندهٔ نرم‌افزارهای تحت وب",
        "prefix": "از",
        "start": {
          "label": "۱۴۰۰",
          "date": "2022-01"
        },
        "end": null,
        "description": "در ساخت سامانه‌های درمانی، مدیریت ناوگان و جلسات آنلاین مشارکت داشته‌ام. بخش‌هایی را توسعه داده‌ام که کاربران هر روز با آن‌ها کار می‌کنند؛ تا اطلاعات و کارهای پیچیده، روی موبایل و دسکتاپ به‌سادگی در دسترس باشند."
      }
    ]
  },
  {
    "company": "فیلاگر",
    "employment": "پاره‌وقت · تهران",
    "icon": "pi-code",
    "roles": [
      {
        "title": "دستیار آموزشی توسعهٔ وب",
        "prefix": "",
        "start": {
          "label": "۱۴۰۲",
          "date": "2024-01"
        },
        "end": {
          "label": "۱۴۰۳",
          "date": "2024-07"
        },
        "description": "به دانشجویان کمک می‌کردم آموخته‌هایشان را به پروژهٔ عملی تبدیل کنند. با بررسی تمرین‌ها و بازخورد مشخص، آن‌ها را در حل مسئله و بهتر کردن کیفیت کارشان همراهی می‌کردم."
      }
    ]
  },
  {
    "company": "فناپ",
    "employment": "پاره‌وقت · تهران",
    "icon": "pi-code",
    "roles": [
      {
        "title": "دستیار آموزشی توسعهٔ وب",
        "prefix": "",
        "start": {
          "label": "۱۴۰۲",
          "date": "2024-01"
        },
        "end": {
          "label": "۱۴۰۳",
          "date": "2024-07"
        },
        "description": "در پروژه‌های عملی، کنار برنامه‌نویسان در حال یادگیری بودم؛ از پیدا کردن راه‌حل و رفع اشکالات تا منظم‌تر شدن ساختار کار. هدفم این بود که دلیل هر تصمیم را بفهمند و مستقل‌تر پروژه را پیش ببرند."
      }
    ]
  },
  {
    "company": "دانشگاه شهید چمران اهواز",
    "employment": "تمام‌وقت · حضوری · اهواز",
    "icon": "pi-objects-column",
    "roles": [
      {
        "title": "توسعه‌دهندهٔ نرم‌افزارهای تحت وب",
        "prefix": "",
        "start": {
          "label": "۱۳۹۹",
          "date": "2021-02"
        },
        "end": {
          "label": "۱۴۰۰",
          "date": "2021-09"
        },
        "description": "بخش کاربری یک سامانهٔ مدیریت آبیاری را ساختم که وضعیت حسگرها، محدوده‌های آبیاری و کنترل شیرها را در لحظه در اختیار کاربر می‌گذاشت؛ تا اطلاعات فنی زمین به یک داشبورد قابل‌فهم و قابل‌کنترل تبدیل شود."
      }
    ]
  }
];
}

