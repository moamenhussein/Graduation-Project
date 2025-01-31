import "./profile.css";
import ProfileContent from "./profileContent";
import ProfileForm from "./profileForm"
import { IoSettingsOutline } from "react-icons/io5";
import { LiaThemeisle } from "react-icons/lia";

import { CiBellOn } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
export default function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div className="profileFormAndHeading">
          <div className="info">
            <h3 className="headingInfo">اعدادات الحساب الشخصي</h3>
          <ProfileForm />
          </div>
        </div>
        <div className="boxs">
          <ProfileContent
            iconOne={<IoSettingsOutline />}
            heading="اعدادات الحساب الشخصى"
          />
          <ProfileContent iconOne={<LiaThemeisle />} heading="الثيمات" />
          <ProfileContent iconOne={<CiBellOn />} heading="الاشعارات" />
          <ProfileContent iconOne={<IoLanguage />} heading="اللغه" />
          <ProfileContent iconOne={<IoIosPersonAdd />} heading="اضافه طفل" />
          <ProfileContent iconOne={<IoIosPersonAdd />} heading="اطفال" />
          <ProfileContent iconOne={<IoIosLogOut />} heading="تسجيل خروج" />
        </div>
      </div>
    </div>
  );
}
