import {useEffect, useState} from "react"
import getProjects from "../services/ProjectService"; //api service
import Projects from "./Projects"; //project list

export default function Portfolio() {

  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    getProjects()
    .then(data => setProjetos(data))
    .catch(error => console.log("Erro ao buscar a lista de projetos!", error))
  }, [])
  
  return (
    <div className="boxes">
      {projetos.map(projeto => <Projects data={projeto}/>)}
    </div >
  )
}

