<template>
    <div v-if="activeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 space-y-6 shadow-2xl relative animate-fade-in">
            <button @click="activeModal = null" class="absolute top-4 right-4 text-[#8A7968] hover:text-[#3D312A]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Modal 3 -->
            <div v-if="activeModal === 'gift3'" class="space-y-4">
                <h3 class="font-serif text-2xl text-[#3D312A]">Datos Bancarios (Luna de Miel)</h3>
                <p class="text-sm text-[#7A6B5D]">Agradecemos de corazón tu valioso apoyo para nuestra nueva etapa
                    juntos:</p>
                <div class="bg-[#F9F7F2] p-4 rounded-xl space-y-2 text-sm font-mono text-[#4A3B32]">
                    <p>Banco: <strong>BBVA Bancomer</strong></p>
                    <p>Titular: <strong>Isaac Zaid Fierro Gonzalez</strong></p>
                    <p>CLABE: <span>4152 3145 9186 1920</span></p>
                </div>
                <button @click="copyToClipboard('4152314591861920', 'clabe')"
                    class="w-full py-3 bg-[#8C5E46] text-white text-xs tracking-widest uppercase rounded-lg hover:bg-[#724B36] transition flex items-center justify-center space-x-2">
                    <span>{{ copiedText === 'clabe' ? '¡CLABE copiada!' : 'Copiar CLABE Interbancaria' }}</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import useModales from '../composables/useModales';
import useCopiarTexto from '../composables/useCopiarTexto';

// modales
const { activeModal } = useModales();

// copiar texto
const { copiedText, copyToClipboard } = useCopiarTexto();
</script>