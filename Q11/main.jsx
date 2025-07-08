import React, { useEffect, useRef } from 'react';

const DomExample = () => {
  const containerRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const messageEl = messageRef.current;
    const containerEl = containerRef.current;

    console.log("Parent Node of #message:", messageEl.parentNode);
    console.log("Child Nodes of #container:", containerEl.childNodes);
    console.log("Next Sibling of #message:", messageEl.nextSibling); // may be a text node
    console.log("Next Element Sibling of #message:", messageEl.nextElementSibling);
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <h2>Heading</h2>
      <p id="message" ref={messageRef}>Hello World!</p>
      <span>Extra info</span>
    </div>
  );
};

export default DomExample;
