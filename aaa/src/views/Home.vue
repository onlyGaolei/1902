<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <home-left :navMenus="leftMenus" />
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import homeLeft from "../components/menus.vue";
export default {
  components: {
    homeLeft,
  },
  data() {
    return {
      leftMenus: [],
    };
  },
  created() {
    // console.log(this);
    // console.log(this.$store.state.menus);
    this.leftMenus = this.$store.state.menus;
  },
};
</script>
<style lang="less">
</style>