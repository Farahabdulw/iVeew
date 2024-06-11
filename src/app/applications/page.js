import AppCard from "../../components/AppCard";
import Navbar from "../../components/Navbar";
import styles from './styles.module.css';

export default function Applications() {
  // Assuming you have data for each card
  const cardsData = [
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
    // Add more card data as needed
    {
      title: "Mobile Confirmations",
      description: "API- Connects from Confirmation Page to Passtrek Template",
      list: ["Confirmation Page Link"],
      link: "#",
      linkText: "Click to see revenue generation",
      apiExpires: "API-Expires   12-06-2025",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {cardsData.map((card, index) => (
            <div key={index} >
              <AppCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
