// Function to handle the "DOMContentLoaded" event
function onDOMContentLoaded() {
  const initHeaderOnScroll = () => {
    const header = document.querySelector("#main-header");

    // Declare variables outside the scroll event listener
    let beforeHeader, afterHeader;

    // Function to create and add the beforeHeader and afterHeader elements
    const createHeaderDivs = () => {
      beforeHeader = document.createElement("div");
      beforeHeader.classList.add("beforeHeader");
      document.body.insertBefore(beforeHeader, header);
      beforeHeader.animate(
        [
          {
            opacity: [0, 1],
            transform: "scaleX(0)",
          },
          { transform: "scaleX(1)" },
        ],
        {
          duration: 1000,
          iterations: 1,
          delay: 2,
        }
      );
    };

    // Function to remove the beforeHeader and afterHeader elements
    const removeHeaderDivs = () => {
      if (beforeHeader) {
        beforeHeader.remove();
        beforeHeader = null; // Reset beforeHeader variable
      }

      if (afterHeader) {
        afterHeader.remove();
        afterHeader = null; // Reset afterHeader variable
      }
    };

    // Toggle the class to trigger the width animation
    function toggleWidthAnimation() {
      const getBeforeHeader = document.querySelector(".beforeHeader");

      if (getBeforeHeader) {
        getBeforeHeader.classList.toggle("expand-width");
      }
    }

    // Event listener for scroll events
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        if (!beforeHeader && !afterHeader) {
          createHeaderDivs(); // Invoke the function to create elements only if not created yet
          toggleWidthAnimation();
        }
      } else if (window.scrollY < 100) {
        header.classList.remove("scrolled");
        removeHeaderDivs(); // Invoke the function to remove elements
        toggleWidthAnimation();
      }
    });
  };

  const initHeaderLinks = () => {
    const headerLinks = document.querySelectorAll(".header-link");

    headerLinks.forEach((item) => {
      item.addEventListener("click", (event) => {
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
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#17edc5",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#333258",
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
            color: "#333258",
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
          background_color: "#333258",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      }
    );
  };

  const initIntersectionObserverAnimate = () => {
    const elementsToAnimate = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        document.documentElement.style.setProperty(
          "--animate-duration",
          "2.5s"
        );
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.target.classList.contains("animate")
          ) {
            // console.log(entry.target);
            const dataAnimation = entry.target.getAttribute("data-animation");
            entry.target.classList.add("animate__animated", dataAnimation);
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1, // Trigger the callback as soon as any part of the element is visible
      }
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  };

  const initHeaderProgressBar = () => {
    const progressBarBefore = document.querySelector(".progress-bar-before");
    const progressBarAfter = document.querySelector(".progress-bar-after");

    window.addEventListener("scroll", () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      progressBarBefore.style.width = progress + "%";
      progressBarAfter.style.width = progress + "%";
    });
  };

  const initRotateStar = () => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth > 991) {
        const start = document.querySelector("#rotate-star");

        const scrollValue = window.scrollY;
        const rotationValue = scrollValue / 5;

        start.style.transform = `rotate(${rotationValue}deg)`;
      }
    });
  };

  const initGalleryProject = () => {
    let galleryIndex1 = 0;
    let galleryIndex4 = 1;
    let galleryIndex3 = 2;
    let galleryIndex2 = 3;

    let currentProject = 0;

    const projectArray = () => {
      document.querySelector(
        ".current-selected-project__title"
      ).textContent = `${projects[currentProject].title}`;
      document.querySelector(
        ".current-selected-project__date"
      ).innerHTML = `${projects[currentProject].date} | <a href="${projects[currentProject].link}" target="_blank" title="opens in a new tab">Website</a> | <a href="${projects[currentProject].sourceCode}" target="_blank" title="opens in a new tab">Source Code</a>`;

      document.querySelector(".current-selected-project__content").textContent =
        projects[currentProject].content;
    };

    const projects = [
      {
        title: "Cafe Milan",
        date: "May 2022",
        content:
          "A dynamic web experience for a coffee haven crafted with HTML5, CSS3, JavaScript, Bootstrap, and JQuery. Integrated Google Reviews API and incorporated the Elfsight App for a seamless messaging feature.",
        link: "https://cafemilan.vercel.app/index.html",
        sourceCode: "https://github.com/cirejm07/cafemilan",
      },
      {
        title: "Project 2",
        date: "January 2022",
        content: "Project 2 Content",
        link: "#",
      },
      {
        title: "Project 3",
        date: "April 2022",
        content: "Project 3 Content",
        link: "#",
      },
      {
        title: "Project 4",
        date: "February 2023",
        content: "Project 4 Content",
        link: "#",
      },
    ];

    projectArray();

    const prevArrow = document.querySelector("#arrow-prev");
    const nextArrow = document.querySelector("#arrow-next");

    const galleryItems = document.querySelectorAll(
      "#gallery-project .gallery-item"
    );

    prevArrow.addEventListener("click", () => {
      // console.log("left arrow clicked");
      nextArrow.classList.remove("cta", "active");
      prevArrow.classList.add("cta", "active");

      // Gallery 1
      if (galleryIndex1 > 0) {
        galleryIndex1--;
      } else {
        galleryIndex1 = 3;
      }
      galleryItems[0].style.gridArea = `area${galleryIndex1 + 1}`;

      // Gallery 2
      if (galleryIndex2 > 0) {
        galleryIndex2--;
      } else {
        galleryIndex2 = 3;
      }
      galleryItems[1].style.gridArea = `area${galleryIndex2 + 1}`;

      // Gallery 3
      if (galleryIndex3 > 0) {
        galleryIndex3--;
      } else {
        galleryIndex3 = 3;
      }
      galleryItems[2].style.gridArea = `area${galleryIndex3 + 1}`;

      // Gallery 4
      if (galleryIndex4 > 0) {
        galleryIndex4--;
      } else {
        galleryIndex4 = 3;
      }
      galleryItems[3].style.gridArea = `area${galleryIndex4 + 1}`;

      if (currentProject > 0) {
        currentProject--;
      } else {
        currentProject = projects.length - 1;
      }
      projectArray();
    });

    nextArrow.addEventListener("click", () => {
      // console.log("right arrow clicked");
      prevArrow.classList.remove("cta", "active");
      nextArrow.classList.add("cta", "active");

      // Gallery 1
      if (galleryIndex1 < 3) {
        galleryIndex1++;
      } else {
        galleryIndex1 = 0;
      }
      galleryItems[0].style.gridArea = `area${galleryIndex1 + 1}`;

      // Gallery 2
      if (galleryIndex2 < 3) {
        galleryIndex2++;
      } else {
        galleryIndex2 = 0;
      }
      galleryItems[1].style.gridArea = `area${galleryIndex2 + 1}`;

      // Gallery 3
      if (galleryIndex3 < 3) {
        galleryIndex3++;
      } else {
        galleryIndex3 = 0;
      }
      galleryItems[2].style.gridArea = `area${galleryIndex3 + 1}`;

      // Gallery 4
      if (galleryIndex4 < 3) {
        galleryIndex4++;
      } else {
        galleryIndex4 = 0;
      }
      galleryItems[3].style.gridArea = `area${galleryIndex4 + 1}`;

      currentProject++;

      if (currentProject === 4) {
        currentProject = 0;
      }
      projectArray();

      const galleryImg = document.querySelectorAll(".gallery-item");

      galleryImg.forEach((item, idx) => {
        // const firstChild = item.firstElementChild;

        if (item) {
          item.classList.remove("animatedScale");

          // Triggering a reflow to restart the animation
          void item.offsetWidth;

          item.classList.add("animatedScale");

          item.addEventListener("animationiteration", () => {
            item.classList.remove("animatedScale");
          });
        }
      });
    });

    const initClickedProject = () => {
      galleryItems.forEach((item, idx) => {
        item.addEventListener("click", () => {
          document.querySelector(
            ".current-selected-project__date"
          ).innerHTML = `${projects[idx].date} | <a href="${projects[idx].link}" target="_blank" title="opens in a new tab">Website</a> | <a href="${projects[idx].sourceCode}" target="_blank" title="opens in a new tab">Source Code</a>`;

          document.querySelector(
            ".current-selected-project__content"
          ).innerHTML = projects[idx].content;
        });
      });
    };

    initClickedProject();
  };

  const initFollowCursorOnBanner = () => {
    const cursor = document.querySelector(".cursor");

    const updateCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", updateCursor);

    const links = document.querySelectorAll("a");

    if (links) {
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          // console.log(`Cursor is hovering over ${link.textContent}`);
          cursor.classList.add("hover-link");
        });

        link.addEventListener("mouseleave", () => {
          // console.log(`Cursor is not hovering over ${link.textContent}`);
          cursor.classList.remove("hover-link");
        });
      });
    }
  };

  const initTypewriterEffect = () => {
    const app = document.querySelector(".hero-title");

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString("Front-End Web Developer")
      .pauseFor(300)
      .deleteChars(23)
      .typeString("Jeric Moreno")
      // .typeString(
      //   '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
      // )
      .pauseFor(1000)
      .start();
  };

  const loadScripts = () => {
    initTypewriterEffect();
    initHeaderLinks();
    initHeaderOnScroll();
    initToggleHamburgerMenu();
    initParticleJS();
    initFollowCursorOnBanner();
    initIntersectionObserverAnimate();
    initHeaderProgressBar();
    initRotateStar();
    initGalleryProject();
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
