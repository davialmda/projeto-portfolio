import { Text, View } from 'react-native';
import { Card, styles } from './ui';

type Item = { title: string; place: string; period: string; text: string };

export function Timeline({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((i) => (
        <Card key={i.title + i.period}>
          <Text style={styles.cardTitle}>{i.title}</Text>
          <View>
            <Text style={styles.cardMeta}>
              {i.place} • {i.period}
            </Text>
          </View>
          <Text style={styles.cardText}>{i.text}</Text>
        </Card>
      ))}
    </>
  );
}