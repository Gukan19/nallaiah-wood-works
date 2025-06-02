import React from "react";
import "./App.css";

const woodWorkSamples = [
  { title: "Sample 1", image: "/samples/door1.jpg" },
  { title: "Sample 2", image: "/samples/door2.jpg" },
  { title: "Sample 3", image: "/samples/door3.jpg" },
  { title: "Sample 4", image: "/samples/door4.jpg" },
  { title: "Sample 5", image: "/samples/door5.jpg" },
];

function App() {
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9530543832347!2d78.3332825!3d10.0626854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf6a058597dc3%3A0x5a9241a592b8f67a!2sNallaiah%20Wood%20Works!5e0!3m2!1sen!2sin!4v1716975211377!5m2!1sen!2sin";

  const mapsLink =
    "https://maps.app.goo.gl/nGw2B8tqA6snRt5y8?g_st=aw";

  const phoneNumber = "9442919375";

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.infoBlock}>
          <h1 style={{ color: "darkred" }}>NALLAIAH WOOD WORKS</h1>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
            NALLAIAH (Lakshmanan)
          </p>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
            Mobile: 9442919375, 8072563790
          </p>
          <p style={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}>
            ஸ்ரீ மாரியம்மன் நகர், மாத்தார் ரோடு, காரைகாரண் குடியிருப்பு, காரைக்குடி – 630202
          </p>
        </div>

        <div style={styles.contactBlock}>
          <iframe
            title="Nallaiah Wood Works Location"
            src={mapsEmbedUrl}
            width="250"
            height="150"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a href={mapsLink} target="_blank" rel="noopener noreferrer" style={styles.locationLink}>
            Open Location in Maps
          </a>

          <button
            onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            style={styles.callButton}
            aria-label={`Call ${phoneNumber}`}
          >
            Call Us: {phoneNumber}
          </button>
        </div>
      </header>

      <div style={styles.gallery}>
        {woodWorkSamples.map((sample, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={sample.image} alt={sample.title} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    gap: "20px",
    flexWrap: "wrap",
  },
  infoBlock: {
    flex: "1 1 300px",
    minWidth: "280px",
  },
  contactBlock: {
    flex: "1 1 300px",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  locationLink: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#007bff",
    textDecoration: "none",
  },
  callButton: {
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default App;
