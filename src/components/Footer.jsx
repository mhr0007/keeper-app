import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer><p>&copy; MHR Inc. { currentYear }</p></footer>
}

export default Footer;