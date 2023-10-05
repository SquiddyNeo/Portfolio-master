import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Freelancer",
          "Web Consultant",
          
        ],
        autoStart: true,
        loop: true,
        typespeed: 80,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
