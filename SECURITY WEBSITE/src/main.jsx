import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const container = document.getElementById("roots")

if (!container) {
  // If the root element is missing, show a visible error so user isn't looking at a blank page
  document.body.innerHTML = '<div style="padding:24px;font-family:Arial,sans-serif;color:#900;background:#fee;">Error: #root element not found. Check index.html</div>'
  console.error('React mount failed: #root element not found')
} else {
  try {
    const root = createRoot(container)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('React mounted successfully')
  } catch (err) {
    // If App throws during render, display the error on the page and in console
    document.body.innerHTML = `<pre style="white-space:pre-wrap;padding:18px;font-family:monospace;background:#111;color:#fff;">Render error:\n${String(err)}</pre>`
    console.error(err)
  }
}
