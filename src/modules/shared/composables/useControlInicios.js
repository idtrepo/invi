import { onMounted, ref } from 'vue'

const ls = localStorage;

export default () => {

    onMounted(() => {
        let contador = ls.getItem('c');

        if (!contador)
            return ls.setItem('c', '1');

        contador = parseInt(contador);
        contador++;

        ls.setItem('c', contador.toString());
    });
}