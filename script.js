//display funcation for the code for the display alub in the card container 
async function displayAlbums() {
    console.log("display Albums");
    let a= await fetch(`/songs/`)
    let responce = await a.text();
    let div = document.createElement("div")
    div.innerHTML = responce;
 let anchors = div.getElementsByTagName("a")
   let cardcontainer = document.querySelector(".cardcontainer");
   let array = Array.from(anchors);
   for (let index = 0; index < array.length; index++) {
    const e = array[index];
    if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
        let folder = e.href.split(-2)[0]
     //get the metadata of the folder 
     let a = await fetch(`/songs/${folder}/info.json`) 
     let responce = await a.json();
     cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <img src = "/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`      
    }
    
   }
    
}