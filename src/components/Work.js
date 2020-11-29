import React, { useState } from "react";
import "../work.css";

function Work(props) {
  const [isShown, setIsShown] = useState(false);
  const [isShownFull, setIsShownFull] = useState(false);
  const divText = {
    backgroundColor: props.color,
  };
  return (
    <div>
      <div>
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={() => setIsShownFull(true)}
          className="workContent"
        >
          <img src={props.cardImage} alt="example" />

          {isShown && (
            <div
              style={divText}
              onClick={() => setIsShownFull(true)}
              className="workHover"
            >
              <div className="lupa">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 329 351"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M141.724 182.732L15.3575 312.203C10.3556 317.834 20.853 333.204 26.4829 338.324L27.4072 339.163C32.3887 343.692 42.5825 351.126 46.6 345.747L156.732 197.79L141.724 182.732Z"
                    fill="white"
                  />
                  <circle
                    cx="211.5"
                    cy="117.5"
                    r="100"
                    stroke="white"
                    stroke-width="35"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {isShownFull && (
          <img
            className="fullWork"
            onClick={() => setIsShownFull(false)}
            src={props.fullImage}
            alt="example"
          />
        )}
      </div>
    </div>
  );
}

export default Work;
