export function useDraggableSlider() {
    const slider = ref()
    onMounted!(() => {
        let isDown = false
        let startX
        let scrollLeft

        if (slider.value) {
            slider.value.addEventListener('mousedown', (e) => {
                isDown = true
                slider.value.classList.add('active')
                startX = e.pageX - slider.value.offsetLeft
                scrollLeft = slider.value.scrollLeft
            })
            slider.value.addEventListener('mouseleave', () => {
                isDown = false
                slider.value.classList.remove('active')
            })
            slider.value.addEventListener('mouseup', () => {
                isDown = false
                slider.value.classList.remove('active')
            })
            slider.value.addEventListener('mousemove', (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - slider.value.offsetLeft
                const walk = (x - startX) * 2 //scroll-fast
                slider.value.scrollLeft = scrollLeft - walk
            })
        }
    })

    return {sliderRef: slider}
}
