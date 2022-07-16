<template>
  <header class="header">
    <router-link to="/">
      <div class="page-text">The Rick and Morty API</div>
    </router-link>
    <div class="left-buttons">
      <router-link to="/">
        <div class="nav-button" :class="{ selected: activeItem === 'home' }">
          Home
        </div>
      </router-link>
      <router-link to="/characters">
        <div
          class="nav-button"
          :class="{ selected: activeItem === 'characters' }"
        >
          Characters
        </div>
      </router-link>
      <router-link to="/about">
        <div class="nav-button" :class="{ selected: activeItem === 'about' }">
          About
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageNavbar",
  created() {
    this.$watch(
      () => this.$route.name,
      (routeName) => {
        this.onRouteChange(routeName);
      }
    );
  },
  data() {
    return {
      activeItem: "home",
    };
  },
  methods: {
    onRouteChange(routeName) {
      if (routeName === null || routeName === undefined) return;
      this.activeItem = routeName;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 45vh;

  margin-bottom: 15px;
  width: 100%;
  height: 50px;

  background-color: #2c82e0;
  color: #fff;
}

.left-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 5vh;
  height: 100%;
}

.page-text,
.left-buttons a,
.selected {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  height: 80%;
  border-radius: 5px;
}

.left-buttons a,
.selected {
  width: 80px;
}

.selected {
  background-color: #fbf2c0;
  color: #000;
  height: 80%;
}

.left-buttons a:hover {
  background-color: #1b4b80;
  color: #fff;
  height: 80%;
  width: 80px;
}

@media screen and (max-width: 920px) {
  .header {
    gap: 15vh;
  }
}

@media screen and (max-width: 810px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;

    height: auto;
  }

  .page-text {
    text-align: center;
  }

  .left-buttons {
    margin-bottom: 15px;
    width: auto;
  }

  .left-buttons a,
  .selected {
    height: 30px;
  }

  .page-text {
    margin-top: 15px;
  }
}
</style>
