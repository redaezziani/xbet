import Link from "next/link";




export const InfiniteSlider = () => {
  const images = [
    '/bank/al-barik-bank.png',
    '/bank/cashplus.svg',
    '/bank/attijari.png',
    '/bank/bank-of-africa.png',
    '/bank/cih-bank.png',
    '/bank/orange.jpg',
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center max-w-6xl mt-24">
      <div className="relative  flex-wrap w-full flex justify-around items-center gap-y-1 gap-x-6 ">
        {images.map((logo, index) => (
          <div
            className="  grayscale  flex  items-center justify-center"
            key={index}
          >
            <img
              className="h-10 aspect-auto   object-contain"
              src={logo}
              alt="bank"
            />
          </div>
        ))}
      </div>
      <p
      className="text-gray-500 mt-3 text-sm font-light"
      >
        جميع شركائنا معتمدين وآمنين. يمكنك الثقة بهم.  <Link href="#">المزيد</Link>
      </p>
    </div>

  );
};
