import './Banner.css'
import imagem from "./Design sem nome (5).png"

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src={imagem} alt="O banner principal da página do Organo"/>
        </header>
    )
}