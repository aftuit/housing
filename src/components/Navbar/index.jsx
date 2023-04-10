import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";
import { Button } from '../Generics/Button';
import Filter from '../Filter';
import { navbar } from '../../utils/navbar';
const Navbar = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Main>
                <Wrapper>
                    <Section onClick={() => navigate("/home")} logo>
                        <Logo /> <h3>Housing</h3>
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
                        <Button onClick={() => navigate("/signin")} typeBtn={"dark"}>
                            Sign In
                        </Button>
                    </Section>
                </Wrapper>
            </Main>
            <Filter/>
            <Outlet />
        </Container>
    )
}

export default Navbar