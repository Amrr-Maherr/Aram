import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#252525] text-white py-12 relative overflow-hidden">
      {" "}
      {/* إضافة relative و overflow-hidden */}
      <div className="container mx-auto px-4 relative z-10">
        {" "}
        {/* إضافة relative و z-10 */}
        {/* خلفية دائرية (يمكن استبدالها بصورة) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#333333] blur-2xl opacity-50"></div>
        {/* الشعار في الأعلى */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold  drop-shadow-md">
            ARAM
          </h2>{" "}
          {/* إضافة drop-shadow-md */}
        </div>
        {/* رسالة العلامة التجارية (أسفل الشعار) */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 italic">
            "خلي المناسبة عليك والفرحة علينا"
          </p>
        </div>
        {/* أيقونات السوشيال ميديا (في صف واحد) */}
        <div className="flex justify-center space-x-8 mb-12">
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#A34590] transition duration-300"
          >
            <FontAwesomeIcon icon={faSnapchatGhost} size="2x" />
          </a>
        </div>
        {/* حقوق الملكية (في الأسفل) */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024 جميع الحقوق محفوظة لـ ARAM
          </p>
        </div>
      </div>
    </footer>
  );
}
