import React from 'react';


type NavbarType = {
    titleNavbar: string
}

function Navbar(props: NavbarType) {
    return <nav>
        <div>
       <a>{props.titleNavbar}</a>
        </div>
    </nav>
}

export default Navbar;