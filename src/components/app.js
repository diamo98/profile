import { h } from "preact"
import { Router } from "preact-router"
import { useState, useEffect } from "preact/hooks"

import Header from "./header"
import Home from "../routes/home"
import Research from "../routes/research"
import Publications from "../routes/publications"
import Teaching from "../routes/teaching"
import Contact from "../routes/contact"
import Admin from "../routes/admin"

const App = () => {
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Check if we're running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes("github.io")
    setBasePath(isGitHubPages ? "/dianamoyaosorio.github.io" : "")
  }, [])

  return (
    <div id="app">
      <Header />
      <main>
        <Router>
          <Home path={`${basePath}/`} />
          <Research path={`${basePath}/research`} />
          <Publications path={`${basePath}/publications`} />
          <Teaching path={`${basePath}/teaching`} />
          <Contact path={`${basePath}/contact`} />
          <Admin path={`${basePath}/adm`} />
        </Router>
      </main>
    </div>
  )
}

export default App










