import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const Page1Content=(props)=>{
   
    return(
        <div className="page1Content">
     
    <RightContent />
    <LeftContent id={props.id} users={props.users}/>
    </div>
    )
}

export default Page1Content;