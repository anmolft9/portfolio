import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["A Web/Software Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};
