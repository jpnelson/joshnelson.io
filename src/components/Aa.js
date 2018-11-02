import React from "react";

export function Aa({ children }) {
  return (
    <a style={{ wordBreak: "break-all" }} href={children}>
      {children}
    </a>
  );
}
