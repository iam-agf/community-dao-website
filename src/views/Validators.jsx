import React from "react";
import Header from "../Header";
import huahua from '.././assets/img/chain_huahua.png';
import umee from '.././assets/img/chain_umee.png';

function Validators() {
  return (
    <div className="validators">
      <Header />
      <div className="validators-title">
        Know our validators
      </div>
      <div className="validators-validators">
        <a target="_blank" href="https://ping.pub/chihuahua/staking/chihuahuavaloper1ntfpx32g5hzvnlaqyv5kxggzgjtw2dj2gt708j"><img className="chain-logo" src={huahua} alt="huahua" /></a>
        <a target="_blank" href="https://ping.pub/umee/staking/umeevaloper13k2hn8335n0e6qalsn2zs6pqpp24z8akqjlmnc"><img className="chain-logo" src={umee} alt="umee" /></a>
      </div>
    </div>
  );
}

export default Validators;
