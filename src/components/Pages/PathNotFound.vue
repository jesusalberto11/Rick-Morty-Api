<template>
  <div class="page-not-found-body">
    <h1>
      Error 404 <br />
      Page not found!
    </h1>
  </div>
</template>

<script>
export default {
  name: "PathNotFound",
};
</script>

<style scoped>
.page-not-found-body {
  height: 70vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;

  font-size: 78px;
  color: aliceblue;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
}

@media screen and (max-width: 810px) {
  .page-not-found-body {
    font-size: 48px;
    text-align: center;
  }
}
</style>
