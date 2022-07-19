import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
    //geographical.co.uk/science-environment/the-rise-of-the-somalaya-mountain-range>
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Content />
        </div>
    );
}


export default App;
