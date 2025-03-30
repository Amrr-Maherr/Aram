import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function TopNav() {
  return (
    <>
      <section className=" hidden md:block">
        <div className="container flex items-center justify-between flex-wrap px-[150px] py-[11px]">
          <div>
            <ul className="flex  gap-[25px]">
              <li className="flex items-center text-[16px] font-[400]">
                <FaPhone className="mr-2" size={15} /> (414) 857 - 0107
              </li>
              <li className="flex items-center text-[16px] font-[400]">
                <FaEnvelope className="mr-2" size={15} /> yummy@bistrobliss
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-[10px]">
              <li className="w-[27px] h-[27px] bg-[#F9F9F71F] rounded-full flex items-center justify-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={15} />
                </a>
              </li>
              <li className="w-[27px] h-[27px] bg-[#F9F9F71F] rounded-full flex items-center justify-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={15}  />
                </a>
              </li>
              <li className="w-[27px] h-[27px] bg-[#F9F9F71F] rounded-full flex items-center justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={15} />
                </a>
              </li>
              <li className="w-[27px] h-[27px] bg-[#F9F9F71F] rounded-full flex items-center justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={15}  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
