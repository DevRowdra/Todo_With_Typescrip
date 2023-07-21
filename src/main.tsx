import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodoStore from './component/TodoStore.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoStore>

    <App />
    </TodoStore>
  </React.StrictMode>,
)
