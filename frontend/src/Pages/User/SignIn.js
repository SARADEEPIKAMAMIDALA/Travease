import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserService from '../../Services/UserServices'; // ✅ using service

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Safari || Sign In";
  }, []);

  function checkPasswordComplexity(pwd) {
    const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    return regex.test(pwd);
  }

  function valid(data) {
    if (data.email.length === 0) {
      toast.error("Please enter email");
    } else if (data.password.length === 0) {
      toast.error("Please enter password");
    } else if (data.password.length < 6 || data.password.length > 10) {
      toast.error("Password length should be between 6 to 10 characters");
    } else if (!checkPasswordComplexity(data.password)) {
      toast.error("Password must be alphanumeric and complex");
    } else {
      return true;
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const data = { email, password };

    try {
      if (valid(data)) {
        UserService.signIn(data)
          .then((response) => {
            if (response.data) {
              const result = response.data;

              sessionStorage["userId"] = result.userId;
              sessionStorage["role"] = result.role;
              sessionStorage["email"] = result.email;
              sessionStorage["firstName"] = result.firstName;

              if (result.role === "USER") {
                swal("Success", `USER Logged In Successfully\nCustomer Username: ${result.email}`, "success");
                navigate('/');
                window.location.reload();
              } else if (result.role === "ADMIN") {
                swal("Success", `Admin Logged In Successfully\nAdmin Username: ${result.email}`, "success");
                navigate('/admin');
                window.location.reload();
              }
            } else {
              toast.error('Invalid credentials');
            }
          })
          .catch(() => {
            toast.error("Invalid credentials!!");
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh" }}>
      <br />
      <form onSubmit={handleLogin}>
        <div style={styles.container}>
          <div>
            <h2 style={styles.SignupText}><b>Login</b></h2>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              className='form-control'
              type='email'
              placeholder="Email"
              required
            />
          </div>

          <div className='mb-3'>
            <label>Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className='form-control'
              type='password'
              placeholder="Password"
              required
            />
          </div>

          <div style={{ marginTop: 20, marginLeft: 10 }}>
            <i>Don't have an account? </i>
            <Link to='/signup'>Register Here!</Link>
          </div>

          <div className='mb-3' style={{ marginTop: 15 }}>
            <button type="submit" style={styles.signupButton}>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    borderColor: "crimson",
    width: 350,
    margin: "auto",
    marginTop: "8vw",
    borderRadius: 20,
    padding: "30px",
    borderWidth: 1,
    backgroundColor: "white",
    boxShadow: "3px 3px 10px 2px #576F72",
  },
  signupButton: {
    position: 'relative',
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
    fontFamily: 'Signika Negative',
    fontStyle: "sans-serif",
    marginTop: 10,
  }
};

export default SignIn;
