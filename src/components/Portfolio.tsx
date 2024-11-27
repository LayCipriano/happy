import React, {useEffect, useState} from "react"
import axios from "axios"

export default function Portfolio() {

  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    axios.get('https://backend-portfolio-f380.onrender.com/api/projects').then(response => {
      setProjetos(response.data)
    }).catch(error => {
      console.error("Erro ao buscar os conteúdos!", error);
    })
  }, [])
  
  return (
    <div className="boxes">
      {projetos.map((projeto, index) => (
        <div key={index} className="box-item">
          <img src={projeto.image} alt={projeto.title} />
          <span className='titulo-span'>{projeto.title}</span>
          <p className='description'>{projeto.description}</p>

          <div className="btns">
            {projeto.linkProject && (
              < a href={projeto.linkProject} target='_blank'>Acessar</a>
            )}
          <a href={projeto.linkRepo} target='_blank'>GitHub</a>
        </div>
        </div>
      ))
    }
    </div >
  )
}

