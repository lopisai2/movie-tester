export const routerTransitions = (direction: string) => {
  const animateObject = {
    initial: {
      opacity: 0,
      x: direction ? (direction === "right" ? 100 : -100) : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      x: direction ? (direction === "right" ? -100 : 100) : -100,
      transition: {
        duration: 0.15,
      },
    },
  };
  return animateObject;
};

export const slideTransitions = ({ direction }: { direction: string }) => {
  return {
    initial: {
      opacity: 0,
      x: direction === "right" ? 100 : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -100 : 100,
      transition: {
        duration: 0.15,
      },
    },
  };
};
