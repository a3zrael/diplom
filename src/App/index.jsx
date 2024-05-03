import { Header } from "../Header";
import { Content } from "../Content";
import "./index.scss";
import { Land } from "../Land";
import { Route, Routes } from "react-router-dom";
import { FishingSimulator } from "../FishingSimulator";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Land />} />
      </Routes>
      <Routes>
        <Route path="content" element={<Content />} />
      </Routes>
      <Routes>
        <Route path="simulator" element={<FishingSimulator />} />
      </Routes>
    </>
  );
};
