import { ref } from 'vue'

const copiedText = ref('');

export default () => {
    const copyToClipboard = async (text, key) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        copiedText.value = key;
        setTimeout(() => {
            copiedText.value = '';
        }, 2500);
    };

    return {
        copiedText,
        copyToClipboard,
    }
}