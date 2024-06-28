import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const productLinks = [
    { title: 'التسعير', href: '#' },
    { title: 'سجل التغييرات', href: '#' },
    { title: 'الوثائق', href: '#' },
    { title: 'تنزيل', href: '#' },
  ];

  const companyLinks = [
    { title: 'من نحن', href: '#' },
    { title: 'المدونة', href: '#' },
    { title: 'وظائف', href: '#' },
    { title: 'العملاء', href: '#' },
    { title: 'غرفة الأخبار', href: '#' },
    { title: 'خريطة الموقع', href: '#' },
  ];

  const resourceLinks = [
    { title: 'المجتمع', href: '#' },
    { title: 'المساعدة والدعم', href: '#' },
    { title: 'الكتاب الإلكتروني', href: '#' },
    { title: 'الجديد', href: '#' },
    { title: 'الحالة', href: '#' },
  ];

  const developerLinks = [
    { title: 'واجهة برمجة التطبيقات', href: '#' },
    { title: 'الحالة', href: '#' },
    { title: 'GitHub', href: '#' },
  ];

  const industryLinks = [
    { title: 'الخدمات المالية', href: '#' },
    { title: 'التعليم', href: '#' },
  ];
  const phoneNumber = '212669461148';
  const message = 'أريد شحن رصيد لتطبيق 1XBet أو Melbet أو Binance';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className='mt-5 w-full border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-6xl px-6 py-10 lg:px-8'>
        <div className='mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5'>
          <div className='col-span-full hidden lg:col-span-1 lg:block'>
            <div className='flex items-center justify-start gap-1'>
              <p className='flex-none text-xl font-semibold dark:text-white'>
                <svg
                  className='h-10 w-10 text-teal-600'
                  viewBox='0 0 205 196'
                  fill='none'
                >
                  <path
                    d='M196.234 49.8033C194.771 42.83 195.161 43.3771 193.553 31.5956L171.57 35.8798C188.922 24.3638 196.953 16.9808 204.276 0C205.948 23.1339 204.648 34.1854 196.234 49.8033Z'
                    fill='#FFD051'
                  />
                  <path
                    d='M162.015 114.601C162.015 159.556 125.528 196 80.5195 196C56.861 196 35.557 185.931 20.6692 169.849C21.136 169.82 21.6072 169.79 22.0827 169.758C85.4636 165.51 122.653 140.807 157.436 87.6309C165.005 75.953 172.537 62.8836 180.232 48.2986C170.048 57.39 160.192 65.6044 150.538 72.9256L150.543 72.9327C99.9553 115.602 54.3843 124.657 0.1002 101.747C0.0669411 101.819 0.0335392 101.891 0 101.963C6.07938 63.0094 39.8144 33.2022 80.5195 33.2022C109.505 33.2022 134.956 48.3162 149.404 71.0843C160.297 62.8106 171.494 53.3799 183.122 42.8075C184.658 41.4107 186.202 39.994 187.753 38.5574C186.802 40.4279 185.854 42.276 184.909 44.1017C175.961 61.3791 167.143 76.9316 158.346 90.3763C160.73 98.0284 162.015 106.165 162.015 114.601Z'
                    fill='#14b8a5'
                  />
                </svg>
              </p>
              <p className='ml-2 hidden font-semibold text-teal-600 sm:block'></p>
            </div>
          </div>

          <div>
            <h4 className='text-xs font-semibold uppercase text-gray-900'>
              المنتج
            </h4>
            <ul className='mt-3 space-y-3 text-sm'>
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <p className='text-gray-600 hover:text-gray-800'>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-semibold uppercase text-gray-900'>
              الشركة
            </h4>
            <ul className='mt-3 space-y-3 text-sm'>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <p className='text-gray-600 hover:text-gray-800'>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-semibold uppercase text-gray-900'>
              الموارد
            </h4>
            <ul className='mt-3 space-y-3 text-sm'>
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <p className='text-gray-600 hover:text-gray-800'>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-semibold uppercase text-gray-900'>
              المطورين
            </h4>
            <ul className='mt-3 space-y-3 text-sm'>
              {developerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <p className='text-gray-600 hover:text-gray-800'>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className='mt-7 text-xs font-semibold uppercase text-gray-900'>
              الصناعات
            </h4>
            <ul className='mt-3 space-y-3 text-sm'>
              {industryLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <p className='text-gray-600 hover:text-gray-800'>
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-5 border-t border-gray-200 pt-5'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-x-3'>
              <div className='hs-dropdown relative inline-flex'>
                <button
                  id='footer-language-dropdown'
                  type='button'
                  className='inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50'
                >
                  <svg
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                  >
                    <path d='M12 19l-7-7 7-7M5 12h14'></path>
                  </svg>
                  العربية
                </button>
              </div>
              <p className='text-xs text-gray-600 sm:text-sm'>
                دعم فني: sadikmaroc1234@gmail.com
              </p>
            </div>
            <div className='mt-5 flex space-x-4 sm:mt-0 sm:justify-end'>
              <div className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>تابعنا على</span>
                <Link
                  href={url}
                  className='flex items-center justify-center gap-1 text-green-500'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={20}
                    height={20}
                    fill={'none'}
                  >
                    <path
                      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p className='text-xs text-green-500'>واتساب</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
