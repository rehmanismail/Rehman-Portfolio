"use client"
import { useEffect, useState } from "react";

const Typewriter = () => {
  const words = ["Hello! I am a", "Rehman Ismail", "And I am a Web Development"];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      setCurrentWord(words[i]);
      if (isDeleting) {
        setJ((prevJ) => prevJ - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((prevI) => (prevI + 1) % words.length);
        }
      } else {
        setJ((prevJ) => prevJ + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, 125);

    return () => clearTimeout(timer);
  }, [i, j, isDeleting, currentWord, words]);

  return (
    <div className="w-100 h-100 flex justify-center items-center">
      <h1 id="typewriter" className="text-5xl font-extrabold text-white">
        {currentWord.substring(0, j)}
      </h1>
    </div>
  );
};

export default Typewriter;
