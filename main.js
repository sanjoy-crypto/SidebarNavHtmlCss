const hamburger = document.querySelector('.hamburger')
const backdrop = document.querySelector('.backdrop')
const sidebar = document.querySelector('.sidebar')


hamburger.addEventListener('click',()=>{
    toggleSidebar()
})
backdrop.addEventListener('click',()=>{
    toggleSidebar()
})

const toggleSidebar = () => {
    backdrop.classList.toggle('backdrop__active')
    sidebar.classList.toggle('sidebar__active')
}