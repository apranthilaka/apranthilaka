import { animate } from "motion";

// Animate the #myDiv element
animate(
  "#myDiv",
  {
    y: [-50, 0],
    opacity: [0, 1],
  },
  {
    duration: 1,
    type: "spring",
    damping: 8,
  },
);
