<template>
    <header
        class="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-cover bg-center"
        style="background-image: linear-gradient(rgba(253, 251, 247, 0.4), rgba(253, 251, 247, 0.85)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80')">
        <div class="max-w-4xl mx-auto space-y-8 z-10 mt-6">
            <p class="text-xs md:text-sm tracking-[0.3em] uppercase text-[#7A6B5D] font-medium">Estás cordialmente
                invitado a nuestra boda</p>

            <h1 class="font-serif text-5xl md:text-8xl tracking-wide text-[#3D312A] font-light">
                Isaac <span class="font-serif italic text-[#9C7A5B]">&</span> Arely
            </h1>

            <!-- Countdown Timer Box -->
            <div
                class="bg-white/85 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-sm border border-[#EFECE6] grid grid-cols-4 gap-2 md:gap-4 my-8">
                <div class="flex flex-col items-center">
                    <span class="font-serif text-2xl md:text-4xl text-[#3D312A] font-semibold">{{ timeLeft.days
                    }}</span>
                    <span class="text-[10px] md:text-xs tracking-widest uppercase text-[#8A7968] mt-1">Días</span>
                </div>
                <div class="flex flex-col items-center border-l border-[#EFECE6]">
                    <span class="font-serif text-2xl md:text-4xl text-[#3D312A] font-semibold">{{ timeLeft.hours
                    }}</span>
                    <span class="text-[10px] md:text-xs tracking-widest uppercase text-[#8A7968] mt-1">Horas</span>
                </div>
                <div class="flex flex-col items-center border-l border-[#EFECE6]">
                    <span class="font-serif text-2xl md:text-4xl text-[#3D312A] font-semibold">{{ timeLeft.minutes
                    }}</span>
                    <span class="text-[10px] md:text-xs tracking-widest uppercase text-[#8A7968] mt-1">Minutos</span>
                </div>
                <div class="flex flex-col items-center border-l border-[#EFECE6]">
                    <span class="font-serif text-2xl md:text-4xl text-[#3D312A] font-semibold">{{ timeLeft.seconds
                    }}</span>
                    <span class="text-[10px] md:text-xs tracking-widest uppercase text-[#8A7968] mt-1">Segundos</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <button @click="scrollToSection('rsvp')"
                    class="w-full sm:w-auto px-8 py-3.5 bg-[#8C5E46] text-white text-xs tracking-[0.2em] uppercase rounded-lg shadow-sm hover:bg-[#724B36] transition duration-300">
                    Confirmar Asistencia
                </button>
                <button @click="scrollToSection('ubicacion')"
                    class="w-full sm:w-auto px-8 py-3.5 bg-white text-[#5C5346] border border-[#DCD5C9] text-xs tracking-[0.2em] uppercase rounded-lg shadow-sm hover:bg-[#F4F1EA] transition duration-300">
                    Ver Ubicación
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
import useCronometro from '../composables/useCronometro';
import useScroll from '../composables/useScroll';

// cronometro
const { timeLeft } = useCronometro('2026-10-30T00:00:00');
const { scrollToSection } = useScroll();
</script>