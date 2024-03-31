import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    bgchange(selector, trigger, markers, start, end) {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: `${start} center`,
          end: `${end} center`,
          scrub: false,
          toggleActions: "play reverse play reverse",
          markers: markers,
        },
        backgroundColor: "#0E0E0C",
        color: "#f8f4ec",
        duration: 0.5,
      });
    },
    texttowhite(selector, trigger, markers, start, end) {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: `${start} center`,
          end: `${end} center`,
          scrub: false,
          toggleActions: "play reverse play reverse",
          markers: markers,
        },
        color: "#f8f4ec",
        duration: 0.5,
        ease: "power3.inOut",
      });
    },
    nav(selector, trigger, markers, start, end) {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: `${start} center`,
          end: `${end} center`,
          scrub: false,
          markers: markers,
          toggleActions: "play reverse play reverse",
        },
        backgroundColor: "#f8f4ec",
        color: "#262626",
        stroke: "#f8f4ec",
        duration: 0.5,
        ease: "power3.inOut",
      });
    },
    animateupSTAGGER(selector, trigger) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: "top center",
          end: "bottom center",
          scrub: false,
          toggleActions: "play none none none",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
      });
    },
    animateup(selector, trigger) {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: trigger,
          start: "top center",
          end: "bottom center",
          scrub: false,
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      });
    },
  },
};
