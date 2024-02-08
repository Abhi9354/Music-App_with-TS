// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
import { getAllSongs } from "./song-operation.js";
getAllSongsBySinger();
async function getAllSongsBySinger() {
    const singer = await getAllSongs();
    singer.forEach((singer) => {
        const cardDiv = prepareCard(singer);
        const divSong = document.querySelector("#song");
        divSong?.appendChild(cardDiv);
    });
}
function prepareCard(singer) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "25rem";
    const image = document.createElement("img");
    image.src = singer.photo;
    image.className = "card-img-top";
    cardDiv.appendChild(image);
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const h5 = document.createElement("h5");
    h5.innerText = singer.name;
    h5.className = "card-title";
    cardBody.appendChild(h5);
    cardDiv.appendChild(cardBody);
    const p = document.createElement("p");
    p.innerText = singer.title;
    p.className = "card-text";
    cardBody.appendChild(p);
    const audiodiv = document.createElement("div");
    audiodiv.style.height = "100%";
    audiodiv.style.display = "flex";
    audiodiv.style.alignItems = "flex-end";
    audiodiv.style.marginBottom = "10px";
    audiodiv.style.justifyContent = "center";
    const audio = document.createElement("audio");
    audio.src = singer.audio;
    audio.controls = true;
    audiodiv.appendChild(audio);
    cardDiv.appendChild(audiodiv);
    return cardDiv;
}
