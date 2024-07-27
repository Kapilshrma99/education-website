import "./Title.css"

const Title = ({title,subTitle}) => {
  return (
    <div className="Title">
        <p>{title}</p>
        <h2>{subTitle}</h2>
      
    </div>
  )
}

export default Title
