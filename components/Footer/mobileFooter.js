export default function Mobile() {
  return(
    <footer className="main md:hidden text-white py-12">
          <div className="flex flex-col justify-between h-full ml-4">
            <h2 className="text-3xl font-bold pb-8">CINAMON</h2>
            <h2 className="text-2xl font-bold w-1/2 ">All software, zero bullshit.</h2>
            <div className="grid grid-cols-2 gap-4 mt-12">
              <a className="font-semibold" href="#">Home</a>
              <a className="font-semibold" href="#">Projects</a>
              <a className="font-semibold" href="#">Services</a>
              <a className="font-semibold" href="#">About Us</a>
              <a className="font-semibold" href="#">Careers</a>
              <a className="font-semibold" href="#">Blog</a>
            </div>
            {/* <a className="underline" href="#">hello@cinnamon.agency</a> */}
            <div className="grid grid-cols-2 gap-8 mt-20">
              <div className="w-32">
                <h3 className="font-bold">Zagreb</h3>
                <p>Slavonska avenija 6, 10000, Zagreb, Croatia</p>
                <p>+385 99 347 3103</p>
              </div>
              <div className="w-32">
                <h3 className="font-bold">New York</h3>
                <p>500 7th Ave, New York, NY 10018, United States</p>
              </div>
              <div className="w-32">
                <h3 className="font-bold">Belgrade</h3>
                <p>Bulevar vojvode Mišića 37 11000, Belgrade, Serbia</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-12">
              <div className="flex flex-col mt-12">
                <h1 className="font-bold ml-10 text-xl">Our newsletter</h1>
                <input className="bg-transparent w-4/5 border-b mb-10 pb-3 mt-6 placeholder:text-xl ml-10" placeholder="Your E-mail"/>
                <button>
                  <a className="bg-blue hover:bg-white hover:text-blue py-15s hover:py-13s hover:border-2 border-blue px-[105px] hover:px-[98px] text-white text-xl" href="#">Subscribe</a>
                </button>
              </div>
              <div className="mt-20 w-full flex justify-center">
                <img className="w-56" src="/images/image5.jpg"/>
              </div>
            </div>
          <div className="text-lightblack flex flex-col justify-between items-center mt-12 ml-4 w-11/12">
            <div className="w-72 border-t border-b mb-8 py-2">
              <a href="#"><img src="/icons/icons.jpg"/></a>
            </div>
            <div className="flex gap-4">
              <p className="font-semibold">© 2022 Cinnamon</p>
              <a className="underline" href="#">Privacy policy</a>
            </div>
          </div>
      </footer>
  )
}
