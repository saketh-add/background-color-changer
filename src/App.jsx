import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ColorChangerPage from "./components/ColorChangerPage"
import './App.css'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/color" element={<ColorChangerPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
