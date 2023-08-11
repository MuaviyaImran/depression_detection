import StartS from "../components/StartS/starts";
import Heros from "../components/Heros/heros";
import Services from "../components/Services/services";
import ChooseUs from "../components/ChooseUs/chooseus";
import { Main } from "@/templates/Main";
export default function Assessment() {
  return (
    <main>
      <Main>
        <Heros />
      </Main>

      <StartS />
      <Services />
      <ChooseUs />
    </main>
  );
}
