<template>
  <div class="skeleton-list-body">
    <div v-for="(n, i) in listLength" v-bind:key="i">
      <SkeletonCard />
    </div>
  </div>
</template>

<script>
import SkeletonCard from "../Skeletons/SkeletonCard.vue";

export default {
  name: "SkeletonList",
  components: {
    SkeletonCard,
  },
  data() {
    return {
      listLength: 20,
    };
  },
};
</script>

<style>
.skeleton-list-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}
</style>
