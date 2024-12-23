import { useContext } from "react";
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import useCart from "../hooks/useCart";
import logo from "../img/logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(console.error(error))
  }

  const navOptions =
    <>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="menu">OUR MENU</Link></li>
      <li><Link to="order/salad">ORDER</Link></li>
      <li><Link to="secret">SECRET</Link></li>
      {
        user ? <div><li><Link onClick={handleLogOut}>LOGOUT</Link></li></div> : <div>  <li><Link to="login">LOGIN</Link></li></div>
      }
      <li><Link to="register">SIGNIN</Link></li>

    </>

  return (
    <div >
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
      <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="menu">OUR MENU</Link></li>
            <li><Link to="order/salad">ORDER</Link></li>
            <li><Link to="secret">SECRET</Link></li>
            {
              user ? <div>
                  <li>
              <Link to="dashboard/mycart">
                <button className="btn">
                 <AiOutlineShoppingCart/>
                  <div className="badge badge-sm badge-secondary">+{cart?.length || 0}</div>
                </button>
              </Link>
            </li>
              </div>:<p></p>
            }
          
            {
              user ? <div><li><Link onClick={handleLogOut}>LOGOUT</Link></li></div> : <div>  <li><Link to="login">LOGIN</Link></li></div>
            }
            {
              user ? <p></p> : <li><Link to="register">SIGNIN</Link></li>
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>

  


  );
};

export default NavBar;