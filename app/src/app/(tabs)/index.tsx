import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Screen } from '../../components/ui';
import { profile } from '../../data';
import { colors } from '../../theme';

const links = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Jogar', href: '/jogo' },
];

export default function Home() {
  const router = useRouter();
  return (
    <Screen>
      <View style={s.hero}>
        <View style={s.avatar}>
          <Text style={s.initials}>{profile.initials}</Text>
        </View>
        <Text style={s.name}>{profile.name}</Text>
        <Text style={s.headline}>{profile.headline}</Text>
      </View>
      <Card>
        <Text style={s.about}>{profile.about}</Text>
      </Card>
      <View style={s.buttons}>
        {links.map((l) => (
          <Pressable key={l.href} style={s.btn} onPress={() => router.push(l.href as never)}>
            <Text style={s.btnText}>{l.label}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const s = StyleSheet.create({
  hero: { alignItems: 'center', gap: 8, marginTop: 20 },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: { color: '#fff', fontSize: 40, fontWeight: '800' },
  name: { color: colors.text, fontSize: 28, fontWeight: '800' },
  headline: { color: colors.accent, fontSize: 15, fontWeight: '600', textAlign: 'center' },
  about: { color: colors.muted, fontSize: 15, lineHeight: 22 },
  buttons: { flexDirection: 'row', gap: 10 },
  btn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '700' },
});