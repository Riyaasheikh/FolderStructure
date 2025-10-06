// ProfileCard.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../../assets/asset/p9.avif";
import heroImg3 from "../../assets/asset/p7.avif";
import heroImg2 from "../../assets/asset/p8.avif";
import Buttons from "./Buttons";
import DesignCard from "./DesignCard";

const ProfileCard = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for images to load and calculate proper width
    const images = track.querySelectorAll('img');
    let loadedImages = 0;
    
    const onImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        startAnimation();
      }
    };

    images.forEach(img => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad);
      }
    });

    // Fallback in case images are already loaded
    if (images.length === 0) {
      startAnimation();
    }

    function startAnimation() {
      // Calculate the width of one set of images
      const firstImage = track.children[0];
      if (!firstImage) return;

      const singleSetWidth = firstImage.offsetWidth * 3 + 48; // 3 images + gap

      const ctx = gsap.context(() => {
        // Animation for seamless loop
        gsap.to(track, {
          x: -singleSetWidth,
          duration: 10,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % singleSetWidth)
          }
        });
      }, trackRef);

      return () => ctx.revert();
    }

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', onImageLoad);
      });
    };
  }, []);

  return (
    <div className="bg-[#131313] text-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-sm mx-auto lg:max-w-md">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <DesignCard />
          <Buttons 
            button1={"See Work"} 
            className={"px-3 py-2 bg-transparent text-sm sm:text-base"} 
          />
        </div>

        {/* marquee-style container */}
        <div className="relative bg-[#332c2c] rounded-lg mt-3 min-h-40 sm:min-h-45 lg:min-h-60 flex items-center justify-center overflow-hidden">
          <div ref={trackRef} className="flex gap-4 sm:gap-6 w-max">
            {/* First set */}
            <img 
              className="h-48 w-32 sm:h-56 sm:w-36 lg:h-64 lg:w-44 rounded-lg object-cover" 
              src={heroImg2} 
              alt="Excellence" 
            />
            <img 
              className="h-44 w-28 sm:h-52 sm:w-32 lg:h-60 lg:w-40 rounded-lg object-cover" 
              src={heroImg3} 
              alt="Excellence 2" 
            />
            <img 
              className="h-44 w-28 sm:h-52 sm:w-32 lg:h-60 lg:w-40 rounded-lg object-cover" 
              src={heroImg} 
              alt="Excellence 3" 
            />

            {/* Duplicate set for seamless loop */}
            <img 
              className="h-48 w-32 sm:h-56 sm:w-36 lg:h-64 lg:w-44 rounded-lg object-cover" 
              src={heroImg2} 
              alt="Excellence duplicate" 
            />
            <img 
              className="h-44 w-28 sm:h-52 sm:w-32 lg:h-60 lg:w-40 rounded-lg object-cover" 
              src={heroImg3} 
              alt="Excellence 2 duplicate" 
            />
            <img 
              className="h-44 w-28 sm:h-52 sm:w-32 lg:h-60 lg:w-40 rounded-lg object-cover" 
              src={heroImg} 
              alt="Excellence 3 duplicate" 
            />
          </div>
        </div>
      </div>

      <div className="py-3 px-6 sm:px-9">
        <div className="flex justify-between gap-2">
          <Buttons 
            button1={"Book A Call"} 
            className="text-xs sm:text-sm bg-transparent px-3 py-2" 
          />
          <Buttons 
            button1={"Email Me"} 
            className="text-xs sm:text-sm bg-transparent px-3 py-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;