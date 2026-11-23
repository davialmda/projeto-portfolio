import { Timeline } from '../../components/timeline';
import { Screen } from '../../components/ui';
import { professional } from '../../data';

export default function Profissional() {
  return (
    <Screen title="Experiência Profissional" subtitle="Experiências de trabalho">
      <Timeline items={professional} />
    </Screen>
  );
}   