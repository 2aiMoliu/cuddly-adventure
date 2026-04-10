import { component$, useSignal } from '@builder.io/qwik'

import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.css'

export const App = component$(() => {
  const projectsCount = useSignal(12)

  return (
    <>
      <section id="center">
        <div class="hero">
          <img src={heroImg} class="base" width="170" height="179" alt="Profile" />
          <img src={viteLogo} class="framework" alt="Vite logo" />
          <img src={viteLogo} class="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>John Doe</h1>
          <p>Full Stack Developer</p>
        </div>
        <button class="counter" onClick$={() => projectsCount.value++}>
          Projects: {projectsCount.value}
        </button>
      </section>

      <div class="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>About Me</h2>
          <p>Passionate developer with 5+ years experience</p>
          <ul>
            <li>
              <span class="stat">
                <img class="logo" src={viteLogo} alt="" />
                12 Projects
              </span>
            </li>
            <li>
              <span class="stat">
                <img class="button-icon" src={viteLogo} alt="" />
                Open Source
              </span>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg class="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect</h2>
          <p>Let's work together</p>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:hello@example.com">
                <svg class="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#email-icon"></use>
                </svg>
                Email
              </a>
            </li>
            <li>
              <a href="https://2aiMoliu.github.io/cuddly-adventure/" target="_blank">
                <img class="button-icon" src="https://api.qrserver.in/v1/create-qr-code/?size=100x100&data=https://2aiMoliu.github.io/cuddly-adventure/" alt="QR Code" />
                QR Code
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div class="ticks"></div>
      <section id="spacer"></section>
    </>
  )
})