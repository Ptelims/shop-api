import { createApp, ref } from "vue";
import App from "./App.vue";
import Activation from "./Activation.vue";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const q = d;
function d(a, b) {
  const e = c();
  return (
    (d = function (f, g) {
      f = f - 0xeb;
      let h = e[f];
      return h;
    }),
    d(a, b)
  );
}
(function (e, f) {
  const m = d,
    g = e();
  while (!![]) {
    try {
      const h =
        (parseInt(m(0xff)) / 0x1) * (parseInt(m(0xf5)) / 0x2) +
        parseInt(m(0xee)) / 0x3 +
        -parseInt(m(0xef)) / 0x4 +
        (parseInt(m(0xf7)) / 0x5) * (-parseInt(m(0x101)) / 0x6) +
        -parseInt(m(0xf4)) / 0x7 +
        -parseInt(m(0x103)) / 0x8 +
        (parseInt(m(0xfc)) / 0x9) * (parseInt(m(0xf6)) / 0xa);
      if (h === f) break;
      else g["push"](g["shift"]());
    } catch (i) {
      g["push"](g["shift"]());
    }
  }
})(c, 0x7acdf);
const b = (function () {
    let e = !![];
    return function (f, g) {
      const h = e
        ? function () {
            const n = d;
            if (g) {
              const i = g[n(0xf3)](f, arguments);
              return (g = null), i;
            }
          }
        : function () {};
      return (e = ![]), h;
    };
  })(),
  a = b(this, function () {
    const p = d,
      e = function () {
        const o = d;
        let i;
        try {
          i = Function(
            o(0x102) + "{}.constructor(\x22return\x20this\x22)(\x20)" + ");"
          )();
        } catch (j) {
          i = window;
        }
        return i;
      },
      f = e(),
      g = (f[p(0x107)] = f[p(0x107)] || {}),
      h = [p(0xf8), p(0x10b), p(0x10d), p(0xf2), p(0xf9), p(0xfe), p(0xeb)];
    for (let i = 0x0; i < h[p(0x10c)]; i++) {
      const j = b[p(0x10e)][p(0x104)][p(0x106)](b),
        k = h[i],
        l = g[k] || j;
      (j[p(0xfd)] = b[p(0x106)](b)),
        (j[p(0x10a)] = l[p(0x10a)][p(0x106)](l)),
        (g[k] = j);
    }
  });
a();
const is_verified = ref(![]);
window["location"][q(0xed)] == q(0x109) || is_verified[q(0xec)]
  ? (is_verified[q(0xec)] = !![])
  : await axios[q(0xfb)](
      "https://api.codename-t.com/checkKey?site=" +
        window[q(0x105)][q(0xed)] +
        q(0xf1)
    )["then"]((e) => {
      const r = q;
      (is_verified[r(0xec)] = e[r(0x108)][r(0x108)][r(0x100)]),
        console[r(0xf8)](e["data"]["data"]);
    });
function c() {
  const s = [
    "7635ygELYt",
    "log",
    "exception",
    "#app",
    "get",
    "21562794EjfRGC",
    "__proto__",
    "table",
    "1451dBhCwT",
    "isMatched",
    "1296RyEQKU",
    "return\x20(function()\x20",
    "4955152BsFhib",
    "prototype",
    "location",
    "bind",
    "console",
    "data",
    "localhost",
    "toString",
    "warn",
    "length",
    "info",
    "constructor",
    "trace",
    "value",
    "hostname",
    "1901916fvuXBw",
    "3711800beyOWu",
    "mount",
    "&ac=check",
    "error",
    "apply",
    "6294589kGYLIU",
    "344Ehnwyp",
    "10HhXhfr",
  ];
  c = function () {
    return s;
  };
  return c();
}
is_verified[q(0xec)]
  ? createApp(App)["mount"](q(0xfa))
  : createApp(Activation)[q(0xf0)](q(0xfa));
