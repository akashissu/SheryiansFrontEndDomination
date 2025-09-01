import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

      <nav className='mt-10 flex justify-center gap-10'>

        <NavLink style={(e) => {
          return{
            color:e.isActive ? "tomato" : "",
            fontWeight:e.isActive ? "bold" : ""
          }
        }} to="/">Home</NavLink >

        <NavLink className={(e) => {
          return[
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }} to="/users">Users</NavLink >

        <NavLink style={(e) => {
          return{
            color: e.isActive ? "tomato" : "",
            fontWeight:e.isActive ? "bold" : ""
          }
        }} to="/about">About</NavLink >
      </nav>
      
  );
};

export default Navbar
