export default function Projects(props:any) {
  // component to render the list of projects
  return (
    <div className="box-item">
      <img src={props.data.image} alt={props.data.title} />
      <span className='titulo-span'>{props.data.title}</span>
      <p className='description'>{props.data.description}</p>

      <div className="btns">
        {props.data.linkProject && (
          <a href={props.data.linkProject} target='_blank'>Acessar</a>
        )}
        <a href={props.data.linkRepo} target='_blank'>GitHub</a>
      </div>
    </div>
  )
}
