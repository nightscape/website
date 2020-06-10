import React from 'react'

import styled from '@emotion/styled'
import Feature, { FeatureItemProps } from './FeatureItem'

const StyledFeatures = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 900px) {
        flex-direction: column;

        & > div {
            max-width: 400px;
        }
    }
`

const FeaturesSection = ({ features }: { features: FeatureItemProps[] }) => (
    <section>
        <StyledFeatures className="row">
            {
                features.map(
                    (feature: FeatureItemProps, i) => <Feature
                        key={`${i}feature.title`}
                        {...feature}
                    />
                )
            }
        </StyledFeatures>
    </section>
)

export default FeaturesSection
