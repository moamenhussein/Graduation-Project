import "./landing.css";
import Image from "next/image";
import LandinImage from "../../images/landing.webp";
import Link from "next/link";
export default function Landing() {
  return (
    // <div className="landing">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6 col-md-12 col-sm-12 info">
    //         <h2>
    //           تواصل مع أفضل الأطباء <br />
    //           واحصل على <span>رعاية صحية</span> متميزة
    //         </h2>
    //         <p>
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
    //           fuga! Optio, ea numquam eius laborum iure voluptates esse vero
    //           nemo unde? Commodi maxime rerum pariatur consectetur quidem
    //           eligendi a reiciendis?
    //         </p>
    //         <div className="buttons">
    //           <button>
    //             <Link href={"/"}>احجز استشارة الآن</Link>
    //           </button>
    //           <button>
    //             <Link href={"/"}>تعرف على المزيد</Link>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-12 col-sm-12">
    //         <Image src={LandinImage} alt="Landing Image" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="landing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 info">
            <h2>
              تواصل مع أفضل الأطباء <br />
              واحصل على <span>رعاية صحية</span> متميزة
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
              fuga! Optio, ea numquam eius laborum iure voluptates esse vero
              nemo unde? Commodi maxime rerum pariatur consectetur quidem
              eligendi a reiciendis?
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
          <Image src={LandinImage} alt="Landing Image"/>
          </div>
        </div>
      </div>
    </div>
  );
}
