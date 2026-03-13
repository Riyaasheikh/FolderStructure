import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !fill || !wrapper) return;

    // "back.out" creates the overshoot/bounce effect
    const customEase = "expo.inOut";
    // "expo.inOut" remains great for the liquid fill itself
    const fillEase = "expo.inOut"; 

    const tl = gsap.timeline({ repeat: -1 });

    // PHASE 1: FILLING (Bottom to Top)
    tl.set(wrapper, { alignItems: "flex-end" }) 
      .to(container, {
        rotation: 180,
        duration: 1.2,
        ease: customEase,
      })
      .to(fill, {
        height: "100%",
        duration: 1.2,
        ease: fillEase,
      }, 0); // Start together

    // PHASE 2: EMPTYING (Top to Bottom)
    // Removed the delay by using "<" to start immediately with the rotation
    tl.set(wrapper, { alignItems: "flex-start" }) 
      .to(container, {
        rotation: 360,
        duration: 1.2,
        ease: customEase,
      })
      .to(fill, {
        height: "0%",
        duration: 1.2,
        ease: fillEase,
      }, "<"); // "<" means "start at the beginning of the previous animation"

    return () => tl.kill();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        ref={containerRef}
        className="w-10 h-10 border-2 border-white overflow-hidden"
      >
        <div ref={wrapperRef} className="flex flex-col w-full h-full">
          <div ref={fillRef} className="w-full bg-white h-0" />
        </div>
      </div>
    </div>
  );
};

export default Loader;