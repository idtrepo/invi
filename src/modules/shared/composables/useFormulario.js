import { onMounted, ref } from 'vue'

const ls = localStorage;
const cargando = ref(false);

export default () => {
    const rsvpSubmitted = ref(false);
    const rsvpForm = ref({
        invitado: '',
        acompa: '',
        podra: 'si',
    });

    const submitRsvp = async () => {
        if (!rsvpForm.value.invitado) {
            return;
        }

        cargando.value = true;

        try {
            await fetch('https://script.google.com/macros/s/AKfycbwTh0axqldhUnmcsyVNDeRlg6h4J6fI5GQN28vhtQNT6hV4rwm-ex8RmJqbYR4n6fJ_Ug/exec', {
                method: 'POST',
                body: JSON.stringify({
                    ...rsvpForm.value,
                    podra: rsvpForm.value.podra === 'si'
                        ? true
                        : false,
                })
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