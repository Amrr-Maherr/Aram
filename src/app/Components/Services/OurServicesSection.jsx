import ServicesList from "./ServicesList";
import ServicesSubTitle from "./ServicesSubTitle";
import ServicesTitle from "./ServicesTitle";

export default function OurServicesSection() {
  return (
    <>
      <section>
        <div className="container w-[95%] mx-auto">
          <div className="flex items-center justify-end flex-col my-[70px]">
            <ServicesTitle Title="خدماتنا" />
            <ServicesSubTitle
              SubTitle="تقدم شركتنا ارام خدماتنا فى مجال تنظيم الحفلات والمناسبات
    (اعراس-ملجه-اعياد ميلاد-حفلات تخرج-معارض-مؤتمرات)وجميع الفعاليات"
            />
          </div>
          <ServicesList />
        </div>
      </section>
    </>
  );
}
