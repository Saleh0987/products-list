import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Quantity = ({ onIncrease, onDecrease }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onIncrease();
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onDecrease();
    }
  };

  return (
    <div className="count">
      <FaMinus onClick={handleDecrease} />
      <p>{quantity}</p>
      <FaPlus onClick={handleIncrease} />
    </div>
  );
};

export default Quantity;
