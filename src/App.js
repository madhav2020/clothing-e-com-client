import "./App.css";
import { AuthProvider } from "./context/Auth.context";
import AppRouter from "./routes/App.router";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
