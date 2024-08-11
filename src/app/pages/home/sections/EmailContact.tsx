import React, { useState, useRef, useEffect } from "react";

export function EmailContact() {
  const validateText = (text: string) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
  };

  const messages = [
    "hi",
    "hello",
    "guten-tag",
    "you-can-email-me-at-literally-anything! Really",
    "well, not anything. But most things",
    "like-this",
    "or-this",
    "but not this :(  ",
    "you.can.also.email.me.with.specific.topics.like",
    "just-saying-hi",
    "nice-website-bro",
    "I'll-stop-distracting-you-now",
    "have-a-great-day",
  ];
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS
  const initialDelay = 15000; // 10 seconds delay

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(false); // Initially inactive

  const useInterval = (
    callback: () => void,
    delay: number | null | undefined
  ) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      if (delay !== null && delay !== undefined) {
        const id = setInterval(() => {
          if (savedCallback.current) {
            savedCallback.current();
          }
        }, delay);
        return () => clearInterval(id);
      }
      return () => {}; // pass linter
    }, [delay]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(true); // Activate the interval after 10 seconds
    }, initialDelay);

    return () => clearTimeout(timeoutId); // Cleanup timeout if the component unmounts
  }, []);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <div className="email-at">
      <p className="text-white text-xl sm:text-2xl">
        Feel free to get in touch. You can email me at:
        <br/>
        <br/>
      </p>
      <div className="flex items-center justify-center h-full mt-4">
        <div
          style={validateText(message) ? {} : { color: "red" }}
          className="text-center text-white text-xl sm:text-2xl"
          onMouseEnter={() => setIsActive(false)}
          onMouseLeave={() => idx < messages.length && setIsActive(true)}
        >
          <a
            href={
              validateText(message) ? `mailto:${message}@jakobheine.de` : ""
            }
          >
            <span>{message}</span>
            <span>@jakobheine.de</span>
          </a>
        </div>
      </div>
    </div>
  );
}
