import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineShareLocation } from "react-icons/md";
import Link from "next/link";
import About from "@/Components/about/About";
import Articles from "@/Components/articles/Articles";
import Journey from "@/Components/journey/journey";
import Landing from "@/Components/landing/Landing";
export default function Home() {
  return (
    <>
      <div className="iconsPage">
        <div className="location">
          <Link href={"/"}>
            <LuMessageCircleMore />
          </Link>
        </div>
        <div className="message">
          <Link href={"/"}><MdOutlineShareLocation /></Link>
        </div>
      </div>
      <Landing />
      <About />
      <Journey />
      <Articles />
    </>
  );
}
