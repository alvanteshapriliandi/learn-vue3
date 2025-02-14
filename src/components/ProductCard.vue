<script setup>
    defineProps({
        name: String,
        price: Number
    })
</script>

<template>
    <div class="card">
        <h3>{{ name }}</h3>
        <p>Harga: Rp {{ price }}</p>
        <button>Beli</button>
    </div>
</template>

<style>

.card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
}

</style>