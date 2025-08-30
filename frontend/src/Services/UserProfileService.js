class UserProfileService {
  getUserProfile(userId) {
    // logic to fetch user profile
  }

  updateUserProfile(userId, data) {
    // logic to update user profile
  }
}

const userProfileService = new UserProfileService();
export default userProfileService; // ✅ Named export

// import React, { useEffect, useState } from "react";
// import UserProfileService from "../Services/UserProfileService";

// function Profile({ userId }) {
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     UserProfileService.getPersonalDetailsByUser(userId)
//       .then(res => setProfile(res.data))
//       .catch(err => console.error("Error fetching profile:", err));
//   }, [userId]);

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {profile.name}</p>
//       <p>Email: {profile.email}</p>
//        {/* <p>Phone: {profile.phone}</p>  */}
//     </div>
//   );
// }

// export default Profile;
// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:8080/api/users/login", {
//                 email,
//                 password
//             });

//             if (response.data.success) {
//                 setMessage("✅ " + response.data.message);
//                 // You can store user data in localStorage or navigate to another page
//             } else {
//                 setMessage("❌ " + response.data.message);
//             }
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setMessage("❌ " + error.response.data.message);
//             } else {
//                 setMessage("❌ Login failed. Server error.");
//             }
//         }
//     };

//     return (
//         <div className="login-form" style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         placeholder="name@example.com"
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         placeholder="Enter password"
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

//export default Login;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Auth.css';

// const UserProfileService = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const matched = users.find(user => user.email === email && user.password === password);

//     if (matched) {
//       alert(`Welcome back, ${matched.firstName}!`);
//       localStorage.setItem('currentUser', JSON.stringify(matched));
//       navigate('/Home'); // ✅ Redirect after login success
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           required
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           required
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <p><em>Don't have an account?</em> <Link to="/Signup">Register Here!</Link></p>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default UserProfileService;
