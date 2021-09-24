const headerNav = document.querySelector('#header-nav')
const headerNavLinks = Array.from(headerNav.children)
const toggler = document.querySelector('.toggler')

toggler.addEventListener('click', () => {
    headerNav.classList.toggle('toggle')
})

headerNavLinks.forEach(link => link.addEventListener('click', e => {
    headerNav.classList.toggle('toggle')
}))