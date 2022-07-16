<template>
  <div class="home-page-body">
    <img
      src="../../assets/rick_morty_logo.png"
      alt="Rick and Moty Logo"
      class="logo-container"
    />
    <div class="text-container">
      <p class="page-title">Welcome to the Rick and Morty API</p>
      <p class="page-details">
        This database contains information about the 826 characters in the Rick
        and Morty Series!
      </p>
      <router-link to="/characters">
        <div class="meet-characters">Meet the characters!</div>
      </router-link>
      <router-link to="/about">
        <div class="meet-characters">See the about page</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.home-page-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;

  gap: 5vh;

  text-align: center;
}

.logo-container {
  max-width: 100%;
  height: auto;
}

.page-title {
  font-size: 48px;
  color: aliceblue;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

.page-details {
  font-size: 28px;
}

.meet-characters {
  font-size: 24px;
}

@media screen and (max-width: 810px) {
  .home-page-body {
    flex-direction: column-reverse;
    gap: 5vh;
  }

  .text-container {
    gap: 3vh;
  }

  .logo-container {
    max-width: 90%;
    height: auto;
  }

  .page-title,
  .page-details,
  .meet-characters {
    font-size: 22px;
  }
}
</style>
