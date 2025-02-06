import React from "react";

const InlineCssExample = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        Inline CSS Example
      </h1>

      <nav
        style={{
          height: "70px",
          width: "100%",
          backgroundColor: "aqua",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <aside>logo</aside>
        <ul
          style={{
            display: "flex",
            height: "100%",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>home</li>
          <li>about</li>
          <li>contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default InlineCssExample;
