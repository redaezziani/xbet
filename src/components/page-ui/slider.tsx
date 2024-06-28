
  
 
  
  export const InfiniteSlider = () => {
    const images = [
        '/bank/al-barik-bank.png',
         '/bank/attijari.png',
         '/bank/bank-of-africa.png',
         '/bank/cih-bank.png',
         '/bank/cashplus.svg',
       ];
       
    return (
      <div className="relative max-w-6xl mt-24 flex-wrap w-full flex justify-around items-center gap-y-1 gap-x-6 ">
        {images.map((logo, index) => (
            <div
              className="   flex  items-center justify-center"
              key={index}
            >
              <img
                className="h-28 w-28 object-contain"
                src={logo}
                alt="bank"
                />
            </div>
          ))}
      </div>
    );
  };
  