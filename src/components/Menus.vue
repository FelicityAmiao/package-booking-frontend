<template>
    <div>
        <el-button round>ALL</el-button>
        <el-button round>已预约</el-button>
        <el-button round>已取件</el-button>
        <el-button round>未取件</el-button>
        <el-button circle @click="openAddPanel">+添加</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        openAddPanel: function() {
            this.$store.commit("setFormData", {});
            this.$store.commit("setDialogVisible", true);
        }
    }
}
</script>

