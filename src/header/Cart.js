const Cart = ({cartOpen, cartEmpty, newProductNr, price, newPrice, handleDelete}) => {
    return ( 
        <div className="cart">
            {cartOpen && 
            <div className="cart-container">
            <h4 className="cart-label">Cart</h4>
            {!cartEmpty &&
                <div className="cart-product-box">
                    <div className="cart-item">
                        <a href="#" className="cart-item-link">
                            <img className="cart-item-img" src={require("../images/image-product-1-thumbnail.jpg")} alt="cart-item" />
                        </a>
                        <div className="cart-item-info">
                            <p className="cart-item-name">Fall Limited Edition Sneakers</p>
                            <div className="cart-price">
                                <p className="cart-item-price">${price} x {newProductNr} </p>
                                <p className="cart-price-total">${newPrice}.00</p>
                            </div>
                        </div>
                        <div className="cart-delete" onClick={handleDelete}></div>
                    </div>
                    <button className="btn cart-btn" type="submit">Checkout</button>
                </div>
            }
            {cartEmpty &&
                <p className="cart-empty">Your cart is empty.</p>}
        </div>
        }
        </div>
     );
}
 
export default Cart;