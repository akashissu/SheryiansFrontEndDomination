import React, { useState } from 'react'


function App(){

  //yaha ans ek array hai kyuki useState Array me hi return hota hai
  // const ans = useState(true)
  // console.log(ans[0]); //to iska output true aayega
  // console.log(ans[1]); //ye ek function return karta hai..


  // const [a,b] = useState(true); //hum isse aaese bhi likh sakte hai..

  //dhayna rakho iss ka dusra parameter ek function 
  //hota hai.. jaise setScore Ek Function Hai
  // const [score,setScore] = useState(100);
  const [banned,setBanned] = useState(false);

  return (
    <div className='p-4'>
      <h1>{banned.toString()}</h1>
      <button onClick ={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>Change</button>
    </div>
  )
}

export default App
