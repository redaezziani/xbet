import Image from "next/image";

export const HowITWork = () => {
    const steps = [
        {
            title: "اختر منصة المراهنات",
            description: "ابدأ رحلتك باختيار منصة المراهنات التي تفضلها. هل أنت من محبي Linebet بتشكيلتها الواسعة من الألعاب الرياضية والافتراضية، أم تفضل 1xbet بخياراتها المتنوعة للمراهنات الحية والكازينو المباشر؟ القرار لك!",
            icon: "/usage/s-1.png" // استبدل بالمسار الفعلي للصورة
        },
        {
            title: "اختر طريقة الدفع المفضلة",
            description: "نوفر لك مجموعة واسعة من طرق الدفع الآمنة والموثوقة لتختار ما يناسبك. سواء كنت تفضل البطاقات الائتمانية، المحافظ الإلكترونية، التحويلات البنكية، أو حتى العملات المشفرة، ستجد ما تبحث عنه لدينا.",
            icon: "/usage/s-2.png" // استبدل بالمسار الفعلي للصورة
        },
        {
            title: "استمتع برصيدك على الفور",
            description: "بمجرد تأكيد عملية الدفع، ستتم إضافة الرصيد إلى حسابك على الفور. لا داعي للانتظار، يمكنك الآن الانغماس في عالم المراهنات المثير والبدء في تحقيق أرباحك!",
            icon: "/usage/s-3.png" // استبدل بالمسار الفعلي للصورة
        }
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
       className=" mt-20  relative grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="w-full absolute   h-full grid grid-cols-1 md:grid-cols-3 ">
            <hr className=" md:h-full col-start-2 w-full  md:w-[.00001rem] h-[.00001rem] border border-dashed border-slate-300/35"/>
            <hr className=" md:h-full hidden md:block md:w-[.00001rem] border border-dashed border-slate-300/35"/>

        </div>
        {steps.map((step, index) => (
          <div key={index} className=" col-span-1 border-b border-dashed border-bodder    flex flex-col gap-3 justify-start items-start p-7 bg-white aspect-square">
            <div className="w-full flex justify-between items-center ">
            <div className="flex items-center justify-center size-14 bg-slate-200/70 text-white rounded-full">
            <Image
            width={40}
            height={40}
            alt="icon"
            className=" opacity-45"
            src={step.icon}
            />
            </div>
            <p
            className=" text-4xl font-semibold text-slate-200/50"
            >
                0{index+1}
            </p>
            </div>
           <div className="mt-4 flex justify-start items-start gap-3 flex-col">
           <h4 className="text-xl font-bold text-slate-600">{step.title}</h4>
           <p className=" mt-3 text-slate-400">{step.description}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  )
}