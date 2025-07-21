import { useState } from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom';
function Dropdown({title,items}){
    const [visibility,setVisibility] = useState(false);
    const onClick = () =>{
        setVisibility(prev=>!prev)
    }
    
    const renderItems = () =>{
        return items.map((item,index)=> {
            return (
                <li 
                    key={`${item.title}-${index}`}
                    className={`dropdown-item`}
                >
                    <Link onClick={()=>item.onFunctionCall()} to={item.path}>{item.title}</Link>
                </li>
            )
        })
    }

    return(
        <>
        <div className='dropdown'>
        <button 
            className={'dropdown-button'}
            onClick={onClick}
        >
            {title}
        </button>
        <ul className={`dropdown-list ${visibility?'':'hidden'}`}>
            {renderItems()}
        </ul>
        
</div>
        </>
    )
    
}

export default Dropdown;