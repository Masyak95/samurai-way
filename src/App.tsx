import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
    return (
        <div>
            <Header />
            <Navbar titleNavbar={"Profile"} />
            <Navbar titleNavbar={"Message"} />
            <Navbar titleNavbar={"News"} />
            <Navbar titleNavbar={"Settings"} />
            <Content />
        </div>
    );
}


export default App;
