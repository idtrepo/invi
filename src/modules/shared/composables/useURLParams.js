import { ref, onMounted } from 'vue'

const ls = localStorage;
const invitadoEspecial = ref('');
const invitadoAcompaniado = ref('');

export default () => {
    onMounted(() => {
        const contador = parseInt(ls.getItem('c'));

        if (contador > 1) {
            invitadoEspecial.value = ls.getItem('ie');
            invitadoAcompaniado.value = ls.getItem('ia');
            return;
        }

        const params = new URLSearchParams(window.location.search);
        invitadoEspecial.value = params.get('ie') ?? '';
        invitadoAcompaniado.value = params.get('ia') ?? '';

        ls.setItem('ie', invitadoEspecial.value);
        ls.setItem('ia', invitadoAcompaniado.value);
    });

    return {
        invitadoEspecial,
        invitadoAcompaniado
    }
}