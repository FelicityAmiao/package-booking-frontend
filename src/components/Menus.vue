<template>
  <div>
    <el-button round @click="getAllPackages">ALL</el-button>
    <el-button round @click="getBookedPackages">已预约</el-button>
    <el-button round @click="getTookPackages">已取件</el-button>
    <el-button round @click="getNotTakePackages">未取件</el-button>
    <el-button circle @click="openAddPanel">+添加</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    openAddPanel: function() {
      this.$store.commit("setFormData", {});
      this.$store.commit("setDialogVisible", true);
    },
    getAllPackages: function() {
      this.axios.get("http://localhost:8086/packages").then(response => {
        this.$store.commit("setPackagesData", response.data);
      });
    },
    getBookedPackages: function() {
      this.axios
        .get("http://localhost:8086/packages?status=已预约")
        .then(response => {
          this.$store.commit("setPackagesData", response.data);
        });
    },
    getTookPackages: function() {
      this.axios
        .get("http://localhost:8086/packages?status=已取件")
        .then(response => {
          this.$store.commit("setPackagesData", response.data);
        });
    },
    getNotTakePackages: function() {
      this.axios
        .get("http://localhost:8086/packages?status=未取件")
        .then(response => {
          this.$store.commit("setPackagesData", response.data);
        });
    }
  }
};
</script>

