import { onMounted, computed, ref } from 'vue'

const ls = localStorage;
const cargando = ref(false);

export default () => {
    const rsvpSubmitted = ref(false);
    const rsvpForm = ref({
        invitado: '',
        acompa: '',
        podra: 'si',
    });
    const datosFormateados = computed(() => ({
        invitado: rsvpForm.value.invitado.toUpperCase(),
        acompa: rsvpForm.value?.acompa?.toUpperCase() ?? 'SIN ACOMPAñANTE',
        podra: rsvpForm.value.podra.toUpperCase(),
    }))

    const submitRsvp = async () => {
        if (!rsvpForm.value.invitado) {
            return;
        }

        cargando.value = true;

        try {
            await fetch('https://script.google.com/macros/s/AKfycbwTh0axqldhUnmcsyVNDeRlg6h4J6fI5GQN28vhtQNT6hV4rwm-ex8RmJqbYR4n6fJ_Ug/exec', {
                method: 'POST',
                body: JSON.stringify(datosFormateados.value)
            })
            rsvpSubmitted.value = true;
            ls.setItem('rsvpSubmitted', 'true');
        } catch (err) {
            console.error(err);
        } finally {
            cargando.value = false;
        }

    };

    onMounted(() => {
        const formularioEnviado = ls.getItem('rsvpSubmitted');

        if (formularioEnviado) {
            console.log('Este formulario ya se contesto anteriormente');
            rsvpSubmitted.value = !!formularioEnviado;
        }
    });

    return {
        rsvpSubmitted,
        rsvpForm,
        cargando,
        submitRsvp
    }
}