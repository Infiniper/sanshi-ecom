import "./Home.css";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/category_card/category_card";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
            src="https://aultuptfqvxnjvghqztc.supabase.co/storage/v1/object/public/videos/WhatsApp%20Video%202025-08-20%20at%2015.57.02.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src="h2o_logo.svg" alt="logo" />
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
        <h2>Why Choose Sanshi H2O?</h2>
        <p>Quality, purity, and freshness in every drop</p>
        <div className="features-grid">
          <div className="feature-item">
            <div
              className="icon"
              style={{
                "background-image":
                  "linear-gradient(to top, var(--light-blue), var(--sky-blue))",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-droplets h-8 w-8 text-white"
                data-lov-id="src/pages/sanshi-h2o/Home.tsx:166:16"
                data-lov-name="Droplets"
                data-component-path="src/pages/sanshi-h2o/Home.tsx"
                data-component-line="166"
                data-component-file="Home.tsx"
                data-component-name="Droplets"
                data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D"
              >
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
              </svg>
            </div>
            <div>
              <h4>Pure & Clean</h4>
            </div>
            <div>
              <p>Advanced filtration ensures the purest water quality</p>
            </div>
          </div>
          <div className="feature-item">
            <div
              className="icon"
              style={{
                "background-image":
                  "linear-gradient(to top, green, lightgreen)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-leaf h-8 w-8 text-white"
                data-lov-id="src/pages/sanshi-h2o/Home.tsx:176:16"
                data-lov-name="Leaf"
                data-component-path="src/pages/sanshi-h2o/Home.tsx"
                data-component-line="176"
                data-component-file="Home.tsx"
                data-component-name="Leaf"
                data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <div>
              <h4>Natural</h4>
            </div>
            <div>
              <p>Sourced from natural springs and pure sources</p>
            </div>
          </div>
          <div className="feature-item">
            <div
              className="icon"
              style={{
                "background-image": "linear-gradient(to top, darkblue, violet)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-check h-8 w-8 text-white"
                data-lov-id="src/pages/sanshi-h2o/Home.tsx:186:16"
                data-lov-name="ShieldCheck"
                data-component-path="src/pages/sanshi-h2o/Home.tsx"
                data-component-line="186"
                data-component-file="Home.tsx"
                data-component-name="ShieldCheck"
                data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h4>Quality Assured</h4>
            </div>
            <div>
              <p>Rigorous quality checks at every step</p>
            </div>
          </div>
          <div className="feature-item">
            <div
              className="icon"
              style={{
                "background-image": "linear-gradient(to top, orange, gold",
              }}
            >
              <div
                data-lov-id="src/pages/sanshi-h2o/Home.tsx:195:14"
                data-lov-name="div"
                data-component-path="src/pages/sanshi-h2o/Home.tsx"
                data-component-line="195"
                data-component-file="Home.tsx"
                data-component-name="div"
                data-component-content="%7B%22className%22%3A%22w-16%20h-16%20bg-gradient-to-br%20from-yellow-400%20to-yellow-600%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%20group-hover%3Ascale-110%20transition-transform%22%7D"
                class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-award h-8 w-8 text-white"
                  data-lov-id="src/pages/sanshi-h2o/Home.tsx:196:16"
                  data-lov-name="Award"
                  data-component-path="src/pages/sanshi-h2o/Home.tsx"
                  data-component-line="196"
                  data-component-file="Home.tsx"
                  data-component-name="Award"
                  data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
            </div>
            <div>
              <h4>Premium Quality</h4>
            </div>
            <div>
              <p>Award-winning taste and superior standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
