import { h, render } from "preact"
import App from "./components/app"
import "./style/index.css"

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("app") || document.body)
}

