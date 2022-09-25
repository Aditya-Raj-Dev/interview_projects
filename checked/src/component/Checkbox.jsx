import React, { useEffect, useState } from 'react'

const Checkbox = ({lm,l1,l2,l3}) => {
    const [form,setForm]=useState({
        lm:false,
        l1:false,
        l2:false,
        l3:false
    })
 
    function handlechecked(e){
       const {name,checked}=e.target;

      if(name===l1){
        setForm({...form,
            l1:!form.l1,
        })
       }
       else if(name===l2){
        setForm({...form,
            l2:!form.l2,    
        })
       }
       else if(name===l3){
        setForm({...form,
            l3:!form.l3,
        })
       }
         else if(name===lm){
             setForm({...form,
                lm:!form.lm,
              l1:!form.lm,
              l2:!form.lm,
              l3:!form.lm,
            })
          }
    }
console.log(form)
 useEffect(()=>{
     if(form.l1===true && form.l2===true && form.l3===true){
        setForm({...form,
            lm:true})
       }
   if(form.l1===false || form.l2===false || form.l3===false){
    setForm({...form,
        lm:false})
   }
 },[form.l1,form.l2,form.l3])
  return (
    <div className='checkbox'>
       <div>
        <input type="checkbox"
        name={lm}
        checked={form.lm}
        onChange={handlechecked} />
        <label>{lm}</label>
       </div>
       <div>
        <input type="checkbox" 
         onChange={handlechecked}
         checked={form.l1}
        name={l1}/>
        <label>{l1}</label>
       </div>
       <div>
        <input type="checkbox"
        checked={form.l2}
         onChange={handlechecked}
        name={l2} />
        <label>{l2}</label>
       </div>
       <div>
        <input type="checkbox"
        checked={form.l3}
         onChange={handlechecked}
        name={l3} />
        <label>{l3}</label>
       </div>
    </div>
  )
}

export default React.memo(Checkbox)