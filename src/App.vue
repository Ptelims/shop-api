<template>
  <div class="container">
    <div class="d-flex flex-column justify-content-cener py-5">
      <img :src="logo" class="web-logo mx-auto" alt="Image" />
      <h3 class="text-center">Products Showcase</h3>
    </div>
    <div class="row g-3" v-if="isApiLoading == false">
      <div
        class="col-md-3"
        v-for="(product, index) in productList"
        :key="index"
      >
        <div class="card">
          <img :src="product.images[0]" class="card-img-top" alt="Card Image" />
          <div class="card-body">
            <span class="badge bg-secondary">{{ product.category.name }}</span>
            <p>{{ product.title }}</p>
            <div class="d-flex justify-content-between">
              <small>Price: {{ product.price }} $</small>
              <small
                ><button class="btn btn-sm btn-success">
                  ซื้อสินค้า
                </button></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-center" v-else>กำลังโหลดข้อมูล.......</h4>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import logo from "@/assets/shop.png";

const isApiLoading = ref(true);
const productList = ref([]);
const apiUrl = ref("https://api.escuelajs.co/api/v1/products/?limit=20");
axios
  .get(apiUrl.value)
  .then((res) => {
    productList.value = res.data;
    isApiLoading.value = false;
    console.log(productList.value);
  })
  .catch((err) => console.log(err));
</script>
<style scoped>
.web-logo {
  width: 200px;
  height: 200px;
}
</style>
