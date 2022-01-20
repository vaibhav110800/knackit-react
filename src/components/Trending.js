import React from "react";
import FooterLinks from "./FooterLinks";
import SubscriptionPackages from "./SubscriptionPackages";
import SubscriptionPopup from "./SubscriptionPopup";
import Suggestions from "./Suggestions";
import TrendingBar from "./TrendingBars";

const Trending = ({ trending, suggestions, subscription }) => {
  return (
    <div className="w-96 overflow-y-auto pr-5 hidden xl:block hide-scrollbar overflow-x-hidden">
      {trending && <TrendingBar />}
      {subscription && <SubscriptionPackages />}
      {suggestions && <Suggestions />}
      <SubscriptionPopup />
      <FooterLinks />
    </div>
  );
};

export default Trending;
