import { Principal } from '../components/principal/Principal'
import Nav from '../components/navbar/Navbar'
import Nav2 from '../components/navbar/Navbar2'
import './PagePrincipal.css'

export const PagePrincipal = () => {
    return (
        <>
            <Nav />
            <Nav2 />
            <Principal />
        </>
    );
};