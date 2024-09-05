import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import "../App.css";
import { useEffect, useState } from "react";

function Home() {
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [choose , setChoose] = useState("all")
  useEffect(() => {
    const url = choose === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${choose}`;
    fetch(url)
      .then((res) => res.json())
      .then((products) => setproducts(products.products));
  }, [choose]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((category) => setCategory(category));
  }, []);

  const handleChoose = (slug) =>{
    setChoose(slug)
    console.log("handleChoose",slug)
    
}
console.log("handleChoose",products)
  
  return (
      <>
      <Navbar />

      <div
        className=" flex flex-wrap py-5 gap-10 category mx-auto"
        style={{ width: "80%" }}
        >
        <div onClick={() => setChoose('all')} className="text-sm border px-8 py-2">All</div>
        {category.map((items) => (
        //   console.log(items )
          <div key={items.slug} onClick={() => handleChoose(items.slug)} className="text-sm border px-8 py-2">{items.name}</div>
        ))}
      </div>
      <div
        className=" flex flex-wrap mt-10 gap-10  mx-auto"
        style={{ width: "80%" }}
      >
        {products.map((items) => (
          <Card key={items.id} products={items} />
        ))}
      </div>
    </>
  );
}

export default Home;
