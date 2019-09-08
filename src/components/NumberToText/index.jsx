import React from "react";

function NumberToText({ string, description }) {
  const renderLetters = () => {
    const arrayOfString = [];
    for (var i = 0; i < string.length; i++) {
      arrayOfString.push(
        <span className="numberToText__letters__letter" key={i}>
          {string.charAt(i)}
        </span>
      );
    }
    return arrayOfString;
  };

  return (
    <div className="numberToText">
      <div className="numberToText__letters">
        {renderLetters()}
        <p className="numberToText__letters__description">{description}</p>
      </div>
    </div>
  );
}

export default NumberToText;
