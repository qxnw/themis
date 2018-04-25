<template>

  <b-navbar toggleable="md" variant="info" class="col-2">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-list-group>
        <b-list-group-item class="align-middle" v-for="item in navs" :key="item.sort">
          <span @click="select(item)"> {{item.title}}</span>
          <icon v-if="item.showChildren" name="caret-down" class="pt-1"></icon>
          <icon v-else name="caret-right" class="pt-1"></icon>
          <b-list-group v-if="item.showChildren">
            <b-list-group-item v-for="child in item.children" :key="child.sort" class="border-0">
              <icon class="text-secondary" name="start"></icon>
              <router-link v-bind:to="child.url">{{child.title}}</router-link>
            </b-list-group-item>
          </b-list-group>
        </b-list-group-item>
      </b-list-group>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
  data() {
    return {
      navs: []
    };
  },
  methods: {
    select(item) {
      item.showChildren = !item.showChildren;
    }
  },
  mounted() {
    this.navs = [
      {
        id: 1,
        title: "安防系统",
        showChildren: true,
        children: [
          {
            id: 11,
            title: "平台配置",
            url: "/plat/:id"
          },
          {
            id: 12,
            title: "服务查询",
            url: "/query/:id"
          }
        ]
      },
      {
        title: "高铁wifi",
        showChildren: true,
        children: [
          {
            title: "平台配置",
            url: "/plat/:id"
          },
          {
            title: "服务查询",
            url: "/plat/:id"
          }
        ]
      }
    ];
  }
};
</script>
