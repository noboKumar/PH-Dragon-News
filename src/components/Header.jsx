import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment/moment';
import LatestNews from './LatestNews';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='text-center space-y-5 py-10 w-11/12 mx-auto'>
            <img className='w-[470px] mx-auto' src={logo} alt="" />
            <p className='text-accent font-semibold'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>
                {
                    moment().format('dddd, MMMM Do, YYYY' )
                }
            </p>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;





































// import React from "react";
// import logo from "../assets/logo.png";
// import { format } from "date-fns";
// const Header = () => {
//   return (
//     <div className="flex justify-center flex-col items-center gap-3 ">
//       <img className="w-[400px]" src={logo} alt="" />
//       <p className="text-accent">Journalism Without Fear or Favour</p>
//       <p className="font-semibold text-accent">
//         {format(new Date(), "EEEE , MMMM MM , yyyy")}
//       </p>
//     </div>
//   );
// };

// export default Header;
