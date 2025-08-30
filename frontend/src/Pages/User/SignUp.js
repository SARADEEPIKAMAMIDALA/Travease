import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import UserServices from '../../Services/UserServices';

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "", password: "", role: "", firstName: "", lastName: "", dob: "", address: "", phoneNo: ""
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.title = "Safari || SignUp";
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function checkPasswordComplexity(pwd) {
    const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    return regex.test(pwd);
  }

  function valid(data, confirmPassword) {
    if (data.email.length === 0) {
      toast.error("Please enter email");
    } else if (data.password.length === 0) {
      toast.error("Please enter password");
    } else if (data.password.length < 6 || data.password.length > 10) {
      toast.error("Password length should be between 6 to 10");
    } else if (!checkPasswordComplexity(data.password)) {
      toast.error("Password must be alphanumeric and complex");
    } else if (data.password !== confirmPassword) {
      toast.error("Password and confirm password should match");
    } else if (data.role.length === 0) {
      toast.error("Choose role between admin and user");
    } else if (data.firstName.length === 0) {
      toast.error("Please enter first name");
    } else if (data.lastName.length === 0) {
      toast.error("Please enter last name");
    } else if (data.dob.length === 0) {
      toast.error("Please choose DOB");
    } else if (data.address.length === 0) {
      toast.error("Please enter address");
    } else if (data.phoneNo.length === 0) {
      toast.error("Please enter phone number");
    } else {
      return true;
    }
  }

  async function handleSignUp(event) {
    event.preventDefault();

    if (valid(state, confirmPassword)) {
      UserServices.createUser(state)
        .then(response => {
          toast.success("User added successfully!");
          alert("User added successfully!");
          setState({
            email: "", password: "", role: "", firstName: "", lastName: "", dob: "", address: "", phoneNo: ""
          });
          setConfirmPassword("");
          navigate('/login');
        })
        .catch(error => {
          toast.error("Please enter valid data!");
          console.log('Signup failed', error);
        });
    }
  }

  return (
    <div style={{ background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh" }}>
      <br />
      <form onSubmit={handleSignUp}>
        <div style={styles.container}>
          <h2 style={styles.SignupText}><b>Sign Up</b></h2>

          <div className="mb-3">
            <label>Email</label>
            <input onChange={handleInputChange} className="form-control"
              type="email" placeholder="Email" name="email" value={state.email} required />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input onChange={handleInputChange} className="form-control"
              type="password" placeholder="Password" name="password" value={state.password} />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className="form-control"
              type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} />
          </div>

          <div className="mb-3">
            <label>Role</label>
            <input onChange={handleInputChange} className="form-control"
              type="text" placeholder="Role" name="role" value={state.role} />
          </div>

          <div className="mb-3">
            <label>First Name</label>
            <input onChange={handleInputChange} className="form-control"
              type="text" placeholder="First Name" name="firstName" value={state.firstName} />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input onChange={handleInputChange} className="form-control"
              type="text" placeholder="Last Name" name="lastName" value={state.lastName} />
          </div>

          <div className="mb-3">
            <label>Date of Birth</label>
            <input onChange={handleInputChange} className="form-control"
              type="date" name="dob" value={state.dob} />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input onChange={handleInputChange} className="form-control"
              type="text" placeholder="Address" name="address" value={state.address} />
          </div>

          <div className="mb-3">
            <label>Phone No</label>
            <input onChange={handleInputChange} className="form-control"
              type="number" placeholder="Phone Number" name="phoneNo" value={state.phoneNo} />
          </div>

          <div style={{ marginTop: 20, marginLeft: 10 }}>
            <i>Already have an account? </i><Link to='/login'>Login here</Link>
          </div>

          <div className="mb-3" style={{ marginTop: 15 }}>
            <button style={styles.signupButton}>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    borderColor: "crimson",
    width: 500,
    margin: "auto",
    marginTop: "8vw",
    borderRadius: 10,
    padding: "30px",
    borderWidth: 1,
    backgroundColor: "white",
    boxShadow: "3px 3px 10px 2px #576F72",
  },
  signupButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#BC012E',
    color: 'white',
    borderRadius: 15,
    border: 'none',
  },
  SignupText: {
    textAlign: "center",
    color: "#022831",
    fontFamily: 'Signika Negative, sans-serif',
    marginTop: 10,
  }
};

export default SignUp;
