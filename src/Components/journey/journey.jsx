import "./journey.css";
import Image from "next/image";
import childOne from "../../images/child.jpeg";
import childTwo from "../../images/childTwo.png";
export default function Journey() {
  return (
    <div className="journey">
      <div className="container">
        <h3 className="heading">رحلتنا</h3>
        <div className="container text-center">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="info">
                <h2 className="head">
                  ابدأ رحلتك لتأمين صحة أطفالك وتذكيرك بأهم التطعيمات في
                  مواعيدها.
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="info boxImage">
                <Image src={childOne} alt="Child One" className="iamgeOne"/>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="info mt-5 d-flex align-items-center p-5 gap-4">
                <Image src={childTwo} alt="Child Two" className="childTwo" />
                <h3>أمان طفلك يبدأ هنا.</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="info dateInfo mt-5">
                <h4>الوقت المتبقي للتطعيم القادم</h4>
                <div className="date">١ شهر:20 يوم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
