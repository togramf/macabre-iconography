<template>
    <div class="video-container">
      <video autoplay muted loop playsinline>
        <source src="@/assets/background.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div class="content">
        <h1>{{ $t('ldgwelcome') }}</h1>
        <p>{{ $t('ldgdescription') }}</p>
        <button @click="changeLanguage">{{ $t('changeLanguage') }}</button>

        <div class="overlay-container">
            <div class="main-box">
                <div v-for="(item, index) in sections" :key="index" class="sub-box">
                    <button @click="openOverlay(index)" class="btn"> See More </button>
                </div>
            </div>
            <!-- Overlays -->
            <div v-if="overlayIndex !== null" class="overlay">
                <div class="overlay-content">
                    <p>Contenu de l'overlay {{ overlayIndex + 1 }}</p>
                    <button @click="closeOverlay" class="close-btn">Fermer</button>
                </div>
                </div>
            </div>
     </div>
     
        
    </div>
    
  </template>


  <script setup>
  /* eslint-disable no-unused-vars */

    import { ref } from 'vue';

    const sections = ref(new Array(6).fill(null)); // Exemple avec 6 divs
    const overlayIndex = ref(null);

    const openOverlay = (index) => {
        overlayIndex.value = index;
    };

    const closeOverlay = () => {
        overlayIndex.value = null;
    };


  </script>

  <script>
    export default {
    methods: {
      changeLanguage() {
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en';
      }
    }
  };
  </script>
  
  
  <style scoped>
    .video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    }

    video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    }
  
  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 20px;
  }

  .overlay-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  grid-gap: 10px;
  width: 75vw; /* Prend 75% de l'écran */
  height: 80vh; /* Hauteur ajustable */
  padding: 20px;
}

.sub-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  height: 100px;
}

.open-btn {
  padding: 10px;
  border: none;
  cursor: pointer;
}

/* Overlay (modale) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.close-btn {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}

  </style>
  