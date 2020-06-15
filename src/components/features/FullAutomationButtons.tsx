import React from 'react'

const FullAutomationButtons = ({ setRenderedGraphic }: {setRenderedGraphic: (valud: string) => void}) => (
    <div className="buttons btn-wrapper">
        <button
            className="btn"
            onClick={() => setRenderedGraphic('gitpod')}
            onMouseEnter={() => setRenderedGraphic('gitpod')}
            onMouseLeave={() => setRenderedGraphic('')}
        >
            With Gitpod
                        </button>
        <button
            onClick={() => setRenderedGraphic('usual')}
            onMouseEnter={() => setRenderedGraphic('usual')}
            onMouseLeave={() => setRenderedGraphic('')}
            className="btn btn--grey"
        >
            Usual Way
        </button>
    </div>
)

export default FullAutomationButtons
