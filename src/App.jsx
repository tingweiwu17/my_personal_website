import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";

import Protfolio from "./components/protfolio/protfolio";
import Testimonails from "./components/testimonials/testimonails";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Protfolio />
            <Testimonails />
            <Contact />
            <Footer />


        </>
    )
}

export default App