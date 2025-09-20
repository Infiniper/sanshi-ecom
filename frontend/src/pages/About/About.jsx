import './About.css'
function About(){
    return (
        <div className='about-container'>
            <div className="about-title">
                <h1>About Sanshi H2O</h1>
                <p>Born from a passion for purity and a commitment to refreshment, Sanshi H2O brings you the finest beverages crafted with care and dedication to quality.</p>
            </div>
            <div className='founder-container'>
                <div className='founder'>
                    <div className='founder-img'>
                        <img src="founder.png" alt="" />
                    </div>
                    <div className='founder-data'>
                        <h3>Rameshwar Singh</h3>
                        <p>Founder and CEO</p>
                        <div className='founder-msg'><p>At Sanshi H2O, we believe water should be as pure and revitalizing as nature intended. That’s why we’re committed to delivering fresh and mineral-rich water sourced responsibly, filtered with care, and bottled with integrity. Our mission is simple: clean, honest hydration you can trust—every single time.</p></div>
                    </div>
                </div>
                <div className='cofounder'>
                    <div className='cofounder-data'>
                        <h3>Kartikay Singh</h3>
                        <p>Co-Founder and CTO</p>
                        <div className='cofounder-msg'><p>As the Co-Founder and CTO of Sanshi H2O, I’m proud to combine technology with nature to bring you the cleanest, most refreshing water. Through advanced filtration systems and sustainable processes, we ensure every drop meets our rigorous standards. Our commitment is not just to purity, but to innovation that makes water smarter, safer, and more accessible for all.</p></div>
                    </div>
                    <div>
                        <img src="cofounder.png" alt="" />
                    </div>
                </div>


            </div>

            <div className='story'>
                <h3>Our Story</h3>
                <p>Sanshi H2O was born from a simple yet powerful vision: to create beverages that don't just satisfy thirst, but elevate the entire drinking experience. Founded in 2024, we started with a commitment to sourcing the purest water and crafting the most refreshing beverages.</p>
                <p>Our journey began with extensive research into water purification technologies and flavor development. We partnered with the best suppliers and invested in state-of-the-art equipment to ensure every drop meets our exacting standards.</p>
                <p>Today, Sanshi H2O represents more than just beverages – we represent a lifestyle choice for those who refuse to compromise on quality. From our pure drinking water to our upcoming range of flavored sodas, every product embodies our tagline: "Kill your thirst."</p>
            </div>

            <div className='quality-container'>
                <h3>Our Quality Promise</h3>
                <div className='qualities'>
                <div className='quality'>
                    <div className='emoji'><p>💧</p></div>
                    <h4>Pure Source</h4>
                    <p className='quality-text'>Sourced from pristine natural springs and purified using advanced filtration technology</p>
                </div>
                <div className='quality'>
                    <div className='emoji'><p>🔬</p></div>
                    <h4>Lab Tested</h4>
                    <p className='quality-text'>Every batch undergoes rigorous quality testing to ensure safety and purity standards</p>
                </div>
                <div className='quality'>
                    <div className='emoji'><p>🌿</p></div>
                    <h4>Natural Ingridients</h4>
                    <p className='quality-text'>Only natural flavors and ingredients, no artificial preservatives or harmful chemicals</p>
                </div>
                </div>

            </div>
        </div>
    );
}

export default About;
