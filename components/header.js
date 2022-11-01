import Button from "./buttons";

function Header() {
    return (
        <header className="flex fixed w-full bg-white  justify-center py-4 z-20">
        <section className="flex  w-10/12 justify-between">
          <div className="w-fit">
            <svg className="w-10r" xmlns="http://www.w3.org/2000/svg" width="351" height="45" viewBox="0 0 351 45" fill="none">
              <path d="M0 22.4166C0 8.50263 9.03805 0.0673828 22.912 0.0673828C31.0996 0.0673828 37.7697 3.29115 41.9553 8.38571L33.6509 15.3009C31.5832 12.2609 27.8979 10.0728 23.2788 10.0728C15.875 10.0728 11.1558 14.6829 11.1558 22.3999C11.1558 30.167 15.8916 34.9776 23.2788 34.9776C27.9479 34.9776 31.5832 32.8563 33.6509 29.8163L41.9553 36.7983C37.7697 41.8428 31.6499 44.9997 22.912 44.9997C9.03805 44.9997 0 36.3807 0 22.4166Z" fill="#262626"/>
              <path d="M46.9746 0.9021H57.8303V44.0806H46.9746V0.9021Z" fill="#262626"/>
              <path d="M105.422 0.902043V44.1974H99.9693L76.2069 20.2781V44.0805H65.6514V0.851929H71.0542L94.8833 24.7212V0.902043H105.422Z" fill="#262626"/>
              <path d="M152.413 0.902043V44.1974H146.96L123.198 20.2614V44.0638H112.643V0.851929H118.045L141.874 24.7212V0.902043H152.413Z" fill="#262626"/>
              <path d="M188.114 37.0484H170.889L167.737 44.0972H156.098L175.925 0.851929H183.078L202.905 44.0972H191.266L188.114 37.0484ZM174.107 28.4795H184.963L182.478 22.65L179.577 14.2147L176.608 22.65L174.107 28.4795Z" fill="#262626"/>
              <path d="M252.499 0.851929V44.0972H242.127V23.3849L231.454 36.9314H227.752L217.08 23.5018V44.0972H206.708V0.851929H212.228L229.62 23.0843L246.962 0.851929H252.499Z" fill="#262626"/>
              <path d="M258.485 22.533C258.485 9.28713 267.89 0 281.831 0C295.655 0 305.243 9.1034 305.243 22.533C305.243 35.712 295.905 44.9992 281.831 44.9992C268.124 44.9992 258.485 35.8958 258.485 22.533ZM294.071 22.533C294.071 15.0665 289.285 9.95527 281.831 9.95527C274.61 9.95527 269.641 14.9329 269.641 22.533C269.641 29.9493 274.427 35.0439 281.831 35.0439C289.168 35.0439 294.071 30.0663 294.071 22.533Z" fill="#262626"/>
              <path d="M351 0.902043V44.1974H345.547L321.785 20.2614V44.0638H311.229V0.851929H316.632L340.461 24.7212V0.902043H351Z" fill="#262626"/>
            </svg>
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
              <img className="w-3r" src="/icons/icon1.jpg"/>
            </a>
            <Button button={"Contact Us"}/>
          </div>
          <div className="md:hidden mt-2">
            <img className="w-8" src="/icons/icon2.png" />
          </div>
        </section>
      </header>
    )
}

export default Header;
