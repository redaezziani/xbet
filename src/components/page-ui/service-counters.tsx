import React from 'react'
import NumberTicker from './number-ticker'

export const ServiceCounters = () => {
    return (
        <div className="w-full mt-10 max-w-6xl flex justify-around items-center gap-x-10 gap-y-2 flex-wrap">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-lg font-medium text-slate-400">عملاء سعداء</h2>
                <div className="h-10 flex justify-center items-center gap-1 text-2xl font-black text-primary">
                    
                    <NumberTicker value={1000} className="text-2xl font-black text-primary" />
                    +
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-lg font-medium text-slate-400">مشاريع ناجحة</h2>
                <div className="h-10 flex justify-center items-center gap-1 text-2xl font-black text-primary">
                    
                    <NumberTicker value={1000} className="text-2xl font-black text-primary" />
                    +
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-lg font-medium text-slate-400">ساعات عمل</h2>
                <div className="h-10 flex justify-center items-center gap-1 text-2xl font-black text-primary">
                    <NumberTicker value={1000} className="text-2xl font-black text-primary" />
                    +
                </div>
            </div>
        </div>
    )
}