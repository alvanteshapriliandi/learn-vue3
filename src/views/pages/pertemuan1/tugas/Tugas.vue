<script>

    export default {
        data () {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++
            }
        }
    }

</script>

<script setup>

    import { ref } from 'vue';
    import ProductCard from '../../../../components/ProductCard.vue';

</script>

<template>
    <!-- Start No Tugas 1 -->
    <!-- <div>
      <h1>Halaman Tugas Pada Pertemuan 1</h1>
      <p>Counter: {{ count }}</p>
      <button @click="increment">Tambah</button>
    </div> -->

    <!-- Start No Tugas 2 -->
    <hr>
    <div>

        <h2>Product Card:</h2>
        <ProductCard name="Laptop Gaming" :price="10000" />
        <ProductCard name="SmartPhone Kitakita" :price="8000000" />

    </div>

</template>
