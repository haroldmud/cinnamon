import Card from "."

function Cards() {
  return(
    <>
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
    </>
  )
}

export default Cards;
