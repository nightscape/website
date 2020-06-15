import React from 'react'

import Screenshot from '../../resources/screenshot.png'
import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'

const Styled = styled.div`
    .banner {
        display: flex;
        padding: 4rem 0 20rem;
        position: relative;

        @media(min-width: ${sizes.breakpoints.lg}) {
            padding-top: 5rem;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            padding-bottom: 5rem;
        }

        &__text-box {
            margin-top: 12rem;

            h1 {
                br {
                    display: block;
                    
                    @media(min-width: 360px) {
                        display: none;
                    }
                }
            }

            @media(max-width: ${sizes.breakpoints.lg}) {
                text-align: center;
                margin: 5rem 0 0;
            }

            @media(min-width: ${sizes.breakpoints.lg}) {
                width: 40%;
            }
        }

        .btn-wrapper {
            margin-bottom: 3rem;
        }

        &__screenshot {
            display: block;
            width: 100%;
            box-shadow: 0 2rem 6rem rgba(0,0,0, .2);

            @media(max-width: ${sizes.breakpoints.lg}) {
                width: 100%;
            }

            @media(min-width: ${sizes.breakpoints.lg}) {
                transform: translate(12rem, 6rem);

                &-container {
                    width: 50%;
                }
            }
        }

        h1 {
            font-weight: 600;

            span {
                display: block;
                font-weight: 400;
            }
        }

        p {
            margin: 2.5rem auto;

            @media(max-width: ${sizes.breakpoints.lg}) {
                padding: 0 5rem;
            }

            @media(max-width: 600px) {
                padding: 0;
            }
        }
    }

`


const Banner = () => (
    <Styled>
            <div className="row">
                <header role="banner" className="banner pattern">
                    <div className="banner__text-box">
                        <h1>
                            Are You <br />Ready-To-Code?
                            <span>Start Instantly. Anywhere.</span>
                        </h1>
                        <p>Gitpod launches automated dev environments for your <strong>GitHub, GitLab or Bitbucket</strong> project with a single click.</p>
                        <div className="btn-wrapper">
                            <a href="https://gitpod.io/#https://github.com/gitpod-io/spring-petclinic" className="btn btn--cta">Try Now</a>
                        </div>
                    </div>
                    <div className="banner__screenshot-container">
                        <img alt="Gitpod Screenshot" src={Screenshot} className="banner__screenshot" />
                    </div>
                </header>
            </div>
    </Styled>
)

export default Banner
