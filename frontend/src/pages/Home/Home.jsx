import "./Home.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/category_card/category_card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparkles, Star, ShoppingBag, Award } from "lucide-react";

function Home() {
  // 1. Renamed state to be more descriptive (products instead of categories)
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        // 2. Updated the API endpoint to fetch featured products
        const response = await axios.get(
          "http://localhost:5000/api/products?featured=true"
        );
        
        // 3. Accessed the 'products' array from the response data
        if (response.data && response.data.products) {
          setFeaturedProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {/* block 1 */}
      <div className="hero-section">
        <div className="video-container">
          <video src="/homeVideo.mp4" autoPlay loop muted></video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src="logoHome.svg" alt="logo" />

          <a href="/about"><button className="hero-button">Learn More</button></a>
            

        </div>
      </div>

      {/* block 2 */}
      <div className="products-section">
        {/* Changed title to reflect featured products */}
        <h2>Featured Products</h2>
        <p>Discover our handpicked range of stylish accessories</p>
        <div className="product-grid">
          {/* 4. Mapped over 'featuredProducts' state */}
          {featuredProducts.map((product) => (
            <CategoryCard
              // 5. Added a unique 'key' prop (important for React lists)
              key={product.id}
              imageUrl={product.image_url}
              name={product.name}
              // 6. Matched prop names to the JSON data ('short_description' and 'in_stock')
              description={product.short_description}
              availability={product.in_stock}
            />
          ))}
        </div>
        {/* <Link to="/products"> */}
        <a href="/products"><button className="view-all-button">View All Products</button></a>
          
        {/* </Link> */}
      </div>

      {/* block 3 */}
      <div className="features-section">
        <h2>Why Choose Sanshi?</h2>
        <p>
          Simple, seamless shopping — we list, you click, you purchase on your
          favorite marketplace.
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon">
              <Sparkles color="white" />
            </div>
            <div>
              <h4>We Curate</h4>
            </div>
            <div>
              <p>Handpicked accessories chosen for quality and style</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon">
              <Star color="white" />
            </div>
            <div>
              <h4>You Explore</h4>
            </div>
            <div>
              <p>Browse our catalog and find your perfect pieces</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon">
              <ShoppingBag color="white" />
            </div>
            <div>
              <h4>You Purchase</h4>
            </div>
            <div>
              <p>Buy directly from trusted marketplaces from all over India</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon">
              <Award color="white" />
            </div>
            <div>
              <h4>Premium Quality</h4>
            </div>
            <div>
              <p>Premium products and superior standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;