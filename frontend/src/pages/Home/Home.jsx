import "./Home.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/category_card/category_card";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparkles, Star, ShoppingBag, Award } from "lucide-react";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://sanshi-h2o-backend.onrender.com/api/categories"
        ); // Fetch data from backend
        // const response = await axios.get('http://localhost:5000/api/categories');
        console.log("printing response.data: ", response.data);
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
        }
        console.log("Fetched Category Data: ", categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* block 1 */}
      <div className="hero-section">
        <div className="video-container">
          <video
            src="homeVideo.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src="logoHome.svg" alt="logo" />
          <Link to="/about">
            <button className="hero-button">Learn More</button>
          </Link>
        </div>
      </div>

      {/* block 2 */}
      <div className="products-section">
        <h2>Our Products</h2>
        <p>Discover our range of premium beverages</p>
        <div className="product-grid">
          {categories.map((item) => {
            return (
              <CategoryCard
                imageUrl={item.image_url}
                name={item.name}
                description={item.description}
                availability={item.availability}
              />
            );
          })}
        </div>
        <Link to="/products">
          <button className="view-all-button">View All Products</button>
        </Link>
      </div>

      {/* block 3 */}
      <div className="features-section">
        <h2>Why Choose Sanshi?</h2>
        <p>Simple, seamless shopping — we list, you click, you purchase on your favorite marketplace.</p>
        <div className="features-grid">
          <div className="feature-item">
            <div
              className="icon"
            >
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
            <div
              className="icon"
            >
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
            <div
              className="icon"
            >
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
            <div
              className="icon"
            >
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
