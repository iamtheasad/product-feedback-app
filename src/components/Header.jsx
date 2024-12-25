import PropTypes from "prop-types";
import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    textColor: textColor,
    padding: "20px",
  };
  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0, 0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
