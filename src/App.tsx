import { useState } from "react";
import { Footer } from "./components/layout/footer/footer";
import { Header } from "./components/layout/header/header";
import { Features, features } from "./models/features";

function App() {
  const [state, setState] = useState<keyof Features>("character-counter");
  
  return (
    <div className="flex flex-col max-h-[500px] w-[400px] overflow-y-scroll gap-3">
      <Header state={state} setState={setState} />
      <main className="p-2">{features[state]?.component ?? ""}</main>
      <Footer />
    </div>
  );
}

export default App;
