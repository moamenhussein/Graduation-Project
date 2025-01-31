"use client";
import "../MyFavorites/myFavorite.css";
import "./medical.css";
import medicalImageOne from "../../images/medicalOne.png";
import medicalImageTwo from "../../images/medicalTwo.png";
import medicalImageThree from "../../images/medicalThree.png";
import medicalImageFour from "../../images/medicalFour.png";
import medicalImageFive from "../../images/medicalFive.png";
import medicalImageSix from "../../images/medicalSix.png";
import medicalImageSiven from "../../images/medicalSiven.png";
import medicalImageEight from "../../images/medicalEight.png";
import mainImage from "../../images/article.png";
import Banner from "../../Components/banner/Banner";

export default function Medical() {
  return (
    <div className="medical">
      <Banner heading="الادويه الموصى بها" btnOne="اساسيه" btnTwo="إضافية" />
    </div>
  );
}
export const data = {
  filter1: [
    {
      id: 1,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageOne,
      more: "معرفه المزيد",
    },
    {
      id: 2,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageTwo,
      more: "معرفه المزيد",
    },
    {
      id: 3,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageThree,
      more: "معرفه المزيد",
    },
    {
      id: 4,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageFour,
      more: "معرفه المزيد",
    },
    {
      id: 5,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageFive,
      more: "معرفه المزيد",
    },
    {
      id: 6,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageSix,
      more: "معرفه المزيد",
    },
    {
      id: 7,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageSiven,
      more: "معرفه المزيد",
    },
    {
      id: 8,
      titleOne: "تطعيم روتاتيك",
      titleTwo: "فعال بنسبة99%",
      titleThree: "يتم اخده مره واحده",
      image: medicalImageEight,
      more: "معرفه المزيد",
    },
  ],
  filter2: [
    {
      id: 1,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 2,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 3,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 4,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 5,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 6,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 7,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
    {
      id: 8,
      titleOne: "تطعيم الدرن",
      titleTwo: " فعال بنسبة99% ",
      titleThree: "يتم اخده مره واحده",
      more: "معرفه المزيد",
      image: mainImage,
    },
  ],
};
