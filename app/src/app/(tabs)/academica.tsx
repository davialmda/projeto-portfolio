import { Timeline } from '../../components/timeline';
import { Screen } from '../../components/ui';
import { academic } from '../../data';

export default function Academica() {
  return (
    <Screen title="Experiência Acadêmica" subtitle="Formação e pesquisa">
      <Timeline items={academic} />
    </Screen>
  );
}