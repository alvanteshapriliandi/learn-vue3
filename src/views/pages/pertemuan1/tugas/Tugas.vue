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

    import { ref, computed } from 'vue';
    import ProductCard from '../../../../components/ProductCard.vue';

    const newTask = ref('')
    const tasks = ref([])
    const total = ref(0)

    const addTask = () => {
        if (newTask.value.trimEnd() !== '') {
            tasks.value.push(newTask.value)
            newTask.value = ''
        }
    }

    const discount = computed(() => {
        return total.value > 1000000 ? total.value * 0.1 : 0
    })

</script>

<template>
    <!-- Start No Tugas 1 -->
    <!-- <div>
      <h1>Halaman Tugas Pada Pertemuan 1</h1>
      <p>Counter: {{ count }}</p>
      <button @click="increment">Tambah</button>
    </div> -->

    <!-- Start No Tugas 2 -->
    <!-- <hr>
    <div>

        <h2>Product Card:</h2>
        <ProductCard name="Laptop Gaming" :price="10000" />
        <ProductCard name="SmartPhone Kitakita" :price="8000000" />

    </div> -->

    <!-- Start No Tugas 3 -->
    <!-- <hr>
    <div>
        <h2>Tugas 3 - Menggunakan Reactive State</h2>
        <input v-model="newTask" placeholder="Masukkan tugas..." />
        <button @click="addTask"> Tambah </button>

        <ul>
            <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
        </ul>
    </div> -->
    
    <!-- Start No Tugas 4 -->
    <hr>
    <div>
        <h2>Tugas 4 - Menggunakan Computed Properties</h2>
        <p>Total Belanja: Rp {{ total }}</p>
        <p>Diskon: Rp {{ discount }}</p>

        <button @click="total += 500000">Tambah Rp 500.000</button>
    </div>


</template>
