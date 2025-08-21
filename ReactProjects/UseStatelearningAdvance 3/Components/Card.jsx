import React, { useState } from "react";

function Card() {
  const [val, setVal] = useState(true);

  return (
    <div>
      {/* print bahar jaao agar if val is false and print mat jao if it is true*/}
      <h1>
      {val === false ? "BAHAR JAO " : "BAHAR MAT JAO"}
      </h1>
      <button onClick={()=>{setVal(()=>!val)}} className="px-3 py-1 bg-blue-300">Change</button>
    </div>
  );
}

export default Card;
