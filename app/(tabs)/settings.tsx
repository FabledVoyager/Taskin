import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';

type SettingRowProps = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

function SettingRow({ icon, label, value, onValueChange }: SettingRowProps) {
  return (
    <View style={styles.settingRow}>
      <View style={styles.settingLabel}>
        <View style={styles.settingIcon}>
          <Ionicons color={colors.primary} name={icon} size={19} />
        </View>
        <Text style={styles.settingText}>{label}</Text>
      </View>
      <Switch
        ios_backgroundColor={colors.borderStrong}
        onValueChange={onValueChange}
        thumbColor={colors.surface}
        trackColor={{ false: colors.borderStrong, true: colors.primary }}
        value={value}
      />
    </View>
  );
}

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Make TASKIN feel like yours.</Text>

        <Text style={styles.sectionLabel}>PREFERENCES</Text>
        <View style={styles.settingsCard}>
          <SettingRow
            icon="notifications-outline"
            label="Notifications"
            onValueChange={setNotifications}
            value={notifications}
          />
          <View style={styles.divider} />
          <SettingRow
            icon="calendar-outline"
            label="Weekly summary"
            onValueChange={setWeeklySummary}
            value={weeklySummary}
          />
        </View>

        <View style={styles.versionRow}>
          <Text style={styles.versionText}>TASKIN</Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
    padding: 20,
    paddingTop: 30,
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
    marginTop: 7,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 36,
  },
  settingsCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  settingRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 70,
    paddingHorizontal: 16,
  },
  settingLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  settingIcon: {
    alignItems: 'center',
    backgroundColor: colors.primaryTint,
    borderRadius: 10,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  settingText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  divider: {
    backgroundColor: colors.border,
    height: 1,
    marginLeft: 64,
  },
  versionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingHorizontal: 4,
  },
  versionText: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
