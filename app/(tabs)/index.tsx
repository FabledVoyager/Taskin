import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { WidgetCard } from '@/components/widget-card';
import { colors } from '@/constants/colors';

const widgets = [
  {
    number: 1,
    title: 'Widget One',
    description: 'Your first feature will live here.',
    accent: colors.blue,
    tint: colors.blueTint,
  },
  {
    number: 2,
    title: 'Widget Two',
    description: 'Ready for the next workflow you build.',
    accent: colors.violet,
    tint: colors.violetTint,
  },
  {
    number: 3,
    title: 'Widget Three',
    description: 'A flexible home for future insights.',
    accent: colors.orange,
    tint: colors.orangeTint,
  },
] as const;

export default function DashboardScreen() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.eyebrowRow}>
          <View style={styles.logoMark}>
            <Text style={styles.logoLetter}>T</Text>
          </View>
          <Text style={styles.brand}>TASKIN</Text>
        </View>

        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Your workspace, ready for what comes next.</Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>All set</Text>
          </View>
        </View>

        <View style={styles.widgetList}>
          {widgets.map((widget) => (
            <WidgetCard key={widget.number} {...widget} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  eyebrowRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    marginBottom: 26,
    marginTop: 14,
  },
  logoMark: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  logoLetter: {
    color: colors.surface,
    fontSize: 17,
    fontWeight: '800',
  },
  brand: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2.2,
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -1.2,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 7,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 34,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  statusPill: {
    alignItems: 'center',
    backgroundColor: colors.greenTint,
    borderRadius: 999,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  statusDot: {
    backgroundColor: colors.green,
    borderRadius: 4,
    height: 7,
    width: 7,
  },
  statusText: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '700',
  },
  widgetList: {
    gap: 14,
  },
});
