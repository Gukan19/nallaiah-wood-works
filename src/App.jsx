import React from "react";
import "./App.css";

const woodWorkSamples = [
  { title: "Sample 1", image: "/public/samples/door1.jpg" },
  { title: "Sample 2", image: "/public/samples/door2.jpg" },
  { title: "Sample 3", image: "/public/samples/door3.jpg" },
  { title: "Sample 4", image: "/public/samples/door4.jpg" },
  { title: "Sample 5", image: "/public/samples/door5.jpg" },
  { title: "Sample 6", image: "/public/samples/door6.jpg" },
  { title: "Sample 7", image: "/public/samples/door7.jpg" },
  { title: "Sample 8", image: "/public/samples/door8.jpg" },
  { title: "Sample 9", image: "/public/samples/door9.jpg" },
  { title: "Sample 10", image: "/public/samples/pr1.jpg" },
  { title: "Sample 11", image: "/public/samples/pr2.jpg" },
  { title: "Sample 12", image: "/public/samples/pr3.jpg" },
  { title: "Sample 13", image: "/public/samples/pr4.jpg" },
  { title: "Sample 14", image: "/public/samples/pr5.jpg" },
  { title: "Sample 15", image: "/public/samples/pr6.jpg" },
  { title: "Sample 16", image: "/public/samples/pr7.jpg" },
  { title: "Sample 17", image: "/public/samples/kt1.jpg" },
  { title: "Sample 18", image: "/public/samples/kt2.jpg" },
  { title: "Sample 19", image: "/public/samples/kt3.jpg" },
  { title: "Sample 20", image: "/public/samples/kt4.jpg" },
  { title: "Sample 21", image: "/public/samples/sb1.jpg" },
  { title: "Sample 22", image: "/public/samples/sb2.jpg" },
  { title: "Sample 23", image: "/public/samples/ch1.jpg" },
  { title: "Sample 24", image: "/public/samples/ch2.jpg" },
  { title: "Sample 25", image: "/public/samples/ch3.jpg" },
  { title: "Sample 26", image: "/public/samples/ch4.jpg" },
  { title: "Sample 27", image: "/public/samples/ch5.jpg" },
  { title: "Sample 28", image: "/public/samples/st1.jpg" },
  { title: "Sample 29", image: "/public/samples/st2.jpg" },
  { title: "Sample 30", image: "/public/samples/st3.jpg" },
  { title: "Sample 31", image: "/public/samples/st4.jpg" },
  { title: "Sample 32", image: "/public/samples/st5.jpg" },
  { title: "Sample 33", image: "/public/samples/st6.jpg" },
  { title: "Sample 34", image: "/public/samples/st7.jpg" },
  { title: "Sample 35", image: "/public/samples/st8.jpg" },
  { title: "Sample 36", image: "/public/samples/tb1.jpg" },
  { title: "Sample 37", image: "/public/samples/plw1.jpg" },
  { title: "Sample 38", image: "/public/samples/plw2.jpg" },
  { title: "Sample 39", image: "/public/samples/plw3.jpg" },
  { title: "Sample 40", image: "/public/samples/plw4.jpg" },
  { title: "Sample 41", image: "/public/samples/plw5.jpg" },
  { title: "Sample 42", image: "/public/samples/plw6.jpg" },
  { title: "Sample 43", image: "/public/samples/plw7.jpg" },
  { title: "Sample 44", image: "/public/samples/plw8.jpg" },
  { title: "Sample 45", image: "/public/samples/plw9.jpg" },
  { title: "Sample 46", image: "/public/samples/plw10.jpg" },
  { title: "Sample 47", image: "/public/samples/plw11.jpg" },
  { title: "Sample 48", image: "/public/samples/plw12.jpg" },
  { title: "Sample 49", image: "/public/samples/plw13.jpg" },
  { title: "Sample 50", image: "/public/samples/plw14.jpg" },
  { title: "Sample 51", image: "/public/samples/plw15.jpg" },
  { title: "Sample 52", image: "/public/samples/plw16.jpg" },
  { title: "Sample 53", image: "/public/samples/plw17.jpg" },
  { title: "Sample 54", image: "/public/samples/plw18.jpg" },
  { title: "Sample 55", image: "/public/samples/plw19.jpg" },
  { title: "Sample 56", image: "/public/samples/plw20.jpg" },

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
        {/* Left info block */}
        <div style={styles.infoBlock}>
          <h1 style={{ color: "darkred" }}>NALLAIAH WOOD WORKS</h1>
          <p style={{ color: "#333", fontWeight: "bold" }}>
            NALLAIAH (Lakshmanan)
          </p>
          <p style={{ color: "#333", fontWeight: "bold" }}>
            Mobile: 9442919375, 8072563790
          </p>
          <p style={{ fontWeight: "bold", color: "#333", fontSize: "16px" }}>
            ஸ்ரீ மாரியம்மன் நகர், மாத்தார் ரோடு, காரைகாரண் குடியிருப்பு,
            காரைக்குடி – 630202
          </p>
        </div>

        {/* Right contact block with map, link, call button */}
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
                  style={styles.image}
                />
                {woodWorkSamples[index + 1] && (
                  <img
                    src={woodWorkSamples[index + 1].image}
                    alt={woodWorkSamples[index + 1].title}
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
    display: "grid",
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
