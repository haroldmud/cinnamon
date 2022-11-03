import Header from "../components/header"
import Service from "../components/services"
import Button from "../components/buttons"
import Desktop from "../components/Footer/desktopFooter"
import Mobile from "../components/Footer/mobileFooter"
import Cards from "../components/Card/cards"
import Varius from "../components/various"

export default function Home() {
  return (
    <section className="font-mont">
      <Header/>
      <section className="main py-44 mb-32">
        <div className="text-white md:ml-20 ml-4">
          <h1 className="md:text-5r text-3r md:leading-7r font-bold">Results focused design & development agency.</h1>
          <p className="md:w-38r md:text-2xl text-gray-400 text-xl mt-4">Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.</p>
        </div>
      </section>
      <Cards/>

      <section className="main flex justify-center md:px-0  text-white">
       <div className="w-11/12 md:flex justify-between py-20">
          <h1 className="md:ml-6 font-bold md:text-[3.5rem] text-2xl">Our services</h1>
          <div className="grid md:grid-cols-2 md:gap-32 gap-20">
            <Service 
              image={"/icons/icon3.png"} 
              title={"Product design"}
              description={"Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."}
              />
            <Service 
              image={"/icons/icon4.png"} 
              title={"Development"}
              description={"By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."}
              
              />
            <Service
              image={"/icons/icon5.png"}
              title={"Quality assurance"}
              description={"Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."}
              />
            <Service 
              image={"/icons/icon6.png"}
              title={"Marketing & growth"}
              description={"By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."}
              />
            <div>
             <Button button={"See Our Services"}/>
            </div>
          </div>
       </div>
      </section>
      <Varius/>
      <section className="relative md:hidden py-8 bg-gray-100 mt-12">
        <div className="flex justify-center md:w-4/5 md:ml-32 py-20">
         <div>
         <div className="flex justify-center">
          <h2 className="text-2/5r md:text-3/5r w-4/5 font-bold text-center">Let's work together</h2>
         </div>
            <div className="flex justify-center mt-8">
              <Button button={"Contact Us"}/>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0 left-0 md:w-96 w-32" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-application.afe28cef.png&w=640&q=75"/>
      </section>
      <Desktop/>
      <Mobile/>
    </section>
  )
}
