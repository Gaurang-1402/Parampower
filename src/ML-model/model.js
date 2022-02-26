// import { tfjs } from "@tensorflow/tfjs"
const blazeface = require("@tensorflow-models/blazeface")
const predProb = 0.99
const vWidth = 64
const vHeight = 48

window.addEventListener(`load`, async () => {
  const t = createFacePicCtrl(`faceFrame`)
  const n = await createFaceSense()
  n.on(`face`, (e) => {
    t.sync(e)
  })
  createCamVid(`faceFrame`, (e) => {
    n.updateImage(e)
  })
  console.log(`Face detection is ready!`)
})

function createFacePicCtrl(e) {
  const t = document.getElementById(e)
  const c = {
    x: 0,
    y: 0,
  }

  function n() {
    t.style.left = parseInt(c.x) + `px`
    t.style.top = parseInt(c.y) + `px`
  }

  function a() {
    const { x: e, y: t } = c
    const n = window.innerWidth
    const a = window.innerHeight
    if (e < -vWidth) c.x = -vWidth
    if (t < -vHeight) c.y = -vHeight
    if (e > n) c.x = n
    if (t > a) c.y = a
  }

  function o(e, t) {
    const n = 30
    const a = c[e]
    c[e] += (t - a) / n
  }

  function i(e) {
    const t = 40
    const n = e.face[0] - e.eyes[0]
    const a = n < 0 ? -1 : +1
    const c = (Math.min(t, Math.abs(n)) / t) * a
    const i = window.innerWidth * ((c + 1) / 2)
    o(`x`, i - vWidth / 2)
  }

  function s(e) {
    const t = 30
    const n = e.eyes[1] - e.ears[1]
    const a = Math.min(t, Math.abs(n)) / t
    const c = window.innerHeight * (1 - a)
    o(`y`, c - vHeight / 4)
  }
  return {
    sync: (e) => {
      i(e)
      s(e)
      a()
      n()
    },
  }
}

function createCamVid(e, t) {
  const n = document.getElementById(e)
  const a = n.querySelector(`video`)
  const c = n.querySelector(`canvas`)
  const i = c.getContext(`2d`)
  withCameraStream((e) => {
    a.srcObject = e
    a.addEventListener(`loadeddata`, o)
    a.play()
  })

  function o() {
    requestAnimationFrame(o)
    i.drawImage(a, 0, 0, vWidth, vHeight)
    t(a)
  }
}

function withCameraStream(e) {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(e)
      ["catch"](() => alert(`Check if camera permission is enabled or not!`))
  }
}

function simplifyFaceModel(e) {
  const { topLeft: t, bottomRight: n, landmarks: a } = e
  const c = [0, 1]
  return {
    face: c.map((e) => (t[e] + n[e]) * 0.5),
    eyes: c.map((e) => (a[1][e] + a[0][e]) * 0.5),
    ears: c.map((e) => (a[5][e] + a[4][e]) * 0.5),
  }
}
async function createFaceSense() {
  const c = await blazeface.load()
  let i = () => {}
  return {
    on: (e, t) => {
      if (e === `face`) {
        i = t
      }
    },
    updateImage: async (e) => {
      const t = await c.estimateFaces(e)
      const n = t[0]
      if (n && n.probability[0] > predProb) {
        const a = simplifyFaceModel(n)
        i(a)
      }
    },
  }
}
