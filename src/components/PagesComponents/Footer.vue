<template>
  <footer class="footer">
    <p class="white-text">© 2022 - Jesus Alberto - Colombia.</p>
    <div class="footer-copyright">
      This web was created thanks to:
      <a href="https://rickandmortyapi.com/" target="_SEJ" rel="”noreferrer”">
        Rick and Morty API
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 20px;
  padding: 15px 15px;

  background-color: #2c82e0;
  color: #fff;

  width: 100%;
}

@media screen and (max-width: 810px) {
  .footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    text-align: center;
    position: relative;
  }
}
</style>
