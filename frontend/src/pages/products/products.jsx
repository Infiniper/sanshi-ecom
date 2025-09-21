import './products.css'
import { Link } from 'react-router-dom';
import ProductCard from '../../components/product_card/product_card.jsx'
import React, { useEffect, useState } from "react";
import axios from 'axios';



function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch data from backend
                // const response = await axios.get('https://sanshi-h2o-backend.onrender.com/api/products'); 
                const response = await axios.get('http://localhost:5000/api/products');
                console.log("printing response.data: ", response.data);
                if (response.data && response.data.products) {
                    setProducts(response.data.products);
                }
                console.log("Fetched Product Data: ", products);

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
    
    
    return (
        <div className="products-container">
            <div className="title">
                <h1>Our Products</h1>
                <p>Discover our complete range of premium beverages crafted for your refreshment</p>
            </div>
            {console.log(products)}
            <h3>All Products</h3>
                <div className="product-grid">
{
    products.map((item => {
        return (<ProductCard 
            key={item.id}
            imageUrl={item.image_url}
            name={item.name}
            description={item.short_description}
            price={item.price}
            // Safer version using optional chaining
            link={item.links?.[0]?.url}
            />
        )
    }))
}
                </div>



        </div>
    );
}

export default Products;
