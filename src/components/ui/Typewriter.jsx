"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const Typewriter = ({
  words,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1800,
  className = "",
  caretClassName = "bg-cyan-400",
}) => {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  // Start with the first word fully typed, so the server-rendered HTML
  // (and the first paint) already shows it, then begin cycling
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const word = words[wordIndex % words.length];
    const finishedTyping = !deleting && text === word;
    const finishedDeleting = deleting && text === "";

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (finishedTyping) delay = pause;
    if (finishedDeleting) delay = 350;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setWordIndex((index) => index + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    pause,
    reduceMotion,
  ]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {reduceMotion ? words[0] : text}
        <span
          className={`ml-1 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-full animate-caret ${caretClassName}`}
        />
      </span>
    </span>
  );
};

export default Typewriter;
