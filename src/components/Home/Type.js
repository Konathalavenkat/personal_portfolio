import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter className="h1"
      options={{
        strings: [
          "Web Developer",
          "AI Enthusiast",
          "Competitive Programmer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40
      }}
    />
  );
}

export default Type;
