export const projectCategories = [
  'طراحی سامانه',
  'مدیریت کاربران',
  'سامانهٔ مدیریتی',
  'ردیابی آنلاین',
  'طراحی پلتفرم',
  'هوش مصنوعی',
  'داشبورد مدیریتی',
  'پایش زنده',
  'جلسات آنلاین',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export function isProjectCategory(value: string): value is ProjectCategory {
  return projectCategories.some(category => category === value);
}
