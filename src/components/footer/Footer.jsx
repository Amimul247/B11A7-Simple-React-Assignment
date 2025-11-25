import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center border p-10">
                <aside>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>AuctionGallery</h1>
                    <p className="font-bold grid grid-flow-col gap-4">
                        <a>Bid.</a> <a>win.</a> <a>Own.</a>
                    </p>
                    <nav>
                        <div className="font-bold grid grid-flow-col gap-4">
                            <a>About Us</a>
                            <a>How It Works</a>
                            <a>Contact</a>
                            <a>Privacy Policy</a>
                            <a>Terms & Conditions</a>
                        </div>
                    </nav>
                    <p>© {new Date().getFullYear()} AuctionHub.All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;