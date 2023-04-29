import { useState } from "react";
import Quantity from "../total/Quantity";

const SingleItem = ({
  product,
  price,
  id,
  del,
  increaseGrandTotal,
  decreaseGrandTotal,
}) => {
  const [itemSubtotal, setItemSubtotal] = useState(parseFloat(price));

  const increaseItemSubtotal = () => {
    setItemSubtotal((prev) => prev + parseFloat(price));
    increaseGrandTotal(parseFloat(price));
  };

  const decreaseItemSubtotal = () => {
    if (itemSubtotal > price) {
      setItemSubtotal((prev) => prev - parseFloat(price));
      decreaseGrandTotal(parseFloat(price));
    }
  };

  return (
    <div className="item">
      <p>{product}</p>
      <p>{price}</p>
      <p className="delete" onClick={() => del(id, itemSubtotal)}>
        &times;
      </p>
      <Quantity
        onIncrease={increaseItemSubtotal}
        onDecrease={decreaseItemSubtotal}
      />
      <p>{itemSubtotal}</p>
    </div>
  );
};

export default SingleItem;
