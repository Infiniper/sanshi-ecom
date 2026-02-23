import './category_card.css';

// Accept props to make the component reusable
function CategoryCard({ imageUrl, name, description, availability }) {
    var avail;
    if (availability === true) {
        avail = "Available";
    }
    else {
        avail = "Coming Soon";
    }

    return (
        <div className='category-card'>
            <div className='card-image-container'>
                <img src={imageUrl || "https://placehold.co/400x300/EAF8FF/0077CC?text=Sanshi"} alt={name} />
            </div>
            <div className='card-content'>
                <h3 className='card-name'>{name}</h3>
                <p className='card-description'>{description}</p>
                <p className='card-availability'>{avail}</p>
            </div>
        </div>
    );
}

export default CategoryCard;