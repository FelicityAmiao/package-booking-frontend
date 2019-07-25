<template>
    <div>
        <web-site-title></web-site-title>
        <menus></menus>
        <way-bill-product-detail> </way-bill-product-detail>
        <put-in-packages></put-in-packages>
    </div>
</template>
<script>
import PutInPackages from "./PutInPackages.vue";
import WebSiteTitle from "./Title.vue"
import Menus from "./Menus.vue"
import WayBillProductDetail from "./WayBillProductDetail.vue"
export default {
    components: {
        WebSiteTitle,
        Menus,
        WayBillProductDetail,
        PutInPackages
    }
}
</script>

