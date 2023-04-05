import { useState } from "react";

const Navbar = () => {
  return (
    <div className="links">
      <a href="/togglebutton">Toggle Button</a>
      <a href="/pricecalculator">Price Calculator</a>
      <a href="/temperetureconverter">Temperature Converter</a>
      <a href="/counterclone">Counter Clone</a>
    </div>
  );
};

export default Navbar;
