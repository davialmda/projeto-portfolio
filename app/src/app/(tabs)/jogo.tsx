import JogoDados from "../../components/JogoDados";
import { Screen } from "../../components/ui";

export default function Jogo() {
  return (
    <Screen title="Jogo de Dados" subtitle="Dois jogadores • 5 rodadas">
      <JogoDados />
    </Screen>
  );
}