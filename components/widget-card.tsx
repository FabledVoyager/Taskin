import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

type WidgetCardProps = {
  number: number;
  title: string;
  description: string;
  accent: string;
  tint: string;
};

export function WidgetCard({ number, title, description, accent, tint }: WidgetCardProps) {
  return (
    <Pressable
      accessibilityHint="Functionality will be added in a future update"
      accessibilityLabel={`${title}, widget ${number}`}
      accessibilityRole="button"
      disabled
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      <View style={[styles.numberBadge, { backgroundColor: tint }]}>
        <Text style={[styles.number, { color: accent }]}>{number}</Text>
      </View>

      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.comingSoonRow}>
          <View style={[styles.miniDot, { backgroundColor: accent }]} />
          <Text style={[styles.comingSoon, { color: accent }]}>COMING SOON</Text>
        </View>
      </View>

      <Ionicons color={colors.borderStrong} name="chevron-forward" size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 132,
    padding: 18,
  },
  cardPressed: {
    opacity: 0.82,
  },
  numberBadge: {
    alignItems: 'center',
    borderRadius: 18,
    height: 58,
    justifyContent: 'center',
    marginRight: 15,
    width: 58,
  },
  number: {
    fontSize: 24,
    fontWeight: '800',
  },
  copy: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
  comingSoonRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },
  miniDot: {
    borderRadius: 3,
    height: 5,
    width: 5,
  },
  comingSoon: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
});
