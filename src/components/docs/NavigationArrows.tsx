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
        height: 2rem;
        stroke: #6E6E6E;
        transition: all .2s;
    }

    a {
        &:hover,
        &:focus {
            svg {
                stroke: ${colors.lightBlue};
            }
        }
    }

    .prev,
    .next  {
        display: inline-block;
    }

    .prev {
        transform: rotate(90deg);
        margin-right: 4rem;
    }

    .next {
        transform: rotate(-90deg);
    }
`

const NavigationArrows = ({menuCtx}: {menuCtx: MenuContext}) => (
    <StyledNavigationArrows>
        {menuCtx.prev ?
            <Link
                to={menuCtx.prev.path}
                title={`Prev: ${menuCtx.prev.title}`}
            >
                <svg
                    className="prev"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 8"
                >
                    <g clip-path="url(#clip0)">
                        <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M14.72 1.052L7.878 6.278 1.05 1.052"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <path fill="#fff" d="M0 0H15.772V7.221H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </Link> : <div />}
        {menuCtx.next ?
            <Link
                to={menuCtx.next.path}
                title={`Next: ${menuCtx.next.title}`}
            >
                <svg
                    className="next"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 8"
                >
                    <g clip-path="url(#clip0)">
                        <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M14.72 1.052L7.878 6.278 1.05 1.052"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <path fill="#fff" d="M0 0H15.772V7.221H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </Link> : <div />}
    </StyledNavigationArrows>
)

export default NavigationArrows 
