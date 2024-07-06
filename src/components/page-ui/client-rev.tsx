import Image from 'next/image'
import React from 'react'

const ClientRev = () => {
  return (
    <div
    className='mt-24 relative flex px-4 w-full max-w-4xl flex-col items-center justify-center gap-2'
    >
        <img src="arrow.svg" alt="quote" className=" absolute w-28 z-20 -right-32 rotate-12 -top-16" />
        <div className="w-full  ring-1 ring-primary ring-offset-2 relative flex flex-col gap-4 justify-center items-center bg-primary rounded-sm p-4 h-40 ">
                 <div className="size-12 border-2  border-white absolute left-4 -top-4 rounded-full overflow-hidden">
                    <Image
                    fill
                    placeholder='blur'
                    blurDataURL='/user.jpg'
                    src="/user.jpg" alt="client" className="    w-full aspect-square object-cover" />
                 </div>
                <img src="quotation-right.svg" alt="quote" className="absolute right-3 top-3 w-5 h-5" />
                <p className="text-center text-2xl text-white ">
                    كنت بحاجة إلى شحن رصيد لتطبيق الرهان ولم أجد أفضل من هذه الخدمة, شكراً لكم
                </p>
                <img src="quotation-left.svg" alt="quote" className="absolute left-3 bottom-3 w-5 h-5" />
        </div>
    </div>
  )
}

export default ClientRev