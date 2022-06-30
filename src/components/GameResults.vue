<template>
  <p>
    Reaction time: <br />
    <span class="rank">
      {{ score }} ms <br />
      {{ rank }}
    </span>
  </p>
</template>

<script>
export default {
  props: ['score'],

  data() {
    return {
      rank: null,
    };
  },

  mounted() {
    if (this.score < 250) {
      this.rank = "You're quick!";
    } else if (this.score < 400) {
      this.rank = 'Good job!';
    } else {
      this.rank = '...like a snail :-(';
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
