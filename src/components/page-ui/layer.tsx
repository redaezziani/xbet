export const Layer = () => {
  return (
    <div className='absolute left-0 top-0 z-0 grid h-[50vh] w-full grid-cols-1 md:h-[70vh] md:grid-cols-6'>
      <div className='absolute z-20 h-full w-full bg-gradient-to-b from-transparent to-slate-900/40'></div>
      <svg
        className='absolute bottom-0 left-0 z-10 w-80'
        viewBox='0 0 720 769'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 179.771C84 189.604 261.8 181.971 281 68.771C305 -72.729 16 27 189.5 208.271C352.552 378.626 1145 287 413.5 768'
          stroke='#E0E5F3'
          stroke-width='2'
          stroke-linecap='round'
          stroke-dasharray='10 10'
        />
      </svg>
      <div className='col-span-6 h-full w-full border-b border-teal-700 bg-teal-600 md:border-none'></div>
    </div>
  );
};
