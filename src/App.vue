<template>
  <h1>Reaction Timer</h1>
  <p>How quick can you click the button?</p>
  <button @click="start" :disabled="isPlaying">play</button>
  <ClickBlock v-if="isPlaying" :delay="delay" @end="endGame" />
  <GameResults v-if="showResults" :score="score" />
</template>

<script>
import ClickBlock from './components/ClickBlock.vue';
import GameResults from './components/GameResults.vue';

export default {
  name: 'App',
  components: { ClickBlock, GameResults },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },

    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
