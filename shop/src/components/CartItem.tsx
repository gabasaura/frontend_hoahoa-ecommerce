
const CartItem: React.FC<{ title: string; price: number; description: string }> = ({
    title,
    price,
    description,
}) => (
    <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
            <h6 className="my-0">{title}</h6>
            <small className="text-body-secondary">{description}</small>
        </div>
        <span className="text-body-secondary">${price}</span>
    </li>
);
    

export default CartItem;