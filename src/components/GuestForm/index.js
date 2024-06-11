"use client";
import React, { useState } from 'react';
import styles from './styles.module.css'; 
import { useRouter } from 'next/router'; 
import Link from 'next/link';

const GuestForm = () => {
  const [name, setName] = useState('');
  const [numberFields, setNumberFields] = useState(Array(6).fill(''));
//   const router = useRouter(); 

  const handleNumberChange = (index, value) => {
    const newFields = [...numberFields];
    newFields[index] = value;
    setNumberFields(newFields);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // // Here you can perform actions with the form data, like sending it to a server
    // console.log({ name, numberFields });
    // // You can reset the form here if needed
    // setName('');
    // setNumberFields(Array(6).fill(''));

    // // After submitting, navigate to another page
    // router.push('/details'); 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>Info:</label>
        {numberFields.map((field, index) => (
          <div key={index}>
            {/* <p className={styles.helperText}>Field {index + 1}</p> */}
            <input
              type="number"
              value={field}
              placeholder={`Enter Field ${index + 1}`}
              onChange={(e) => handleNumberChange(index, e.target.value)}
              required
              className={styles.input}
            />
          </div>
        ))}
      </div>
      <button type="submit" className={styles.submitButton}>
      <Link href="/details">Save</Link>
      </button>
    </form>
  );
};

export default GuestForm;
