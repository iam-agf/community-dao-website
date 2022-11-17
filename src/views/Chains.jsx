import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./../sass/main.scss";
import huahua from '.././assets/img/chain_huahua.png';
import umee from '.././assets/img/chain_umee.png';

function Chains() {
  return (
    <div className="chains">
      <Header />
      <div className="chains-content">
        <div className="chains-content-title">
          Discover the chains
        </div>
        <div className="chains-content-validators">
          <img className="chain-logo" src={huahua} alt="huahua" />
          <img className="chain-logo" src={umee} alt="umee" />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Chains;
