
import "../style.css"; // Importation des styles CSS

export default function Overlay() {



  return (
    <div className="overlay">
      {/* Lien LinkedIn */}
    <p className="linkedin-link"
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          fontSize: "13px",
          pointerEvents: "auto",
        }}>
        <p>
          I'm open for working on your 3D / ThreeJS project,
          <br />
          Contact me by LinkedIn or Behance.
          <br />Watch the code on my GitHub.
        </p>
        <a href="https://www.linkedin.com/in/aureliepreaud/"><img src="./linkedin.png" alt="linkedin" width={30} /></a>
        <a href="https://www.behance.net/aureliepreaud"><img src="./behance.png" alt="behance" width={30} /></a>
        <a href="https://github.com/Aurelily/ramen-3D-experience"><img src="./github.png" alt="github" width={30} /></a>
     
        </p>
        <div
        style={{ position: "absolute", top: 30, left: 30, fontSize: "13px" }}
      >
        <h1>Ramen 3D Experience</h1>
        <p>
          Use your mouse to rotate, <br />
          zoom and explore <br />
          your ramen experience !
        </p>
        <img src="./mouse.png" alt="mouse" />
      </div>


      {/* Footer */}
      <div
        className="footer"
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          fontSize: "13px",
        }}
      >
       <p>Blender3D - ThreeJS - R3F - June 2024</p>
      </div>
      <div
        className="footer"
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          fontSize: "13px",
          textAlign: "center",
        }}
      >




      </div>
      {/* Fin Overlay */}
    </div>
  );
}
