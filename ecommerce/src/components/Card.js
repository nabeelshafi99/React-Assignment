





function Card({title,image,price}){ 
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="card" style={{ width: "12rem" }}>
        <img
          src={image}
          // src="https://i.imgur.com/WwKucXb.jpeg"
          className="card-img-top"
          alt="https://placehold.co/600x400"
          style={{"height":200}}
        />
        <div className="card-body">
          <h6 className=" col-10 card-title">{title.slice(0,30)}...</h6>
          <h6 className=" card-price">$ {price}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
