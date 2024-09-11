import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import LogoIgnite from "../../assets/logo-ignite.svg";
import { HeaderContainer } from "./style";

export function Header() {
    return (
        < HeaderContainer>
            <img src={LogoIgnite} alt="" />
            <nav>
                <NavLink to=""><Timer size={24} /></NavLink>
                <NavLink to="/history"><Scroll size={24} /></NavLink>
            </nav>
        </HeaderContainer>
    );
}
