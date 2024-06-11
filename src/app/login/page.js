// src/pages/register.js
// import { useState } from 'react';
import styles from '../../styles/Register.module.css';
import Navbar from "../../components/Navbar";
import countries from '../../data/countries'; 
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
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
      <div className={styles.container}>
        <h2 style={{ padding: 30, fontWeight: "bolder", fontSize: 20, color: "#1a3451" }}>Login iVeew</h2>
        <div className={styles.mainContent}>
          <div className={styles.formContainer}>
            <form onSubmit={"#"} className={styles.form}>
              <input
                type="email"
                name="businessEmail"
                placeholder="Email"
                // value={formData.businessEmail}
                onChange={"#"}
                className={styles.input}
              />
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
              <button type="submit" className={styles.createAccountButton}>
                Login
              </button>
              <div className={styles.links}>
                <a href="#" className={styles.forgotPasswordLink}>
                  Forgot Password?
                </a>
                
              </div>
            </form>
          </div>
          <div className={styles.welcomeBox}>
            <h2>Hello!</h2>
            <Image
            className={styles.imgStyle}
            src="/images/logo_dark.png"
            width={100}
            height={100}
            alt="logo light"
          />
            <Link href="/register">Don't Have an account? Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
