<template>
  <div class="Content">
    <div class="animate__animated animate__backInUp">
      <div v-for="item in num" :key="item" class="numLIst">
        <a-card hoverable @click="ArticlePage(item.id)">
          <!-- <div class="randomImg"></div> -->
          <img alt="example" src="https://source.unsplash.com/random" class="randomImg"/>
          <template #actions>
            <qq-outlined />
            <comment-outlined />
            <share-alt-outlined />
          </template>
          <a-card-meta :title="item.title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <Cs />
  </div>
</template>

<script setup>
import { QqOutlined, ShareAltOutlined, CommentOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useCounterStore } from "../store/counter";
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";
const counter = useCounterStore();
const num = ref();
axios.get("/api/repos/XUSHAO11/Sunflower/issues").then((res) => {
  num.value = res.data;
  counter.countPage = res.data;
});
const ArticlePage = (userId) => {
  router.push({ path: "/ArticlePage", query: { userIda: userId } });
};
</script>

<style lang="scss" scoped>
.Content {
  padding: 100px 0;
  width: 100%;
  .numLIst {
    margin-bottom: 15px;
  }
}
.randomImg {
  width: 50%;
  margin-bottom: 20px;
}
:where(.css-dev-only-do-not-override-eq3tly).ant-card-hoverable {
  cursor: pointer;
  margin-bottom: 15px !important;
}
.randomImg {
  height: 200px;
  background-image: url("https://source.unsplash.com/random");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
