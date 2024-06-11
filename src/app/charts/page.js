import Chart from "../../components/Chart";
import Navbar from "../../components/Navbar";
import styles from './styles.module.css';


const x_axis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Apr', 'May', 'Apr', 'May'];
const y_axis = [0, 100, 75, 200, 100, 250, 150, 300, 320];

const labels = [
  "Mobile Confirmations",
  "Upsells-Hotel",
  "Messaging",
  "Passtrek Integration",
  "Guest Recognition",
  "Personalization",
];


export default function Charts() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.chartWrapper}>
        <Chart x_axis={x_axis} y_axis={y_axis} labels={labels} />
        </div>
      </div>
    </div>
  );
}
