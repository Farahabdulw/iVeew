import React from 'react';
import Navbar from '../../components/Navbar';
import Chart from '../../components/Chart';
import GuestForm from '../../components/GuestForm';
import styles from './styles.module.css';

export default function Guests() {
  
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <GuestForm />
      </div>
    </div>
  );
}
