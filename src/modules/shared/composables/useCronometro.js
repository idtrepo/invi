import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

export default (fecha) => {
    const targetDate = new Date(fecha).getTime();
    const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            timeLeft.value = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }
    };

    let timerInterval = null;
    onMounted(() => {
        updateCountdown();
        timerInterval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
        clearInterval(timerInterval);
    });


    return {
        timeLeft
    }
}