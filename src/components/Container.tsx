import '../assets/styles/Header.css'
import '../assets/styles/Container.css'
import Portfolio from './Portfolio'

export default function Container() {
    return (
        <div className="container">
            <h1 className='titulo'>Portfólio</h1>
            < Portfolio/>
        </div>
    )
}
