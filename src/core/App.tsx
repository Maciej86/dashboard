import { Bar } from "../features/Bar";
import { Navigation } from "../features/Navigation";
import { Section } from "./styled";

export const App = () => {
  return (
    <main>
      <Navigation />
      <Bar />
      <Section>Tutaj treść całego pulpitu</Section>
    </main>
  );
};
