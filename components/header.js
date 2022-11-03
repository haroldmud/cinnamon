import Button from "./buttons";
import { useState, useEffect } from "react";

function Header() {

  const [pageScrolled, setpageScrolled] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  const handleScroll = () => {
      if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 50 ? setpageScrolled(true) : setpageScrolled(false);
      }
  };


    return (
        <header className={`flex fixed w-full  ${pageScrolled ? "bg-white" : "bg-transparent text-white" } md:justify-start  md:pl-20 pl-4 py-4 z-20`}>
        <section className="flex justify-between ">
          <div className="w-fit md:pr-80">
            <h1 className="text-2xl font-bold mt-2">CINNAMON</h1>
          </div>
          <div className="md:flex hidden justify-between w-38r">
            <nav className="flex justify-evenly w-23r mt-3 font-semibold">
              <a className="hover:text-blue" href="#">Projects</a>
              <a className="hover:text-blue" href="#">Services</a>
              <a className="hover:text-blue" href="#">About Us</a>
              <a className="hover:text-blue" href="#">Careers</a>
              <a className="hover:text-blue" href="#">Blog</a>
            </nav>
            <a href="#">
              <img className={`w-3r ${pageScrolled ? "hidden" : "block" }`} src="/icons/darkIcon1.jpg"/>
              <img className={`w-3r ${pageScrolled ? "block" : "hidden" }`} src="/icons/icon1.jpg"/>
            </a>
            <Button button={"Contact Us"}/>
          </div>
          <div className="md:hidden mt-2 ml-32">
            <img className={`w-8 ${pageScrolled ? "hidden" : "block" }`} src="/icons/darkIcon2.png" />
            <img className={`w-8 ${pageScrolled ? "block" : "hidden" }`} src="/icons/icon2.png" />
          </div>
        </section>
      </header>
    )
}

export default Header;
