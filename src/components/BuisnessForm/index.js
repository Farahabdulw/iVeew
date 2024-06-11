"use client";

import React, { useState } from 'react';
import styles from './styles.module.css';

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    businessEmail: '',
    firstName: '',
    lastName: '',
    businessName: '',
    businessType: '',
    businessCategory: '',
    businessListing: '',
    applications: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleApplicationChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        applications: [...prevData.applications, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        applications: prevData.applications.filter((app) => app !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.pageContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="email"
          name="businessEmail"
          placeholder="Business Email"
          value={formData.businessEmail}
          onChange={handleChange}
          className={styles.inputField}
        />
        <div className={styles.nameFields}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={`${styles.inputField} ${styles.firstNameField} ${styles.nameField}`}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={`${styles.inputField} ${styles.nameField}`}
          />
        </div>
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          className={styles.inputField}
        />
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Business Type</option>
          {/* Add options for business types */}
        </select>
        <select
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Business Category</option>
          {/* Add options for business categories */}
        </select>
        <select
          name="businessListing"
          value={formData.businessListing}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Business Listing</option>
          {/* Add options for business listings */}
        </select>
        <select
          name="applications"
          value={formData.applications}
          onChange={handleChange}
          className={styles.selectField}
        >
          <option value="">Applications – Select All or highlight all that matter</option>
        </select>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
