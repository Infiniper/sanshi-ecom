import './About.css'
import { Sparkles, Heart, Star} from "lucide-react";

function About(){
    return (
        <div className='about-container'>
            <div className="about-title">
                <h1>About Sanshi E-Com</h1>
                <p>Celebrating everyday sparkle through thoughtfully curated accessories that tell a story and complement your unique style.</p>
            </div>
            <div className='founder-container'>
                <div className='founder'>
                    <div className='founder-img'>
                        <img src="founder.png" alt="" />
                    </div>
                    <div className='founder-data'>
                        <h3>Rameshwar Singh</h3>
                        <p>Founder and CEO</p>
                        <div className='founder-msg'><p>With a passion for quality and aesthetics, Rameshwar brings years of experience in curating beautiful products that resonate with customer's lifestyles and aspirations.</p></div>
                    </div>
                </div>
                <div className='cofounder'>
                    <div className='cofounder-data'>
                        <h3>Kartikay Singh</h3>
                        <p>Co-Founder and CTO</p>
                        <div className='cofounder-msg'><p>Kartikey ensures seamless operations and customer satisfaction, bringing strategic vision and operational excellence to every aspect of the Sanshi E-COM experience.</p></div>
                    </div>
                    <div>
                        <img src="cofounder.png" alt="" />
                    </div>
                </div>


            </div>

            <div className='story'>
                <h3>Our Story</h3>
                <p>Sanshi E-com was born from a simple yet powerful idea: to bring beauty, style, and everyday sparkle within everyone’s reach. Founded in 2025, we began with a commitment to curate trinkets, cosmetics, and accessories that don’t just look good, but feel personal and meaningful.</p>
                <p>Our journey started with building trusted marketplace partnerships and carefully selecting each product for its quality, design, and ability to tell a story. From elegant jewelry to cosmetics that inspire confidence, every item we offer is chosen to celebrate individuality and charm.</p>
                <p>Today, Sanshi E-com represents more than just online shopping – we represent accessibility, trust, and beauty for all. Whether it’s a keepsake bracelet, a timeless accessory, or a touch of makeup that brightens your day, each purchase reflects our promise: “Your style, your space, your story.”</p>
            </div>

            <div className='quality-container'>
                <h3>Our Values</h3>
                <div className='qualities'>
                <div className='quality'>
                    <div className='emoji'><Sparkles color='white'/></div>
                    <h4>Quality First</h4>
                    <p className='quality-text'>We never compromise on quality. Every product in our collection meets our high standards for craftsmanship and durability.</p>
                </div>
                <div className='quality'>
                    <div className='emoji'><Heart color='white' /></div>
                    <h4>Customer Love</h4>
                    <p className='quality-text'>Our customers are at the heart of everything we do. We're committed to providing exceptional service and beautiful products.</p>
                </div>
                <div className='quality'>
                    <div className='emoji'><Star color='white'/></div>
                    <h4>Authentic Style</h4>
                    <p className='quality-text'>We celebrate individual style and believe that true beauty comes from authenticity and self-expression.</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;
