import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const navLinks = [
    {
      title: 'الرئيسية',
      type: 'link',
      href: '/',
    },
    {
      title: 'من نحن',
      type: 'anchor',
      href: '#about',
    },
    {
      title: 'خدماتنا',
      type: 'anchor',
      href: '#services',
    },
    {
      title: 'كيف نعمل',
      type: 'anchor',
      href: '#how-it-works',
    },
    {
      // this is for how to use our service
      title: 'كيفية الاستخدام',
      type: 'link',
      href: '/usage',
    },
    {
      // this is for how to create a linebet account and 1xbet account
      title: 'كيفية إنشاء حساب',
      type: 'link',
      href: '/create-account',
    },
  ];
  return (
    <header className='fixed top-0 z-50 flex w-full flex-col items-center justify-center gap-2 border-b border-slate-400/35 bg-white px-7 py-3'>
      <div className='flex w-full max-w-6xl items-center justify-between'>
        <div className='flex items-center justify-start gap-1'>
          {/* this is for email support:sadikmaroc1234@gmail.com */}
          <p className='cursor-pointer text-xs text-neutral-500 transition-all duration-300 ease-in-out hover:text-primary'>
            للدعم الفني:{' '}
            <span className='font-roboto'>sadikmaroc1234@gmail.com</span>
          </p>
        </div>
        <span className='text-xs text-neutral-500'>موقع شحن الرصيد</span>
      </div>
      <nav className='flex w-full max-w-6xl items-center justify-between'>
        <a className='flex items-center justify-center gap-1'>
          <NavLogo className='h-10 w-10' />
        </a>
        <div className='hidden gap-4 md:flex'>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className='block md:hidden'>
          <MobileNav navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}
const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link
      className='text-sm font-medium text-neutral-500 transition-all duration-300 ease-in-out hover:scale-105 hover:text-primary focus:text-primary'
      href={href}
    >
      {children}
    </Link>
  );
};

const NavLogo = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox='0 0 205 196'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
  );
};

const MobileNav = ({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width={20}
          height={20}
          fill={'none'}
        >
          <path
            d='M4 5L20 5'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4 12L20 12'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4 19L20 19'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>القائمة الرئيسية</SheetTitle>
          <SheetDescription className='flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.title}
              </NavLink>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
