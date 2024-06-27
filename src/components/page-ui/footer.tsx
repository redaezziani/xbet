import React from 'react';

const Footer = () => {
  return (
    <div className='mx-auto mt-auto w-full max-w-[85rem] px-6 py-10 sm:px-6 lg:px-8'>
      <div className='mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5'>
        <div className='col-span-full hidden lg:col-span-1 lg:block'>
          <div className='flex items-center justify-start gap-1'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
            >
              <svg
                className='size-8 flex-shrink-0 stroke-slate-700 dark:stroke-slate-50 sm:size-9'
                width='40'
                viewBox='0 0 600 500'
                fill='none'
              >
                <rect
                  x='379.447'
                  y='43.748'
                  width='172.095'
                  height='418.666'
                  rx='86.0473'
                  strokeWidth='30'
                ></rect>
                <path
                  d='M231.995 351.6L306.965 221.807L381.934 92.0154C404.822 52.3913 458.092 33.3388 500.917 49.4604C543.742 65.5819 559.905 110.773 537.018 150.397L387.079 409.981C364.191 449.605 310.921 468.657 268.096 452.536C225.271 436.414 209.108 391.224 231.995 351.6Z'
                  strokeWidth='30'
                ></path>
                <path
                  d='M278.239 272.481L278.206 272.539L278.173 272.597L201.072 408.622C180.402 445.088 131.538 462.758 92.2557 447.97C53.2008 433.268 38.461 392.055 59.3333 355.92L216.867 83.187C237.575 47.3364 285.772 30.0984 324.519 44.6849C363.283 59.2777 377.899 100.192 357.157 136.049L278.239 272.481Z'
                  strokeWidth='30'
                ></path>
              </svg>
            </a>
            <p className='ml-2 hidden font-semibold dark:text-white sm:block'>
              فيتفيوسن
            </p>
          </div>
          <p className='mt-3 text-xs text-gray-600 dark:text-neutral-400 sm:text-sm'>
            © 2024 فيتفيوسن.{' '}
          </p>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100'>
            المنتج
          </h4>

          <div className='mt-3 grid space-y-3 text-sm'>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                التسعير
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                سجل التغييرات
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الوثائق
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                تنزيل
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100'>
            الشركة
          </h4>

          <div className='mt-3 grid space-y-3 text-sm'>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                من نحن
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                المدونة
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                وظائف
              </a>{' '}
              <span className='inline text-primary dark:text-primary'>
                — نحن نوظف
              </span>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                العملاء
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                غرفة الأخبار
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                خريطة الموقع
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100'>
            الموارد
          </h4>

          <div className='mt-3 grid space-y-3 text-sm'>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                المجتمع
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                المساعدة والدعم
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الكتاب الإلكتروني
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الجديد
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الحالة
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className='text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100'>
            المطورين
          </h4>

          <div className='mt-3 grid space-y-3 text-sm'>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                واجهة برمجة التطبيقات
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الحالة
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                GitHub
              </a>{' '}
              <span className='inline text-primary dark:text-primary'>
                — جديد
              </span>
            </p>
          </div>

          <h4 className='mt-7 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100'>
            الصناعات
          </h4>

          <div className='mt-3 grid space-y-3 text-sm'>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                الخدمات المالية
              </a>
            </p>
            <p>
              <a
                className='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
                href='#'
              >
                التعليم
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className='mt-5 border-t border-gray-200 pt-5 dark:border-neutral-700'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex items-center gap-x-3'>
            {/* Language Dropdown */}
            <div className='hs-dropdown relative inline-flex [--placement:top-left]'>
              <button
                id='footer-language-dropdown'
                type='button'
                className='hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
              >
                <svg
                  className='size-3 rounded-full'
                  id='flag-icon-css-us1'
                  viewBox='0 0 512 512'
                >
                  {/* Flag SVG */}
                </svg>
                الإنجليزية (الولايات المتحدة)
                <svg
                  className='hs-dropdown-open:rotate-180 size-4 flex-shrink-0 text-gray-500 dark:text-neutral-500'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m18 15-6-6-6 6' />
                </svg>
              </button>

              {/* Language Dropdown Menu */}
              <div className='hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 hidden w-40 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] dark:border dark:border-neutral-700 dark:bg-neutral-800'>
                <button className='hs-dropdown-item hover:bg-gray-50 dark:hover:bg-neutral-700'>
                  {/* Language Option */}
                </button>
                {/* More language options */}
              </div>
            </div>
          </div>
          <div className='mt-3 sm:ml-4 sm:mt-0 sm:flex sm:gap-x-4'>
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
