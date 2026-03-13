import React from 'react';

const Layout = ({ children, className = "" }) => {
  return (
    <section className={`w-full flex justify-center ${className}`}>
      <div className="w-full max-w-[1400px] px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
};

export default Layout;