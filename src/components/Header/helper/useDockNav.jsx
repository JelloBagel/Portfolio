import { useState, useEffect } from "react";

export function useDockNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const newVisible = currentScrollPos > 100; // navHeight + 30

      setVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return visible;
}
