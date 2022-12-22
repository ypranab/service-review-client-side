import React from 'react';
import logo from '../assests/logo.ico'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
                <img src={logo} alt="" />
                <p className="font-bold">
                    <br />Providing reliable tech since 1992
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;