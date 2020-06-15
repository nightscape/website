import React from 'react'

import { Link } from 'gatsby'
import { MenuContext } from '../../docs/menu'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledNavigationArrows = styled.div`
    width: 100%;
    text-align: center;
    padding: 10rem 0;
        
    svg {
        height: 5.5rem;
        width: 5rem;
        fill: #6E6E6E;
        transition: all .2s;
    }

    a {
        &:hover,
        &:focus {
            svg {
                fill: ${colors.lightBlue};
            }
        }
    }

    .prev,
    .next  {
        display: inline-block;
    }

    .prev {
        transform: rotate(-180deg);
        margin-right: 4rem;
    }
`

const NavigationArrows = ({ menuCtx }: { menuCtx: MenuContext }) => (
    <StyledNavigationArrows>
        {menuCtx.prev ?
            <Link
                to={menuCtx.prev.path}
                title={`Prev: ${menuCtx.prev.title}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.635"
                    height="33.635"
                    viewBox="0 0 33.635 33.635"
                    className="prev"
                >
                    <path
                        d="M-1075.548-827.365a16.708 16.708 0 01-11.892-4.926 16.708 16.708 0 01-4.926-11.892 16.708 16.708 0 014.926-11.892 16.708 16.708 0 0111.892-4.925 16.708 16.708 0 0111.892 4.926 16.708 16.708 0 014.926 11.892 16.708 16.708 0 01-4.926 11.892 16.708 16.708 0 01-11.892 4.925zM-1079.73-853a1 1 0 00-.7.282.992.992 0 00-.3.7.994.994 0 00.282.712l6.881 7.1-6.881 7.084a.993.993 0 00-.283.711 1 1 0 00.3.7 1 1 0 00.7.284 1.007 1.007 0 00.717-.3l8.233-8.476-8.232-8.5a.992.992 0 00-.717-.297z"
                        data-name="Ausschluss 26"
                        transform="translate(1092.365 861)"
                    ></path>
                </svg>
            </Link> : <div />}
        {menuCtx.next ?
            <Link
                to={menuCtx.next.path}
                title={`Next: ${menuCtx.next.title}`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.635"
                    height="33.635"
                    viewBox="0 0 33.635 33.635"
                    className="next"
                >
                    <path
                        d="M-1075.548-827.365a16.708 16.708 0 01-11.892-4.926 16.708 16.708 0 01-4.926-11.892 16.708 16.708 0 014.926-11.892 16.708 16.708 0 0111.892-4.925 16.708 16.708 0 0111.892 4.926 16.708 16.708 0 014.926 11.892 16.708 16.708 0 01-4.926 11.892 16.708 16.708 0 01-11.892 4.925zM-1079.73-853a1 1 0 00-.7.282.992.992 0 00-.3.7.994.994 0 00.282.712l6.881 7.1-6.881 7.084a.993.993 0 00-.283.711 1 1 0 00.3.7 1 1 0 00.7.284 1.007 1.007 0 00.717-.3l8.233-8.476-8.232-8.5a.992.992 0 00-.717-.297z"
                        data-name="Ausschluss 26"
                        transform="translate(1092.365 861)"
                    ></path>
                </svg>
            </Link> : <div />}
    </StyledNavigationArrows>
)

export default NavigationArrows 
