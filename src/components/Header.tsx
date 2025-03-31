import React from "react";
import { ModeToggle } from "./ToggleTheme";

const Header = () => {
  return (
    <main className="flex items-center justify-between p-4">
      <ModeToggle />
    </main>
  );
};

export default Header;
