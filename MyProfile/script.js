document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 100 },
      color: { value: "#fff" },
      shape: { type: "circle" },
      opacity: {
        value: 1,
        random: true
      },
      size: {
        value: 2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.8,
        width: 1
      },
      move: {
        enable: true,
        speed: 7
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

});

/**Hiệu ứng ẩn hiện tech icons**/
function showSection(id) {
  const sections = ['techLang', 'tools'];

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    section.classList.remove('show');
  });

  const active = document.getElementById(id);
  active.classList.add('show');
}
