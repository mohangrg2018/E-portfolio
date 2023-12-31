"use client";

import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import Coder from "../public/coder.json";
import { useRef, useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsEnded(true);
    setIsPlaying(false);
  };

  const renderPlayIcon = () => {
    if (isEnded && !isPlaying) {
      return (
        <AiFillPlayCircle
          onClick={togglePlay}
          className="cursor-pointer text-6xl"
        />
      );
    } else if (isPlaying) {
      return (
        <AiFillPauseCircle
          onClick={togglePlay}
          className={`cursor-pointer text-6xl ${
            isPlaying ? "text-primary" : ""
          }`}
        />
      );
    } else {
      return (
        <AiFillPlayCircle
          onClick={togglePlay}
          className="cursor-pointer text-6xl"
        />
      );
    }
  };

  return (
    <div className="lg:max-w-6xl sm:max-w-2xl max-w-xs mx-auto sm:flex items-center">
      <div className="sm:w-[60%]">
        <h1 className="sm:text-[70px] text-[52px] font-play font-bold text-primary">
          Hello, I'm Mohan,
        </h1>
        <h2 className="text-[42px] font-play font-bold">
          <Typewriter
            options={{
              strings: ["Front-End Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="font-rubik mt-6 text-[17px] border-l-4 border-primary pl-5">
          A passionate front-end developer having an experience of building Web
          applications with JavaScript/Reactjs/Nextjs and some other cool
          libraries and frameworks
        </p>
        <div className="mt-10">
          <audio ref={audioRef} src="audio.mp3" onEnded={handleAudioEnded} />
          {renderPlayIcon()}
        </div>
      </div>
      <div className="sm:w-[40%]">
        <Lottie animationData={Coder} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
