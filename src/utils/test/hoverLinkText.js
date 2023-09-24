import React, { useState } from 'react';
// import './hover-link.css'; // Import your CSS file

function HoverLink() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <a
        href="#"
        className="hover-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </a>
      {isHovering && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPosition.x + 'px',
            top: cursorPosition.y + 'px',
          }}
        >I am hover!!</div>
      )}
    </div>
  );
}

export default HoverLink;
