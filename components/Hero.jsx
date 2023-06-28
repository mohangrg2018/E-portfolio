"use client";

import Lottie from "lottie-react";
import Coder from "../public/coder.json";
import { useRef, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="lg:max-w-6xl mx-auto flex items-center">
      <div className="w-[60%]">
        <h1 className="text-[70px] font-play font-bold text-primary">
          Hello, I'm Mohan,
        </h1>
        <h2 className="text-[42px] font-play font-bold">Front-End Developer</h2>
        <p className="font-rubik mt-6 text-[17px] border-l-4 border-primary pl-5">
          A passionate front-end developer having an experience of building Web
          applications with JavaScript/Reactjs/Nextjs and some other cool
          libraries and frameworks
        </p>
        <div className="mt-10">
          <audio ref={audioRef} src="../public/audio.mp3" />
          <AiFillPlayCircle
            onClick={togglePlay}
            className="cursor-pointer text-6xl"
          />
        </div>
      </div>
      <div className="w-[40%]">
        <Lottie animationData={Coder} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
