import React from "react";
import Welcome from "react-welcome-page";

function WelcomeAnimation() {
  return (
    <div className="Welcome">
      <Welcome
        loopDuration={5500}
        data={[
          {
            image:
              "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            imageAnimation: "fadeInUp",
            textAnimation: "fadeInUp",
            text: "IoT Test",
            backgroundColor: "#000",
            textColor: "#FFF",
          },
        ]}
      />
    </div>
  );
}

export default WelcomeAnimation;
