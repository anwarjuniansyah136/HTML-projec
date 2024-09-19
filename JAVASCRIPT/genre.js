const link = ["https://api.jikan.moe/v4/anime?q=anime action&sfw",
            "https://api.jikan.moe/v4/anime?q=anime adventure&sfw",
            "https://api.jikan.moe/v4/anime?q=anime comedy&sfw",
            "https://api.jikan.moe/v4/anime?q=anime demons&sfw",
            "https://api.jikan.moe/v4/anime?q=anime ecchi&sfw",
            "https://api.jikan.moe/v4/anime?q=anime fantasy&sfw",
            "https://api.jikan.moe/v4/anime?q=anime game&sfw",
            "https://api.jikan.moe/v4/anime?q=anime harem&sfw",
            "https://api.jikan.moe/v4/anime?q=anime historycal&sfw",
            "https://api.jikan.moe/v4/anime?q=anime horror&sfw",
            "https://api.jikan.moe/v4/anime?q=anime josei&sfw",
            "https://api.jikan.moe/v4/anime?q=anime magic&sfw",
            "https://api.jikan.moe/v4/anime?q=anime martial arts&sfw",
            "https://api.jikan.moe/v4/anime?q=anime mecha&sfw",
            "https://api.jikan.moe/v4/anime?q=anime military&sfw",
            "https://api.jikan.moe/v4/anime?q=anime music&sfw",
            "https://api.jikan.moe/v4/anime?q=anime mystery&sfw",
            "https://api.jikan.moe/v4/anime?q=anime pshilogical&sfw",
            "https://api.jikan.moe/v4/anime?q=anime parody&sfw",
            "https://api.jikan.moe/v4/anime?q=anime police&sfw",
            "https://api.jikan.moe/v4/anime?q=anime romance&sfw",
            "https://api.jikan.moe/v4/anime?q=anime samurai&sfw",
            "https://api.jikan.moe/v4/anime?q=anime school&sfw",
            "https://api.jikan.moe/v4/anime?q=anime sci-fi&sfw",
            "https://api.jikan.moe/v4/anime?q=anime seinen&sfw",
            "https://api.jikan.moe/v4/anime?q=anime shoujou&sfw",
            "https://api.jikan.moe/v4/anime?q=anime shoujou Ai&sfw",
            "https://api.jikan.moe/v4/anime?q=anime shounen&sfw",
            "https://api.jikan.moe/v4/anime?q=anime slice of life&sfw",
            "https://api.jikan.moe/v4/anime?q=anime sports&sfw",
            "https://api.jikan.moe/v4/anime?q=anime space&sfw",
            "https://api.jikan.moe/v4/anime?q=anime super power&sfw",
            "https://api.jikan.moe/v4/anime?q=anime supernatural&sfw",
            "https://api.jikan.moe/v4/anime?q=anime thriller&sfw",
            "https://api.jikan.moe/v4/anime?q=anime vampire&sfw"]
// onclick genre
async function action(){
    await fetch(link[0])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function adventure(){
    await fetch(link[1])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function comedy(){
    await fetch(link[2])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function demons(){
    await fetch(link[3])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function drama(){
    await fetch(link[4])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function ecchi(){
    await fetch(link[5])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function fantasy(){
    await fetch(link[6])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function game(){
    await fetch(link[7])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function harem(){
    await fetch(link[8])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function historycal(){
    await fetch(link[9])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function horror(){
    await fetch(link[10])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function josei(){
    await fetch(link[11])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function magic(){
    await fetch(link[12])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function martial(){
    await fetch(link[13])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function mecha(){
    await fetch(link[14])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function military(){
    await fetch(link[15])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function music(){
    await fetch(link[16])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function mystery(){
    await fetch(link[17])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function pshilogical(){
    await fetch(link[18])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function parody(){
    await fetch(link[19])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function police(){
    await fetch(link[20])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function romance(){
    await fetch(link[21])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function samurai(){
    await fetch(link[22])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function school(){
    await fetch(link[23])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function sci(){
    await fetch(link[24])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function seinen(){
    await fetch(link[25])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function shoujou(){
    await fetch(link[26])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function shoujouai(){
    await fetch(link[27])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function shounen(){
    await fetch(link[28])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function slice(){
    await fetch(link[29])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function sports(){
    await fetch(link[30])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function space(){
    await fetch(link[31])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function superpower(){
    await fetch(link[32])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function supernatural(){
    await fetch(link[33])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function thriller(){
    await fetch(link[34])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}
async function vampire(){
    await fetch(link[35])
    .then((response) => response.json())
    .then((result) =>{
        const data = result.data;
        const menu = document.querySelector("#menu2")
        menu.innerHTML = ""
        data.map((d) => {
            const div = document.createElement("a")
            div.href = d.url
            div.target = "_blank"
            menu.appendChild(div)
            div.className = "isi"

            const a = document.createElement("a")
            a.href = d.url
            a.innerText = d.title
            a.target = "_blank"
            div.appendChild(a)

            const img = document.createElement("img")
            img.src = d.images.jpg.image_url
            div.appendChild(img)

            const p = document.createElement("p")
            p.innerText = "Episode" +" " + d.episodes
            div.appendChild(p)
            console.log(a)
        })
    })
}  
// search
const search = document.querySelector("#search")
const form = document.querySelector("form")
form.addEventListener("submit", async function(e){
    e.preventDefault()
    const menu = document.querySelector("#menu")
    let increment = 0
    menu.innerHTML = ""
    console.log(search.value)
       await fetch("https://api.jikan.moe/v4/anime?q=anime%20on%20going&sfw")
        .then((response) => response.json())
        .then((result) =>{
            const data = result.data
            for(let x = 0; x < data.length; x++){
                const deskripsi = data[x].title
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
                            a.innerText = data[x].title
                            div.appendChild(a)
    
                            const img = document.createElement("img")
                            img.src = data[x].images.jpg.image_url
                            div.appendChild(img)
    
                            const p = document.createElement("p")
                            p.innerText = "Episode" + data[x].episodes
                            div.appendChild(p)
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