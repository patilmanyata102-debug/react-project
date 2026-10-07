
import {ArrowRight} from 'lucide-react'



const LeftCard=(props)=>{
  console.log(props)
    return(
        <div className="LeftCard">
    
       <img src={props.image}/>
      <div className="bar">
        <h2 className="numbers">{props.id+1}</h2>
      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, maxime sit? Numquam soluta a, aut maiores nihil necessitatibus modi inventore, voluptatum similique repellendus hic sunt officiis at autem obcaecati. Accusantium.</p>
      <div className='btns'>
        
        <button className='btn1'>{props.tag}</button>
        <button className='btn2'><ArrowRight /></button>
      </div>
     </div>
  </div>
    
    )
}

export default LeftCard;