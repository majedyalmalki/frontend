import "./styles.css";

export default function Footer() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            />
            <footer className="footer">
                <div className="footer-container">
                    <p>© 2025 <span>Plants</span>.</p>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/majedyalmalki"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>

                        <a
                            href="https://linkedin.com/in/majedyalmalki"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
