<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script>
  import * as THREE from "three";
  
  export default {
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const container = this.$refs.threeContainer;
  
        // Création de la scène
        const scene = new THREE.Scene();
  
        // Création de la caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
  
        // Création du rendu WebGL avec transparence
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
  
        // Ajout d'un cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
  
        // Animation
        function animate() {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();
  
        // Ajustement au redimensionnement
        window.addEventListener("resize", () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .three-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; /* En arrière-plan */
    pointer-events: none; /* Empêche d'interférer avec les interactions */
  }
  </style>
  