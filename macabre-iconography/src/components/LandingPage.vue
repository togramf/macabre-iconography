<template>
  <div>
    <div class="content">
      <h1>{{ $t('ldgwelcome') }}</h1>
      <p>{{ $t('ldgdescription') }}</p>
      <button @click="changeLanguage">{{ $t('changeLanguage') }}</button>

      <div class="overlay-container">
          <div class="main-box">
            <div class="sub-box" v-for="overlay in overlaysContent" :key="overlay.id">
              <button @click="openOverlay(overlay.id)" 
              class="btn-dynamic"
              :style="{ backgroundImage: `url(${getImageUrl(overlay.cover)})` }"
              >
                <!-- {{ overlay.title }} -->
              </button>

              <OverlayComponent
                v-if="selectedOverlay"
                :data="selectedOverlay"
                @close="selectedOverlay = null"
              />
          </div>
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import OverlayComponent from './OverlayComponent.vue';
import OverlayContent from "../../src/assets/OverlayContent.json";


  export default {
  components: {
    OverlayComponent
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en';
    },
    async fetchOverlays() {
      try {
        const response = await fetch("https://67e2f7f097fc65f535384c4d.mockapi.io/Projects"); 
        this.overlays = await response.json();
        this.overlaysContent = OverlayContent;
      } catch (error) {
        console.error("Error during data fetching :", error)
      }
    },
    openOverlay(id) {
      console.log("open Overlay "+id);
      this.selectedOverlay = this.overlaysContent.find(overlay => overlay.id === id);
    },
    getImageUrl(filename) {
      return new URL(`../assets/images/${filename}`, import.meta.url).href
    }
  },
  data() {
    return {
      overlays: [],
      overlaysContent: [],
      selectedOverlay: null
    }
  },
  mounted() {
    this.fetchOverlays();
  }
};
</script>


<style scoped>

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

.overlay-container {
display: flex;
margin-top: 10vh;
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
height: 50px;
}

.btn-dynamic {
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-position: center;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s;
}

.btn-dynamic:hover {
  transform: scale(1.03);
}

</style>
