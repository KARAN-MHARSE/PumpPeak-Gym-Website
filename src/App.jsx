import React from "react";
import Header from "./components/Header";
import Starting from "./pages/Starting";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Training from "./pages/Training";
import Review from "./pages/Review";
import Faq from "./pages/Faq";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Starting />
      <About />
      <Staff />
      <Training />
      <Review />
      <Faq />
      <SignUp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
