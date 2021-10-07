// let paragraphs = document.querySelectorAll("p");
// paragraphs.forEach(paragraph =>{
//     if(paragraph.getAttribute('new') == 'true'){
//         paragraph.setAttribute('title', 'This is a new data!')
//     }
//     else {
//         paragraph.setAttribute('title', 'This is an old data!')
//     }
//     console.log(paragraph.innerHTML)
// })

// let header = document.querySelector("#header");
// console.log(header.classList);
// header.classList.add("mr-5","mt-4")
// header.setAttribute('title', 'Hello, World!');

// let btn = document.querySelector("button");
// btn.addEventListener('mousemove', e => {
//     e.target.textContent = "😃"
// })
// btn.addEventListener('mouseout', e => {
//     e.target.textContent = "😕"
// })
let accordion = document.querySelector(".accordion");

Array.from(accordion.children).forEach(wrapper => {
    if(wrapper.classList.contains("show")) {
        wrapper.querySelector("div").style.maxHeight = wrapper.querySelector("div").scrollHeight + 30 + "px"
    }
    wrapper.querySelector("span").addEventListener("click", e => {
        let span = e.target
        let wrapper = span.parentElement
        let div = span.nextElementSibling
        wrapper.classList.toggle("show")
        if(wrapper.classList.contains("show")){
            div.style.maxHeight = div.scrollHeight + 30 + "px"
        }
        else{
            div.style.maxHeight = null
        }
        Array.from(accordion.children).forEach(w => {
            if(w != wrapper){
                w.classList.remove("show")
                w.querySelector('div').style.maxHeight = null
            }
        })
    })
})