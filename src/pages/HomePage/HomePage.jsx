import "./styles.css"

export default function HomePage() {
    return (
        <>
            <section className="home">
                <h1>Discover the beauty of green plants</h1>
                <p>
                    Green plants bring life and freshness to your home. Learn how to care for them and create a lush indoor garden.
                </p>

                <div className="tips">
                    <div>
                        <h3>💧 Water regularly</h3>
                        <p>Most green plants thrive with regular watering. Check the soil moisture before watering.</p>
                    </div>
                    <div>
                        <h3>☀️ Provide sunlight</h3>
                        <p>Place your plants in a spot where they can receive indirect sunlight for optimal growth.</p>
                    </div>
                </div>

                <div className="mission">
                    <h2>Our mission</h2>
                    <p>
                        Our mission is to inspire people to grow and care for plants, making our city flourish with greenery and nature.
                    </p>
                </div>
            </section>
        </>
    )
}