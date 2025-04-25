<template>
  <div>
    <!-- Background video -->
    <video class="video-background" autoplay muted loop>
      <source src="./assets/background/background.mp4" type="video/mp4" />
    </video>

    <!-- Menu -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <!-- Pages Content -->
    <router-view />
  </div>
</template>

<script>
  export default {
  name: 'App'
  }
</script>

<style>

.video-background {
position: fixed; 
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
z-index: -1; 
}

/* 3D container */
.three-container {
position: fixed;  
top: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: -1; 
pointer-events: none; 
}

</style>