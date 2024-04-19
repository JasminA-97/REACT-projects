import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa'; // Import arrow icons from react-icons library
import { IoColorPaletteSharp } from 'react-icons/io5';


function App() {
  const [color, setColor] = useState('white');
  const [showColorDiv, setShowColorDiv] = useState(false); // State to manage visibility of colordiv

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const toggleColorDiv = () => {
    setShowColorDiv(!showColorDiv); // Toggle the state to show/hide colordiv
  };

  return (
    <>
      <div style={{ minHeight: '100vh', width: '200px' }} className='d-flex align-items-center justify-content-center'>
        <div className='border rounded bg-light'>
          {/* Arrow icon for toggling colordiv visibility */}
          {showColorDiv ? (
            <FaArrowCircleDown className='arrow-icon' onClick={toggleColorDiv} />
          ) : (
            <IoColorPaletteSharp style={{fontSize:'100'}} className='btn arrow-icon text-warning' onClick={toggleColorDiv}/>
          )}
  
          {/* Conditional rendering based on showColorDiv state */}
          {showColorDiv && (
            <div className='colordiv'>
              <div className='p-2 d-flex align-items-center justify-content-evenly'>
                <button onClick={() => setColor('blue')} className='btn ms-3 rounded-circle' style={{ height: '40px', width: '40px', backgroundColor: 'blue' }}></button>
                <button onClick={() => setColor('yellow')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'yellow' }}></button>
                <button onClick={() => setColor('green')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'green' }}></button>
              </div>
              <div className='p-2 d-flex align-items-center justify-content-evenly'>
                <button onClick={() => setColor('tomato')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'tomato' }}></button>
                <button onClick={() => setColor('orange')} className='btn ms-3 rounded-circle' style={{ height: '40px', width: '40px', backgroundColor: 'orange' }}></button>
                <button onClick={() => setColor('DodgerBlue')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'DodgerBlue' }}></button>
              </div>
              <div className='p-2 d-flex align-items-center justify-content-evenly'>
                <button onClick={() => setColor('Gray')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'Gray' }}></button>
                <button onClick={() => setColor('MediumSeaGreen')} className='btn ms-3 rounded-circle' style={{ height: '40px', width: '40px', backgroundColor: 'MediumSeaGreen' }}></button>
                <button onClick={() => setColor('SlateBlue')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'SlateBlue' }}></button>
              </div>
              <div className='p-2 d-flex align-items-center justify-content-evenly'>
                <button onClick={() => setColor('violet')} className='btn ms-3 rounded-circle' style={{ height: '40px', width: '40px', backgroundColor: 'violet' }}></button>
                <button onClick={() => setColor('lightgray')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'lightgray' }}></button>
                <button onClick={() => setColor('hsla(9, 100%, 64%, 0.5)')} className='btn ms-3 rounded-circle ' style={{ height: '40px', width: '40px', backgroundColor: 'hsla(9, 100%, 64%, 0.5)' }}></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
