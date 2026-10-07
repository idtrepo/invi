<template>
    <section id="rsvp" class="py-24 bg-[#F7F4EE] px-6">
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#EFECE6]">

            <div class="text-center space-y-3 mb-10">
                <p class="text-xs tracking-[0.3em] uppercase text-[#9C7A5B] font-medium">Confirma tu asistencia</p>
                <h2 class="font-serif text-3xl md:text-4xl text-[#3D312A]">Recepcion</h2>
                <div class="w-12 h-0.5 bg-[#DCD5C9] mx-auto mt-2"></div>
                <p class="text-sm text-[#7A6B5D]">
                    Por favor confirma antes del <strong class="text-[#3D312A]">18 de Octubre de 2026</strong>
                    para asegurar tu lugar.
                </p>
            </div>

            <!-- Success Alert -->
            <div v-if="rsvpSubmitted"
                class="bg-[#EAF3EC] border border-[#C2D6C5] text-[#2D5A38] p-6 rounded-xl text-center space-y-2">
                <svg class="w-10 h-10 mx-auto text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="font-serif text-xl font-semibold">¡Muchas gracias por confirmar!</h3>
                <p class="text-sm">Hemos registrado tu respuesta exitosamente. ¡Nos encantará compartir este gran
                    día contigo!</p>
            </div>

            <!-- RSVP Form -->
            <form v-else @submit.prevent="submitRsvp" class="space-y-6">

                <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div class="space-y-2">
                        <label class="block text-xs uppercase tracking-widest text-[#7A6B5D] font-medium">Nombre
                            Completo *</label>
                        <input v-model="rsvpForm.invitado" type="text" placeholder="Ej. María Pérez González" required
                            class="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E2DBD0] rounded-lg text-sm focus:outline-none focus:border-[#8C5E46]" />
                    </div>
                    <div v-if="invitadoAcompaniado" class="space-y-2">
                        <label class="block text-xs uppercase tracking-widest text-[#7A6B5D] font-medium">Nombre
                            Completo del acompañante</label>
                        <input v-model="rsvpForm.acompa" type="text" placeholder="Ej. María Pérez González" required
                            class="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E2DBD0] rounded-lg text-sm focus:outline-none focus:border-[#8C5E46]" />
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div class="space-y-2">
                        <label class="block text-xs uppercase tracking-widest text-[#7A6B5D] font-medium">¿Podemos contar con tu compañia?</label>
                        <select v-model="rsvpForm.podra" required
                            class="w-full px-4 py-3 bg-[#FDFBF7] border border-[#E2DBD0] rounded-lg text-sm focus:outline-none focus:border-[#8C5E46]">
                            <option value="si">Sí, cuenten conmigo</option>
                            <option value="no">No, lo lamento</option>
                        </select>
                    </div>
                </div>

                <button type="submit"
                    class="w-full py-4 bg-[#8C5E46] text-white text-xs tracking-[0.2em] uppercase rounded-lg shadow-sm hover:bg-[#724B36] transition duration-300 font-medium" :disabled="cargando">
                    Enviar Confirmación
                </button>

            </form>

        </div>
    </section>
</template>

<script setup>
import useFormulario from '../composables/useFormulario';
import useURLParams from '../composables/useURLParams';

// formulario
const {
    rsvpForm,
    rsvpSubmitted,
    cargando,
    submitRsvp,
} = useFormulario();

// url params
const { invitadoAcompaniado } = useURLParams();
</script>