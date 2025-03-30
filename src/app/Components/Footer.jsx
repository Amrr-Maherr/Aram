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
    <div className="bg-[#252525] text-white py-8">
      <div className="w-[90%] mx-auto">
        {/* الجزء العلوي من الفوتر (الشعار والنص) */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">ARAM</h2>
          <p className="text-sm sm:text-base md:text-lg">
            لتنظيم الحفلات والمؤتمرات
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">
            خلي المناسبة عليك والفرحة علينا
          </p>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl hover:text-[#8A1E70]"
          >
            <FontAwesomeIcon icon={faSnapchatGhost} />
          </a>
        </div>

        <hr className="border-gray-600 mb-6" />

        {/* حقوق الملكية */}
        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg">
            حقوق الملكية و التطوير محفوظة @2024
          </p>
        </div>
      </div>
    </div>
  );
}
