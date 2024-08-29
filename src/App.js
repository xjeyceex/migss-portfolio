import "./App.css";
import Home from "./pages/Home";
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  return (
    <>
      <Home />
      <SpeedInsights />
    </>
  );
}

export default App;
