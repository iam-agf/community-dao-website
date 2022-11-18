import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import huahua from '.././assets/img/chain_huahua.png';
import umee from '.././assets/img/chain_umee.png';

function Validators() {
  return (
    <div className="validators">
      <Header />
      <div className="validators-content">
        <div className="validators-content-title">
          Know our validators
        </div>
        <div className="validators-content-description">
          Delegating to the Community DAO means you support the Community DAO.
        </div>
        <div className="validators-content-validators">
          <div className="validators-content-card">
            <a target="_blank" href="https://ping.pub/chihuahua/staking/chihuahuavaloper1ntfpx32g5hzvnlaqyv5kxggzgjtw2dj2gt708j"><img className="chain-logo" src={huahua} alt="huahua" /></a>
            <p>Chihuahua</p>
          </div>
          <div className="validators-content-card">
            <a target="_blank" href="https://ping.pub/umee/staking/umeevaloper13k2hn8335n0e6qalsn2zs6pqpp24z8akqjlmnc"><img className="chain-logo" src={umee} alt="umee" /></a>
            <p>Umee</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Validators;
