"use client";

import { ThemeProvider } from "next-themes";

const Theme = ({ children }) => {
  return (
    <div>
      <ThemeProvider enableSystem={false} attribute="class">
        <div>{children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Theme;
