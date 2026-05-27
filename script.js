var img = document.querySelector("#loader img");
var arr = ["./res/one.svg", "./res/two.svg", "./res/three.svg", "./res/four.svg", "./res/five.svg", "./res/six.svg", "./res/seven.svg", "./res/eight.svg", "./res/nine.svg", "./res/ten.svg"];
var index = 0;

// Dynamic scroller — use Locomotive Scroll container on desktop, native window on mobile
var scrollerVal = window.innerWidth > 768 ? "#main" : undefined;

function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Only initialize Locomotive Scroll on desktop (>768px)
    if (window.innerWidth > 768) {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }
};

locoScroll();

function loaderAnime() {
    setInterval(function() {
        img.setAttribute("src", arr[index]);
        index++;
    }, 220);

    var tl = gsap.timeline();

    tl.to("#loader", {
        top: "-200%",
        duration: 2,
        delay: 2,
        ease: Expo.easeInOut
    });

    tl.to("#loader",{
        delay: 2.2,
        display: "none"
    });
};

loaderAnime();

function page1Anime() {
    var clutter = "";

    document.querySelector("#page-1 h1").textContent.split("").forEach(function(dets) {
        clutter += `<h1 class="pg1h1">${dets}</h1>`
        document.querySelector("#page-1 h1").innerHTML = clutter;
    });

    var tl1 = gsap.timeline();

    tl1.from("#page-1 h1 h1", {
        y:900,
        stagger: 0.2,
        duration: 0.8,
        delay: 2.38,
    }, "heading");

    tl1.from(".page-1-h2-text h2", {
        y:900,
        stagger: 0.2,
        duration: 0.8,
        delay: 2.49,
    }, "heading");

    tl1.to("#page2 video",{
        width: "100%",
        scrollTrigger: {
            trigger: "#page2",
            scroller: scrollerVal,
            start: "top 75%",
            end: "top 0",
            scrub: true 
        }
    })
}

page1Anime();

function page3Anime() {
    var tl2 = gsap.timeline();

    tl2.from("#page3-content h1, #page3-bottom-text h1", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 1.3,
        scrollTrigger: {
            trigger: "#page3-content",
            scroller: scrollerVal,
            start: "top 50%",
            end: "top 0%",
            markers: false,
            scrub: 4
        }
    });

    tl2.from("#page3-bottom-text h3", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrub: 4,
        scrollTrigger: {
            trigger: "#page3-bottom-text",
            scroller: scrollerVal,
            start: "top 82%",
            end: "top 72%",
            markers: false,
            scrub: 4
        }
    });
};

page3Anime();


// function page3Anime() {

//     var tl2 = gsap.timeline();

//     // Original/tutor values (kept as you requested):
//     tl2.from("#page3-content h1", {
//         y: 100,
//         opacity: 0,
//         stagger: 1.3,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page3-content",
//             scroller: "#main",
//             start: "top 50%",
//             end: "top 0%",
//             scrub: 4,
//             markers: false
//         }
//     });

//     tl2.from("#page3-bottom-text h3", {
//         y: 100,
//         opacity: 0,
//         scrub: 4,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page3-bottom-text",
//             scroller: "#main",
//             start: "top 82%",
//             end: "top 72%",
//             scrub: 4,
//             markers: false
//         }
//     });

//     // Suggested alternative (uncomment to try):
//     // tl2.from("#page3-content h1", { y:100, autoAlpha:0, stagger:0.25, duration:1.2, scrollTrigger:{ trigger: "#page3-content", scroller: "#main", start: "top 60%", end: "top 10%", scrub:2 }});
//     // tl2.from("#page3-bottom-text h3", { y:60, autoAlpha:0, duration:1, delay:0.15, scrollTrigger:{ trigger: "#page3-bottom-text", scroller: "#main", start: "top 82%", end: "top 72%", scrub:2 }});
// };

// page3Anime();

// function page4Anime() {

//     var tl3 = gsap.timeline();

//     tl3.from("#page4-top-media-container #vid-container1",{
//         y:100,
//         opacity: 0,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container",
//             scroller: "#main",
//             start: "top 65%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-vid");

//     tl3.from("#page4-top-media-container #vid-container1-text",{
//         y:100,
//         opacity: 0,
//         delay: 0.3,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container",
//             scroller: "#main",
//             start: "top 70%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-vid");

//     tl3.from("#page4-top-media-container #img-container1",{
//         y:100,
//         opacity: 0,
//         stagger: 2,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container #img-container1",
//             scroller: "#main",
//             start: "top 70%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-img1");

//     tl3.from("#page4-top-media-container #img-container1-text",{
//         y:100,
//         opacity: 0,
//         delay: 0.3,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container #img-container1",
//             scroller: "#main",
//             start: "top 80%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-img1");

//     tl3.from("#page4-top-media-container #img-container2",{
//         y:100,
//         opacity: 0,
//         stagger: 2,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container #img-container2",
//             scroller: "#main",
//             start: "top 69%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-img2");

//     tl3.from("#page4-top-media-container #img-container2-text",{
//         y:100,
//         opacity: 0,
//         stagger: 2,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page4-top-media-container #img-container2",
//             scroller: "#main",
//             start: "top 69%",
//             end: "top 0%",
//             scrub: 2,
//             markers: false
//         }
//     }, "page4-img2");
// };

// page4Anime();

function page4Anime() {
    var tl3 = gsap.timeline()

    tl3.from("#page4-top-media-container #vid-container1", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container",
            scroller: scrollerVal,
            start: "top 65%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-vid");

    tl3.from("#page4-top-media-container #vid-container1-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container",
            scroller: scrollerVal,
            start: "top 70%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-vid");

    tl3.from("#page4-top-media-container #img-container1", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container1",
            scroller: scrollerVal,
            start: "top 75%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img1");

    tl3.from("#page4-top-media-container #img-container1-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container1",
            scroller: scrollerVal,
            start: "top 80%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img1");

    tl3.from("#page4-top-media-container #img-container2", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container2",
            scroller: scrollerVal,
            start: "top 69%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img2");

    tl3.from("#page4-top-media-container #img-container2-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container2",
            scroller: scrollerVal,
            start: "top 74%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img2");

    tl3.from("#page4-top-media-container #img-container3", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container3",
            scroller: scrollerVal,
            start: "top 75%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img3");

    tl3.from("#page4-top-media-container #img-container3-text", {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page4-top-media-container #img-container3",
            scroller: scrollerVal,
            start: "top 80%",
            end: "top 0%",
            markers: false,
            scrub: 2
        }
    }, "page4-img3");

    tl3.to("#page4-bottom-video-container", {
        width: "91.29%",
        delay: 0.4,
        duration: 1.6,
        scrollTrigger: {
            trigger: "#page4-bottom-media-container #page4-bottom-video-container",
            scroller: scrollerVal,
            start: "top 80%",
            end: "top 2%",
            markers: false,
            scrub: 3
        }
    });
};

page4Anime();

function page5Anime() {
    gsap.to("#page5 #page5-text-scroll", {
        transform: "translateX(-62%)",
        duration: 3,
        scrollTrigger: {
            trigger: "#page5",
            scroller: scrollerVal,
            start: "top 0%",
            end: "top -100%",
            markers: false,
            pin: true,
            scrub: 2
        }
    });
};

page5Anime();

function page8Anime() {
    gsap.from(".page8-text-box h1", {
        y: 100,
        scrollTrigger: {
            trigger: "#page8",
            scroller: scrollerVal,
            start: "top 60%",
            end: "top -0%",
            markers: false,
            scrub: 2
        }
    });
}

page8Anime();

function mobileMenuToggle() {
    var hamburgerBtn = document.getElementById("hamburger-btn");
    var mobileMenu = document.getElementById("mobile-menu");

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", function() {
            var isOpen = hamburgerBtn.classList.toggle("is-open");
            mobileMenu.classList.toggle("is-open", isOpen);
            
            // Accessibility attributes
            hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
            mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
            
            // Toggle body scrolling
            if (isOpen) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        });

        // Close menu if a link is clicked
        var links = mobileMenu.querySelectorAll("#mobile-nav-links li span");
        links.forEach(function(link) {
            link.addEventListener("click", function() {
                hamburgerBtn.classList.remove("is-open");
                mobileMenu.classList.remove("is-open");
                hamburgerBtn.setAttribute("aria-expanded", "false");
                mobileMenu.setAttribute("aria-hidden", "true");
                document.body.classList.remove("no-scroll");
            });
        });
    }
}

mobileMenuToggle();

// Refresh ScrollTrigger to ensure correct measurements on both mobile and desktop
ScrollTrigger.refresh();