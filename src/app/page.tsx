import Desktop from "src/components/Desktop";
import Dock from "src/components/Dock";

import { AppsProvider } from "src/context/AppsContext";

export default function Home() {
  return (
    <AppsProvider>
      <Desktop />
      <Dock />
    </AppsProvider>
  );
}
