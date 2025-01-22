import { useState } from 'react';
import './App.css'

function App() {

  // Initializing state
  const [Numbers, setNumbers] = useState("");

  // Updating value onclick
  const updateValue = (value) => {
    setNumbers(Numbers + value);
  }

  // Clearing all values at once
  const ClearAllCalculation = () => {
    setNumbers("");
  }

  // Clearing last value
  const clearLastNumber = () => {
    setNumbers(Numbers.slice(0, -1));
  }

  // Performing operation with different operators using eval function
  const handleCalculation = () => {
    const total = eval(Numbers);
    setNumbers(total);
  }


  return (
    <>
      <div className='outer-div relative top-0 left-0 w-full h-[100vh]'>
        <div className='inner-div absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-72 md:w-96 sm:w-72 h-auto bg-black p-2 rounded-lg'>
          <div className='flex justify-between items-center pt-2 pb-10'>
            <a className='capitalize text-primary text-sm font-semibold underline underline-offset-8'>calculator</a>
            <a className='capitalize text-white text-sm font-semibold'>exchange rate</a>
            <a className='capitalize text-white text-sm font-semibold'>unit converter</a>
          </div>
          <div className='w-full h-10 overflow-hidden'>
            <h5 className='text-right mx-3 text-2xl text-white font-bold'>{Numbers}</h5>
            {/* <h5 className='p-2 text-right mx-3 text-2xl text-white font-bold'>{Numbers}</h5> */}
          </div>
          <div className='text-white font-medium flex justify-between items-center overflow-hidden'>
            <div className='flex justify-between items-center text-2xl flex-col'>
              <button onClick={ClearAllCalculation} className='text-primary p-2'>C</button>
              <button onClick={() => updateValue("7")} className='p-2'>7</button>
              <button onClick={() => updateValue("4")} className='p-2'>4</button>
              <button onClick={() => updateValue("1")} className='p-2'>1</button>
              <button onClick={() => updateValue("00")} className='p-2'>00</button>
            </div>
            <div className='flex justify-between items-center text-2xl flex-col'>
              <button onClick={() => updateValue("%")} className='text-primary p-2'>%</button>
              <button onClick={() => updateValue("8")} className='p-2'>8</button>
              <button onClick={() => updateValue("5")} className='p-2'>5</button>
              <button onClick={() => updateValue("2")} className='p-2'>2</button>
              <button onClick={() => updateValue("0")} className='p-2'>0</button>
            </div>
            <div className='flex justify-between items-center text-2xl flex-col'>
              <button onClick={clearLastNumber} className='text-primary p-2'>🠴</button>
              <button onClick={() => updateValue("9")} className='p-2'>9</button>
              <button onClick={() => updateValue("6")} className='p-2'>6</button>
              <button onClick={() => updateValue("3")} className='p-2'>3</button>
              <button onClick={() => updateValue(".")} className='p-2'>∙</button>
            </div>
            <div className='flex justify-between items-center text-2xl flex-col'>
              <button onClick={() => updateValue("/")} className='text-primary p-2'>/</button>
              <button onClick={() => updateValue("*")} className='text-primary p-2'>*</button>
              <button onClick={() => updateValue("-")} className='text-primary p-2'>-</button>
              <button onClick={() => updateValue("+")} className='text-primary p-2'>+</button>
              <button onClick={handleCalculation} className='text-primary p-2'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
