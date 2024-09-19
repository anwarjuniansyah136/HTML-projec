
const search = document.querySelector("#search")
const form = document.querySelector("form")
form.addEventListener("submit", async function(e){
    e.preventDefault()
    const menu = document.querySelector("#menu")
    let increment = 0
    menu.innerHTML = ""
    console.log(search.value)
       await fetch("https://api.jikan.moe/v4/manga/2/recommendations")
        .then((response) => response.json())
        .then((result) =>{
            const data = result.data
            for(let x = 0; x < data.length; x++){
                const deskripsi = data[x].entry.title
                console.log(deskripsi)
                const lwr = deskripsi.toLowerCase()
                const arr = lwr.split(" ")
                for(let i = 0; i < arr.length; i++){
                    const deskripsi2 = search.value
                    const lwr2 = deskripsi2.toLowerCase()
                    const arr2 = lwr2.split(" ")
                    for(let j = 0; j < arr2.length; j++){
                        if(arr[i] == arr2[j]){
                            const div = document.createElement("a")
                            div.target = "_blank"
                            div.href = data[x].url
                            div.className = "isi"
                            menu.appendChild(div)
    
                            const a = document.createElement("a")
                            a.href = data[x].url
                            a.target = "_blank"
                            a.innerText = data[x].entry.title
                            div.appendChild(a)
    
                            const img = document.createElement("img")
                            img.src = data[x].entry.images.jpg.image_url
                            div.appendChild(img)
                            increment++;
                            console.log(increment)
                        }
                    }
                }
            }
        })

        if(increment === 0){
            const menu = document.querySelector("#menu")
            const h1 = document.createElement("h1")
            h1.innerText = "404 NOT FOUND"
            h1.id = "text"
            menu.appendChild(h1)
        }
    
})