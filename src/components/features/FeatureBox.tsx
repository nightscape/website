import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes, borders } from '../../styles/variables'

const StyledFeatureBox = styled.div`
    position: relative;
    text-align: center;
    background: ${colors.white};
    border-radius: 1rem;
    border: ${borders.light2};
    transition: all .2s;

    a {
        display: block;
        padding: 1rem .6rem;

        @media(max-width: 980px) {
            padding: .5rem 2.5rem;
        }
    }

    h3 {
        font-weight: 400;
        font-size: 1.7rem;
        transition: all .2s;

        @media(max-width: 980px) {
            font-size: 1.5rem;
        }
    }

    img, svg {
        height: 3.3rem;
        display: block;
        margin: 2rem auto 2.5rem;
        transition: all .3s;

        @media(max-width: ${sizes.breakpoints.sm}) {
            height: 3rem;
        }

        @media(max-width: 980px) {
            height: 2.4rem;
        }
    }

    .white {
        stroke: ${colors.white};
    }

    svg {
        fill: ${colors.offWhite1};
        stroke: ${colors.offWhite1};
    }

    &:hover {
        color: ${colors.white};
        background: ${colors.text};

        svg {
            fill: ${colors.white};
            stroke: ${colors.white};
        }

        h3 {
            color: ${colors.white};
        }

        .white {
            stroke: ${colors.textLight};
        }
    }
`

interface FeatureBoxProps {
    alt: string
    img: string | JSX.Element
    text: string | JSX.Element
    path: string
}

const FeatureBox: React.SFC<FeatureBoxProps> = ({ img, text, path, alt }) => (
    <StyledFeatureBox>
        <a href={`#${path}`}>
            <div>
                {
                    typeof img === 'string' ? <img src={img} alt={alt} /> : img
                }
            </div>
            <div>
                <h3>{text}</h3>
            </div>
        </a>
    </StyledFeatureBox>
)

export default FeatureBox
