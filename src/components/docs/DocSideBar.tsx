import React from 'react'

import { Link } from 'gatsby'
import Linkset from '../Linkset'
import { MENU } from '../../docs/menu'
import { Docsearch } from './DocSearch'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import Pattern from '../../resources/pattern.png'


const StyledSideBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3rem 0 10rem;
    
    &::before {
        position: absolute;
        content: "";
        display: block;
        background: url(${Pattern});
        background-size: cover;
        background-position: center;
        height: calc(100vh + 100%);
        width: calc(55vw + 100%);
        transform: translateX(-55vw) translateY(-100vh);
        z-index: -1;
    }

    @media(min-width: ${sizes.breakpoints.lg}) {
        width: 30%;
    }

    @media(max-width: ${sizes.breakpoints.lg}) {
        display: none;
    }
`

const DocSideBar: React.SFC<{}> = () => (
    <StyledSideBar>
        <ul>
            <Docsearch name="search-doc-input" />
            {MENU.map((m, i) =>
                <Linkset caption={m.title} path={m.path} key={'menu' + i}>
                    {m.subMenu && m.subMenu.map((sub, i) =>
                        <li><Link activeClassName='active' to={sub.path} key={'sub' + i}>{sub.title}</Link></li>
                    )}
                </Linkset>)}
        </ul>
    </StyledSideBar>
)

export default DocSideBar
