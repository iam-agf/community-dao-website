import React from "react";
import Header from "../Header";
import "./../sass/main.scss";
import huahua from '.././assets/img/chain_huahua.png';
import umee from '.././assets/img/chain_umee.png';

function Chains() {
  return (
    <div className="chains">
      <Header />
      <div className="chains-title">
        Discover the chains
      </div>
      <div className="chains-validators">
        <img className="chain-logo" src={huahua} alt="huahua" />
        <img className="chain-logo" src={umee} alt="umee" />
      </div>
    </div>
  );
}

export default Chains;
