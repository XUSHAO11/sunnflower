<template>
  <div class="ArticlePage">
    <div v-html="md.render(ArticlePageBody)" class="ArticlePageBody"></div>
    <div id="vcomments"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "../store/counter";
import Valine from "valine";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const counter = useCounterStore();
const route = useRoute();
const countPage = ref();
const ArticlePageBody = ref();

countPage.value = counter.countPage;
countPage.value!.forEach((i) => {
  if (i.id == route.query.userIda) {
    ArticlePageBody.value = i.body;
  }
});
onMounted(() => {
  const valineInstance = new Valine({ el: "#vcomments", appId: "LezUZOWnOTpoO32vjQuaqtVF-gzGzoHsz", appKey: "0FuFRrgJ9pNNlqXrVQKk1hHM" });
});
</script>
<style lang="scss" scoped>
.ArticlePage {
  padding: 20%;
}
.ArticlePageBody {
  line-height: 2rem;
  font-size: 1.2rem;

  text-overflow: ellipsis;
  overflow: hidden;
}
#vcomments{
    margin-top: 100px;
}
</style>
