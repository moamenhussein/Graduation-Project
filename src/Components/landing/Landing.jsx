import "./landing.css";
import Image from "next/image";
import LandinImage from "../../images/landing.png";
import Link from "next/link";
export default function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 col-sm-12 info">
            <h2>
              تواصل مع أفضل الأطباء <br />
              واحصل على <span>رعاية صحية</span> متميزة
            </h2>
            <p>
              “لضمان صحة وسلامة طفلك, فنحن هنا لنقدم لك الدعم والمشورة اللازمة
              في كل خطوة من خطوات تطعيماتك."
            </p>
            <div className="buttons">
              <button>
                <Link href={"/"}>احجز استشارة الآن</Link>
              </button>
              <button>
                <Link href={"/"}>تعرف على المزيد</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={LandinImage} alt="Landing Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
