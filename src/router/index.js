import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import PerbedaanUtama from '../views/pages/pertemuan1/PerbedaanUtama.vue'
import CompositionOptions from '../views/pages/pertemuan1/CompositionOptions.vue'
import LatihanPertemuan1 from '../views/pages/pertemuan1/latihan/Latihan.vue'
import TugasPertemuan1 from '../views/pages/pertemuan1/tugas/Tugas.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/pertemuan1/perbedaan-utama', component: PerbedaanUtama },
    { path: '/pertemuan1/composition-options', component: CompositionOptions },
    { path: '/pertemuan1/latihan/', component: LatihanPertemuan1 },
    { path: '/pertemuan1/tugas/', component: TugasPertemuan1 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
