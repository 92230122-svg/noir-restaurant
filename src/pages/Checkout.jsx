
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    ArrowRight,
    MessageCircle,
    ShoppingBag,
    User,
    Phone,
    MapPin,
    FileText,
} from 'lucide-react';

import { useCart } from '../context/cartcontext';
import formatCurrency from '../utils/currency';

const WHATSAPP_NUMBER = '96170228786';

function Checkout() {
    const { cartItems, cartTotal } = useCart();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        notes: '',
    });

    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (cartItems.length === 0) {
            setError('Your cart is empty.');
            return;
        }

        if (
            !formData.fullName.trim() ||
            !formData.phone.trim() ||
            !formData.address.trim()
        ) {
            setError('Please complete all required fields.');
            return;
        }

        const orderDetails = cartItems.map((item, index) =>
            `${index + 1}. ${item.name}\n` +
            `Quantity: ${item.quantity}\n` +
            `Price: ${formatCurrency(item.price * item.quantity)}`
        ).join('\n\n');

        const message = `
*NOIR RESTAURANT - NEW ORDER*

*CUSTOMER INFORMATION*
Name: ${formData.fullName}
Phone: ${formData.phone}
Address: ${formData.address}

*ORDER DETAILS*
${orderDetails}

*TOTAL: ${formatCurrency(cartTotal)}*

Delivery: To be confirmed

*NOTES*
${formData.notes.trim() || 'None'}

Thank you for choosing NOIR!
    `.trim();

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    };

    if (cartItems.length === 0) {
        return (
            <main className="noir-checkout-page">
                <div className="container">
                    <div className="noir-empty-cart">
                        <ShoppingBag size={55} />
                        <h2>YOUR CART IS EMPTY</h2>
                        <p>Add your favorite food before checking out.</p>

                        <Link to="/menu" className="noir-primary-button">
                            EXPLORE MENU <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="noir-checkout-page">
            <div className="container">

                <div className="noir-checkout-header">
                    <span className="noir-section-eyebrow">
                        ALMOST THERE
                    </span>

                    <h1>CHECK <span>OUT.</span></h1>
                    <p>Complete your information to place your order.</p>
                </div>

                <div className="row g-5">

                    <div className="col-lg-7">
                        <form
                            className="noir-checkout-form"
                            onSubmit={handleSubmit}
                        >
                            <h2>DELIVERY INFORMATION</h2>

                            <div className="noir-form-group">
                                <label htmlFor="fullName">
                                    <User size={17} /> FULL NAME *
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="noir-form-group">
                                <label htmlFor="phone">
                                    <Phone size={17} /> PHONE NUMBER *
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+961 XX XXX XXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="noir-form-group">
                                <label htmlFor="address">
                                    <MapPin size={17} /> DELIVERY ADDRESS *
                                </label>

                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter your delivery address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="noir-form-group">
                                <label htmlFor="notes">
                                    <FileText size={17} /> ORDER NOTES
                                </label>

                                <textarea
                                    id="notes"
                                    name="notes"
                                    placeholder="Special instructions (Optional)"
                                    rows="4"
                                    value={formData.notes}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="noir-payment-info">
                                <h3>PAYMENT METHOD</h3>
                                <p>Cash on Delivery</p>
                                <span>Payment will be confirmed when your order arrives.</span>
                            </div>

                            {error && (
                                <p className="noir-checkout-error" role="alert">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="noir-checkout-button"
                            >
                                <MessageCircle size={20} />
                                PLACE ORDER VIA WHATSAPP
                                <ArrowRight size={19} />
                            </button>

                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="noir-checkout-summary">

                            <h2>YOUR ORDER</h2>

                            {cartItems.map((item) => (
                                <div className="noir-checkout-item" key={item.id}>
                                    <div className="noir-checkout-item-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="noir-checkout-item-info">
                                        <h3>{item.name}</h3>
                                        <span>Quantity: {item.quantity}</span>
                                    </div>

                                    <strong>
                                        {formatCurrency(item.price * item.quantity)}
                                    </strong>
                                </div>
                            ))}

                            <div className="noir-summary-divider" />

                            <div className="noir-summary-row">
                                <span>Subtotal</span>
                                <span>{formatCurrency(cartTotal)}</span>
                            </div>

                            <div className="noir-summary-row">
                                <span>Delivery</span>
                                <span>To be confirmed</span>
                            </div>

                            <div className="noir-summary-divider" />

                            <div className="noir-summary-total">
                                <span>TOTAL</span>
                                <strong>{formatCurrency(cartTotal)}</strong>
                            </div>

                            <p className="noir-summary-note">
                                Your order will be sent to NOIR through WhatsApp.
                            </p>

                        </div>

                        <Link to="/cart" className="noir-continue-shopping">
                            <ArrowLeft size={17} />
                            BACK TO CART
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Checkout;
