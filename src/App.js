import "./App.css";
import React, { useState } from "react";
import Items from "./components/item/items";
import AddItem from "./components/addItem/addItem";
import Total from "./components/total/total";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, product: "Pen", price: 2 },
    { id: 2, product: "Book", price: 10 },
  ]);
  const [grandTotal, setGrandTotal] = useState(12);

  const decreaseGrandTotal = (price) => {
    setGrandTotal((prevTotal) => prevTotal - price);
  };

  const increaseGrandTotal = (price) => {
    setGrandTotal((prevTotal) => prevTotal + price);
  };

  const deleteItem = (id, subTotal) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    decreaseGrandTotal(subTotal);
  };

  const addItem = (item) => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { ...item, id: newId };
    setItems((prevItems) => [...prevItems, newItem]);
    increaseGrandTotal(parseFloat(item.price));
  };

  return (
    <div className="container">
      <h1>Product List React App</h1>
      <div className="table">
        <Items
          items={items}
          del={deleteItem}
          increaseGrandTotal={increaseGrandTotal}
          decreaseGrandTotal={decreaseGrandTotal}
        />
        <AddItem add={addItem} />
        <Total items={items} grandTotal={grandTotal} />
      </div>
    </div>
  );
};

export default App;
