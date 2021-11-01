<template>
  <div class="all-index">
    <div class="title">点击跳转</div>
    <div class="route-list">
      <div class="route-item" v-for="(item, index) in routeList" :key="index"
           @click="$router.push(item.url)">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllIndex",
  data () {
    return {
      routeList: [
        {
          name: 'moban5837',
          url: '/home-index-5837'
        }
      ]
    }
  }
}
</script>

<style scoped>
.all-index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
}
.all-index .title {
  font-size: 24px;
}
.route-list {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.route-item {
  min-width: 200px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #4877dd;
  border-radius: 8px;
  cursor: pointer;
}
</style>