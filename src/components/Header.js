import Logo from "../images/Screenshot 2023-11-24 143128.png"
import  "./header.css"
function Header(){
    return(
      <div className="header">
        <div className="rightSectionHeader">
            <img src={Logo} className="memeImage"/>
            <h3>Meme Generator</h3>
        </div>
        <h4>React-Course-Project</h4>
      </div>
    )
}
export default Header