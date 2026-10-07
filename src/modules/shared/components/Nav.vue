<template>
    <nav class="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EFECE6] px-6 py-4 transition-all">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" class="font-serif text-xl tracking-widest text-[#4A3B32]">Isaac & Arely</a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-medium">
                <button @click="scrollToSection('itinerario')"
                    class="hover:text-[#B38B6D] transition">Itinerario</button>
                <button @click="scrollToSection('ubicacion')" class="hover:text-[#B38B6D] transition">Ubicación</button>
                <button @click="scrollToSection('regalos')" class="hover:text-[#B38B6D] transition">Regalos</button>
                <button @click="scrollToSection('rsvp')" class="hover:text-[#B38B6D] transition">Recepcion</button>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-[#4A3B32] focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div v-if="mobileMenuOpen"
            class="md:hidden absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-[#EFECE6] py-6 px-6 shadow-lg flex flex-col space-y-4 text-sm tracking-widest uppercase">
            <button @click="scrollToSection('itinerario')"
                class="text-left py-2 border-b border-[#F4F1EA]">Itinerario</button>
            <button @click="scrollToSection('ubicacion')"
                class="text-left py-2 border-b border-[#F4F1EA]">Ubicación</button>
            <button @click="scrollToSection('regalos')" class="text-left py-2 border-b border-[#F4F1EA]">Mesa de
                Regalos</button>
            <button @click="scrollToSection('rsvp')" class="text-left py-2">RSVP</button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import useScroll from '../composables/useScroll';

// scroll
const { mobileMenuOpen, scrollToSection } = useScroll();
</script>