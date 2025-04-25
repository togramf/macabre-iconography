<template>
      <transition name="fade">
        <div class="overlay" @click="this.$emit('close')">
            <div class="overlay-content" @click.stop>
                <h2>{{ data.title }}</h2>

                <!-- Description -->
                <p v-if="this.$i18n.locale == this.$i18n.fallbackLocale">{{ data.descriptionEn }}</p>
                <p v-if="this.$i18n.locale != this.$i18n.fallbackLocale">{{ data.descriptionEs }}</p>

                <!-- Embedding YouTube video -->
                <div v-if="data.videoUrl">
                  <iframe
                    :src="getYouTubeEmbedUrl(data.illustrations.vid1)"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    width="100%"
                    height="315"
                  ></iframe>
                </div>
                  <!-- If unavailable, display the cover -->
                  <div v-else>
                    <img :src="getImageUrl(data.cover)" alt="Illustration" class="overlay-img"/>
                  </div>

                  
                  <button @click="$emit('close')">Close</button>
                </div>

              </div>
        
    </transition>
  </template>
  
  <script setup>
    const props = defineProps(['data'])

    function getImageUrl(filename) {
      return new URL(`../assets/images/${filename}`, import.meta.url).href
    }

    function getYouTubeEmbedUrl(url) {
      const videoId = url.split('v=')[1].split('&')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }

  </script>

  <script>
  export default {
    mounted() {
        document.body.style.overflow = "hidden"; // Bloque le scroll du body quand l’overlay s’ouvre
    },
    beforeUnmount() {
        document.body.style.overflow = ""; // Réactive le scroll du body en quittant l’overlay
    }
  };
  </script>
  

  
  <style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: color-mix(in srgb, var(--light-green-color) 5%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    height: 80vh; /* Définit une hauteur fixe */
    overflow-y: auto; /* Active le scroll vertical si le contenu dépasse */
    text-align: center;
  }

  .overlay-img {
  width: 100%; /* Remplit la largeur de son conteneur */
  max-width: 400px; /* Limite la taille max */
  height: auto; /* Conserve les proportions */
  border-radius: 10px; /* Coins arrondis pour un effet plus propre */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Ombre légère */
  display: block; /* Centre l'image */
  margin: 10px auto; /* Espacement */
}
  </style>
  