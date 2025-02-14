<script>
    // Option API pada vue js versi 2/3
    export default {
        data () {
            return {
                message: "Hello, Vue JS"
            }
        }
    };
</script>
<script setup>
    // Composition Api vue js versi 3
    import { ref } from 'vue';
    import Button from '../../../../components/Button.vue';

    const messageApi = ref('Halo Composition API - Vue JS 3');
    const count = ref(0);
    const increment = () => count.value++
</script>

<template>
    <div>
      <h1>Halaman Latihan Pada Pertemuan 1</h1>
      <p>{{ message }}, Selamat datang!</p>
      <p>{{ messageApi }}, Selamat datang juga!</p>
    </div>
    <hr>
    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="increment">Tambah</button>
    </div>
    <hr>
    <div>
        <h2>Button Component</h2>
        <Button label="Klik Saya!"></Button>
        <Button label="Submit"></Button>
    </div>
</template>
  