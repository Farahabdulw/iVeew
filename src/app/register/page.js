// import { useState } from 'react';
import styles from '../../styles/Register.module.css';
import Navbar from "../../components/Navbar";
import countries from '../../data/countries'; 
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  // const [formData, setFormData] = useState({
  //   businessEmail: '',
  //   firstName: '',
  //   lastName: '',
  //   country: 'United States',
  //   password: '',
  // });

  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
  };

  return (
    <div>
      <Navbar />
    
    <div className={styles.container} >
      <h2 style={{ padding: 30, fontWeight: "bolder", fontSize: 20, color: "#1a3451"  }}>Create your iVeew account</h2>
      <div className={styles.mainContent}>
      <div className={styles.formContainer}>
      <form onSubmit={"#"} className={styles.form}>
        <input
          type="email"
          name="businessEmail"
          placeholder="Business Email"
          // value={formData.businessEmail}
          onChange={"#"}
          className={styles.input}
        />
        <div className={styles.nameFields}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            // value={formData.firstName}
            onChange={"#"}
            className={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            // value={formData.lastName}
            onChange={"#"}
            className={styles.input}
          />
        </div>
        <select
          name="country"
          // value={formData.country}
          onChange={"#"}
          className={styles.select}
        >
          {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          // value={formData.password}
          onChange={"#"}
          className={styles.input}
        />
        <div className={styles.passwordRequirements}>
          <ul>
            <li>Password must contain at least 8 characters</li>
            <li>contain at least 1 upper case character</li>
            <li>contain at least 1 special character</li>
            <li>contain at least 1 number</li>
          </ul>
        </div>
        <span>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          // checked={formData.terms}
          onChange={"#"}
        />
        
        <label htmlFor="terms" style={{fontSize:14, color:"gray"}}> Get emails from iVeew about product updates, industry news, and events. Privacy Policy</label>
        </span>
        <button type="submit" className={styles.createAccountButton}>
          Create Account
        </button>
        <div className={styles.links}>
        <a href="#" className={styles.forgotPasswordLink}>
          Forgot Password?
        </a>
      
        </div>
      </form>
      </div>
      <div className={styles.welcomeBox}>
            <h2>Welcome Back</h2>
            <Image
            className={styles.imgStyle}
            src="/images/logo_dark.png"
            width={100}
            height={100}
            alt="logo light"
          />
            <Link href="/login">Have an account? Sign In</Link>
          </div>
          </div>
    </div>
    </div>
  );
}