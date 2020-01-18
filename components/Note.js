import React from "react";

const Note = ({ children }) => {
  return (
    <div className="note">
      {children}
      <style jsx>
        {`
          .note {
            padding: 1.142857142857143rem 1.714285714285714rem;
            font-size: 1rem;
            line-height: 1.8;
            border: 1px solid #007aff;
            background-color: #fff;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default Note;
