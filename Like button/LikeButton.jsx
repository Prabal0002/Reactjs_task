
import {useState} from 'react';
export default function LikeButton(){
 let [isLiked, setIsliked]=useState(false);
let[clicks,setClicks] = useState(0);

   let toggleLike=() =>{

    setIsliked(!isLiked);
    setClicks(clicks+1);
    
  };
   let likeStyle={color:"red"
};
 return (
   <div>
   <h1>Clicks={clicks}</h1>
  <p onClick ={toggleLike}>{isLiked? ( <i className="fa-solid fa-heart" style={likeStyle}></i>
 ):(

     <i className="fa-regular fa-heart"></i>
     )}

     </p>
     
   </div>
 );
  
}






