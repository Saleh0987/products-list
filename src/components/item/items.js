import SingleItem from "./SingleItem";

const Items = ({ items, del, increaseGrandTotal, decreaseGrandTotal }) => {
    let length = items.length;
    const ListItem = length ? (
    items.map((item) => {
        return (
        <SingleItem
        key={item.id}
        {...item}
        del={del}
        increaseGrandTotal={increaseGrandTotal}
        decreaseGrandTotal={decreaseGrandTotal}
        />
    );
    })
) : (
    <div className="text">There are no items, Try to add some.</div>
);
return (
    <div>
    <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Quantity</p>
        <p>Subtotal</p>
    </div>
    {ListItem}
    </div>
);
};

export default Items;
