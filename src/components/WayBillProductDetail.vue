<template>
  <div>
    <template>
      <el-table :data="$store.getters.packagesData" style="width: 100%">
        <el-table-column prop="waybillId" label="运单号" width="180"></el-table-column>
        <el-table-column prop="userName" label="收件人" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="orderTime" label="预约时间"></el-table-column>
        <el-table-column prop="address">
          <template slot-scope="scope">
            <el-button round @click="comfirmTook(scope.row)">确认收货</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  mounted() {
    this.axios.get("http://localhost:8086/packages").then(response => {
      this.$store.commit("setPackagesData", response.data);
    });
  },
  methods: {
    comfirmTook: function(row) {
      row.status = "已取件";
      this.axios
        .post("http://localhost:8086/packages", row)
        .then(response => {
          this.axios.get("http://localhost:8086/packages").then(response => {
            this.$store.commit("setPackagesData", response.data);
          });
        })
        .catch(error => {
          this.$message.error("提交失败！");
        });
    }
  }
};
</script>

