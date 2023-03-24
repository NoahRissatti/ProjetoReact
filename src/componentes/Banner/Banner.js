import './Banner.css'
import minhaImagem from "C:\\Users\\User\\organo\\src\\imagens\\Design sem nome (5).png"

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src={minhaImagem} alt="O banner principal da página do Organo"/>
        </header>
    )
}