import React from "react";
// import logements from "../../datas/logements.json";
import "../../styles/Home/Home.css";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import HousesList from "../../components/HousesList";
import Footer from "../../components/Footer";
// import '../styles/Cart.css'

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>

      <HousesList />
      <Footer />
    </div>
  );
}

export default Home;
