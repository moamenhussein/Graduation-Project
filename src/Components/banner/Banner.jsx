import "./banner.css"
import Link from "next/link";
import { data } from "../../app/medical/page";
import { useState } from "react";
import Image from "next/image";
export default function Banner(props) {
  const [active, setActive] = useState("filter1");
  const articles = () => {
    setActive("filter1");
    const article = document.getElementById("articles");
    article?.classList.add("active");
    const doctor = document.getElementById("doctor");
    doctor?.classList.remove("doc");
  };
  const doctors = () => {
    setActive("filter2");
    const doctor = document.getElementById("doctor");
    doctor?.classList.add("doc");
    const article = document.getElementById("articles");
    article?.classList.remove("active");
    article?.classList.remove("article");
  };
  return (
    <div className="banner">
      <div className="container p-2">
        <h3>{props.heading}</h3>
        <div className="buttons">
          <button onClick={doctors} id="doctor">
            {props.btnOne}
          </button>
          <button onClick={articles} id="articles" className="article">
            {props.btnTwo}
          </button>
        </div>

        <div className="data m-0">
          {data[active].map((ele) => (
            <div key={ele.id} className="item d-flex align-items-center m-0">
              <Image src={ele.image} alt="Article Image" />
              <div className="me-5 mt-4">
                <div className="d-flex align-items-center mt-5">
                  <h5>{ele.titleOne}</h5>
                  <div className="icon">{/* <FaHeart /> */}</div>
                </div>
                <h6 className="headPercentage">{ele.titleTwo}</h6>
                <div className="rateContent d-flex align-items-center">
                  <h4 className="rate">{ele.rate}</h4>
                  <h4 className="number mt-1">{ele.number}</h4>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="lastTitle">{ele.titleThree}</h6>
                  <Link href={"/"} className="mt-3 me-5 more">
                    {ele.more}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
