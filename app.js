particlesJS("particles-js", {
  particles: {
    number: {
      value: 60  ,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#a6ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a6ff00",
      opacity: 0.2,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
});