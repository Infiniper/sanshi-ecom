import './product_card.css';

// Accept props to make the component reusable
function ProductCard({ imageUrl, name, description, price }) {

    return (
        <div className='product-card'>
            <div className='product-card-image-container'>
                <img src={imageUrl || "https://placehold.co/400x300/EAF8FF/0077CC?text=Sanshi"} alt={name} />
            </div>
            <div className='product-card-content'>
                <h3 className='product-card-name'>{name}</h3>
                <p className='product-card-description'>{description}</p>
                <div className='product-price-button-container'>
                    <p className='product-card-price'>₹{price}</p>
                    <button className='product-card-button'>Comming Soon</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;