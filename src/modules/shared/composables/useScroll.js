import { ref } from 'vue'

const mobileMenuOpen = ref(false);

export default () => {

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        mobileMenuOpen.value = false;
    };

    return {
        mobileMenuOpen,
        scrollToSection
    }
}