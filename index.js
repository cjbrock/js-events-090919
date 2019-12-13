document.addEventListener("DOMContentLoaded", function(){
    console.log("Dom is loaded")
    giveFormEvent()
    clickEvent()
    mouseOverEvent()
    buttonEvent()
})

function getFormData(){
    return {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        content: document.getElementById("content").value
    }

}

function postHTML(post){
    return `
    <div class="card">
        <div class="card-content">
            <span class="card-title">${post.title}</span>
            <p>By: ${post.author}</p>
            <p>${post.content}</p>
        </div>
    </div>
    `
}

const attachPost = function(post){
    document.querySelector(".post-lists").innerHTML += post
}

const clearForm = () => {
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("content").value = ""
}

function giveFormEvent(){
    const form = document.querySelector("#blog-form")
    form.addEventListener("submit", function(event){
        event.preventDefault()
        // get form data
        const post = getFormData()
        // create HTML post
        const htmlPost = postHTML(post)
        // attach HTML to the bottom of existing list
        attachPost(htmlPost)
        // clear form data
        clearForm()
    })
}

const colors = ["red", "green", "white", "yellow"]
let index = 0
const maxIndex = colors.length


const changeColor = (title) => {
    title.style.color = colors[index++]
            if (index == maxIndex){
                index = 0
            }
}

// change color of H3 on click
function clickEvent(){
    const title = document.querySelector(".post-lists h3")
    title.addEventListener("click", function(){
        changeColor(title)
    })
}

// change color of H1 on mouseover
function mouseOverEvent(){
    const header = document.querySelector("h1")
    header.addEventListener("mouseover", ()=>changeColor(header))
}


// click button to change background color
function buttonEvent(){
    const allPosts = document.querySelector(".post-lists")
    const colors = ["red", "green", "white", "yellow"]
    let index = 0
    const maxIndex = colors.length
    allPosts.addEventListener("click", function(e){
        if (e.target.className === "colorButton"){
            e.target.parentElement.parentElement.style.backgroundColor = colors[index++]
            if(index == maxIndex){
                index = 0;
            }
        }
    })
}