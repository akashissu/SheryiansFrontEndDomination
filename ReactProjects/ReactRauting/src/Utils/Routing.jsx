import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import { Route,Routes } from 'react-router-dom'

const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<User/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
  )
}

export default Routing;
