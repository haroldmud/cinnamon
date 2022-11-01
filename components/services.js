function Service(props) {
  return(
    <section className="flex flex-col gap-6 md:w-72 text-xl">
      <div>
        <img className="w-12" src={props.image}/>
      </div>
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p>{props.description}</p>
    </section>
  )
}

export default Service;
