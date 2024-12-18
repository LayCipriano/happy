import {useEffect, useState} from "react"
import getProjects from "../services/ProjectService"; //api service
import Projects from "./Projects"; //project list
import SyncLoader from "react-spinners/SyncLoader"

export default function Portfolio() {

  const [projetos, setProjetos] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true) // loading true enquanto os dados são buscados
        getProjects()
        .then((data) => {
          setProjetos(data)
        })
        .catch((error) => {
          console.error("Erro ao buscar a lista de projetos!", error);
        })
        .finally(() => {
          setLoading(false) // loading false, os dados foram carregados
        })
    }, [])

    return (
      <>
      {loading ? (
        <div className="loading"><SyncLoader color="#ffffff"/></div>
      ) : (

      <div className="boxes">
          {projetos.map(projeto => <Projects data={projeto}/>)}
      </div>
      )}
      </>
    )

}
