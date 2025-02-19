/* eslint-disable react/prop-types */
import React from "react";

function Sign(props) {
  return (
    <div className="bg-rose-500 hover:bg-rose-600 w-20 h-10 rounded-lg font-bold text-white text-center flex items-center justify-center">
        {props.text}
    </div>
  );
}
Sign.defaultProps = {
    text: "Sign"
};

export default Sign;