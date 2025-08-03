import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "while",
//   });
//   const [btntext, setBtnText] = useState("Enable Dark Mode");
//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setBtnText("Enable Light Mode");
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Dark Mode");
//     }
//   };

let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#212529',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
};
  return (
    <div className="container" style={myStyle}>
      <h2 style={myStyle}>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className={`accordion-item  props.mode === 'light' ? 'dark' : 'light'`} >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>🔓 Open and Accessible</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Our web app is completely free to use with no sign-up required.
                We believe in making tools available to everyone without
                restrictions. Whether you're here to explore, create, or learn,
                everything is open and ready to use from the moment you
                arrive—no barriers, just access.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>⚡ Fast and Responsive UI</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                This platform is designed for all kinds of users—students,
                professionals, creators, or casual visitors. It’s easy to use,
                visually clean, and intuitively structured. No technical skills
                needed—just jump in and get started. We built it with the belief
                that digital tools should be useful and inclusive for all.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>🌍 Built for Everyone</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                This platform is designed for all kinds of users—students,
                professionals, creators, or casual visitors. It’s easy to use,
                visually clean, and intuitively structured. No technical skills
                needed—just jump in and get started. We built it with the belief
                that digital tools should be useful and inclusive for all.
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}
