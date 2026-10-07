import Navbar from './Navbar'
import Page1Content from './page1Content'



const Section1=({users})=>{
    return(
       <div className="section1">
     <Navbar />
      <Page1Content users={users}/>
    </div>
    )
}

export default Section1;