const buttons = document.querySelectorAll('.btn')
const container = document.querySelector('.scrolling_container')
let boxes = document.querySelectorAll('.feature_box')
buttons[0].addEventListener('click', () => {
    container.scrollBy({left:80, behavior:'smooth'})
})
buttons[1].addEventListener('click', () => {
    container.scrollBy({left:-80, behavior:'smooth'})
})

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        clearInterval(play)
    })
    box.addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 15)
    })
})