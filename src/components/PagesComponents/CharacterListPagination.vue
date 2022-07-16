<template>
  <div class="pagination">
    <va-pagination
      @click="onClickPagination"
      v-model="value"
      :pages="characterPages"
      :visible-pages="4"
      size="small"
    />
  </div>
</template>

<script>
export default {
  name: "CharacterListPagination",
  props: {
    characterPages: Number,
  },
  methods: {
    onClickPagination() {
      let index = parseInt(this.value);
      window.scrollTo(0, 0);
      this.$emit("update-list", index);
    },
  },
  data() {
    return {
      value: 1,
    };
  },
};
</script>

<style>
.pagination {
  padding-bottom: 30px;
}

@media screen and (max-width: 810px) {
  .pagination {
    padding-bottom: 50px;
  }
}
</style>
