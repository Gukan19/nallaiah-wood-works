import React from "react";
import "./App.css";

const woodWorkSamples = [
  { title: "Sample 1", image: "/samples/door1.jpg" },
  { title: "Sample 2", image: "/samples/door2.jpg" },
  { title: "Sample 3", image: "/samples/door3.jpg" },
  { title: "Sample 4", image: "/samples/door4.jpg" },
  { title: "Sample 5", image: "/samples/door5.jpg" },
  { title: "Sample 6", image: "/samples/door6.jpg" },
  { title: "Sample 7", image: "/samples/door7.jpg" },
  { title: "Sample 8", image: "/samples/door8.jpg" },
  { title: "Sample 9", image: "/samples/door9.jpg" },
  { title: "Sample 10", image: "/samples/pr1.jpg" },
  { title: "Sample 11", image: "/samples/pr2.jpg" },
  { title: "Sample 12", image: "/samples/pr3.jpg" },
  { title: "Sample 13", image: "/samples/pr4.jpg" },
  { title: "Sample 14", image: "/samples/pr5.jpg" },
  { title: "Sample 15", image: "/samples/pr6.jpg" },
  { title: "Sample 16", image: "/samples/pr7.jpg" },
  { title: "Sample 17", image: "/samples/kt1.jpg" },
  { title: "Sample 18", image: "/samples/kt2.jpg" },
  { title: "Sample 19", image: "/samples/kt3.jpg" },
  { title: "Sample 20", image: "/samples/kt4.jpg" },
  { title: "Sample 21", image: "/samples/sb1.jpg" },
  { title: "Sample 22", image: "/samples/sb2.jpg" },
  { title: "Sample 23", image: "/samples/ch1.jpg" },
  { title: "Sample 24", image: "/samples/ch2.jpg" },
  { title: "Sample 25", image: "/samples/ch3.jpg" },
  { title: "Sample 26", image: "/samples/ch4.jpg" },
  { title: "Sample 27", image: "/samples/ch5.jpg" },
  { title: "Sample 28", image: "/samples/st1.jpg" },
  { title: "Sample 29", image: "/samples/st2.jpg" },
  { title: "Sample 30", image: "/samples/st3.jpg" },
  { title: "Sample 31", image: "/samples/st4.jpg" },
  { title: "Sample 32", image: "/samples/st5.jpg" },
  { title: "Sample 33", image: "/samples/st6.jpg" },
  { title: "Sample 34", image: "/samples/st7.jpg" },
  { title: "Sample 35", image: "/samples/st8.jpg" },
  { title: "Sample 36", image: "/samples/tb1.jpg" },
  { title: "Sample 37", image: "/samples/plw1.jpg" },
  { title: "Sample 38", image: "/samples/plw2.jpg" },
  { title: "Sample 39", image: "/samples/plw3.jpg" },
  { title: "Sample 40", image: "/samples/plw4.jpg" },
  { title: "Sample 41", image: "/samples/plw5.jpg" },
  { title: "Sample 42", image: "/samples/plw6.jpg" },
  { title: "Sample 43", image: "/samples/plw7.jpg" },
  { title: "Sample 44", image: "/samples/plw8.jpg" },
  { title: "Sample 45", image: "/samples/plw9.jpg" },
  { title: "Sample 46", image: "/samples/plw10.jpg" },
  { title: "Sample 47", image: "/samples/plw11.jpg" },
  { title: "Sample 48", image: "/samples/plw12.jpg" },
  { title: "Sample 49", image: "/samples/plw13.jpg" },
  { title: "Sample 50", image: "/samples/plw14.jpg" },
  { title: "Sample 51", image: "/samples/plw15.jpg" },
  { title: "Sample 52", image: "/samples/plw16.jpg" },
  { title: "Sample 53", image: "/samples/plw17.jpg" },
  { title: "Sample 54", image: "/samples/plw18.jpg" },
  { title: "Sample 55", image: "/samples/plw19.jpg" },
  { title: "Sample 56", image: "/samples/plw20.jpg" },
  { title: "Sample 57", image: "/samples/win1.jpg" }, // fixed typo here
];

function App() {
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9530543832347!2d78.3332825!3d10.0626854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf6a058597dc3%3A0x5a9241a592b8f67a!2sNallaiah%20Wood%20Works!5e0!3m2!1sen!2sin!4v1716975211377!5m2!1sen!2sin";

  const mapsLink =
    "https://www.google.com/maps/place/Nallaiah+Wood+Works/@10.0626854,78.3332825,17z";

  const phoneNumber = "9442919375";

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.infoBlock}>
          <h1 style={{ color: "darkred" }}>NALLAIAH WOOD WORKS</h1>
          <p style={{ color: "#333", fontWeight: "bold" }}>NALLAIAH (Lakshmanan)</p>
          <p style={{ color: "#333", fontWeight: "bold" }}>
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

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.locationLink}
          >
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
        {woodWorkSamples.map((sample, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} style={styles.row}>
                <img
                  src={sample.image}
                  alt={sample.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/samples/fallback.jpg"; // Add this file optionally
                  }}
                  style={styles.image}
                />
                {woodWorkSamples[index + 1] && (
                  <img
                    src={woodWorkSamples[index + 1].image}
                    alt={woodWorkSamples[index + 1].title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/samples/fallback.jpg";
                    }}
                    style={styles.image}
                  />
                )}
              </div>
            );
          }
          return null;
        })}
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
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  image: {
    width: "50%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default App;
