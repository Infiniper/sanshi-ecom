import './product_card.css';

// Accept props to make the component reusable
function ProductCard({ imageUrl, name, description, price, link }) {

    return (
        <div className='product-card'>
            <div className='product-card-image-container'>
                <img src={imageUrl || "https://placehold.co/400x300/EAF8FF/0077CC?text=Sanshi"} alt={name} />
            </div>
            <div className='product-card-content'>
                <h3 className='product-card-name'>{name}</h3>
                <p className='product-card-description'>{description}</p>
                <div className='product-price-button-container'>
                    {/* <p className='product-card-price'>₹{price}</p> */}
                    
                    {/* --- MODIFIED SECTION --- */}
                    {/* Conditionally render an <a> tag if a link exists, otherwise show a disabled button */}
                    {link ? (
                        <a
                            href={link}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // Security best practice for new tabs
                            className='product-card-button'
                        >
                            Buy Now
                        </a>
                    ) : (
                        <button className='product-card-button' disabled>
                            Coming Soon
                        </button>
                    )}
                    {/* --- END OF MODIFICATION --- */}

                </div>
            </div>
        </div>
    );
}

export default ProductCard;