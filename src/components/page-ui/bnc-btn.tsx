import Link from 'next/link';
import { Button } from '../ui/button'; // Assuming Button component is defined in ../ui/button

export const BinanceBtn = () => {
  const phoneNumber = '212669461148';
  const message = 'أريد شحن رصيد من Binance'; // Your new message for Binance
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={url}>
      <Button className='flex w-fit items-center justify-center gap-2 rounded-full bg-amber-400 hover:bg-amber-500/70'>
        اشترِ رصيد من Binance
        <svg
          className='h-4 w-4 text-white'
          viewBox='0 0 126.61 126.61'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fill='#ffff'>
            <path d='m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z' />
            <path d='m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z' />
            <path d='m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z' />
            <path d='m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z' />
            <path d='m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z' />
          </g>
        </svg>
      </Button>
    </Link>
  );
};
