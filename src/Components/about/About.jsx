import "./About.css";
import Image from "next/image";
import aboutOne from "../../images/aboutOne.jpg";
import aboutTwo from "../../images/aboutTwo.jpg";
import aboutThree from "../../images/aboutThree.jpg";
import { FaTruck } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
export default function About() {
  return (
    <div className="about">
      <h2 className="heading">من نحن</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image
                    src={aboutOne}
                    alt="Image About One"
                    className="imageOne"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image
                    src={aboutTwo}
                    alt="About Image Two"
                    className="imageTwo"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <Image
                    src={aboutThree}
                    alt=" About Image Three"
                    className="imageThree"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 info">
                  <h2>20</h2>
                  <h4>سنوات الخبرة</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="headingInfo">المركز الرائد في الرعاية الصحية</h2>
            <p className="paragraphInfo">
              نحن نقدم أفضل الخدمات الطبية بأعلى معايير الجودة، مع فريق من
              الخبراء المختصين في مختلف التخصصات. نلتزم بتوفير رعاية شاملة
              ومتكاملة لضمان صحة وسلامة مرضانا. في مركزنا، نضع احتياجاتكم في قلب
              أولوياتنا، ونعمل بجد لتقديم تجربة صحية متميزة.
            </p>
            {/* <div className="container text-center mt-5">
              <div className="row moamen">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center information">
                  <h4>مساعدة طارئة</h4>
                  <FaTruck className="me-5" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center information">
                  <h4>أطباء مؤهلون</h4>
                  <FaWandMagicSparkles className="me-4"/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center mt-4 information">
                  <h4> أفضل المحترفين</h4>
                  <FaFilter />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center mt-4 information">
                  <h4>العلاج الطبي</h4>
                  <FaFireAlt className="me-4" />
                </div>
              </div>
            </div> */}
            <div className="containerInfo">
              <div className="d-flex align-items-center">
                <h4>مساعدة طارئة</h4>
                <FaTruck className="me-5" />
              </div>
              <div className="d-flex align-items-center">
                <h4>أطباء مؤهلون</h4>
                <FaWandMagicSparkles className="me-4" />
              </div>
              <div className="d-flex align-items-center">
                <h4> أفضل المحترفين</h4>
                <FaFilter />
              </div>
              <div className="d-flex align-items-center">
                <h4>العلاج الطبي</h4>
                <FaFireAlt className="me-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
