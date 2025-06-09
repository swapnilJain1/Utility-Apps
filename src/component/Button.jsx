const Button = ({onClick, children}) =>{
    return<>
        <button className="common-button" onClick={onClick}>{children}</button>
    </>
}
export default Button