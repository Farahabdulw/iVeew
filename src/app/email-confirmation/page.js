"use client";
import React from 'react';
import styles from './styles.module.css';
import EmailIcon from '../../svg/Email';
import Link from 'next/link';

export default function EmailConfirmation() {

  return (
    <div className={styles.email_container}>
      <div className={styles.flex_col_two_div}>
        <div className={styles.flex_col_center}>
          <div className={styles.w}>
            <EmailIcon />
          </div>
          <div className={styles.flex_col_center}>
            <h2 className={styles.title}>Email Confirmation </h2>
            <p>We have sent email to test@gmail.com to confirm the validity of our email address.</p>
          </div>
          <div className={styles.border_t}></div>
          <div className={styles.flex}>
            <p>if you not got any mail </p>
            <a className={styles.link_text}>Resend Confirmation mail </a>
          </div>
        </div>
        {/* start of the new div (Reset password form)*/}
        <div className={styles.sub_title}>Reset your password</div>
        <div className={styles.bottomContainer}>
        <p className={styles.boldText}>Please provide the email address that you used when you signed up for your account.</p>
        <p>If you forgot your email please <a className={styles.link_text}>contact us</a></p>
        <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
        <p>We will send you an email that will allow you to reset password.</p>
        <button type="submit" className={styles.submitButton}>
      <Link href="/details">Reset Password</Link>
      </button>
        </div>
        
      </div>
    </div>
  );
}
