<template>
  <div class="skeleton-detailed-card-body">
    <Skeleton :type="'box'" height="300px" width="300px" />
    <div class="skeleton-container">
      <div class="skeleton-title">
        <Skeleton :type="'text'" height="100%" width="100%" />
      </div>
      <div class="skeleton-details">
        <Skeleton :type="'text'" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "../PagesComponents/Skeleton.vue";

export default {
  name: "SkeletonDetailedCard",
  components: {
    Skeleton,
  },
};
</script>

<style>
.skeleton-detailed-card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5vh;

  padding-left: 50px;
  padding-right: 50px;
}

.skeleton-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  flex-grow: 2;
  height: 100%;
}

.skeleton-title {
  height: 150px;
  width: 900px;
}

.skeleton-details {
  height: 200px;
  width: 900px;
}

@media screen and (max-width: 810px) {
  .skeleton-title,
  .skeleton-details {
    width: 300px;
  }
}
</style>
