import React, { useState } from "react";
import "./Tips.css";

function Main() {
  // State to track whether the button is clicked
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsClicked(!isClicked); // Toggle the state when the button is clicked
  };

  // Determine the CSS class based on the click state
  const buttonClassName = isClicked ? "share-tip-button clicked" : "share-tip-button";

  return (
    <div className="tip-submissions">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="post">
            <div className="overlap-group">
              <div className="div" />
              <img
                className="image"
                alt="Image"
                src="https://c.animaapp.com/SPyf3cca/img/image-2.png"
              />
              <img
                className="businesses-sell"
                alt="Businesses sell"
                src="https://c.animaapp.com/SPyf3cca/img/businesses--sell-bubble-tea-in-paper-cups.png"
              />
              <div className="post-info">
                <div className="save-like">
                  <img
                    className="vector"
                    alt="Vector"
                    src="https://c.animaapp.com/SPyf3cca/img/vector-2-1.png"
                  />
                  <div className="overlap-group-2">
                    <div className="group" />
                    <div className="text-wrapper">109</div>
                  </div>
                </div>
                <div className="OP">
                  <div className="group-2">
                    <img
                      className="taylor-swift"
                      alt="Taylor swift"
                      src="https://c.animaapp.com/SPyf3cca/img/taylor-swift.png"
                    />
                    <p className="p">2019 . 01 . 01</p>
                  </div>
                </div>
                <img
                  className="TS-pfp"
                  alt="Ts pfp"
                  src="https://c.animaapp.com/SPyf3cca/img/ts-pfp.png"
                />
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="div" />
              <div className="save-like-2">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/SPyf3cca/img/vector-2.svg"
                />
                <div className="overlap-group-2">
                  <img
                    className="img"
                    alt="Group"
                    src="https://c.animaapp.com/SPyf3cca/img/group-3-5@2x.png"
                  />
                  <div className="text-wrapper">109</div>
                </div>
              </div>
              <div className="OP-2">
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="https://c.animaapp.com/SPyf3cca/img/ellipse-3@2x.png"
                />
                <div className="group-3">
                  <div className="text-wrapper-2">Shylla Monic</div>
                  <p className="p">2023 . 04 . 06</p>
                </div>
              </div>
              <img
                className="image-2"
                alt="Image"
                src="https://c.animaapp.com/SPyf3cca/img/image-1@2x.png"
              />
              <div className="flexcontainer">
                <p className="text">
                  <span className="span">
                    Grow your own fruits and veggies to avoid buying plastic packaging
                    <br />
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* turn share-tip-button image into button */}
          <button onClick={handleButtonClick}>
            <img
              className={buttonClassName}
              alt="Share tip button"
              src="https://c.animaapp.com/SPyf3cca/img/share-tip-button@2x.png"
            />
          </button>
          <div className="tip-section-header">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <p className="text-wrapper-3">
                Vote for your favorite to be the tip of the day or submit your own!
              </p>
              <div className="tip-submissions-back">Tip Submissions</div>
              <div className="text-wrapper-4">Tip Submissions</div>
              <img
                className="back-arrow"
                alt="Back arrow"
                src="https://c.animaapp.com/SPyf3cca/img/back-arrow@2x.png"
              />
              <div className="element-dots">
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
              </div>
            </div>
          </div>
          <div className="tip-search-bar">
            <div className="overlap-3">
              <div className="text-wrapper-5">Search For Tips</div>
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <div className="ellipse-7" />
                  <div className="rectangle-2" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="app-tabs-tips"
            alt="App tabs tips"
            src="https://c.animaapp.com/SPyf3cca/img/app-tabs--tips.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
