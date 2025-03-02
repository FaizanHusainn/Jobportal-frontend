// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindTalent from "./Pages/FindTalent"
import NotFound from "./Pages/NotFound";

export default function App() {
  const theme = createTheme({
    colors: {
      // Color to user in mantine
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
        "#461902",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
    },
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-talent" element={<FindTalent />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      
      </BrowserRouter>
    </MantineProvider>
  );
}
