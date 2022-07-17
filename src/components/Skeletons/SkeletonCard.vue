<template>
  <div class="skeleton-card-body">
    <div class="skeleton-card-image">
      <Skeleton :type="'img'" height="100px" width="100px" />
    </div>
    <div class="skeleton-card-info">
      <div class="skeleton-card-upper-text">
        <Skeleton :type="'text'" width="110px" />
        <Skeleton :type="'text'" width="110px" />
        <Skeleton :type="'text'" />
      </div>
      <div class="skeleton-card-bottom-text">
        <Skeleton :type="'text'" width="110px" />
        <Skeleton :type="'text'" width="110px" />
        <Skeleton :type="'text'" />
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "../PagesComponents/Skeleton.vue";

export default {
  name: "SkeletonCard",
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.skeleton-card-body {
  background-color: #fff;
  height: 150px;
  width: 300px;

  gap: 1vh;

  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #354259;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.skeleton-card-image {
  flex-grow: 1;
}

.skeleton-card-info {
  display: flex;
  flex-direction: column;
  gap: 1vh;

  flex-grow: 2;

  width: 10px;
  height: 80px;
}

.skeleton-card-body,
.skeleton-card-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
