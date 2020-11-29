import React, { useState } from "react";
import "../App.css";
import "../work.css";

import corp from "../assets/corporative.png";
import corpFull from "../assets/corpFull.png";
import finantial from "../assets/finantial.png";
import finantialFull from "../assets/finantialFull.png";
import cafe from "../assets/cafe.png";
import cafeFull from "../assets/coffeFull.png";
import skincare from "../assets/skincare.png";
import skinFull from "../assets/skinFull.png";
import flood from "../assets/flood.png";
import floodFull from "../assets/floodFull.png";
import macarons from "../assets/macarons.png";
import macFull from "../assets/macFull.png";
import Work from "./Work.js";
import WorkMobile from "./WorkMobile.js";
function Content(props) {
  const [isShown, setIsShown] = useState(true);
  return (
    <div>
      <div className="content">
        <h1>My Work!</h1>
      </div>
      <div className="dashboard">
        <Work cardImage={corp} fullImage={corpFull} color={"#F8A02F"} />
        <Work cardImage={cafe} fullImage={cafeFull} color={"#76D0BC"} />
        <Work cardImage={skincare} fullImage={skinFull} color={"#F47489"} />
        <Work cardImage={flood} fullImage={floodFull} color={"#F47489"} />
        <Work cardImage={macarons} fullImage={macFull} color={"#F8A02F"} />
        <Work
          cardImage={finantial}
          fullImage={finantialFull}
          color={"#76D0BC"}
        />
      </div>
      <div className="dashboardMob">
        <WorkMobile cardImage={corp} fullImage={corpFull} color={"#F8A02F"} />
        <WorkMobile cardImage={cafe} fullImage={cafeFull} color={"#F8A02F"} />
        <WorkMobile
          cardImage={skincare}
          fullImage={skinFull}
          color={"#F47489"}
        />
        <WorkMobile cardImage={flood} fullImage={floodFull} color={"#F47489"} />
        <WorkMobile
          cardImage={macarons}
          fullImage={macFull}
          color={"#F8A02F"}
        />
        <WorkMobile
          cardImage={finantial}
          fullImage={finantialFull}
          color={"#76D0BC"}
        />
      </div>
    </div>
  );
}

export default Content;
