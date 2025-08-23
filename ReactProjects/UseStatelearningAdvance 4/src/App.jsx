// import React, { useState } from "react";

// function Card() {
//   const [val, setVal] = useState(false);

//   return (
//     <div>
//       {/* print bahar jaao agar if val is false and print mat jao if it is true*/}
//       {val === false ? "BAHAR JAO " : "BAHAR MAT JAO"}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Card from '../Components/Card'

function App(){
  return (
    <div>
      <Card/>
    </div>
  )
}

export default App

