

const Button = ({onClick, curText, selectStyle}) => {

    return (
        
        <button
         onClick={onClick}
         type="button" className={`btn ${!selectStyle ? 'btn-form': ''}`}
         >{curText}</button>
    )
}

export default Button
