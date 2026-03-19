// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthPage.css';

// const AuthPage = () => {
//   const [isLoginActive, setIsLoginActive] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     age: '',
//     contact: ''
//   });

//   const navigate = useNavigate();

//   const handleToggle = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setIsLoginActive(!isLoginActive);
//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5005/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         alert('Login successful!');
//         navigate('/dashboard'); // go to main page after login
//       } else {
//         alert(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Server error during login');
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5005/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           age: formData.age,
//           contact: formData.contact
//         })
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert('Signup successful! Please log in.');
//         setIsLoginActive(true);
//       } else {
//         alert(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Server error during signup');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className={`auth-slider ${isLoginActive ? 'login-active' : 'signup-active'}`}>
//           <div className="slider-content">
//             <h2>{isLoginActive ? 'Welcome Back!' : 'Join Us Today'}</h2>
//             <p>{isLoginActive ? 'Sign in to continue your journey' : 'Create an account to get started'}</p>
//           </div>
//         </div>

//         <div className="auth-forms-container">
//           {/* Login Form */}
//           <div className={`auth-form login-form ${isLoginActive ? 'active' : 'inactive'}`}>
//             <h3>Login</h3>
//             <form onSubmit={handleLogin}>
//               <div className="form-group">
//                 <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//               </div>
//               <button type="submit" className="auth-button">Login</button>
//             </form>
//             <div className="auth-toggle-container">
//               <p>Don't have an account?</p>
//               <div className="toggle-button" onClick={handleToggle}>
//                 <span className="plus-icon">+</span>
//                 <span className="toggle-link">Sign Up</span>
//               </div>
//             </div>
//           </div>

//           {/* Signup Form */}
//           <div className={`auth-form signup-form ${!isLoginActive ? 'active' : 'inactive'}`}>
//             <h3>Create Account</h3>
//             <form onSubmit={handleSignup}>
//               <div className="form-group">
//                 <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
//               </div>
//               <div className="form-group">
//                 <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />
//               </div>
//               <button type="submit" className="auth-button">Sign Up</button>
//             </form>
//             <div className="auth-toggle-container">
//               <p>Already have an account?</p>
//               <div className="toggle-button" onClick={handleToggle}>
//                 <span className="plus-icon">+</span>
//                 <span className="toggle-link">Login</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    contact: ''
  });

  const navigate = useNavigate();

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsLoginActive(!isLoginActive);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5005/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        navigate('/dashboard'); // go to main page after login
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error during login');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await fetch('http://localhost:5005/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
          contact: formData.contact
        })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Signup successful! Please log in.');
        setIsLoginActive(true);
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error during signup');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-branding">
      </div>

      <div className="auth-card">
        <div className={`auth-slider ${isLoginActive ? 'login-active' : 'signup-active'}`}>
          <div className="slider-content">
            <h2>{isLoginActive ? 'Welcome Back!' : 'Join Us Today'}</h2>
            <p>{isLoginActive ? 'Sign in to continue your journey' : 'Create an account to get started'}</p>
            <div className="slider-tagline">
              <img
                src="/community.jpg"
                alt="Community and Growth"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              />
            </div>

          </div>
        </div>

        <div className="auth-forms-container">
          {/* Login Form */}
          <div className={`auth-form login-form ${isLoginActive ? 'active' : 'inactive'}`}>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>
              <button type="submit" className="auth-button">Login</button>
            </form>
            <div className="auth-toggle-container">
              <p>Don't have an account?</p>
              <div className="toggle-button" onClick={handleToggle}>
                <span className="toggle-link">Sign Up</span>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className={`auth-form signup-form ${!isLoginActive ? 'active' : 'inactive'}`}>
            <h3>Create Account</h3>
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>

              <div className="form-group form-row">
                <input type="number" name="age" placeholder="Age" onChange={handleChange} required className="half-width" />
                <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required className="half-width" />
              </div>
              <button type="submit" className="auth-button">Join Now</button>
            </form>
            <div className="auth-toggle-container">
              <p>Already have an account?</p>
              <div className="toggle-button" onClick={handleToggle}>
                <span className="toggle-link">Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
