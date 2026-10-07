<template>
    <section id="itinerario" class="py-24 px-6 max-w-5xl mx-auto">
        <div class="text-center space-y-3 mb-16">
            <p class="text-xs tracking-[0.3em] uppercase text-[#9C7A5B] font-medium">Programa de eventos</p>
            <h2 class="font-serif text-3xl md:text-4xl text-[#3D312A]">El Itinerario del Día</h2>
            <div class="w-12 h-0.5 bg-[#DCD5C9] mx-auto mt-4"></div>
        </div>

        <div class="relative border-l-2 border-[#E5E0D5] ml-4 md:ml-auto space-y-12 pl-6 md:pl-0">

            <!-- Event 1 -->
            <div v-if="invitadoEspecial" class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right md:pr-12">
                    <span
                        class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">04:00
                        PM</span>
                    <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Sesion de fotos pre-ceremonia</h3>
                    <p class="text-sm text-[#7A6B5D] mt-1">Se solicita puntualidad
                        rigurosa.</p>
                </div>
                <div
                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7]">
                </div>
                <div class="mt-4 md:mt-0 md:pl-12">
                    <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                        📍 Jardin las flores. Ubicación exacta en el mapa de abajo
                    </div>
                </div>
            </div>

            <!-- Event 2 -->
            <div v-if="invitadoEspecial" class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="flex flex-col md:contents">
                    <!-- Textos (Arriba en móvil, Derecha en Desktop) -->
                    <div class="md:order-3 md:pl-12 order-1">
                        <span
                            class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">05:00
                            PM</span>
                        <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Ceremonia de registro civil</h3>
                        <p class="text-sm text-[#7A6B5D] mt-1">Union en matrimonio de los novios.</p>
                    </div>

                    <!-- Círculo central (Oculto en mobile) -->
                    <div
                        class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7] md:order-2">
                    </div>

                    <!-- Tarjeta de ubicación (Abajo en móvil con margen superior, Izquierda en Desktop) -->
                    <div class="mt-4 md:mt-0 md:text-right md:pr-12 md:order-1 order-2">
                        <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                            📍 Jardin las flores
                        </div>
                    </div>
                </div>
            </div>

            <!-- Event 3 -->
            <div class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right md:pr-12">
                    <span
                        class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">05:30
                        PM</span>
                    <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Recepcion de los invitados</h3>
                    <p class="text-sm text-[#7A6B5D] mt-1">Llegada de los invitados al gran evento.</p>
                </div>
                <div
                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7]">
                </div>
                <div class="mt-4 md:mt-0 md:pl-12">
                    <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                        📍 Jardin las flores
                    </div>
                </div>
            </div>

            <!-- Event 4 -->
            <div class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <!-- Contenedor principal que en móvil actúa como columna -->
                <div class="flex flex-col md:contents">
                    <!-- 1. Textos (Hora, Título y Descripción) - Arriba en móvil, Derecha en Desktop (orden 2 en desktop) -->
                    <div class="md:order-3 md:pl-12 order-1">
                        <span
                            class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">06:00
                            PM</span>
                        <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Baile & Fiesta</h3>
                        <p class="text-sm text-[#7A6B5D] mt-1">¡A bailar!</p>
                    </div>

                    <!-- Círculo central (Se mantiene oculto en mobile igual que en tu segundo ejemplo) -->
                    <div
                        class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7] md:order-2">
                    </div>

                    <!-- 2. Tarjeta de ubicación - Abajo en móvil, Izquierda en Desktop (orden 1 en desktop) -->
                    <div class="mt-4 md:mt-0 md:text-right md:pr-12 md:order-1 order-2">
                        <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                            📍 Jardin las flores
                        </div>
                    </div>
                </div>
            </div>

            <!-- Event 5 -->
            <div class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right md:pr-12">
                    <span
                        class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">08:00
                        PM</span>
                    <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Cena</h3>
                    <p class="text-sm text-[#7A6B5D] mt-1">A rellenar el tanque.</p>
                </div>
                <div
                    class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7]">
                </div>
                <div class="mt-4 md:mt-0 md:pl-12">
                    <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                        📍 Jardin las flores
                    </div>
                </div>
            </div>

            <!-- Event 6 -->
            <div class="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="flex flex-col md:contents">
                    <!-- Textos (Arriba en móvil, Derecha en Desktop) -->
                    <div class="md:order-3 md:pl-12 order-1">
                        <span
                            class="text-xs tracking-widest uppercase px-3 py-1 bg-[#F4F1EA] text-[#8C5E46] rounded-full font-medium inline-block mb-2">11:00
                            PM</span>
                        <h3 class="font-serif text-xl text-[#3D312A] font-semibold">Fin de la velada</h3>
                        <p class="text-sm text-[#7A6B5D] mt-1">¡Muchas gracias por formar parte de nuestro momento!</p>
                    </div>

                    <!-- Círculo central (Oculto en mobile) -->
                    <div
                        class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#8C5E46] rounded-full border-4 border-[#FDFBF7] md:order-2">
                    </div>

                    <!-- Tarjeta de ubicación (Abajo en móvil con margen superior, Izquierda en Desktop) -->
                    <div class="mt-4 md:mt-0 md:text-right md:pr-12 md:order-1 order-2">
                        <div class="bg-white p-4 rounded-xl border border-[#EFECE6] text-xs text-[#8A7968]">
                            📍 Cada quien para su casa :3
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import useURLParams from '../composables/useURLParams';

// url params
const { invitadoEspecial } = useURLParams();
</script>