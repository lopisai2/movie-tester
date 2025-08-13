"use client";
import styles from "./styles.module.css";
import ArrowUpIcon from "@/_assets/common/arrows/ArrowUpIcon";
import { useState, useEffect, FC } from "react";

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.publicScrollButton}
        >
          <ArrowUpIcon width='24px' height='24px' />
        </button>
      )}
    </div>
  );
};

ScrollToTopButton.displayName = "ScrollToTopButton";

export default ScrollToTopButton;
