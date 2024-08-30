// const ParticlesConfig = {
//   autoPlay: true,
//   background: {
//     color: {
//       value: "#ab9696",
//     },
//     image: "",
//     position: "",
//     repeat: "",
//     size: "",
//     opacity: 1,
//   },
//   backgroundMask: {
//     composite: "destination-out",
//     cover: {
//       color: {
//         value: "#fff",
//       },
//       opacity: 1,
//     },
//     enable: false,
//   },
//   clear: true,
//   defaultThemes: {},
//   delay: 0,
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   detectRetina: true,
//   duration: 0,
//   fpsLimit: 120,
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       onClick: {
//         enable: false,
//         mode: [],
//       },
//       onDiv: {
//         selectors: [],
//         enable: false,
//         mode: [],
//         type: "circle",
//       },
//       onHover: {
//         enable: false,
//         mode: [],
//         parallax: {
//           enable: false,
//           force: 2,
//           smooth: 10,
//         },
//       },
//       resize: {
//         delay: 0.5,
//         enable: true,
//       },
//     },
//     modes: {
//       trail: {
//         delay: 1,
//         pauseOnStop: false,
//         quantity: 1,
//       },
//       attract: {
//         distance: 200,
//         duration: 0.4,
//         easing: "ease-out-quad",
//         factor: 1,
//         maxSpeed: 50,
//         speed: 1,
//       },
//       bounce: {
//         distance: 200,
//       },
//       bubble: {
//         distance: 200,
//         duration: 0.4,
//         mix: false,
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           mix: false,
//           selectors: [],
//         },
//       },
//       connect: {
//         distance: 80,
//         links: {
//           opacity: 0.5,
//         },
//         radius: 60,
//       },
//       grab: {
//         distance: 100,
//         links: {
//           blink: false,
//           consent: false,
//           opacity: 1,
//         },
//       },
//       push: {
//         default: true,
//         groups: [],
//         quantity: 4,
//       },
//       remove: {
//         quantity: 2,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//         factor: 100,
//         speed: 1,
//         maxSpeed: 50,
//         easing: "ease-out-quad",
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           factor: 100,
//           speed: 1,
//           maxSpeed: 50,
//           easing: "ease-out-quad",
//           selectors: [],
//         },
//       },
//       slow: {
//         factor: 3,
//         radius: 200,
//       },
//       light: {
//         area: {
//           gradient: {
//             start: {
//               value: "#ffffff",
//             },
//             stop: {
//               value: "#000000",
//             },
//           },
//           radius: 1000,
//         },
//         shadow: {
//           color: {
//             value: "#000000",
//           },
//           length: 2000,
//         },
//       },
//     },
//   },
//   manualParticles: [],
//   particles: {
//     bounce: {
//       horizontal: {
//         value: 1,
//       },
//       vertical: {
//         value: 1,
//       },
//     },
//     collisions: {
//       absorb: {
//         speed: 2,
//       },
//       bounce: {
//         horizontal: {
//           value: 1,
//         },
//         vertical: {
//           value: 1,
//         },
//       },
//       enable: false,
//       maxSpeed: 50,
//       mode: "bounce",
//       overlap: {
//         enable: true,
//         retries: 0,
//       },
//     },
//     color: {
//       value: "#fff",
//       animation: {
//         h: {
//           count: 0,
//           enable: false,
//           speed: 1,
//           decay: 0,
//           delay: 0,
//           sync: true,
//           offset: 0,
//         },
//         s: {
//           count: 0,
//           enable: false,
//           speed: 1,
//           decay: 0,
//           delay: 0,
//           sync: true,
//           offset: 0,
//         },
//         l: {
//           count: 0,
//           enable: false,
//           speed: 1,
//           decay: 0,
//           delay: 0,
//           sync: true,
//           offset: 0,
//         },
//       },
//     },
//     effect: {
//       close: true,
//       fill: true,
//       options: {},
//       type: [],
//     },
//     groups: {
//       z5000: {
//         number: {
//           value: 70,
//         },
//         zIndex: {
//           value: 50,
//         },
//       },
//       z7500: {
//         number: {
//           value: 30,
//         },
//         zIndex: {
//           value: 75,
//         },
//       },
//       z2500: {
//         number: {
//           value: 50,
//         },
//         zIndex: {
//           value: 25,
//         },
//       },
//       z1000: {
//         number: {
//           value: 40,
//         },
//         zIndex: {
//           value: 10,
//         },
//       },
//     },
//     move: {
//       angle: {
//         offset: 0,
//         value: 10,
//       },
//       attract: {
//         distance: 200,
//         enable: false,
//         rotate: {
//           x: 3000,
//           y: 3000,
//         },
//       },
//       center: {
//         x: 50,
//         y: 50,
//         mode: "percent",
//         radius: 0,
//       },
//       decay: 0,
//       distance: {},
//       direction: "right",
//       drift: 0,
//       enable: true,
//       gravity: {
//         acceleration: 9.81,
//         enable: false,
//         inverse: false,
//         maxSpeed: 50,
//       },
//       path: {
//         clamp: true,
//         delay: {
//           value: 0,
//         },
//         enable: false,
//         options: {},
//       },
//       outModes: {
//         default: "out",
//         bottom: "out",
//         left: "out",
//         right: "out",
//         top: "out",
//       },
//       random: false,
//       size: false,
//       speed: 5,
//       spin: {
//         acceleration: 0,
//         enable: false,
//       },
//       straight: false,
//       trail: {
//         enable: false,
//         length: 10,
//         fill: {},
//       },
//       vibrate: false,
//       warp: false,
//     },
//     number: {
//       density: {
//         enable: false,
//         width: 1920,
//         height: 1080,
//       },
//       limit: {
//         mode: "delete",
//         value: 0,
//       },
//       value: 200,
//     },
//     opacity: {
//       value: 1,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 2,
//         decay: 0,
//         delay: 0,
//         sync: false,
//         mode: "auto",
//         startValue: "random",
//         destroy: "none",
//       },
//     },
//     reduceDuplicates: false,
//     shadow: {
//       blur: 0,
//       color: {
//         value: "#000",
//       },
//       enable: false,
//       offset: {
//         x: 0,
//         y: 0,
//       },
//     },
//     shape: {
//       close: true,
//       fill: true,
//       options: {},
//       type: "circle",
//     },
//     size: {
//       value: 3,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 5,
//         decay: 0,
//         delay: 0,
//         sync: false,
//         mode: "auto",
//         startValue: "random",
//         destroy: "none",
//       },
//     },
//     stroke: {
//       width: 0,
//       color: {
//         value: "",
//         animation: {
//           h: {
//             count: 0,
//             enable: false,
//             speed: 0,
//             decay: 0,
//             delay: 0,
//             sync: false,
//             offset: 0,
//           },
//           s: {
//             count: 0,
//             enable: false,
//             speed: 1,
//             decay: 0,
//             delay: 0,
//             sync: true,
//             offset: 0,
//           },
//           l: {
//             count: 0,
//             enable: false,
//             speed: 1,
//             decay: 0,
//             delay: 0,
//             sync: true,
//             offset: 0,
//           },
//         },
//       },
//     },
//     zIndex: {
//       value: 5,
//       opacityRate: 0.5,
//       sizeRate: 1,
//       velocityRate: 1,
//     },
//     destroy: {
//       bounds: {},
//       mode: "none",
//       split: {
//         count: 1,
//         factor: {
//           value: 3,
//         },
//         rate: {
//           value: {
//             min: 4,
//             max: 9,
//           },
//         },
//         sizeOffset: true,
//         particles: {},
//       },
//     },
//     roll: {
//       darken: {
//         enable: false,
//         value: 0,
//       },
//       enable: false,
//       enlighten: {
//         enable: false,
//         value: 0,
//       },
//       mode: "vertical",
//       speed: 25,
//     },
//     tilt: {
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         decay: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       enable: false,
//     },
//     twinkle: {
//       lines: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//       particles: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//     },
//     wobble: {
//       distance: 5,
//       enable: false,
//       speed: {
//         angle: 50,
//         move: 10,
//       },
//     },
//     life: {
//       count: 0,
//       delay: {
//         value: 0,
//         sync: false,
//       },
//       duration: {
//         value: 0,
//         sync: false,
//       },
//     },
//     rotate: {
//       value: 0,
//       animation: {
//         enable: false,
//         speed: 0,
//         decay: 0,
//         sync: false,
//       },
//       direction: "clockwise",
//       path: false,
//     },
//     orbit: {
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         decay: 0,
//         delay: 0,
//         sync: false,
//       },
//       enable: false,
//       opacity: 1,
//       rotation: {
//         value: 45,
//       },
//       width: 1,
//     },
//     links: {
//       blink: false,
//       color: {
//         value: "#fff",
//       },
//       consent: false,
//       distance: 100,
//       enable: false,
//       frequency: 1,
//       opacity: 1,
//       shadow: {
//         blur: 5,
//         color: {
//           value: "#000",
//         },
//         enable: false,
//       },
//       triangles: {
//         enable: false,
//         frequency: 1,
//       },
//       width: 1,
//       warp: false,
//     },
//     repulse: {
//       value: 0,
//       enabled: false,
//       distance: 1,
//       duration: 1,
//       factor: 1,
//       speed: 1,
//     },
//   },
//   pauseOnBlur: true,
//   pauseOnOutsideViewport: true,
//   responsive: [],
//   smooth: false,
//   style: {},
//   themes: [],
//   zLayers: 100,
//   emitters: {
//     autoPlay: true,
//     fill: true,
//     life: {
//       wait: false,
//     },
//     rate: {
//       quantity: 1,
//       delay: 7,
//     },
//     shape: {
//       options: {},
//       replace: {
//         color: false,
//         opacity: false,
//       },
//       type: "square",
//     },
//     startCount: 0,
//     size: {
//       mode: "percent",
//       height: 0,
//       width: 0,
//     },
//     particles: {
//       shape: {
//         type: "images",
//         options: {
//           images: {
//             src: "https://particles.js.org/images/cyan_amongus.png",
//             width: 500,
//             height: 634,
//           },
//         },
//       },
//       size: {
//         value: 40,
//       },
//       move: {
//         speed: 10,
//         outModes: {
//           default: "none",
//           right: "destroy",
//         },
//         straight: true,
//       },
//       zIndex: {
//         value: 0,
//       },
//       rotate: {
//         value: {
//           min: 0,
//           max: 360,
//         },
//         animation: {
//           enable: true,
//           speed: 10,
//           sync: true,
//         },
//       },
//     },
//     position: {
//       x: -5,
//       y: 55,
//     },
//   },
//   motion: {
//     disable: false,
//     reduce: {
//       factor: 4,
//       value: true,
//     },
//   },
// };
// export default ParticlesConfig;


@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
  box- sizing: border - box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify - content: center;
  align - items: center;
  flex - direction: column;
  font - family: 'Montserrat', sans - serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h6 {
  font - weight: bold;
  margin: 0;
}

h2 {
  text - align: center;
}

p {
  font - size: 14px;
  font - weight: 100;
  line - height: 20px;
  letter - spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font - size: 12px;
}

a {
  color: #333;
  font - size: 14px;
  text - decoration: none;
  margin: 15px 0;
}

button {
  border - radius: 20px;
  border: 1px solid #FF4B2B;
  background - color: #FF4B2B;
  color: #FFFFFF;
  font - size: 12px;
  font - weight: bold;
  padding: 12px 45px;
  letter - spacing: 1px;
  text - transform: uppercase;
  transition: transform 80ms ease -in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background - color: transparent;
  border - color: #FFFFFF;
}

form {
  background - color: #FFFFFF;
  display: flex;
  align - items: center;
  justify - content: center;
  flex - direction: column;
  padding: 0 50px;
  height: 100 %;
  text - align: center;
}

input {
  background - color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100 %;
}

.container {
  background - color: #fff;
  border - radius: 10px;
  box - shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max - width: 100 %;
  min - height: 480px;
}

.form - container {
  position: absolute;
  top: 0;
  height: 100 %;
  transition: all 0.6s ease -in -out;
}

.sign -in -container {
  left: 0;
  width: 50 %;
  z - index: 2;
}

.container.right - panel - active.sign -in -container {
  transform: translateX(100 %);
}

.sign - up - container {
  left: 0;
  width: 50 %;
  opacity: 0;
  z - index: 1;
}

.container.right - panel - active.sign - up - container {
  transform: translateX(100 %);
  opacity: 1;
  z - index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0 %, 49.99 % {
    opacity: 0;
    z- index: 1;
}

50 %, 100 % {
  opacity: 1;
  z- index: 5;
	}
}

.overlay - container {
  position: absolute;
  top: 0;
  left: 50 %;
  width: 50 %;
  height: 100 %;
  overflow: hidden;
  transition: transform 0.6s ease -in -out;
  z - index: 100;
}

.container.right - panel - active.overlay - container{
  transform: translateX(-100 %);
}

.overlay {
  background: #FF416C;
  background: -webkit - linear - gradient(to right, #FF4B2B, #FF416C);
  background: linear - gradient(to right, #FF4B2B, #FF416C);
  background - repeat: no - repeat;
  background - size: cover;
  background - position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100 %;
  height: 100 %;
  width: 200 %;
  transform: translateX(0);
  transition: transform 0.6s ease -in -out;
}

.container.right - panel - active.overlay {
  transform: translateX(50 %);
}

.overlay - panel {
  position: absolute;
  display: flex;
  align - items: center;
  justify - content: center;
  flex - direction: column;
  padding: 0 40px;
  text - align: center;
  top: 0;
  height: 100 %;
  width: 50 %;
  transform: translateX(0);
  transition: transform 0.6s ease -in -out;
}

.overlay - left {
  transform: translateX(-20 %);
}

.container.right - panel - active.overlay - left {
  transform: translateX(0);
}

.overlay - right {
  right: 0;
  transform: translateX(0);
}

.container.right - panel - active.overlay - right {
  transform: translateX(20 %);
}

.social - container {
  margin: 20px 0;
}

.social - container a {
  border: 1px solid #DDDDDD;
  border - radius: 50 %;
  display: inline - flex;
  justify - content: center;
  align - items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background - color: #222;
  color: #fff;
  font - size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text - align: center;
  z - index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text - decoration: none;
}