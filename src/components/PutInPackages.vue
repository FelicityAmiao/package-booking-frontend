<template>
  <div>
    <el-dialog
      title="包裹入库"
      :visible.sync="$store.getters.dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>
        <el-form :model="formData" label-position="left" label-width="70px">
          <el-form-item label="运单号:">
            <el-input v-model="formData.waybillId" placeholder="201907141222"></el-input>
          </el-form-item>
          <el-form-item label="收件人:">
            <el-input v-model="formData.userName" placeholder="AmiaoAbc"></el-input>
          </el-form-item>
          <el-form-item label="电话:">
            <el-input v-model="formData.phone" placeholder="15222363954"></el-input>
          </el-form-item>
          <el-form-item label="重量:">
            <el-input v-model="formData.weight" placeholder="3KG"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  computed: {
    formData() {
      return this.$store.getters.formData;
    }
  },
  methods: {
    onSubmit: function() {
      this.axios
        .post("http://localhost:8086/packages", this.formData)
        .then(response => {
          this.axios.get("http://localhost:8086/packages").then(response => {
            this.$store.commit("setPackagesData", response.data);
            this.$store.commit("setFormData", {});
            this.$store.commit("setDialogVisible", false);
          });
        })
        .catch(error => {
          this.$message.error("提交失败！");
        });
    },
    handleClose: function() {
      this.$store.commit("setFormData", {});
      this.$store.commit("setDialogVisible", false);
    }
  }
};
</script>

