import React,{useState} from 'react'

const Tour = (props) => {
    let [isExpanded,setIsExpanded]=useState(true);
    let desire_text=isExpanded?props.info.substring(0,200):props.info;
    
    
  return (
    <div>
        <h2>{props.id}</h2>
        <h3>{props.name}</h3>
        <>
        <p id={`tour-item-para-${props.id}`}>{desire_text}...</p>
        <button  id={`see-more-${props.id}`} onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded?"See more":"See less"}</button>
        </>
        <img src={props.image}></img>
        <h3>{props.price}</h3>
        <button id={`delete-btn-${props.id}`} onClick={() => props.afterDelete(props.id)}>Delete tour</button>

    </div>
  )
}

export default Tour





// {
//     "id": "recIwxrvU9HfJR3B4",
//     "name": "Best of Ireland in 14 Days Tour",
//     "info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
//     "image": "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
//     "price": "3,895"
//   }