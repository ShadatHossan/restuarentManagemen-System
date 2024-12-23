import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sheared/Footer';
import NavBar from '../Sheared/NavBar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
          { noHeaderFooter || <NavBar></NavBar>}  {/* condition ja noHeaderFooter takla nav tag deka ba na */}
            <Outlet></Outlet>
          {noHeaderFooter || <Footer></Footer>}   {/* condition ja noHeaderFooter takla Footer tag deka ba na */}
        </div>
    );
};

export default Main;