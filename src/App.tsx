// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';

export default function App() {

  return (
  <MantineProvider>
   <HomePage/>
  </MantineProvider>
  );
}
