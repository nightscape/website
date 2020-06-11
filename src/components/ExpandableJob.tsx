import React, { useState } from 'react'

import styled from '@emotion/styled'
import { colors, borders } from '../styles/variables'

const StyledExpandableJob = styled.div`
    position: relative;
    padding: 4rem 4rem 4rem 10rem;
    background: ${colors.offWhite};
    border: ${borders.light2};

    @media(max-width: 600px) {
        padding: 4rem 2rem 2rem 8rem;
    }

    button {
        position: absolute;
        top: 4rem;
        left: 4rem;
        border: none;
        transform: translateY(-.6rem);

        @media(max-width: 600px) {
            left: 2rem;
        }

        &:hover {
            svg {
                fill: ${colors.text};
            }
        }
    }

    svg {
        fill: ${colors.offWhite1};
        transform: rotate(90deg);
        transition: all .2s;
    }

    p + p {
        margin-top: 2rem;
    }

    .after, .mail {
        margin-top: 5rem;
    }

    .mail {
        font-size: 1.8rem;
    }

    h4 {
        margin: 5rem 0 2rem;
    }

    ul {
        list-style: initial;
        list-style-position: inside;
    }
`

interface List {
    title: string
    items: string[]
}

export interface ExpandableJobProps {
    title: string
    intro: string
    paragraphs: JSX.Element
    lists: List[]
    textAfterTheLists: string
    rendered?: boolean
}

const ExpandableJob = ({ title, intro, paragraphs, lists, textAfterTheLists, rendered }: ExpandableJobProps) => {
    const [isRendered, setIsRendered] = useState<boolean>(rendered || false)

    const toggleIsRendered = () => {
        setIsRendered(!isRendered)
    }

    return (
        <StyledExpandableJob>
            <button onClick={toggleIsRendered}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.635"
                    height="33.635"
                    viewBox="0 0 33.635 33.635"
                    style={ isRendered ? { transform: 'rotate(-90deg)', fill: colors.text } : {} }
                >
                    <path
                        d="M-1075.548-827.365a16.708 16.708 0 01-11.892-4.926 16.708 16.708 0 01-4.926-11.892 16.708 16.708 0 014.926-11.892 16.708 16.708 0 0111.892-4.925 16.708 16.708 0 0111.892 4.926 16.708 16.708 0 014.926 11.892 16.708 16.708 0 01-4.926 11.892 16.708 16.708 0 01-11.892 4.925zM-1079.73-853a1 1 0 00-.7.282.992.992 0 00-.3.7.994.994 0 00.282.712l6.881 7.1-6.881 7.084a.993.993 0 00-.283.711 1 1 0 00.3.7 1 1 0 00.7.284 1.007 1.007 0 00.717-.3l8.233-8.476-8.232-8.5a.992.992 0 00-.717-.297z"
                        data-name="Ausschluss 26"
                        transform="translate(1092.365 861)"
                    ></path>
                </svg>
            </button>
            <h3>{title}</h3>
            <p>{intro}</p>
            {isRendered ? (<>
                {paragraphs}
                { lists.map((item, i) => <List key={i + item.title} {...item} />) }
                <p className="after">{textAfterTheLists}</p>
                <p className="mail">Interested? <a href={`mailto:contact@typefox.io?subject=Application as ${title}`} target="_blank">Send us a mail!</a></p>
            </>) : null}
            
        </StyledExpandableJob>
    )
}

const List = ({ title, items }: List) => (
    <div>
        <h4>{title}</h4>
        <ul>
            {items.map((item, i) => <li key={item + i}>{item}</li>)}
        </ul>
    </div>
)

export default ExpandableJob
