import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Wrapper, Section, Logo, Link, Main, Menu } from "./style";
import { Button } from '../Generics/Button';
import { Dropdown } from 'antd';
import Filter from '../Filter';
import Footer from "../Footer";
import { navbar } from '../../utils/navbar';
const Navbar = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    function onClickProfile({ target: { dataset: { name } } }) {
        if(name === "logout") {
            localStorage.removeItem("token");
            navigate("/home")
        }
        else {
            navigate(`${name}`)
        }
    }
    const menu = (
        <Menu>
            <Menu.Item data-name="my-profile" onClick={onClickProfile}>
                My profile
            </Menu.Item>
            <Menu.Item data-name="favourite" onClick={onClickProfile}>
                Favourites
            </Menu.Item>
            <Menu.Item data-name="logout" onClick={onClickProfile}>
                Log out
            </Menu.Item>
        </Menu>
    );

    return (
        <Container>
            <Main>
                <Wrapper>
                    <Section onClick={() => navigate("/home")} logo>
                        <Logo />
                        <h3>Housing</h3>
                    </Section>
                    <Section>
                        {
                            navbar.map(({ id, path, title, hidden }) => {
                                return !hidden && (<Link
                                    className={({ isActive }) => isActive && "active"}
                                    key={id()}
                                    to={path}>
                                    {title}
                                </Link>)
                            })
                        }
                    </Section>
                    <Section>
                        {
                            token ?
                                <Dropdown
                                    overlay={menu}
                                    placement='topRight'
                                    arrow={{ pointAtCenter: true }}
                                    trigger='click'
                                >
                                    <div>
                                        <Button  typeBtn={"dark"}>Profile</Button>
                                    </div>
                                </Dropdown> :
                                <Button onClick={() => navigate("/register")} typeBtn={"dark"}>
                                    Sign In
                                </Button>
                        }
                    </Section>
                </Wrapper>
            </Main>
            <Filter />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Navbar