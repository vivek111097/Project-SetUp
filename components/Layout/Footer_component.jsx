import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>HeroBiz</h3>
                                <p>
                                    A108 Adam Street <br />
                                    NY 535022, USA
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> info@example.com
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right" /> <a href="#">Web Design</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer