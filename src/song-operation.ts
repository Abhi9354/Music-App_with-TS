import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";

//make call to api client get the data and fill in model
export async function getAllSongs(singerName:string="Sonu Nigam"){
const data=await getSongs();
const singers:Singer[]=[];
data.results.map((obj:any)=>{
    const  singer:Singer = new Singer(obj['artistName'], obj['trackName'],obj['artworkUrl100'] ,obj['previewUrl']);
    singers.push(singer)
    
})
console.log("all dta is ",singers);
return singers;
}
getAllSongs();