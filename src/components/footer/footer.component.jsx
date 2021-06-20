import React from 'react';

import "./footer.style.css";

const FooterPanel = () => {
    return (
        <div className="py-2 text-center footer-style">
          © SIDDHARTH PAUL &nbsp; {new Date().getFullYear()}
        </div>
    )
}

export default FooterPanel
