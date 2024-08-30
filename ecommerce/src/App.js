import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [products, setProduct] = useState([]);
  const [items, setitems] = useState([]);
  const [filteritems, setFilteritems] = useState("all");
  const [Category, setCategory] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.products);
        setCategory([
          ...new Set(product.products.map((value) => value.category)),
        ]);
        setitems(product.products)
      });
  }, []);

  const filterData = (val) => {
    setFilteritems(val);
    if (val === "all") {
      setitems(products);
    } else {
      setitems(products.filter((v) => v.category === val));
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (!inputValue) {
      setFilteritems("all");
    } else {
      setitems(products.filter((e)=> e.title.toLowerCase().includes(inputValue.toLowerCase())));
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary px-5"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => filterData("all")}
                style={{ cursor: "pointer" }}
              >
                All
              </a>
            </li>
            {Category.map((v, i) => (
              <li key={i}>
                <a
                  className="dropdown-item"
                  onClick={() => filterData(v)}
                  style={{ cursor: "pointer" }}
                >
                  {v}
                </a>
              </li>
            ))}
          </ul>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="search"
            className="form-control"
            aria-label="Text input with dropdown button"
          />
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 mt-3">
          {filteritems === "all"
            ? items.map((e) => (
                <Card
                  key={e.id}
                  title={e.title}
                  image={e.images[0]}
                  price={e.price}
                />
              ))
            : items.map((e) => (
                <Card
                  key={e.id}
                  title={e.title}
                  image={e.images[0]}
                  price={e.price}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
