<template>
  <div class="Header">
    <div class="HeaderBox">
      <img src="../assets/LOGO.png" alt="梓旭logo" class="zixulogo" />
      <div class="RightList" v-if="headerWidth >= 750">
        <ul v-for="item in sortList" :key="item.id" @click="scroll">
          <router-link :to="item.link">
            <li class="sortList">
              <i :class="item.icon"></i><span>{{ item.title }}</span>
            </li>
          </router-link>
        </ul>
      </div>
      <div v-if="headerWidth <= 750">
        <MenuOutlined @click="showDrawer('default')" />
      </div>
    </div>
    <div v-if="router.currentRoute.value.path == '/layout/home'">
      <div class="HeaderTitle">
        <!-- <img src="https://api.yimian.xyz/img?type=wallpaper" alt="梓旭背景图" class="HeaderBg" /> -->
        <iframe src="/text.html" frameborder="0" class="HeaderBg"></iframe>
        <div class="HeaderText">
          <vuetyped :strings="['欢迎访问我的博客', '梓旭のBlog', '来自河南']" :loop="true" :smart-backspace="true" class="typingtext">
            <div class="typing" />
          </vuetyped>
        </div>
      </div>
      <img src="../assets/img/xiangxia.svg" alt="" class="svgxiala" @click="xialaScroll" />
    </div>
    <Canvas />
    <!-- 侧栏弹窗 -->
    <a-drawer title="Basic Drawer" :size="size" :open="open" @close="onClose">
      <ul v-for="item in sortList" :key="item.id" @click="scroll">
        <router-link :to="item.link" @click="Onclose">
          <li class="sortList">
            <i :class="item.icon"></i><span>{{ item.title }}</span>
          </li>
        </router-link>
      </ul>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Canvas from "./Canvas.vue";
import { MenuOutlined } from "@ant-design/icons-vue";

const open = ref<boolean>(false);
const router = useRouter();
const headerWidth = ref(751);
const sortList = [
  { id: "0", icon: "icon iconfont icon-home-c", title: "home", link: "/" },
  { id: "1", icon: "icon iconfont icon-shouye", title: "about", link: "/About" },
  { id: "2", icon: "icon iconfont icon-link", title: "link", link: "/Link" },
];
const scroll = () => {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
};

const xialaScroll = () => {
  scroll();
};

const size = ref("default");

const showDrawer = (val) => {
  size.value = val;
  open.value = true;
};

const onClose = () => {
  open.value = false;
};
const Onclose = () => {
  open.value = false;
};
onMounted(() => {
  window.onresize = function () {
    headerWidth.value = window.innerWidth;
  };
});
window.addEventListener("scroll", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 667) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 900) {
        const headerBox = document.querySelector(".HeaderBox") as HTMLElement;
        const headerBoxRight = document.querySelector(".ant-col-xs-0") as HTMLElement;
        headerBox.style.width = "26%";
        headerBox.style.left = "77.2%";
        headerBox.style.background = "rgba(255, 255, 255, 1)";
        headerBox.style.boxShadow = " 0 2px 4px rgba(0, 0, 0, 0.3)";
        headerBoxRight.style.maxWidth = "40%";
      } else if (scrollTop <= 900) {
        const headerBox = document.querySelector(".HeaderBox") as HTMLElement;
        const headerBoxRight = document.querySelector(".ant-col-xs-0") as HTMLElement;
        headerBox.style.width = "80%";
        headerBox.style.left = "50%";
        headerBox.style.background = "rgba(255, 255, 255, 0.8)";
        headerBox.style.boxShadow = "0 0 0";
      }
    }
  });
</script>

<style lang="scss" scoped>
.Header {
  position: relative;
  .svgxiala {
    position: absolute;
    left: 47.5%;
    transform: translate(-50%);
    bottom: 1%;
    z-index: 999;
    animation: firstdiv 2s linear 1s infinite running;
  }
  .HeaderBox {
    position: fixed;
    top: 1rem;
    width: 80%;
    left: 50%;
    padding: 0.5rem 1rem;
    transform: translate(-50%);
    background-color: #fffc;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    transition: all 0.7s;
    .zixulogo {
      width: 30px;
    }
    .sortList {
      display: flex;
      align-items: center;
      cursor: pointer;
      i {
        padding: 0 5px;
      }
    }
    .RightList {
      display: flex;
      ul {
        padding: 0 10px;
      }
    }
  }
  .HeaderBg {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderTitle {
    .HeaderText {
      display: flex;
      justify-content: center;
      align-items: center;
      .typingtext {
        position: absolute;
        top: 50%;
        font-size: 2rem;
        color: #fffc;
      }
    }
  }
}
@keyframes firstdiv {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  50% {
    transform: translateY(5%);
    opacity: 0.5;
  }

  100% {
    transform: translateY(10%);
    opacity: 0;
  }
}
</style>
