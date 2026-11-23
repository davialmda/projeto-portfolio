import { Linking, Pressable, Text, View } from 'react-native';
import { Card, Chip, Screen, styles } from '../../components/ui';
import { projects } from '../../data';
import { colors } from '../../theme';

export default function Projetos() {
  return (
    <Screen title="Projetos" subtitle="Alguns trabalhos que desenvolvi">
      {projects.map((p) => (
        <Card key={p.title}>
          <Text style={styles.cardTitle}>{p.title}</Text>
          <Text style={styles.cardText}>{p.text}</Text>
          <View style={styles.row}>
            {p.tags.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </View>
          {p.url !== '' && (
            <Pressable onPress={() => Linking.openURL(p.url)}>
              <Text style={{ color: colors.accent, fontWeight: '700', marginTop: 4 }}>
                Ver no GitHub →
              </Text>
            </Pressable>
          )}
        </Card>
      ))}
    </Screen>
  );
}