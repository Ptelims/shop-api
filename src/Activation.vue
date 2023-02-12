<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mid-screen">
    <div class="warn-card">
      <img src="https://i.imgur.com/cvOVRRU.png" class="lock-icon" alt="lock" />
      <div style="padding-top: 1em; padding-bottom: 0.8em">
        <h3 style="color: red">มีบางอย่างผิดปกติ</h3>
        <p>
          เว็บไซต์นี้ได้รับการปกป้องโดยระบบป้องกันการคัดลอกและต้องใช้รหัสขออนุญาตที่ถูกต้องเพื่อเข้าถึงข้อมูล
        </p>
        <p>
          โปรดอย่าทำซ้ำงานนี้โดยไม่ได้รับอนุญาต
          หากต้องการขอสิทธิ์เข้าถึงโปรดติดต่อผู้พัฒนาเว็บไซต์
        </p>
        <p>
          การปกป้องซอร์สโค้ดของมีความสำคัญเนื่องจากทุกอย่างมีการลงทุนทั้ง เวลา
          ทรัพยากร และความเชี่ยวชาญ <br />
          การเข้าถึงซอร์สโค้ดโดยไม่ได้รับอนุญาตอาจทำให้ความสมบูรณ์และคุณค่าของโค้ดลดลง
        </p>
      </div>
      <div v-if="!isLoading">
        <input
          v-model="licenseKey"
          type="text"
          placeholder="Activation Key..."
        />
        <button @click="activateKey">ตรวจสอบข้อมูล</button>
      </div>
      <div v-else>กำลังตรวจสอบข้อมูล...</div>
      <small style="font-size: 8pt">CopyKiller alpha 0.1</small>
    </div>
  </div>
</template>
<script setup>
(function (f, g) {
  const o = d,
    h = f();
  while (!![]) {
    try {
      const i =
        (-parseInt(o(0x132)) / 0x1) * (-parseInt(o(0x120)) / 0x2) +
        parseInt(o(0x128)) / 0x3 +
        (parseInt(o(0x127)) / 0x4) * (parseInt(o(0x12e)) / 0x5) +
        -parseInt(o(0x130)) / 0x6 +
        (parseInt(o(0x13d)) / 0x7) * (parseInt(o(0x140)) / 0x8) +
        -parseInt(o(0x139)) / 0x9 +
        (parseInt(o(0x13e)) / 0xa) * (parseInt(o(0x12b)) / 0xb);
      if (i === g) break;
      else h["push"](h["shift"]());
    } catch (j) {
      h["push"](h["shift"]());
    }
  }
})(c, 0x9f579);
const b = (function () {
    let f = !![];
    return function (g, h) {
      const i = f
        ? function () {
            const p = d;
            if (h) {
              const j = h[p(0x129)](g, arguments);
              return (h = null), j;
            }
          }
        : function () {};
      return (f = ![]), i;
    };
  })(),
  a = b(this, function () {
    const q = d;
    let f;
    try {
      const i = Function(q(0x123) + q(0x135) + ");");
      f = i();
    } catch (j) {
      f = window;
    }
    const g = (f[q(0x12f)] = f[q(0x12f)] || {}),
      h = ["log", "warn", q(0x122), "error", q(0x12c), q(0x12d), q(0x12a)];
    for (let k = 0x0; k < h[q(0x141)]; k++) {
      const l = b[q(0x121)][q(0x133)][q(0x142)](b),
        m = h[k],
        n = g[m] || l;
      (l["__proto__"] = b[q(0x142)](b)),
        (l[q(0x137)] = n["toString"][q(0x142)](n)),
        (g[m] = l);
    }
  });
a();
function c() {
  const t = [
    "hostname",
    "https://api.codename-t.com/checkKey?key=",
    "ได้รับสิทธ์เข้าถึงแล้ว",
    "1071392lhgLeh",
    "15110UylCMo",
    "&site=",
    "40TkEyEL",
    "length",
    "bind",
    "&ac=redeem",
    "2zzSCnN",
    "constructor",
    "info",
    "return\x20(function()\x20",
    "data",
    "เข้าถึงไม่ได้\x20โปรดตรวจสอบ\x20Key",
    "reload",
    "21524QaqgLO",
    "3492dWJgMn",
    "apply",
    "trace",
    "3729scjTTW",
    "exception",
    "table",
    "615awlmLU",
    "console",
    "7798194slFLik",
    "value",
    "681021XnuWYi",
    "prototype",
    "canRedeem",
    "{}.constructor(\x22return\x20this\x22)(\x20)",
    "location",
    "toString",
    "catch",
    "6022737iBvkah",
  ];
  c = function () {
    return t;
  };
  return c();
}
import e from "axios";
function d(a, b) {
  const e = c();
  return (
    (d = function (f, g) {
      f = f - 0x120;
      let h = e[f];
      return h;
    }),
    d(a, b)
  );
}
import { ref } from "vue";
const licenseKey = ref(""),
  isLoading = ref(![]);
function activateKey() {
  const r = d;
  (isLoading[r(0x131)] = !![]),
    e["get"](
      r(0x13b) +
        licenseKey[r(0x131)] +
        r(0x13f) +
        window[r(0x136)][r(0x13a)] +
        r(0x143)
    )
      ["then"]((f) => {
        const s = r;
        f[s(0x124)][s(0x134)]
          ? (alert(s(0x13c)), window[s(0x136)][s(0x126)]())
          : (alert(s(0x125)), (isLoading[s(0x131)] = ![]));
      })
      [r(0x138)](() => (isLoading["value"] = ![]));
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@200;300;400;500&display=swap");
* {
  font-family: "Noto Sans Thai", sans-serif;
}
.lock-icon {
  height: 100px;
  display: block;
}
.mid-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff2f2;
}

.warn-card {
  width: 800px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  border-top: 5px solid crimson;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 10px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url("https://sv1.picz.in.th/images/2023/02/11/Ll6wYJ.png") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
