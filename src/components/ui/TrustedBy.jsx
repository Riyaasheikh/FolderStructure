import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import logo1 from "../../assets/icons/profile_icon.png";
import logo2 from "../../assets/icons/quality_icon.png";

const TrustedBy = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const logos = [
    { src: logo1, alt: "logo1", name: "Logoipsum" },
    { src: logo2, alt: "logo2", name: "Logoipsum" },
    { src: logo1, alt: "logo3", name: "Logoipsum" },
    { src: logo2, alt: "logo4", name: "Logoipsum" },
    { src: logo1, alt: "logo5", name: "Logoipsum" },
    { src: logo2, alt: "logo6", name: "Logoipsum" },
    { src: logo1, alt: "logo7", name: "Logoipsum" },
    { src: logo2, alt: "logo8", name: "Logoipsum" },
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    setTimeout(() => {
      const logoItems = track.querySelectorAll(".logo-item");
      if (logoItems.length === 0) return;

      const firstLogo = logoItems[0];
      const logoWidth = firstLogo.offsetWidth;
      const gap = 48;
      const totalWidth = (logoWidth + gap) * logos.length;
      track.style.width = `${totalWidth * 2}px`;

      animationRef.current = gsap.to(track, {
        x: -totalWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(track, { x: 0 });
        },
      });
    }, 100);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [logos.length]);

  return (
    <div className="w-full bg-black py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-normal  text-white mb-3 ">
            Trusted by Over 1,000 Clients
          </h2>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-normal text-white">
            {" "}
            WorldWide
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/80 to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/80 to-transparent z-20" />

          <div
            ref={trackRef}
            className="flex items-center"
            style={{ gap: "48px" }}
          >
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="logo-item flex-shrink-0">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-12 object-contain filter group-hover:brightness-125 transition-all duration-300"
                    src={logo.src}
                    alt={logo.alt}
                  />
                  <p className="text-gray-400 font-normal text-xs sm:text-sm md:text-lg whitespace-nowrap">
                    {logo.name}
                  </p>
                </div>
              </div>
            ))}

            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="logo-item flex-shrink-0">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-4 hover:bg-white/5 rounded-lg transition-all duration-300 group">
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-12 object-contain filter group-hover:brightness-125 transition-all duration-300"
                    src={logo.src}
                    alt={logo.alt}
                  />
                  <p className="text-gray-400 font-normal text-xs sm:text-sm md:text-lg whitespace-nowrap">
                    {logo.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
