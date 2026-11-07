
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    ArrowLeft,
    ShoppingBag,
    Check,
    Flame,
} from 'lucide-react';

import products from '../data/product';
import { useCart } from '../context/cartcontext';
import formatCurrency from '../utils/currency';

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <main className="noir-product-not-found">
                <h1>PRODUCT NOT FOUND</h1>
                <p>Sorry, this product does not exist.</p>

                <Link to="/menu" className="noir-primary-button">
                    <ArrowLeft size={18} />
                    BACK TO MENU
                </Link>
            </main>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }

        setAdded(true);
    };

    return (
        <main className="noir-product-details">
            <div className="container">

                <Link to="/menu" className="noir-back-link">
                    <ArrowLeft size={18} />
                    BACK TO MENU
                </Link>

                <div className="row align-items-center g-5">

                    {/* PRODUCT IMAGE */}
                    <div className="col-lg-6">
                        <div className="noir-details-image">
                            <img
                                src={product.image}
                                alt={product.name}
                            />

                            {product.popular && (
                                <span className="noir-details-badge">
                                    <Flame size={15} />
                                    CUSTOMER FAVORITE
                                </span>
                            )}
                        </div>
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="col-lg-6">
                        <div className="noir-details-content">

                            <span className="noir-section-eyebrow">
                                {product.category}
                            </span>

                            <h1>{product.name}</h1>

                            <div className="noir-details-price">
                                {formatCurrency(product.price)}
                            </div>

                            <p className="noir-details-description">
                                {product.description}
                            </p>

                            {/* INGREDIENTS */}
                            {product.ingredients?.length > 0 && (
                                <div className="noir-ingredients">
                                    <h3>WHAT'S INSIDE</h3>

                                    <div className="noir-ingredients-list">
                                        {product.ingredients.map((ingredient) => (
                                            <span key={ingredient}>
                                                <Check size={15} />
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* QUANTITY */}
                            <div className="noir-quantity-section">
                                <span>QUANTITY</span>

                                <div className="noir-quantity-control">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((current) => Math.max(1, current - 1))
                                        }
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>

                                    <strong>{quantity}</strong>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((current) => current + 1)
                                        }
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* ADD TO CART */}
                            <button
                                type="button"
                                className="noir-details-add-button"
                                onClick={handleAddToCart}
                            >
                                {added ? <Check size={20} /> : <ShoppingBag size={20} />}
                                {added ? 'ADDED TO CART' : 'ADD TO CART'}
                                <span>{formatCurrency(product.price * quantity)}</span>
                            </button>

                            {added && (
                                <Link to="/cart" className="noir-go-cart">
                                    VIEW YOUR CART →
                                </Link>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default ProductDetails;
