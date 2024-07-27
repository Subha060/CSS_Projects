import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
function glb1() {
// Window sizes
const size = {
    width: 800,
    height: 2000
};

// Adding canvas
const groundCanvas = document.querySelector(".Ground");

// Scene
const scene = new THREE.Scene();

// Geometry
const geometry = new THREE.CircleGeometry(0.65, 30); // Reduced segments for better performance
geometry.rotateX(-Math.PI / 2);
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 1000);
camera.position.set(2, 2, 5); // Adjusted position for better visibility
scene.add(camera);

// Light
RectAreaLightUniformsLib.init();
const areaLight = new THREE.RectAreaLight(0xffffff, 3, 4, 4);
areaLight.position.set(0, 3, 0);
areaLight.lookAt(0, 0, 0);
scene.add(areaLight);

// const light = new THREE.AmbientLight(0xffffff); // Soft white light
// scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: groundCanvas,
    antialias: false, // Disable antialiasing for performance
    alpha: true
});
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setSize(size.width, size.height);
renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 alpha for transparency

// Dynamically adjust pixel ratio for performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));

// Resize
window.addEventListener("resize", () => {
    // Update size
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    // Update camera
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
});

// Scene loader
let obj;
const loader = new GLTFLoader();
loader.load('cake.glb', (glb) => {
    obj = glb.scene;
    obj.position.set(0, 0, 0); // Center the object
    obj.scale.set(0.005, 0.005, 0.005);
    scene.add(obj);
}, (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + "% loaded");
}, (error) => {
    console.log("Error occurred:", error);
});

// Control
const control = new OrbitControls(camera, groundCanvas);
control.enableDamping = false; // Disable damping for performance
control.autoRotate = false; // Disable autoRotate
control.enablePan = false;
control.enableZoom = false;
control.minPolarAngle = 0.5 * Math.PI;
control.maxPolarAngle = 0.5 * Math.PI;
control.target = new THREE.Vector3(0, 0.8, 0);
control.update();

// Create a quaternion for rotation
const quaternion = new THREE.Quaternion();
const axis = new THREE.Vector3(0, 0, 0); // Rotate around the Y-axis
const angle = 0.01; // Rotation angle per frame

// Animation loop
function animate() {
    if (obj) {
        quaternion.setFromAxisAngle(axis, angle); // Create a quaternion for the rotation
        obj.quaternion.multiplyQuaternions(quaternion, obj.quaternion); // Apply the rotation
    }
    control.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();
}




function glb2() {
    // Window sizes
    const size = {
        width: 900,
        height: 2000
    };
    
    // Adding canvas
    const groundCanvas = document.querySelector(".top");
    
    // Scene
    const scene = new THREE.Scene();
    
    // Geometry
    const geometry = new THREE.CircleGeometry(0.1, 3); // Reduced segments for better performance
    geometry.rotateX(-Math.PI / 2);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.1, 1000);
    camera.position.set(2, 2, 5); // Adjusted position for better visibility
    scene.add(camera);
    
    // Light
    RectAreaLightUniformsLib.init();
    const areaLight = new THREE.RectAreaLight(0xffffff, 3, 4, 4);
    areaLight.position.set(0, 3, 0);
    areaLight.lookAt(0, 0, 0);
    scene.add(areaLight);
    
    // const light = new THREE.AmbientLight(0xffffff); // Soft white light
    // scene.add(light);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: groundCanvas,
        antialias: false, // Disable antialiasing for performance
        alpha: true
    });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(size.width, size.height);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 alpha for transparency
    
    // Dynamically adjust pixel ratio for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    
    // Resize
    window.addEventListener("resize", () => {
        // Update size
        size.width = window.innerWidth;
        size.height = window.innerHeight;
    
        // Update camera
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
        renderer.setSize(size.width, size.height);
    });
    
    // Scene loader
    let obj;
    const loader = new GLTFLoader();
    loader.load('snowglobe.glb', (glb) => {
        obj = glb.scene;
        obj.position.set(0, 0, 0); // Center the object
        obj.scale.set(0.08, 0.08, 0.08);
        scene.add(obj);
    }, (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    }, (error) => {
        console.log("Error occurred:", error);
    });
    
    // Control
    const control = new OrbitControls(camera, groundCanvas);
    control.enableDamping = false; // Disable damping for performance
    control.autoRotate = false; // Disable autoRotate
    control.enablePan = false;
    control.enableZoom = false;
    control.minPolarAngle = 0.5 * Math.PI;
    control.maxPolarAngle = 0.5 * Math.PI;
    control.target = new THREE.Vector3(0, 0.8, 0);
    control.update();
    
    // Create a quaternion for rotation
    const quaternion = new THREE.Quaternion();
    const axis = new THREE.Vector3(0, 1, 0); // Rotate around the Y-axis
    const angle = 0.01; // Rotation angle per frame
    
    // Animation loop
    function animate() {
        if (obj) {
            quaternion.setFromAxisAngle(axis, angle); // Create a quaternion for the rotation
            obj.quaternion.multiplyQuaternions(quaternion, obj.quaternion); // Apply the rotation
        }
        control.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}


glb1();
glb2();