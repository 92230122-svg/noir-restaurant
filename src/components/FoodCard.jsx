import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

function FoodCard({ product, onAddToCart }) {
  return (
    <div className="noir-food-card">

      <div className="noir-food-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        {product.category && (
          <span className="noir-food-category">
            {product.category}
          </span>
        )}

        <Link
          to={`/product/${product.id}`}
          className="noir-food-view"
          aria-label={`View ${product.name}`}
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <div className="noir-food-content">

        <div className="noir-food-info">
          <h3>{product.name}</h3>

          <p>
            {product.description}
          </p>
        </div>

        <div className="noir-food-bottom">
          <span className="noir-food-price">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            className="noir-add-button"
            onClick={() => onAddToCart?.(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={18} />
            <span>ADD</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default FoodCard;