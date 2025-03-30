import ServicesSubTitle from "../Services/ServicesSubTitle";
import ServicesTitle from "../Services/ServicesTitle";

export default function WhyChoosUsText() {
  return (
    <>
      <div>
        <div className="my-5 sm:my-6 md:my-8 lg:my-10">
          <ServicesTitle Title="لماذا تختار آرام لتنظيم الفعاليات؟" />
          <ServicesSubTitle SubTitle="نقدم مزيجًا من الأناقة التقليدية والتطور الحديث في أحداثنا المُصممة بعناية." />
        </div>
        <hr />
        <div className="my-5 sm:my-6 md:my-8 lg:my-10">
          <ServicesTitle Title="التميز في التفاصيل" />
          <ServicesSubTitle SubTitle="محترفونا ذوو الخبرة يصقلون كل جانب من جوانب الحدث بدقة للوصول إلى الكمال، ويتجاوزون التوقعات في كل مرة." />
        </div>
        <div className="my-5 sm:my-6 md:my-8 lg:my-10">
          <ServicesTitle Title="تجربه فاخره" />
          <ServicesSubTitle SubTitle="نقوم بتنسيق أماكن فخمة، وديكورات مخصصة، وتقديم مأكولات فاخرة، وتنظيم لوجستي سلس لتجربة راقية حقًا." />
        </div>
      </div>
    </>
  );
}
