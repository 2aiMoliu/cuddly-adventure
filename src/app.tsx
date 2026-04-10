import { component$, useSignal } from '@builder.io/qwik'
import './app.css'

export const App = component$(() => {
  const showContent = useSignal(false)

  return (
    <main class="hero-main">
      <h1 
        class="greeting"
        onClick$={() => showContent.value = !showContent.value}
      >
        こんにちわ
      </h1>
    </main>
  )
})