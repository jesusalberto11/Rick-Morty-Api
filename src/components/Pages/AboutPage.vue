<template>
  <div class="about-page-body">
    <div class="about-details">
      <p>This page was created by:</p>
      <a class="about-creator">Jesus A. Morales Rico - Colombia.</a>
      <p>Created using the following technologies:</p>
    </div>
    <div class="tech-names">
      <a href="https://es.vuejs.org/" target="_SEJ" rel="”noreferrer”">
        VueJS V.3
      </a>
      <a href="https://router.vuejs.org/" target="_SEJ" rel="”noreferrer”">
        Vue Router V.4
      </a>
      <a href="https://vuestic.dev/" target="_SEJ" rel="”noreferrer”">
        Vuestic UI
      </a>
      <a href="https://rickandmortyapi.com/" target="_SEJ" rel="”noreferrer”">
        The Rick and Morty API
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page-body {
  display: flex;
  flex-direction: column;
  gap: 8vh;

  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5vh;
}

.tech-names {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  font-size: 22px;
  color: #000;
}

.about-creator {
  color: aliceblue;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

.about-details {
  font-size: 36px;
}

@media screen and (max-width: 810px) {
  .about-page-body {
    gap: 4vh;
  }

  .about-details {
    padding-left: 10px;
    padding-right: 10px;

    text-align: center;
    font-size: 22px;
  }

  .tech-names {
    flex-direction: column;
    gap: 2vh;
  }
}
</style>
