const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let mainEl = document.getElementById("main-el");

console.log(mainEl)

function renderPostSections(){
    
    let sections = ""
    
    for (let i = 0; i< posts.length; i++){
        // console.log(i)
        sections +=
        `
        <section>
                <div class = "user-header">
                    <img class = "other-profile-pic" src = "${posts[i].avatar}">
                    <div class = "user-info">
                        <p class = "bold">${posts[i].name}</p>
                        <p>${posts[i].location}</p>
                    </div>

                </div>
                <div>
                        <img class = "other-post" src = "${posts[i].post}">
                </div>
                
                <div class = "footer-container">
                    <img class= "misc-buttons" src = "images/icon-heart.png">
                    <img class= "misc-buttons" src = "images/icon-comment.png">
                    <img class= "misc-buttons" src = "images/icon-dm.png">
                </div>
                <p class = "bold user-desc">${posts[i].likes} likes</p>
                <p class= "user-desc" ><span class = "bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
        
        
        `
    }
    mainEl.innerHTML = sections
    
    
    
}

renderPostSections()

console.log(posts[1].name)

