import React from 'react'

import { Link } from 'gatsby'
import Linkset from './Linkset'

const DocSideBar: React.SFC<{}> = () => (
    <div className="sidebar">
        <ul className="links">
            <Linkset isRendered={true} caption="Welcome" path="">
                <li><Link activeClassName='active' to="/docs/">Introduction</Link></li>
                <li><Link activeClassName='active' to="/docs/10_getting_started/">Getting Started</Link></li>
                <li><Link activeClassName='active' to="/docs/20_browser_extension/">Browser Extension</Link></li>
            </Linkset>

            <Linkset isRendered={true} caption="Workspaces" path="30_workspaces">
                <li><Link activeClassName='active' to="/docs/31_context_urls/">Context URLs</Link></li>
                <li><Link activeClassName='active' to="/docs/32_life_of_workspace/">Life of a Workspace</Link></li>
                <li><Link activeClassName='active' to="/docs/33_sharing_and_collaboration/">Collaboration & Sharing</Link></li>
                <li><Link activeClassName='active' to="/docs/34_command_line_interface/">Command Line Interface</Link></li>
            </Linkset>

            <Linkset isRendered={true} caption="Configure Your Repository" path="40_configuration">
                <li><Link activeClassName='active' to="/docs/41_config_gitpod_file/">.gitpod.yml</Link></li>
                <li><Link activeClassName='active' to="/docs/42_config_docker/">Docker Image</Link></li>
                <li><Link activeClassName='active' to="/docs/43_config_ports/">Exposing Ports</Link></li>
                <li><Link activeClassName='active' to="/docs/44_config_start_tasks/">Start Tasks</Link></li>
                <li><Link activeClassName='active' to="/docs/vscode-extensions/">VS Code Extensions</Link></li>
                <li><Link activeClassName='active' to="/docs/45_checkout_location/">Workspace Location</Link></li>
                <li><Link activeClassName='active' to="/docs/46_prebuilds/">Prebuilt Workspaces</Link></li>
                <li><Link activeClassName='active' to="/docs/47_environment_variables/">Environment Variables</Link></li>
            </Linkset>

            <Linkset isRendered={true} caption="Theia – Gitpod's IDE" path="50_ide">
                <li><Link activeClassName='active' to="/docs/52_tips_and_tricks/">Tips & Tricks</Link></li>
                <li><Link activeClassName='active' to="/docs/54_git/">Git Integration</Link></li>
                <li><Link activeClassName='active' to="/docs/56_search/">Search</Link></li>
                <li><Link activeClassName='active' to="/docs/58_pull_requests/">Pull Requests</Link></li>
                <li><Link activeClassName='active' to="/docs/59_code_reviews/">Code Reviews</Link></li>
            </Linkset>

            <Linkset isRendered={true} caption="Languages & Frameworks" path="languages_and_frameworks">
                <li><Link activeClassName='active' to="/docs/java_in_gitpod/">Java</Link></li>
                <li><Link activeClassName='active' to="/docs/python_in_gitpod/">Python</Link></li>
            </Linkset>

            <Linkset isRendered={true} caption="Dashboard" path="60_dashboard">
            </Linkset>

            <Linkset isRendered={true} caption="Subscriptions" path="70_subscriptions">
            </Linkset>

            <Linkset isRendered={true} caption="Release Notes" path="80_release_notes">
                <li><Link activeClassName='active' to="/docs/release-notes/2019-06-17/june-2019">June 2019</Link></li>
                <li><Link activeClassName='active' to="/docs/release-notes/2019-04-05/april-2019/">April 2019</Link></li>
                <li><Link activeClassName='active' to="/docs/release-notes/2019-02-15/february-2019/">February 2019</Link></li>
            </Linkset>

        </ul>
    </div>
)

export default DocSideBar
