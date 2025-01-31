
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
export default function ProfileContent(props) {
  return (
    <>
      <Link href={"/"} className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          {props.iconOne}
          <h5 className="me-3">{props.heading}</h5>
        </div>
        <div>
          <FaAngleLeft />
        </div>
      </Link>
    </>
  );
}
