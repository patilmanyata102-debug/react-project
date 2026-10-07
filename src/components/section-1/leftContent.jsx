import LeftCard from "./LeftCard";
import RightCard from "./LeftCard";
import RightContent from "./rightContent";

const LeftContent=(props)=>{
    console.log(props)
    return(
        <div id="left" className="LeftContent">
   {props.users.map(function(elem,idx){
    return(
        <LeftCard image={elem.image} tag={elem.tag} key={idx} id={idx}/>
    )
   })}
     

    </div>
    )
}

export default LeftContent;