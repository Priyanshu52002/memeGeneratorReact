import "./hero.css"
import React from 'react';
function Hero(){
    const[meme,setmeme]=React.useState({
      topText:"",
      bottomText:"",
      randomImage:"https://www.shutterstock.com/shutterstock/photos/2230690077/display_1500/stock-vector-doge-meme-dog-with-thug-life-glasses-vector-illustration-2230690077.jpg"
    })
    const[memesData,setmemesData]=React.useState([])
    React.useEffect(function(){
            fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setmemesData(data.data.memes))
    },[])
  console.log(memesData)
    function getmemeImage(){
      const memesarray=memesData;
      const randomNumber=Math.floor(Math.random()*memesarray.length);
      const URL=memesarray[randomNumber].url
      setmeme(prevData=>{
        return{
          ...prevData,
          randomImage:URL
        }
      })
    }
    function handleChange(event){
      const{value,type,name}=event.target
      setmeme(prevData=>{
        return{
          ...prevData,
          [name]:value
        }
      })
    }
    return(
      <main>

          <div className="HeroForm">
            <div className="inputSection">
            <input type="text" className="textTop" placeholder="Write a Text for top" name="topText" onChange={handleChange} value={meme.topText}/>
            <input type="text" className="textBottom" placeholder="Write a Text for Bottom" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
            </div>
            <div className="btncontainer">
            <button className="imageBtn" onClick={getmemeImage}>Get A New Meme Image</button>
            </div>
            
            <img/>
          </div>

          <div className="memes">
            <img src={meme.randomImage} width="450px" height="450px"/>
            <h2 className="TopText">{meme.topText}</h2>
            <h2 className="BottomText">{meme.bottomText}</h2>
          </div>
      </main>
    )
}
export default Hero