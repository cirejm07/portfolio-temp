// Function to handle the "DOMContentLoaded" event
function onDOMContentLoaded() {
  const initHeaderOnScroll = () => {
    const DesktopHeader = document.querySelector("#scrolling-header");
    const mobileHeader = document.querySelector("#main-header");
    const cursor = document.querySelector(".cursor");

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 991) {
        if (window.scrollY > 50) {
          DesktopHeader.classList.add("scrolled");
        } else {
          DesktopHeader.classList.remove("scrolled");
        }
      } else {
        if (window.scrollY > 50) {
          mobileHeader.classList.add("scrolled");
        } else {
          mobileHeader.classList.remove("scrolled");
        }
      }
    });

    DesktopHeader.addEventListener("mouseenter", () => {
      cursor.style.mixBlendMode = "difference";
    });

    DesktopHeader.addEventListener("mouseleave", () => {
      cursor.style.mixBlendMode = "unset";
    });
  };

  const initHeaderLinks = () => {
    const headerLinks = document.querySelectorAll(".header-link");

    headerLinks.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const clickedHref = event.target.getAttribute("href");
        const matchingLinks = document.querySelectorAll(
          `.header-link[href="${clickedHref}"]`
        );

        headerLinks.forEach((link) => {
          link.classList.remove("active");
        });

        matchingLinks.forEach((matchingLink) => {
          matchingLink.classList.add("active");
        });
      });
    });
  };

  const initToggleHamburgerMenu = () => {
    const hamburgerToggle = document.querySelector(".hamburger-menu");
    hamburgerToggle.addEventListener("click", () => {
      hamburgerToggle.classList.toggle("toggled");
    });
  };

  const initParticleJS = () => {
    // Particle JS
    particlesJS(
      "particles-js",

      {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#36454f",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#36454f",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#36454f",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#36454f",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      }
    );
  };

  const initFollowCursorOnBanner = () => {
    const cursor = document.querySelector(".cursor");

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", updateCursor);

    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        console.log(`Cursor is hovering over ${link.textContent}`);
        cursor.classList.add("hover-link");
      });

      link.addEventListener("mouseleave", () => {
        console.log(`Cursor is not hovering over ${link.textContent}`);
        cursor.classList.remove("hover-link");
      });
    });
  };

  const initLottieFlies = () => {
    const animationPath = "assets/arrow-down.json";
    const container = document.querySelector(".lottieflies");

    const animation = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath,
    });
  };

  const initIntersectionObserverAnimate = () => {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const nodeName = entry.target.nodeName.toLowerCase();

          switch (nodeName) {
            case "h2":
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInLeft"
              );
              break;
            case "p":
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInUp"
              );
              break;
            default:
              break;
          }

          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }
      });
    });

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  };

  const initHeaderProgressBar = () => {
    const headers = document.querySelectorAll("header");

    headers.forEach((header) => {
      const progressBarBefore = document.createElement("div");
      progressBarBefore.className = "progress-bar-before hide-mobile";

      const progressBarAfter = document.createElement("div");
      progressBarAfter.className = "progress-bar-after hide-mobile";

      header.appendChild(progressBarBefore);
      header.appendChild(progressBarAfter);
    });

    window.addEventListener("scroll", () => {
      headers.forEach((header) => {
        const progressBarBefore = header.querySelector(".progress-bar-before");
        const progressBarAfter = header.querySelector(".progress-bar-after");
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBarBefore.style.width = progress + "%";
        progressBarAfter.style.width = progress + "%";
      });
    });
  };

  const loadScripts = () => {
    initHeaderLinks();
    initHeaderOnScroll();
    initToggleHamburgerMenu();
    initParticleJS();
    initFollowCursorOnBanner();
    initLottieFlies();
    initIntersectionObserverAnimate();
    initHeaderProgressBar();
  };

  loadScripts();

  const currentDateElement = document.getElementById("currentDate");
  const currentDate = new Date();
  currentDateElement.textContent = currentDate.getFullYear();
}

// Function to handle the "load" event
function onPageLoad() {
  // Add your code that should run when the page is fully loaded here
}

// Add event listeners
document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
window.addEventListener("load", onPageLoad);
