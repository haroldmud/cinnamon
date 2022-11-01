function Button(props) {
  return(
    <button>
      <a className="bg-blue hover:bg-white hover:text-blue py-15s hover:py-13s hover:border-2 border-blue px-30s hover:px-28s text-white" href="#">{props.button}</a>
    </button>
  )
}

export default Button;