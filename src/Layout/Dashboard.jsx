import { SlCalender } from 'react-icons/Sl';
import { BiSolidShoppingBag } from 'react-icons/bi';
import { CgMenu } from 'react-icons/cg';
import { FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import { ImSpoonKnife } from 'react-icons/im';
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';



const Dashboard = () => {
  const [cart] = useCart()
//TODO : admin server site connection Workin is Loading
// const isAdmin = true;

const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full">
      {
        isAdmin ? 
        <>
            {/* Sidebar content here */}
     <li><NavLink className="nav" to="/"><FaHome></FaHome> Admin Home</NavLink></li>
     <li><NavLink  className="nav" to="/dashboard/additems"><ImSpoonKnife/> Add Items</NavLink></li>
     <li><NavLink  className="nav" to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
      <li><NavLink className="nav"  to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
        </> 
        : 
        <>
            {/* Sidebar content here */}
     <li><NavLink className="nav" to="/"><FaHome></FaHome> User Home</NavLink></li>
     <li><NavLink  className="nav" to="/dashboard/reserbation"><SlCalender/> Reservation</NavLink></li>
     <li><NavLink  className="nav" to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
      <li><NavLink className="nav"  to="/dashboard/mycart"><GiShoppingCart></GiShoppingCart> My Cart  <span className="badge badge-sm badge-secondary">+{cart?.length || 0}</span></NavLink>
       
      </li>
      <li><NavLink className="nav"  to="/dashboard/review"><GiShoppingCart></GiShoppingCart> Add Review</NavLink></li>
        </>
      }
  
       <div className="divider"></div> 
       <li><NavLink><FaHome></FaHome> HOME</NavLink></li>
       <li><NavLink><CgMenu></CgMenu> MENU</NavLink></li>
       <li><NavLink><BiSolidShoppingBag></BiSolidShoppingBag> SHOP</NavLink></li>
       <li><NavLink><GrMail></GrMail> CONTACT</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;