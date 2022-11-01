
function Card(props) {
  return(
    <section className="mt-12">
    <div className="flex justify-center pb-32">
      <div className="w-11/12">
        <div className="flex justify-center ">
           <img className="bg-green" src={props.image}/>
        </div>
        <div className="mt-12">
            <h2 className="text-lightblack font-bold text-12s"><span>{props.detail1}</span><span className="ml-8 mr-8">{props.detail2}</span><span className={props.card__hidden_detail}>{props.detail3}</span></h2>
              <a href="#"><h2 className="text-2/5r md:w-2/5 leading-2xl font-bold mt-4">{props.card_title}</h2></a>
              <p className="md:w-4/6 mt-6 text-xl ">{props.card_intro}</p>
          </div>
      </div>
    </div>

  </section>
  
  )
}

export default Card;
