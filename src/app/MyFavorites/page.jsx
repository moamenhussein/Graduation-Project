"use client";
import { useState } from "react";
import "../../Components/banner/banner.css";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import articleImage from "../../images/article.png";
import doctorImageOne from "../../images/doctorOne.png";
import doctorImageTwo from "../../images/doctorTwo.png";
import Link from "next/link";

export default function MyFavorites() {
  const [active, setActive] = useState("filter1");
  const data = {
    filter1: [
      {
        id: 1,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 2,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 3,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 4,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 5,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 6,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 7,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
      {
        id: 8,
        titleOne: "الاعراض الجانبيه لتطعيم الدرن",
        titleTwo: "فعال بنسبة99%",
        titleThree: "يتم اخده مره واحده",
        image: articleImage,
        more: "معرفه المزيد",
      },
    ],
    filter2: [
      {
        id: 1,
        titleOne: "د/ مريم ناصر",
        titleTwo: "اخصائيه اطفال ",
        more: "معرفه المزيد",
        image: doctorImageOne,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 2,
        titleOne: "د/ محمد ناصر",
        titleTwo: "اخصائى اطفال ",
        more: "معرفه المزيد",
        image: doctorImageTwo,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 3,
        titleOne: "د/ محمد ناصر",
        titleTwo: "اخصائيه اطفال ",
        more: "معرفه المزيد",
        image: doctorImageTwo,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 4,
        titleOne: "د/ مريم ناصر ",
        titleTwo: "اخصائى اطفال ",
        more: "معرفه المزيد",
        image: doctorImageOne,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 5,
        titleOne: "د/ محمد ناصر ",
        titleTwo: "اخصائيه اطفال ",
        more: "معرفه المزيد",
        image: doctorImageTwo,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 6,
        titleOne: "د/ مريم ناصر ",
        titleTwo: "اخصائى اطفال ",
        more: "معرفه المزيد",
        image: doctorImageOne,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 7,
        titleOne: "د/ محمد ناصر ",
        titleTwo: "اخصائيه اطفال ",
        more: "معرفه المزيد",
        image: doctorImageTwo,
        number: 4.2,
        rate: <FaStar />

      },
      {
        id: 8,
        titleOne: "د/ مريم ناصر ",
        titleTwo: "اخصائى اطفال ",
        more: "معرفه المزيد",
        image: doctorImageOne,
        number: 4.2,
        rate: <FaStar />

      },
    ],
  };
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
    <div className="myFavorite">
      <div className="container">
        <h3>العناصر المفضله</h3>
        <div className="buttons">
          <button onClick={doctors} id="doctor">
            اطباء
          </button>
          <button onClick={articles} id="articles" className="article">
            مقالات
          </button>
        </div>

        <div className="data m-0">
          {data[active].map((ele) => (
            <div key={ele.id} className="item d-flex align-items-center m-0">
              <Image src={ele.image} alt="Article Image" />
              <div className="me-5 mt-4">
                <div className="d-flex align-items-center mt-5">
                  <h5>{ele.titleOne}</h5>
                  <div className="icon">
                    <FaHeart />
                  </div>
                </div>
                <h6 className="headPercentage">{ele.titleTwo}</h6>
                <div className="rateContent d-flex align-items-center">
                  <h4 className="rate">{ele.rate}</h4>
                  <h4 className="number mt-1">{ele.number}</h4>
                </div>
                <div className="d-flex">
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
