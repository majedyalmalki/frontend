import "./styles.css";

export default function AboutPage() {
    return (
        <main className="about-container">
            <section className="about-card">
                <h1>About Plants</h1>
                <hr />
                <p>
                    Welcome to <strong>Plant website</strong> 🌱 — your space to explore, manage, and celebrate plants of all kinds.
                    <br /><br />
                    Our mission is to make plant care simple, organized, and inspiring. 
                    Whether you're a beginner learning your first succulent or a plant enthusiast managing a full collection,
                    this app helps you stay connected to every leaf and petal.
                </p>

                <div className="about-grid">
                    <div className="about-item">
                        <h3>🌿 Easy Tracking</h3>
                        <p>Keep all your plant details, notes, and photos in one beautiful dashboard.</p>
                    </div>
                    <div className="about-item">
                        <h3>💧 Smart Care</h3>
                        <p>Set watering or sunlight reminders and never forget to care for your green friends.</p>
                    </div>
                    <div className="about-item">
                        <h3>🌳 Supporting Green Riyadh</h3>
                        <p>
                            Inspired by the <strong>Green Riyadh Project</strong>, our platform promotes sustainability 
                            and encourages users to contribute to a greener, cleaner city by planting and caring 
                            for more trees and native plants.
                        </p>
                    </div>
                </div>

                <footer className="about-footer">
                    <p>Let it green🌱</p>
                </footer>
            </section>
        </main>
    );
}
