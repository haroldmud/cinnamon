export default function Desktop () {
  return (
    <footer className=" md:flex hidden flex-col items-center main text-white pb pt-20 h-40r">
    <section className="flex w-11/12 h-30r">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold pb-8">CINAMON</h2>
          <a className="font-semibold" href="#">Home</a>
          <a className="font-semibold" href="#">Projects</a>
          <a className="font-semibold" href="#">Services</a>
          <a className="font-semibold" href="#">About Us</a>
          <a className="font-semibold" href="#">Careers</a>
          <a className="font-semibold" href="#">Blog</a>
        </div>
        <a className="underline" href="#">hello@cinnamon.agency</a>
      </div>
      <div className="flex flex-col justify-between ml-44">
        <h2 className="text-3xl font-bold">All software, zero bullshit.</h2>
        <div className="flex gap-28">
          <div className="w-44">
            <h3 className="font-bold">Zagreb</h3>
            <p>Slavonska avenija 6, 10000, Zagreb, Croatia</p>
            <p>+385 99 347 3103</p>
          </div>
          <div className="w-44">
            <h3 className="font-bold">New York</h3>
            <p>500 7th Ave, New York, NY 10018, United States</p>
          </div>
          <div className="w-44">
            <h3 className="font-bold">Belgrade</h3>
            <p>Bulevar vojvode Mišića 37 11000, Belgrade, Serbia</p>
          </div>
        </div>
        <div className="flex mt-12 gap-56">
          <div className="flex flex-col mt-12">
            <h1 className="font-bold">Our newsletter</h1>
            <input className="bg-transparent border-b mb-10 pb-3 mt-6" placeholder="Your E-mail"/>
            <button>
              <a className="bg-blue hover:bg-white hover:text-blue py-15s hover:py-13s hover:border-2 border-blue px-[100px] hover:px-[98px] text-white text-xl" href="#">Subscribe</a>
            </button>
          </div>
          <div className="w-56 mt-12 ml-14">
            <img className="" src="/images/image5.jpg"/>
          </div>
        </div>
      </div>
    </section>
    <div className="text-lightblack flex justify-between mt-12 w-11/12 border-t">
      <div className="flex gap-4 mt-8">
        <p className="font-semibold">© 2022 Cinnamon</p>
        <a className="underline" href="#">Privacy policy</a>
      </div>
      <div className="w-18/5r py-4">
        <a href="#"><img src="/icons/icons.jpg"/></a>
      </div>
    </div>
  </footer>
  )
}