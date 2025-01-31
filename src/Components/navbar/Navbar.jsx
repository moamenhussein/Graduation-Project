"use client";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../images/Logo.png";
import { CiBellOn } from "react-icons/ci";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CiSaveDown2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
export default function Navbar() {
  const menuMobile = () => {
    const menuMobile = document.getElementById("mobile-menu");
    // console.log(menuMobile)
    menuMobile?.classList.toggle("menuListMobile");
  };
  return (
    <nav>
      <div className="container">
        <Link href={"/"}>
          <Image src={LogoImage} alt="Logo Image" className="m-0"/>
        </Link>
        <div id="uls">
          <HiBars3BottomLeft className="barsMenu" onClick={menuMobile} />
          <ul>
            <li>
              <Link href={"/"}>الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link href={"/"}>الأطباء</Link>
            </li>
            <li>
              <Link href={"/Vaccinations"}>التطعيمات</Link>
            </li>
            <li>
              <Link href={"/profile"}>الملف الشخصي</Link>
            </li>
            <li>
              <Link href={"/MyFavorites"}>العناصر المفضله</Link>
            </li>
            <li className="bell">
              <Link href={"/"}>
                <CiBellOn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="uls-mobile">
        <ul id="mobile-menu">
          <li>
            <Link href={"/"}>
              <IoHome />
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <FaUserDoctor />
              الأطباء
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <TbVaccine />
              التطعيمات
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <CgProfile />
              الملف الشخصي
            </Link>
          </li>
          <li>
            <Link href={"/MyFavorites"}>
              <CiHeart />
              العناصر المفضله
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
