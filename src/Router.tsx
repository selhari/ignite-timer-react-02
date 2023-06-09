import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home/index.js'
import { History } from './pages/History/index.js'
import { DefaultLayout } from './layouts/DefaultLayout/index.js'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
