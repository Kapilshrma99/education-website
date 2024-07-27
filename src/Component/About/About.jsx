import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = ({setplay}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img"/>
        <img src={play_icon} alt="" className="play_icon" onClick={()=>(setplay(true))}/>
      </div>

      <div className="about-right">
      <h3>About University</h3>
        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam dicta maiores atque quia aspernatur deleniti nemo iure illo inventore veritatis a voluptatibus, nam placeat adipisci eveniet, ut sit nesciunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam dicta maiores atque quia aspernatur deleniti nemo iure illo inventore veritatis a voluptatibus, nam placeat adipisci eveniet, ut sit nesciunt.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam dicta maiores atque quia aspernatur deleniti nemo iure illo inventore veritatis a voluptatibus, nam placeat adipisci eveniet, ut sit nesciunt.</p>
        </div>
    </div>

  )
}

export default About
