import React from "react";
import "./App.css";

const imageList = [
  "door1.jpg", "door2.jpg", "door3.jpg", "door4.jpg", "door5.jpg", "door6.jpg", "door7.jpg", "door8.jpg", "door9.jpg",
  "pr1.jpg", "pr2.jpg", "pr3.jpg", "pr4.jpg", "pr5.jpg", "pr6.jpg", "pr7.jpg",
  "kt1.jpg", "kt2.jpg", "kt3.jpg", "kt4.jpg",
  "sb1.jpg", "sb2.jpg",
  "ch1.jpg", "ch2.jpg", "ch3.jpg", "ch4.jpg", "ch5.jpg",
  "st1.jpg", "st2.jpg", "st3.jpg", "st4.jpg", "st5.jpg", "st6.jpg", "st7.jpg", "st8.jpg",
  "tb1.jpg",
  "plw1.jpg", "plw2.jpg", "plw3.jpg", "plw4.jpg", "plw5.jpg", "plw6.jpg", "plw7.jpg", "plw8.jpg", "plw9.jpg", "plw10.jpg",
  "plw11.jpg", "plw12.jpg", "plw13.jpg", "plw14.jpg", "plw15.jpg", "plw16.jpg", "plw17.jpg", "plw18.jpg", "plw19.jpg", "plw20.jpg",
  "win1.jpg",
].map((file, idx) => ({
  title: `Sample ${idx + 1}`,
  image: `/samples/${file}`,
}));

function App() {
  const phoneNumber = "9442919375";
  const mapsLink =
    "https://www.google.com/maps/place/Nallaiah+Wood+Works/@10.0626854,78.3332825,17z";

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>NALLAIAH WOOD WORKS</h1>
          <p style={styles.subtitle}>NALLAIAH (Lakshmanan)</p>
          <p style={styles.subtitle}>Mobile: 9442919375, 8072563790</p>
          <p style={styles.address}>
            ஸ்ரீ மாரியம்மன் நகர், மாத்தார் ரோடு, காரைகாரண் குடியிருப்பு, காரைக்குடி – 630202
          </p>
          <div style={styles.buttonGroup}>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              📍 View Map
            </a>
            <a href={`tel:${phoneNumber}`} style={{ ...styles.button, backgroundColor: "#28a745" }}>
              📞 Call Us
            </a>
          </div>
        </div>
      </header>

      <main style={styles.gallery}>
        {imageList.map((img, i) => (
          <div key={i} style={styles.imageCard}>
            <img
              src={img.image}
              alt={img.title}
              style={styles.image}
              loading="lazy"
            />
            <p style={styles.imageTitle}>{img.title}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa",
  },
  header: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  title: {
    color: "darkred",
    margin: 0,
  },
  subtitle: {
    fontWeight: "bold",
    margin: "5px 0",
  },
  address: {
    margin: "10px 0",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#333",
  },
  buttonGroup: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "14px",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    padding: "20px",
  },
  imageCard: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
  },
  imageTitle: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#555",
  },
};

export default App;
