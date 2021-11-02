<template>
  <div class="home-index">
    <div class="header-nav">
      <div class="logo">
        <img src="@/assets/logo-dark.png" alt="logo">
      </div>
      <div class="nav-list">
        <div :class="{
          'nav-item': true,
          'section-select': nav.id === selectNode
        }" v-for="(nav, index) in navList" :key="index" @click="goAnchor(nav.id)">
          {{nav.name}}
        </div>
      </div>
    </div>
    <div class="{
      'section': true,
      'section-select': selectNode === 'home',
      'home': true
    }" id="home">
      <img class="bg-img" src="@/assets/hero-1-bg-img.png" alt="">
    </div>
    <div class="section about-us" id="about-us">about us</div>
    <div class="section services" id="services">services</div>
    <div class="section features" id="features">features</div>
    <div class="section project" id="project">project</div>
    <div class="section clients" id="clients">clients</div>
    <div class="section contract-us" id="contract-us">contract us</div>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data () {
    return {
      navList: [
        {
          name: 'home',
          id: 'home'
        },
        {
          name: 'about us',
          id: 'about-us'
        },
        {
          name: 'services',
          id: 'services'
        },
        {
          name: 'features',
          id: 'features'
        },
        {
          name: 'project',
          id: 'project'
        },
        {
          name: 'clients',
          id: 'clients'
        },
        {
          name: 'contract us',
          id: 'contract-us'
        },
      ],
      selectNode: ''
    }
  },
  methods: {
    goAnchor (id) {
      console.log(document.getElementById(id))
      document.getElementById(id).scrollIntoView({behavior: "smooth"})
    },
    getScrollTop () {
      // 获取滚动位置到页面顶部的距离
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      return scrollTop
    },
    pageOnScroll () {
      this.selectNode = this.navList.find(cur => {
        return this.getScrollTop() - document.getElementById(cur.id).offsetTop >= 0 && document.getElementById(cur.id).offsetTop + document.getElementById(cur.id).offsetHeight - this.getScrollTop() > 0
      }).id
    }
  },
  mounted() {
    this.selectNode = this.navList.find(cur => {
      return this.getScrollTop() - document.getElementById(cur.id).offsetTop >= 0 && document.getElementById(cur.id).offsetTop + document.getElementById(cur.id).offsetHeight - this.getScrollTop() > 0
    }).id
    console.log(this.selectNode)
    let isFirefox=/Firefox/i.test (navigator.userAgent) ; //判断是不是火狐浏览器
    let mwEvent = !isFirefox ? 'scroll': 'DOMMouseScroll'
    // 监听滚动事件
    window.addEventListener(mwEvent, this.pageOnScroll)
  }
}
</script>

<style scoped>
.home-index {
  width: 100vw;
}
.header-nav {
  width: 100%;
  height: 60px;
  padding: 15px 450px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-nav .logo {
  width: 100px;
  height: 30px;
}
.header-nav .logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.header-nav .nav-list {
  display: flex;
}
.header-nav .nav-list .nav-item {
  margin-left: 30px;
  cursor: pointer;
  color: #9b9bae;
}
.header-nav .nav-list .section-select {
  color: #3956de;
}
.header-nav .nav-list .nav-item:hover {
  color: #3956de;
}

.section {
  min-height: 800px;
}
.home {
  width: 100%;
  height: 900px;
  position: relative;
}
.home .bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.footer {
  width: 100%;
  height: 400px;
  background-color: #292d32;
}
</style>