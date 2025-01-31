"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import "./profileForm.css";
import defaultProfileImage from "../../images/profile.jpeg";
import { CiUser } from "react-icons/ci";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaLock } from "react-icons/fa";
export default function ProfileForm() {
  const [profileSrc, setProfileSrc] = useState(defaultProfileImage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const changePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setProfileSrc(e.target.result); // تحديث حالة الصورة
      };
      reader.readAsDataURL(file);
    }
  };
  const values = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(password);
  };
  return (
    <>
      <div className="profile-container">
        <Image
          id="profileImage"
          src={profileSrc}
          alt="الصورة الشخصية"
          className="profile-img"
          width={120}
          height={120}
        />
        <label htmlFor="imageUpload" className="edit-icon">
          ✏️
        </label>
        <input
          type="file"
          id="imageUpload"
          className="hidden"
          accept="image/*"
          onChange={changePhoto}
        />
      </div>
      <form action="" className="mt-5">
        <div className="inputForm">
          <h5>الإسم</h5>
          <span>
            <CiUser />
          </span>
          <input
            type="text"
            placeholder="قم بإدخال اسمك"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputForm">
          <h5>البريد الالكتروني</h5>
          <span>
            <FaEnvelope />
          </span>
          <input type="email" placeholder="أدخل بريدك الإلكتروني" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="inputForm">
          <h5>رقم الهاتف</h5>
          <span>
            <FaPhoneAlt />
          </span>
          <input type="text" placeholder="أدخل رقم الهاتف" onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="inputForm">
          <h5>العنوان</h5>
          <span>
            <MdOutlineMapsHomeWork />
          </span>
          <input type="text" placeholder="العنوان" onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="inputForm">
          <h5>كلمة المرور</h5>
          <span>
            <FaLock />
          </span>
          <input type="password" placeholder="أدخل كلمة المرور" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className=" buttons d-flex mt-4">
          <button onClick={values} className="active">
            <Link href="/">ارسال</Link>
          </button>
          <button>
            <Link href={"/"}>حذف الحساب</Link>
          </button>
        </div>
      </form>
    </>
  );
}
