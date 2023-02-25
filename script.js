const linkbox = document.querySelectorAll('.linkbox')

linkbox.forEach((linkbox) => {
    linkbox.addEventListener('click', () => {
        removeActiveClassses()
        linkbox.classList.add('active')
    })
})

function removeActiveClassses() {
    linkbox.forEach((linkbox) => {
        linkbox.classList.remove('active')
    })
}