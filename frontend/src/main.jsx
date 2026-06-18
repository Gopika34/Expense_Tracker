import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";
import { ExpenseProvider } from './context/ExpenseContext.jsx';
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </AuthProvider>,
)
