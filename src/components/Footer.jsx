import "../css/footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-logo">
                JS
            </div>

            <h2>Jawahira Sanofar</h2>

            <p className="footer-description">
                Building modern, responsive web applications
                <br />
                with React and the MERN Stack.
            </p>

            <div className="footer-divider"></div>

            <p className="footer-copy">
                © 2026 Jawahira Sanofar. All Rights Reserved.
            </p>

            <p className="footer-made">
                Made with <span>❤</span> using React
            </p>

        </footer>
    );
}

export default Footer;