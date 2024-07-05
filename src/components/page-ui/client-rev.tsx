import React from 'react'

const ClientRev = () => {
  return (
    <div
    className='mt-24 flex px-4 w-full max-w-4xl flex-col items-center justify-center gap-2'
    >
        <div className="w-full relative flex flex-col gap-4 justify-center items-center bg-primary rounded-sm p-4 h-40 ">
                <img src="quotation-right.svg" alt="quote" className="absolute right-3 top-3 w-5 h-5" />
                <p className="text-center text-2xl text-white ">
                    نحن نقدم خدمة شحن الرصيد لتطبيقات الرهان والتداول بأمان تام وبأسعار تنافسية.
                </p>
                <img src="quotation-left.svg" alt="quote" className="absolute left-3 bottom-3 w-5 h-5" />
        </div>
    </div>
  )
}

export default ClientRev