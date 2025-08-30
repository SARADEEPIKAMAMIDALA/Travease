import axios from 'axios';

const TOUR_API = "http://localhost:9090/safari/user";

class UserService {
    createUser(user) {
        return axios.post(`${TOUR_API}/signUp`, user);
    }
}

const userServiceInstance = new UserService();
export default userServiceInstance;


// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: ""
//   });

//   const signup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/api/users/signup", form);
//       alert("Signup successful!");
//     } catch (error) {
//       if (error.response && error.response.data) {
//         alert("Error: " + error.response.data);
//       } else {
//         alert("Signup failed.");
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={signup}>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         /><br />
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         /><br />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         /><br />
//         <input
//           type="text"
//           placeholder="Phone"
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//           required
//         /><br />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
// services/UserService.js

// services/UserService.js

// Function to register a new user
// const createUser = (userData) => {
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if user already exists
//   const existingUser = users.find(u => u.email === userData.email);
//   if (existingUser) {
//     throw new Error('User already exists');
//   }

//   // Add new user to the list
//   users.push(userData);
//   localStorage.setItem('users', JSON.stringify(users));
// };

// // Function to log in a user
// const loginUser = (email, password) => {
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   // Check if user exists with correct credentials
//   const user = users.find(u => u.email === email && u.password === password);
//   if (!user) {
//     throw new Error('Invalid credentials');
//   }

//   // Store current user session
//   localStorage.setItem('currentUser', JSON.stringify(user));
//   return user;
// };

// // Function to log out user
// const logoutUser = () => {
//   localStorage.removeItem('currentUser');
// };

// // Function to get the currently logged-in user
// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem('currentUser'));
// };

// // Export all functions
// const UserService = {
//   createUser,
//   loginUser,
//   logoutUser,
//   getCurrentUser
// };

// export default UserService;
