export const HowITWork = () => {
    const steps = [
        {
            title: "اختر الخدمة",
            description: "اختر الخدمة التي ترغب في شحنها من بين قائمة الخدمات المتاحة.",
            icon: "📦",
        },
        
        {
            title: "اختر الدفع",
            description: "اختر وسيلة الدفع المناسبة لك من بين الوسائل المتاحة.",
            icon: "💳",
        },
        {
            title: "استلم الرصيد",
            description: "استلم الرصيد المشحون في حسابك بعد التحقق من البيانات.",
            icon: "💰",
        },
        ];
  return (
    <div
    id="how-it-works"
    className='mt-24 flex max-w-6xl flex-col items-center justify-center gap-2'>
      <h3 className="text-4xl font-bold text-primary">
        كيف تعمل الخدمة
      </h3>
      <p className="text-center text-slate-400">
        نحن نقدم خدمة شحن الرصيد لتطبيقات الرهان والتداول بأمان تام وبأسعار تنافسية.
      </p>
     
      <div
       className=" mt-20 grid grid-cols-1 gap-3 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-primary">{step.title}</h4>
            <p className="text-center text-slate-400">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}