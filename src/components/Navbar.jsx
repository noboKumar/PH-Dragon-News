import React from 'react';
import userIcon from "../assets/user.png";
import { NavLink } from 'react-router';


const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        <div></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <img
          className="w-15 rounded-full border-2 p-1 border-accent"
          src={userIcon}
          alt=""
        />
          <button className="btn btn-primary px-10 ">
            Log In
          </button>
      </div>
    </div>
    );
};

export default Navbar;







































// import React, { use } from "react";
// import { Link, NavLink } from "react-router";
// import userIcon from "../assets/user.png";
// import { AuthContext } from "../provider/AuthProvider";
// const Navbar = () => {
//   const { user, logOut } = use(AuthContext);
//   const handleLogOut = () => {
//     console.log("user trying to LogOut");
//     logOut()
//       .then(() => {
//         alert("You Logged Out successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="flex justify-between items-center">
//       <div className="">{user && user.email}</div>
//       <div className="nav flex gap-5 text-accent">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/career">Career</NavLink>
//       </div>
//       <div className="login-btn flex gap-5">
//         <img
//           className="w-12 rounded-full"
//           src={`${user ? user.photoURL : userIcon}`}
//           alt=""
//         />
//         {user ? (
//           <button onClick={handleLogOut} className="btn btn-primary px-10 ">
//             LogOut
//           </button>
//         ) : (
//           <Link to="/auth/login" className="btn btn-primary px-10 ">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
