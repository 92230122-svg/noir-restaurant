
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Flame, Clock, Star } from 'lucide-react';
import FoodCard from '../components/FoodCard';
import SectionTitle from '../components/SectionTitle';
import products from '../data/product';
import { useCart } from '../context/cartcontext';

function Home() {
    const { addToCart } = useCart();

    const featuredProducts = products.filter(
        (product) => product.featured
    );

    return (
        <main className="noir-home">

            {/* HERO SECTION */}
            <section className="noir-hero">
                <div className="container">
                    <div className="row align-items-center min-vh-100">

                        <div className="col-lg-6">
                            <div className="noir-hero-content">

                                <span className="noir-hero-label">
                                    <Flame size={17} />
                                    THE ULTIMATE BURGER EXPERIENCE
                                </span>

                                <h1>
                                    NOT JUST A
                                    <br />
                                    <span>BURGER.</span>
                                    <br />
                                    IT'S NOIR.
                                </h1>

                                <p>
                                    Experience bold flavors, premium ingredients,
                                    and unforgettable bites. Your next favorite
                                    burger is waiting for you.
                                </p>

                                <div className="noir-hero-buttons">
                                    <Link to="/menu" className="noir-primary-button">
                                        EXPLORE MENU <ArrowRight size={18} />
                                    </Link>

                                    <Link to="/about" className="noir-secondary-button">
                                        OUR STORY
                                    </Link>
                                </div>

                                <div className="noir-hero-stats">
                                    <div>
                                        <Star size={17} />
                                        <strong>PREMIUM</strong>
                                        <span>Quality Ingredients</span>
                                    </div>

                                    <div>
                                        <Clock size={17} />
                                        <strong>FRESH</strong>
                                        <span>Made To Order</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="noir-hero-image">
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200"
                                    alt="NOIR signature burger"
                                />

                                <div className="noir-hero-image-tag">
                                    <span>THE SIGNATURE</span>
                                    <strong>NOIR CLASSIC</strong>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="noir-hero-bottom-text">
                    BOLD FLAVORS. UNFORGETTABLE BITES.
                </div>
            </section>

            {/* FEATURED MENU */}
            <section className="noir-featured-section">
                <div className="container">

                    <div className="noir-featured-heading">
                        <SectionTitle
                            eyebrow="OUR FAVORITES"
                            title="THE NOIR"
                            highlight="SELECTION"
                            description="Discover the flavors everyone is talking about."
                        />

                        <Link to="/menu" className="noir-view-all">
                            VIEW FULL MENU <ArrowUpRight size={18} />
                        </Link>
                    </div>

                    <div className="row g-4 mt-3">
                        {featuredProducts.map((product) => (
                            <div className="col-md-6 col-lg-4" key={product.id}>
                                <FoodCard
                                    product={product}
                                    onAddToCart={addToCart}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* BRAND BANNER */}
            <section className="noir-banner">
                <div className="container">
                    <div className="noir-banner-content">
                        <span>THIS IS NOT ORDINARY FAST FOOD</span>

                        <h2>
                            MADE TO BE
                            <br />
                            <span>REMEMBERED.</span>
                        </h2>

                        <p>
                            Every bite tells a story. Every flavor makes a statement.
                        </p>

                        <Link to="/menu" className="noir-primary-button">
                            ORDER YOUR FAVORITE <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Home;
