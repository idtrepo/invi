<template>
    <div class="">
        <Nav/>
        <Header/>
        <Quote/>
        <Itinerario/>
        <Detalles/>
        <Regalos/>
        <Asistencia/>
        <Footer/>

        <Modales/>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import useControlInicios from '../composables/useControlInicios';

// componentes
const Nav = defineAsyncComponent(() => import('@/modules/shared/components/Nav.vue'));
const Header = defineAsyncComponent(() => import('@/modules/shared/components/Header.vue'));
const Quote = defineAsyncComponent(() => import('@/modules/shared/components/Quote.vue'));
const Itinerario = defineAsyncComponent(() => import('@/modules/shared/components/Itinerario.vue'));
const Detalles = defineAsyncComponent(() => import('@/modules/shared/components/Detalles.vue'));
const Regalos = defineAsyncComponent(() => import('@/modules/shared/components/Regalos.vue'));
const Asistencia = defineAsyncComponent(() => import('@/modules/shared/components/Asistencia.vue'));
const Footer = defineAsyncComponent(() => import('@/modules/shared/components/Footer.vue'));
const Modales = defineAsyncComponent(() => import('@/modules/shared/components/Modales.vue'));

// control de inicios
useControlInicios();
</script>