import React from "react";

const Total = ({ items, grandTotal }) => {
const total = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

return (
    <div>
    <p className="text">Grand Total Price: {grandTotal}</p>
    </div>
);
};

export default Total;
