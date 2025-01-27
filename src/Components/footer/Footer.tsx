import "./footer.css";
import footerImage from "../../images/Logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Image src={footerImage} alt="Footer Image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <h3>الخدمات</h3>
                <ul className="uls">
                  <li>
                    <Link href={"/"}>تنبيهات مواعيد التطعيم</Link>
                  </li>
                  <li>
                    <Link href={"/"}> مقالات عن الآثار الجانبية للتطعيم</Link>
                  </li>
                  <li>
                    <Link href={"/"}> قاعدة بيانات الأدوية</Link>
                  </li>
                  <li>
                    <Link href={"/"}> نصائح ما قبل وما بعد التطعيم</Link>
                  </li>
                  <li>
                    <Link href={"/"}>استشارات طبية</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <h3> روابط هامة </h3>
                <ul className="uls">
                  <li>
                    <Link href={"/"}> الصفحة الرئيسية</Link>
                  </li>
                  <li>
                    <Link href={"/"}> عن التطبيق</Link>
                  </li>
                  <li>
                    <Link href={"/"}>الأسئلة الشائعة</Link>
                  </li>
                  <li>
                    <Link href={"/"}> سياسة الخصوصية</Link>
                  </li>
                  <li>
                    <Link href={"/"}>الشروط والأحكام</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <h3>تواصل معنا </h3>
                <p className="email">
                  البريد الإلكتروني: moamenhussein2424@gmail.com
                </p>
                <h6 className="phone">الهاتف: 01024327924</h6>
                <div className="sociaolMedia">
                  <ul>
                    <li>
                      <Link href={"/"}>
                        <FaFacebook style={{ color: "#1877f2" }} />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <IoLogoWhatsapp style={{ color: "#25d366" }} />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <FcGoogle />
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <FaLinkedin style={{ color: "#0a66c2" }} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
