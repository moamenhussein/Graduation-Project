import "./articles.css";
import Link from "next/link";
import Image from "next/image";
import articleOneImage from "../../images/articleOne.png";
import articleTwoImage from "../../images/articleTwo.png";
import articleThreeImage from "../../images/articleThree.png";
import articleFourImage from "../../images/articleFour.png";
export default function Articles() {
  return (
    <div className="articles">
      <div className="container">
        <h2 className="heading">المقالات</h2>
        <div className="container text-center">
          <div className="row m-0">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Link href={"/"}>
                  <Image src={articleOneImage} alt="Article One Image" />
                  <h4 className="mt-4">مقالات عن الاعراض الجانبيه</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Link href={"/"}>
                  <Image src={articleTwoImage} alt="Article One Image" />
                  <h4 className="mt-4">الادويه الموصى بها</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Link href={"/"}>
                  <Image src={articleThreeImage} alt="Article One Image" />
                  <h4 className="mt-4">مقالات عامه عن التطعيم </h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Link href={"/"}>
                  <Image src={articleFourImage} alt="Article One Image" />
                  <h4 className="mt-4">نصايح قبل وبعد التطعيم</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
