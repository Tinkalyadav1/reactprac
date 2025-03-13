function Button () {
    function handleClick(){
        alert ('You Clicked Me!!');
    }
    return(
        <button onClivk ={handleClick}>
            Click me!
        </button>
    );
    
}
export default Button;