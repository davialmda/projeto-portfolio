import { Text, View } from 'react-native';
import { Card, Chip, Screen, styles } from '../../components/ui';
import { profile, techGroups } from '../../data';

export default function Sobre() {
  return (
    <Screen title="Sobre" subtitle="Tecnologias e módulos usados neste app">
      <Card>
        <Text style={styles.cardText}>{profile.about}</Text>
      </Card>
      {techGroups.map((g) => (
        <Card key={g.title}>
          <Text style={styles.cardTitle}>{g.title}</Text>
          <View style={styles.row}>
            {g.items.map((i) => (
              <Chip key={i} label={i} />
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}