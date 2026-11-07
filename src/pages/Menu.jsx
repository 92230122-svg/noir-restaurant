
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

import FoodCard from '../components/FoodCard';
import SectionTitle from '../components/SectionTitle';
import products from '../data/product';
import { useCart } from '../context/cartcontext';

function Menu() {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    const { addToCart } = useCart();

    const categories = [
        'ALL',
        'BURGERS',
        'CHICKEN',
        'SIDES',
        'DRINKS',
    ];

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                activeCategory === 'ALL' ||
                product.category === activeCategory;

            const matchesSearch =
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    return (
        <main className="noir-menu-page">

            {/* MENU HERO */}
            <section className="noir-menu-hero">
                <div className="container">
                    <span className="noir-section-eyebrow">
                        TASTE THE DIFFERENCE
                    </span>

                    <h1>
                        OUR <span>MENU.</span>
                    </h1>

                    <p>
                        Crafted with passion. Served with attitude.
                        Find your next favorite bite.
                    </p>
                </div>
            </section>

            {/* MENU CONTENT */}
            <section className="noir-menu-section">
                <div className="container">

                    <SectionTitle
                        eyebrow="FRESHLY PREPARED"
                        title="EXPLORE OUR"
                        highlight="FLAVORS"
                        description="From signature burgers to delicious sides and refreshing drinks."
                    />

                    {/* FILTERS */}
                    <div className="noir-menu-toolbar">

                        <div className="noir-category-filters">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={
                                        activeCategory === category
                                            ? 'noir-filter-button active'
                                            : 'noir-filter-button'
                                    }
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="noir-search-box">
                            <Search size={19} />

                            <input
                                type="search"
                                placeholder="Search your favorite food..."
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                aria-label="Search menu"
                            />
                        </div>

                    </div>

                    {/* RESULTS */}
                    <div className="noir-menu-results">
                        <span>
                            <SlidersHorizontal size={16} />
                            SHOWING {filteredProducts.length} ITEMS
                        </span>
                    </div>

                    <div className="row g-4">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={product.id}
                                >
                                    <FoodCard
                                        product={product}
                                        onAddToCart={addToCart}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="noir-empty-menu">
                                    <h3>NO RESULTS FOUND</h3>
                                    <p>
                                        Try another search or choose a different category.
                                    </p>

                                    <button
                                        type="button"
                                        className="noir-primary-button"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setActiveCategory('ALL');
                                        }}
                                    >
                                        CLEAR FILTERS
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Menu;
