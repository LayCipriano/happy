import '../assets/styles/Header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className="info">

                    <h1>Laysa Cipriano</h1>

                    <div className="skills">
                        <ul>
                            <li>Desenvolvimento Web</li>
                            <li>Front End</li>
                            <li>Back End</li>
                            <li>API's</li>
                            <li>Python</li>
                            <li>React</li>
                        </ul>
                    </div>

                    <div className="social">
                        <div className="links">
                            <a href="https://www.linkedin.com/in/lay-cipriano" target='_blank' className='item-link'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/LayCipriano" target='_blank' className='item-link'><i className="fa-brands fa-square-github"></i></a>
                            <a href="mailto:webdevlay@gmail.com" target='_blank' className='item-link'><i className="fa-solid fa-envelope"></i></a>
                        </div>
                    </div>

                    <div className="presentation">
                        <p><span>Desenvolvedora Web Júnior</span>, formada em <span>Sistemas para Internet</span> pela <span>Universidade Unicesumar</span> em 2022. Iniciei minha carreira na área de <span>Testes e Qualidade</span>, definindo regras de negócio, treinamentos de ferramentas desenvolvidas, testes manuais E2E e distribuição para a nossa rede de franqueados. </p>
                    </div>
                </div>
            </header>
        </>
    )
}

