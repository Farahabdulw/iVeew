"use client";

import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';
import ChartDetails from "../../components/ChartDetails";

export default function Details() {
  const name = "John Doe"; 
  const numbers = "123-456-7890"; 
  const x_axis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const y_axis = [0, 100, 75, 200, 100, 250, 300];
  const active_customers = [0, 80, 60, 160, 80, 200, 240];

  const labels = [
    "Total Customers",
    "Active Customers",
  ];

  // Calculate percentage of active customers
  const total_customers = y_axis[y_axis.length - 1];
  const active_customers_last = active_customers[active_customers.length - 1];
  const active_percentage = ((active_customers_last / total_customers) * 100).toFixed(2);

  // Calculate new customers (difference between last two months)
  const new_customers = y_axis[y_axis.length - 1] - y_axis[y_axis.length - 2];
  const new_customers_text = new_customers >= 0 ? new_customers : `-${Math.abs(new_customers)} (loss)`;

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.contentSection}>
          <div className={styles.card}>
            <div className={styles.contentContainer}>
              <p>Name: {name}</p>
              {/* <p>Numbers: {numbers}</p> */}
              <p>Info #1</p>
              <p>Info #2</p>
              <p>Info #3</p>
              <p>Info #4</p>
              <p>Info #5</p>
              <Link href="/guests" className={styles.linkStyle}>
                Go Back to Guest Page
              </Link>
            </div>
          </div>
          <div className={styles.infoCardsContainer}>
            <div className={styles.infoCard}>
              <h3>Active Customer Percentage</h3>
              <p>{active_percentage}%</p>
            </div>
            <div className={styles.infoCard}>
              <h3>New Customers</h3>
              <p>{new_customers_text}</p>
            </div>
          </div>
        </div>
        <div className={styles.chartContainer}>
          <ChartDetails x_axis={x_axis} y_axis={y_axis} labels={labels} />
        </div>
      </div>
    </div>
  );
}
