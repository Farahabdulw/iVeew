// AppCard.js
import styles from './styles.module.css';

export default function AppCard({ title, description, list, link, linkText, apiExpires }) {
    return (
      <div className={styles.bgblue}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span className={styles.checkmark}></span> {item}
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <span>{apiExpires}</span>
        </div>
        <a href={link}>{linkText}</a>
      </div>
      </div>
    );
  }
