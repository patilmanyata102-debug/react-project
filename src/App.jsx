import './index.css'
import Section1 from './components/section-1/section1'
import Section2 from './components/section-2/section2'



const App = () => {

  const users=[
    { image:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" , 
      intro:"" ,
      tag:"Satisfied"
    }
,
    { image:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D" ,
       intro:"" ,
       tag:"Underserved"
      }
       ,
    {  image:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" ,
       intro:"" ,
       tag:"Underbanked"
      }
,
    {
      image:"https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:"",
      tag:"Unsatisfied"
    }

  ];
    
  
  return (
    <div>
 
   <Section1  users={users}/>
   <Section2/>
  
   </div>
 )
}

export default App


