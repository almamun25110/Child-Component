import { useState } from "react"
import { questions } from "./data/questions"


export default function Faqs() {
    let [currentId, setCurrentId] = useState(questions[0].id);
    let Items = questions.map((itemsData, index)=>{
    let itemDetails={
        itemsData,
        currentId,
        setCurrentId
    }
        return(
            <FaqItems itemDetails = {itemDetails} key={index}/>
        )
    })
  return (
        <div>
            <h1>Frequently Asked Questions(FAQs)</h1>
            <div className='faqOuter'>
                {Items}
            </div>
        </div>
    )
}
function FaqItems ({itemDetails}){
    let {itemsData, currentId, setCurrentId} = itemDetails;
    return(
        <div className='faqItems'>
            <h2 onClick={()=>setCurrentId(itemsData.id)}>{itemsData.question}</h2>
            <p className={currentId==itemsData.id ? "active" : ''}>{itemsData.answer}</p>
        </div>
    )
}