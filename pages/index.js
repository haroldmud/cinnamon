import Card from "../components/cards"
import Header from "../components/header"
import Service from "../components/services"
import Button from "../components/buttons"

export default function Home() {
  return (
    <>
      <Header/>
      <section className="main py-44 mb-32">
        <div className="text-white md:ml-28 ml-4">
          <h1 className="md:text-5r text-3r md:leading-7r font-bold">Results focused design & development agency.</h1>
          <p className="md:w-38r md:text-2xl text-xl mt-4">Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.</p>
        </div>
      </section>
      <Card 
        image={"/images/image2.png"}
        card__hidden-detail={"hidden"}
        card_title={"Corrily: Optimize prices to maximize revenue"}
        card_intro={"Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."}
        detail1={"PRODUCT DESIGN"}
        detail2={"QUALITY ASSURENCE"}
        detail3={"QUALITY ASSURENCE"}
      />
      <Card 
        image={"/images/image3.png"}
        card__hidden-detail={"hidden"}
        card_title={"Fiona: Engage & Decide"}
        card_intro={"Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."}
        detail1={"PRODUCT DESIGN"}
        detail2={"QUALITY ASSURENCE"}
        detail3={"QUALITY ASSURENCE"}
      />
      <Card 
        image={"https://images.ctfassets.net/6mf4aqitzrkt/7kFgIXzEEYLIM678mr3mzo/6401985a011c0ae2ce0b3f940499f4c1/thumbnail.png"}
        card__hidden-detail={"block"}
        card_title={"Ukulele: The largest ukulele tabs archive"}
        card_intro={"Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."}
        detail1={"PRODUCT DESIGN"}
        detail2={"QUALITY ASSURENCE"}
        detail3={"QUALITY ASSURENCE"}
      />


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

      <section className="bg-gray-200 relative md:block hidden">
        <div className="flex justify-between w-4/5 md:ml-32 py-10r">
          <h2 className="text-3r w-72 font-bold">Agile team on demand</h2>
          <div>
            <p className="w-96">
            By hiring and managing talented people with skills specific to your project,
             we build you a team that’s accomplished, agile and scalable in both directions.
            </p>
            <div className="mt-8">
              <Button button={"See How It Works"}/>
            </div>
          </div>
        </div>
        <img className="absolute md:block hidden top-72 right-1 w-72" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.316271d9.png&w=750&q=75"/>
      </section>

      <section className="bg-gray-100 relative block md:hidden pl-4">
        <div className="md:flex justify-between md:w-4/5 md:ml-32 py-20">
          <h2 className="text-3r w-72 font-bold">Agile team on demand</h2>
          <img className="w-60 mt-12" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.316271d9.png&w=750&q=75"/>
          <div>
            <p className="w-11/12 text-xl mt-12">
            By hiring and managing talented people with skills specific to your project,
             we build you a team that’s accomplished, agile and scalable in both directions.
            </p>
            <div className="mt-8">
              <Button button={"See How It Works"}/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex relative">
          <div className="py-32 md:ml-20 ml-8 z-10">
            <h2 className="md:text-2/5r text-3xl md:w-3/5 font-bold">They’re consistent, and the communication is good.</h2>
            <p className="text-xl md:w-3/5 mt-12">When I have a deadline, they would work extra hours on the weekend and after hours. 
              Cinnamon gives the impression of being a smaller team that’s focused on customers.</p>
          </div>
          <div>
            <img className="hidden md:block w-12r top-56 right-12 absolute" src="/icons/icon7.jpg"/>
          </div>
          <div className="absolute md:top-0 -top-2">
            <h3 className="text-15r text-gray-100">"</h3>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between w-5/6 md:ml-20 ml-4">
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex w-72">
                <div className="">
                  <img className="w-20 " src="/images/profile1.jpg"/>
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl font-bold">Garin Toren</h2>
                  <p className="text-xl">CEO, ping</p>
                </div>
              </div>
            </div>
            <div className="flex ml-4 mt-8 gap-10">
              <img className="w-10" src="icons/icon8.png"/>
              <img className="w-10" src="icons/icon9.png"/>
            </div>
          </div>

          <div className="text-blue mt-20">
            <h2 className="border-b md:ml-0 ml-4 md:mt-0 mt-4  w-fit pb-1 border-blue font-bold">VIEW CASE STUDY</h2>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 md:flex pt-60 pb-20 mt-32 hidden">
        <div className="ml-12">
          <h2 className="md:text-3/5r text-3xl md:w-3/5 font-bold">Who we are</h2>
          <p className="text-xl md:w-3/5 mt-12">
            Meet our international teams made up of 86 innovators, branched into 8 departments, 
          that influence the market throughout 20 different countries.</p>
          <ul className="grid grid-cols-2 gap-12 w-[30rem] mb-32 mt-12 ">
            <li className="text-xl font-bold">Product design</li>
            <li className="text-xl font-bold">Web development</li>
            <li className="text-xl font-bold">Mobile development</li>
            <li className="text-xl font-bold">Quality assurance</li>
            <li className="text-xl font-bold">Marketing</li>
            <li className="text-xl font-bold">Project management</li>
            <li className="text-xl font-bold">Human resources</li>
            <li className="text-xl font-bold">Sales</li>
            <li className="text-xl font-bold">Fluffy friends</li>
          </ul>
          <Button button={"Read About Us"}/>
        </div>
        <div className="mt-12">
          <img src="images/image4.png"/>
        </div>
      </section>

      <section className="md:hidden bg-gray-100 py-20 pl-4 mt-20">
        <h2 className="text-2/5r font-bold">Who we are</h2>
        <p className="text-xl">Meet our international teams made up of 86 innovators,
           branched into 8 departments, that influence the market 
          throughout 20 different countries.
        </p>
        <div className="mt-12 mb-12">
          <img className="w-5/6" src="images/image4.png"/>
        </div>
        <Button button={"Read About Us"}/>
      </section>

      <section className="relative md:block hidden py-8">
        <div className="flex justify-between w-4/5 md:ml-32 py-10r">
          <img className="text-3r w-72 font-bold" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college.70bf2057.png&w=1920&q=75"/>
          <div>
            <p className="w-96">
            By hiring and managing talented people with skills specific to your project,
             we build you a team that’s accomplished, agile and scalable in both directions.
            </p>
            <div className="mt-8">
              <Button button={"See How It Works"}/>
            </div>
          </div>
        </div>
        <img className="absolute md:block hidden top-60 right-1 w-96" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college-illustration.180f68e4.png&w=1200&q=75"/>
      </section>

      <section className="relative block md:hidden pl-4">
        <div className="md:flex justify-between md:w-4/5 md:ml-32 py-20">
          <img className="text-3r w-72 font-bold" src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college.70bf2057.png&w=1920&q=75"/>
          <div>
            <p className="w-11/12 text-xl mt-12">
            By hiring and managing talented people with skills specific to your project,
             we build you a team that’s accomplished, agile and scalable in both directions.
            </p>
            <div className="mt-8">
              <Button button={"See How It Works"}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
