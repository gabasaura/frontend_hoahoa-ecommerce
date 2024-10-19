import Cart from "./Cart";

const CartOffCanvas: React.FC = () => (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasCart" aria-labelledby="My Cart">
    <div className="offcanvas-header justify-content-center">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
    <Cart />
    </div>
    </div>
    );
export default CartOffCanvas;