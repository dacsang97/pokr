import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title">Personal OKRs</h1>
      </div>
      <style jsx>{`
        .header {
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .header > .title {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Header;
