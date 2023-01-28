import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import brandLogo from '../../assets/brandlogo-rae.png';

const Footer = () => {
    return (
        <footer className="footer p-10 text-white">
            <div>
                <img src={brandLogo} alt="Brand Logo - Rafi's Art Empire" className="w-20"></img>
                <p>Rafi's Art Empire<br />Creating Beauty In Every Brush Stroke, Every Pixel.<br />Copyright © 2023 - All right reserved | Ariful Rafi</p>
            </div>
            <div>
                <span className="text-xl">Media</span>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://web.facebook.com/rafisartempire' target='blank'><FaFacebook className='text-3xl' /></a>

                    <a href='https://instagram.com/rafis_artempire?igshid=ZDdkNTZiNTM=' target='blank'><FaInstagram className='text-3xl' /></a>

                    <a href='https://youtube.com/@rafisartempire2213' target='blank'><FaYoutube className='text-3xl' /></a>

                    <a href='https://twitter.com/_Rafuu_?t=Vu31I-GcsJdXeoHMB4YyNw&s=09' target='blank'><FaTwitter className='text-3xl' /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;