<template>
    <section id="regalos" class="py-24 px-6 max-w-5xl mx-auto text-center">
        <div class="space-y-3 mb-16">
            <p class="text-xs tracking-[0.3em] uppercase text-[#9C7A5B] font-medium">Detalles con amor</p>
            <h2 class="font-serif text-3xl md:text-4xl text-[#3D312A]">Regalos</h2>
            <div class="w-12 h-0.5 bg-[#DCD5C9] mx-auto mt-4"></div>
            <p class="text-sm text-[#7A6B5D] max-w-xl mx-auto pt-2">
                "Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, se los agradecemos de todo corazon."
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Option 1 -->
            <div
                class="hidden md:invisible bg-white p-6 rounded-2xl border border-[#EFECE6] md:flex flex-col justify-between shadow-sm">
                <div>
                    <h3 class="font-serif text-lg text-[#3D312A] mb-2">Liverpool</h3>
                    <p class="text-xs text-[#7A6B5D] mb-6">Mesa de regalos física y en línea para adquirir cualquier
                        obsequio.</p>
                    <p class="text-xs font-mono bg-[#F9F7F2] py-2 px-3 rounded text-[#8C5E46] mb-4">Evento:
                        #50938210</p>
                </div>
                <button @click="activeModal = 'gift1'"
                    class="w-full py-2.5 bg-[#8C5E46] text-white text-xs tracking-widest uppercase rounded-lg hover:bg-[#724B36] transition">
                    Ver Mesa Liverpool
                </button>
            </div>

            <!-- Option 2 -->
            <div class="bg-white p-6 rounded-2xl border border-[#EFECE6] flex flex-col justify-between shadow-sm">
                <div>
                    <h3 class="font-serif text-lg text-[#3D312A] mb-2">Lluvia de Sobres</h3>
                    <p class="text-xs text-[#7A6B5D] mb-6">Si prefieren contribuir a nuestra luna de miel mediante
                        efectivo o transferencia.</p>
                    <p class="text-xs font-mono bg-[#F9F7F2] py-2 px-3 rounded text-[#8C5E46] mb-4">BBVA: 4152 ...
                        1920</p>
                </div>
                <button @click="activeModal = 'gift3'"
                    class="w-full py-2.5 bg-[#8C5E46] text-white text-xs tracking-widest uppercase rounded-lg hover:bg-[#724B36] transition">
                    Ver Datos Bancarios
                </button>
            </div>

            <!-- Option 3 -->
            <div
                class="hidden md:invisible bg-white p-6 rounded-2xl border border-[#EFECE6] md:flex flex-col justify-between shadow-sm">
                <div>
                    <h3 class="font-serif text-lg text-[#3D312A] mb-2">Lluvia de Sobres</h3>
                    <p class="text-xs text-[#7A6B5D] mb-6">Si prefieren contribuir a nuestra luna de miel mediante
                        efectivo o transferencia.</p>
                    <p class="text-xs font-mono bg-[#F9F7F2] py-2 px-3 rounded text-[#8C5E46] mb-4">BBVA: 4152 ...
                        1920</p>
                </div>
                <button @click="activeModal = 'gift3'"
                    class="w-full py-2.5 bg-[#8C5E46] text-white text-xs tracking-widest uppercase rounded-lg hover:bg-[#724B36] transition">
                    Ver Datos Bancarios
                </button>
            </div>

        </div>
    </section>
</template>

<script setup>
import useModales from '../composables/useModales';

// modales
const { activeModal } = useModales();
</script>