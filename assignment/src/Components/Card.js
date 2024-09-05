function Card({products}) {
    // console.log(products)
  return (
       
          <div className="w-1/2" style={{width:"17rem"}}>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={products.thumbnail}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                 {products.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                 {products.title}
                </h1>
                <p className="leading-relaxed mb-3">
                 $ {products.price}
                </p>
              </div>
            </div>
          </div>
  );
}

export default Card;
