function Dropdown({className,title,items}){

    const onClick = () =>{

    }
    
    const renderItems = () =>{
        return items.map((item,index)=> {
            return (
                <li key={`${item}-${index}`}>
                    {item}
                </li>
            )
        })
    }

    return(
        <>
        <button 
            className={className}
            onClick={onClick}
        >
            {title}
        </button>

        {renderItems()}

        </>
    )
    
}

export default Dropdown;