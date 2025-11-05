import "./styles.css";



// # ================================================================================================================= #
// #                                                   Home Page                                                       #
// # ================================================================================================================= #
export default function HomePage() {
    return (
        <>
            <section className="home">
                <h1>Grow, Care, and Organize Your Plants Effortlessly 🌿</h1>
                <p>
                    Welcome to the <strong>Plant Project</strong> your personal plant management companion.
                    Easily add new plants, set care reminders, assign them to specific locations, and even
                    upload photos to keep track of their growth and beauty.
                </p>

                <div className="features">
                    <div>
                        <h3>Add and Track Plants🌱</h3>
                        <p>
                            Create your own garden by adding plants with detailed information,
                            from species to photos all in one place.
                        </p>
                    </div>
                    <div>
                        <h3>Smart Care Reminders⏰</h3>
                        <p>
                            Never forget to water or check your plants again!
                            Set reminders to help your plants stay healthy and thriving.
                        </p>
                    </div>
                    <div>
                        <h3>Organize by Location📍</h3>
                        <p>
                            Assign each plant to a specific location whether it’s your balcony,
                            living room, or garden and manage your spaces with ease.
                        </p>
                    </div>
                </div>

                <div className="mission">
                    <h2>Supporting the Green Riyadh Vision 🌳</h2>
                    <p>
                        Our goal is to encourage everyone to embrace sustainable living through greenery.
                        By caring for your own plants, you’re contributing to a greener,
                        healthier, and more beautiful Riyadh.
                    </p>
                </div>
            </section>
        </>
    );
}
