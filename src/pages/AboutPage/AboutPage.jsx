import "./styles.css";




// # ================================================================================================================= #
// #                                                 About Page                                                        #
// # ================================================================================================================= #
export default function AboutPage() {
    return (
        <main className="about-container">
            <section className="about-card">
                <h1>About Plant Project</h1>
                <hr />
                <p>
                    Welcome to the <strong>Plant Project</strong> 🌿 a simple and engaging way 
                    to nurture your green collection. Our platform helps you manage your plants effortlessly by 
                    allowing you to <strong>add new plants</strong>, <strong>set care reminders</strong>, 
                    and <strong>organize them by location</strong> for better tracking and growth monitoring.
                    <br /><br />
                    Whether you’re cultivating a few houseplants or managing an outdoor garden, this project 
                    makes plant care organized, visual, and enjoyable turning everyday gardening into a rewarding habit.
                </p>

                <div className="about-grid">
                    <div className="about-item">
                        <h3>Organize Your Green Space🌿</h3>
                        <p>Easily categorize and locate your plants by room, garden section, or outdoor spot for better management.</p>
                    </div>
                    <div className="about-item">
                        <h3>Never Miss a Care Day💧</h3>
                        <p>Set personalized watering and care reminders so your plants stay healthy and thriving all year long.</p>
                    </div>
                    <div className="about-item">
                        <h3>Capture and Grow📸</h3>
                        <p>Upload photos of each plant to document its progress, identify species, and celebrate your green journey.</p>
                    </div>
                </div>

                <footer className="about-footer">
                    <p>Together, let’s make plant care easier, smarter, and greener 🌱</p>
                </footer>
            </section>
        </main>
    );
}
