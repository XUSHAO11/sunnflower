<template>
  <div class="Silder">
    <div class="card-content">
      <a-card>
        <div>
          <div class="heardCard">
            <a-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
              <template #icon>
                <img src="https://q1.qlogo.cn/g?b=qq&nk=1217671134&s=640" alt="avatar" />
              </template>
            </a-avatar>
          </div>
          <div class="icpnSty">
            <span><comment-outlined /></span><span><read-outlined />{{ counter.countPage.length }}</span>
          </div>
        </div>

        <a-divider dashed class="adivider" />
        <div >
          <a-list size="small" bordered class="listSty">
            <a-list-item v-for="itema in counter.countPage" :key="itema.id" class="listSty"><caret-right-filled />{{ itema.title }}</a-list-item>
            <template #header>
              <div>近期文章</div>
            </template>
          </a-list>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CommentOutlined, ReadOutlined, CaretRightFilled } from "@ant-design/icons-vue";
import { useCounterStore } from "../store/counter";
const counter = useCounterStore();
</script>

<style lang="scss" scoped>
.Silder {
  padding: 100px 0;
  height: 100vh;
  position: sticky;
  top: 0px;
  margin-left: 20px;
}
.card-content {
  .heardCard {
    display: flex;
    justify-content: center;
  }
  .icpnSty {
    font-size: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
  .listSty {
    color: #3c3535;
    border: none;
  }
  .adivider {
    border-color: #7cb305;
  }
}
</style>
