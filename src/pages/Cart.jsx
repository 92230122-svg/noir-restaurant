
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowRight,
    ArrowLeft,
} from 'lucide-react';

import { useCart } from '../context/cartcontext';
import formatCurrency from '../utils/currency';

function Cart() {
    const {
        cartItems,
        cartCount,
        cartTotal,
        removeFromCart,
        updateQuantity,
        clearCart,
    } = useCart();

    return (
        <main className="noir-cart-page">
            <div className="container">

                {/* PAGE HEADER */}
                <div className="noir-cart-header">
                    <span className="noir-section-eyebrow">
                        YOUR SELECTION
                    </span>

                    <h1>
                        YOUR <span>CART.</span>
                    </h1>

                    <p>
                        Great taste starts with great choices.
                    </p>
                </div>

                {cartItems.length === 0 ? (

                    /* EMPTY CART */
                    <div className="noir-empty-cart">
                        <ShoppingBag size={55} />

                        <h2>YOUR CART IS EMPTY</h2>

                        <p>
                            Looks like you haven't added anything delicious yet.
                        </p>

                        <Link to="/menu" className="noir-primary-button">
                            EXPLORE OUR MENU <ArrowRight size={18} />
                        </Link>
                    </div>

                ) : (

                    <div className="row g-4">

                        {/* CART ITEMS */}
                        <div className="col-lg-8">

                            <div className="noir-cart-items-header">
                                <span>YOUR ITEMS ({cartCount})</span>

                                <button
                                    type="button"
                                    onClick={clearCart}
                                    className="noir-clear-cart"
                                >
                                    <Trash2 size={16} />
                                    CLEAR CART
                                </button>
                            </div>

                            <div className="noir-cart-items">

                                {cartItems.map((item) => (
                                    <div className="noir-cart-item" key={item.id}>

                                        <div className="noir-cart-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>

                                        <div className="noir-cart-item-info">
                                            <span>{item.category}</span>

                                            <h3>{item.name}</h3>

                                            <p>{formatCurrency(item.price)}</p>

                                            <div className="noir-cart-quantity">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity - 1)
                                                    }
                                                    aria-label={`Decrease ${item.name} quantity`}
                                                >
                                                    <Minus size={15} />
                                                </button>

                                                <strong>{item.quantity}</strong>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuantity(item.id, item.quantity + 1)
                                                    }
                                                    aria-label={`Increase ${item.name} quantity`}
                                                >
                                                    <Plus size={15} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="noir-cart-item-actions">
                                            <strong>
                                                {formatCurrency(item.price * item.quantity)}
                                            </strong>

                                            <button
                                                type="button"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label={`Remove ${item.name}`}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                    </div>
                                ))}

                            </div>

                            <Link to="/menu" className="noir-continue-shopping">
                                <ArrowLeft size={17} />
                                CONTINUE SHOPPING
                            </Link>

                        </div>

                        {/* ORDER SUMMARY */}
                        <div className="col-lg-4">
                            <div className="noir-cart-summary">

                                <h2>ORDER SUMMARY</h2>

                                <div className="noir-summary-row">
                                    <span>Total Items</span>
                                    <span>{cartCount}</span>
                                </div>

                                <div className="noir-summary-row">
                                    <span>Subtotal</span>
                                    <span>{formatCurrency(cartTotal)}</span>
                                </div>

                                <div className="noir-summary-row">
                                    <span>Delivery</span>
                                    <span>Calculated later</span>
                                </div>

                                <div className="noir-summary-divider" />

                                <div className="noir-summary-total">
                                    <span>TOTAL</span>
                                    <strong>{formatCurrency(cartTotal)}</strong>
                                </div>

                                <Link
                                    to="/checkout"
                                    className="noir-checkout-button"
                                >
                                    PROCEED TO CHECKOUT
                                    <ArrowRight size={19} />
                                </Link>

                                <p className="noir-summary-note">
                                    Delivery charges will be confirmed with your order.
                                </p>

                            </div>
                        </div>

                    </div>

                )}

            </div>
        </main>
    );
}

export default Cart;
