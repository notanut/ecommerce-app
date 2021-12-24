import thumbnail from "../../images/image-product-1-thumbnail.jpg"
import trash from "../../images/icon-delete.svg"
import { useContext } from "react"
import { CountProductContext } from "../contexts/CountProductContext"

const Cart = () => {
    const countProduct = useContext(CountProductContext)

    return (
        <div className={`cart-container ${countProduct.cartOpen ? '' : 'hidden'}`}>
            <div className="title">
                <span>Cart</span>
            </div>
            <div className={`section ${countProduct.amountProduct > 0 ? 'active' : ''}`}>
                <p className="empty">Your cart is empty.</p>
                <div className="info">
                    <img src={thumbnail} alt="" className="thumbnail"/>
                    <div className="detail">
                        <p>Fall Limited Edition Sneakers</p>
                        <div className="prices">
                            <span>$125.00 x {countProduct.amountProduct} </span>
                            <strong>${countProduct.amountProduct * 125}.00</strong>
                        </div>
                    </div>
                    <img src={trash} alt="" className="clear" onClick={() => countProduct.removeProduct()}/>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    )
}

export default Cart
