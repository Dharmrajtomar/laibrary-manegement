import React, { useEffect, useState } from 'react';
import { IoIosColorWand } from 'react-icons/io';

const ChangeBg = () => {
    const colors = ['rgb(168, 198, 198)', 'aqua', 'white'];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = colors[colorIndex];
      }, [colorIndex]); // runs every time colorIndex changes
    
      const handleClick = () => {
        // Go to next index (loop back to 0 after last color)
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      };

  return (
    <button 
      onClick={handleClick} 
      style={{
        padding: '10px 20px',
        fontSize: '26px',
        margin: '10px',
        cursor: 'pointer'
      }}
    >
      <IoIosColorWand />
    </button>
  );
};

export default ChangeBg;
