    import { Link } from 'react-router-dom'
    import './NavBar.css'

    function Navbar() {
        return (
            <>
                <nav>
                    <img src="./logo(3).png" alt="" />
                    <div className='nav-links'>
                        <Link to="/" className='links'>🎭SHOWS🎟️</Link>&nbsp;&nbsp;
                        <Link to="/inclusao" className='links'>CADASTRO✍️</Link>&nbsp;&nbsp;
                        <Link to="/pesquisa" className='links'>PESQUISAR🔍</Link>&nbsp;&nbsp;
                    </div>       
                </nav>
            </>
        )
    }

    export default Navbar