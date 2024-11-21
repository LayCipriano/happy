import easyMessage from '../assets/img/easyMessage.png'
import toDoList from '../assets/img/toDoList.png'
import buscadorCep from '../assets/img/buscadorCep.png'
import portfolio from '../assets/img/portfolio.png'

export default function Portfolio() {
  const itens = [
    {
      nome: "Easy Message",
      image: easyMessage,
      descricao: "Aplicação desenvolvida, com HTML, CSS e JS para o envio de mensagens no WhatsApp. Por ela você consegue enviar grandes textos com facilidade, aplicar formatações suportadas pelo app ou até mesmo iniciar chats sem salvar o contato.",
      botaoProjeto: "Ver Website",
      botaoGithub: "GitHub",
      linkProjeto: "https://easymessage.laycipriano.com.br/",
      linkRepo: "https://github.com/LayCipriano/easyMessage"
    },
    {
      nome: "To Do List",
      image: toDoList,
      descricao: "Desenvolvido utilizando ReactJs e alguns conceitos de useState. O mesmo armazena os dados no LocalStorage do navegador, permitindo ao usuário fechar a aba do navegador e continuar com os dados salvos para mais tarde.",
      botaoProjeto: "Ver Website",
      botaoGithub: "GitHub",
      linkProjeto: "https://todolist.laycipriano.com.br/",
      linkRepo: "https://github.com/LayCipriano/toDoList"
    },
    {
      nome: "Buscador de CEP",
      image: buscadorCep,
      descricao: "Projeto de um buscador de CEP gratuito, consumindo uma API da viacep.com.br para localizar o endereço. Reconhece e exibe rua/avenida, bairro, cidade/UF e complemento, se disponível.",
      botaoProjeto: "Ver Website",
      botaoGithub: "GitHub",
      linkProjeto: "https://buscadorcep.laycipriano.com.br/",
      linkRepo: "https://github.com/LayCipriano/buscadorCEP"
    },
    {
      nome: "Meu Portfólio",
      image: portfolio,
      descricao: "Meu próprio portfólio é meu último projeto desenvolvido com ReactJs. Anteriormente produzido com uso de HTML, CSS, JS e PHP, esta nova versão se encontra aprimorada com meus últimos conhecimentos da famosa biblioteca e novos pacotes descobertos.",
      botaoProjeto: "Ver Website",
      botaoGithub: "GitHub",
      linkProjeto: "https://laycipriano.com.br/",
      linkRepo: "https://github.com/LayCipriano/portfolioV3"
    },
  ];

  return (
    <div className="boxes">
      {itens.map((item, index) => (
        <div key={index} className="box-item">
          <img src={item.image} alt='Printscreen do website' />
          <span className='titulo-span'>{item.nome}</span>
          <p className='description'>{item.descricao}</p>

          <div className="btns">
            <a href={item.linkProjeto} target='_blank'>Ver Website</a>
            <a href={item.linkRepo} target='_blank'>GitHub</a>
          </div>
        </div>
      ))}
    </div>
  )
}

