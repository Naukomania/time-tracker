import Link from "next/link"

const Menu = () => {
    return (
        <ul>
            <li><Link href="/"><a>Главная</a></Link></li>
            <li><Link href="/history"><a>История</a></Link></li>
        </ul>
    )
}

export default Menu