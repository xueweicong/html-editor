<template>
    <div class="v-article-container" :style="options">
      <div class="v-article-wrapper">
        <div class="v-article-main">
          <img class="image" src="http://qiniu-store.adonging.com/FoiE8SLgRAp5rLu2x_YP--7Gxebx" />
          <p class="title">GETTING STARTEDWWW</p>
          <p class="subtitle">The Roots</p>
          <p class="content">For years, I have served as a useful source to those seeking inspiration, help, or advice. In 2000, I finally decided to own that role and be intentional about it. I started writing about my passions, my thoughts, and curious wonderings about our society. I founded dreamer with a mission to give others a taste of what goes on in my mind, and it has been a wild success ever since.</p>
        </div>
      </div>
    </div>
</template>
<script>
module.exports = {
  name: "vArticle",
  prop: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    console.log(6666)
  },
};
</script>
<style scoped>
.v-article-container {
  width: 100%;
  min-height: 200px;
}
.v-article-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}
.v-article-main {
  width: 100%;
  height: auto;
}
.v-article-main img.image {
  width: 80px;
  height: 60px;
  margin: 20px auto;
}
.v-article-main p.title {
  font-size: 28px;
  font-weight: 700;
  margin: 10px;
}
.v-article-main p.subtitle {
  font-size: 20px;
  margin: 10px;
}
.v-article-main p.content {
  font-size: 14px;
  margin: 10px;
}
</style>
