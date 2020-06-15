import React from 'react'

import styled from '@emotion/styled'
import { FeatureCardProps } from './FeatureCard'
import FeatureCard from './FeatureCard'

const Styled = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    position: relative;
`

const FeatureCards = ({ features }: { features: FeatureCardProps[] }) => {
    console.log(features)
    return  (
        <Styled>
            <div className="container">
                {
                    features.map((feature: FeatureCardProps, i) => (
                        <FeatureCard
                            key={`${feature.alt}+${i}`}
                            {...feature}
                            direction={i % 2 == 0 ? 'right' : ''}
                        />
                    ))
                }
            </div>
        </Styled>
    )
}

export default FeatureCards
