import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <nav>
    <a><Link to="/blue">Blue</Link></a> <br />

    <a><Link to="/red">Red</Link></a> <br />
    <a><Link to="/">Home Page</Link></a>
   </nav>
  )
}

export default Navbar;