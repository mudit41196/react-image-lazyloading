import React, {useEffect, useMemo} from "react";
import images from "./data/images";
import "./App.css";

const sampleImg = "https://i.picsum.photos/id/123/420/320.jpg?hmac=soMcEa0_s30XRr53PXnmHN6nmt9TN7AztrACA2MrzV0";

function App() {
 const observer = useMemo(() => {
  return new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.src = entry.target.dataset.original;
        observer.unobserve(entry.target);
      }
    })
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });
 }, []);

 useEffect(() => {
   const images = Array.from(document.getElementsByClassName("img-class"));
   images.forEach(img => {
    observer.observe(img);
   });
 });

  return (
    <div>
      {images.map((eachImg, index) => {
        return <img data-original={eachImg} width="300px" height="300px" src={sampleImg} id={`img-${index}`} className="img-class" key={eachImg} alt="img"/>;
      })}
    </div>
  );
}

export default App;
