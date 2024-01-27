import * as THREE from "three"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
camera.position.z = 30

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1) // soft white light
scene.add(ambientLight)
const pointLight = new THREE.PointLight("white", 50, 100)
pointLight.position.set(5, 5, 5)
scene.add(pointLight)

//Geometry Shapes
const geometry = new THREE.BoxGeometry(5, 5, 5)
// const geometry = new THREE.CapsuleGeometry(1, 1, 50, 20)
// const geometry = new THREE.CircleGeometry(1, 10)   //Radius,Triangles
// const geometry = new THREE.ConeGeometry(1, 1, 32)
// const geometry = new THREE.CylinderGeometry(1, 1, 3, 1000)

// const material = new THREE.MeshBasicMaterial({ color: "red" })
const material = new THREE.MeshStandardMaterial({ color: "red" })

const cube = new THREE.Mesh(geometry, material)
// const cube = new THREE.Line(geometry, material)

scene.add(cube)


const lightGeometry = new THREE.SphereGeometry(1, 32, 16)
const lightMaterial = new THREE.MeshBasicMaterial({ color: "white" })
const lightSphere = new THREE.Mesh(lightGeometry, lightMaterial)
lightSphere.position.set(5, 5, 5)
scene.add(lightSphere)

let q = 0
function animate() {
	requestAnimationFrame(animate)
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	cube.rotation.z += 0.01

    q+=0.02
    pointLight.position.set(10*Math.cos(q), 0, 10*Math.sin(q))
    lightSphere.position.set(10*Math.cos(q), 0, 10*Math.sin(q))

	renderer.render(scene, camera)
}

animate()
