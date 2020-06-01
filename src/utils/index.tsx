import React from 'react'

import { FeatureCardProps } from '../components/FeatureCard'

import ToolIntegration from '../resources/tool-integration.svg'
import FullDevEnvironments from '../resources/full-dev-environments.svg'

export const features: FeatureCardProps[] = [
    {
        src: ToolIntegration,
        alt: 'Tools Integration',
        title: <>Stay in the Flow -<br /><strong>GitLab, GitHub & Bitbucket Integration</strong></>,
        text: (<>
            <p>Start your workflow from your Git hosting platform and let Gitpod beam you in a ready-to-code dev environment.</p>
            <p>Whether you want to fix a bug, add a feature or do a code review, Gitpod get's you started immediately.</p>
            <p>More about <a href="/docs/context-urls/">context URLs</a>.</p>
        </>)
    },
    {
        src: ToolIntegration,
        alt: 'Tools Integration',
        title: <>Save Resources -<br /><strong>Use your Chromebook or Tablet</strong></>,
        text: (<>
            <p>No more need for expensive high-end notebooks, with Gitpod coding gets accessible for everyone.</p>
            <p>It works just as smoothly on a Chromebook as on a high-end notebook. You can even code on the go with a tablet.</p>
        </>)
    },
    {
        src: FullDevEnvironments,
        alt: 'Theia - VS Code based online IDE',
        title: <>Code Like Usual -<br /><strong>Based on the Online IDE Theia</strong></>,
        text: (<>
            <p>Gitpod is just like your local IDE.</p>
            <p>It includes fully-functional Linux terminals, you can install any VS Code extensions and it provides all good features of Theia, the vendor neutral and highly extensible VS Code alternative.</p>
            <p>Read more about <a href="/docs/ide/">Theia</a>.</p>
        </>)
    },
]