<template>
  <div class="character-image" :style="leftPadding">
    <img
      v-bind:src="image"
      v-bind:alt="name"
      v-bind:width="imageWidth"
      v-bind:height="imageHeight"
      v-bind:class="classType"
    />
  </div>
</template>

<script>
export default {
  name: "CharacterCardImage",
  props: {
    name: String,
    image: String,
    imageWidth: Number,
    imageHeight: Number,
    classType: String,
    paddingLeft: Number,
  },
  computed: {
    leftPadding() {
      return "--padleft: " + this.paddingLeft + "px";
    },
  },
};
</script>

<style>
.character-image {
  max-width: 100%;
  height: auto;
  padding-left: var(--padleft);
}

.box {
  border-width: 1px;
  border-style: solid;
  border-color: #354259;
}

.rounded {
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #354259;
}
</style>
