import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { jadwalPerHari } from '../data/scheduleData';

export default function JadwalScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={jadwalPerHari}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.matkul}>{item.matkul}</Text>
              <Text style={styles.ruangan}>Ruang: {item.ruangan} (Kelas {item.kelas})</Text>
            </View>
            <View style={styles.jamBox}>
              <Text style={styles.jam}>{item.jamMulai}</Text>
              <Text style={styles.jamDash}>–</Text>
              <Text style={styles.jam}>{item.jamSelesai}</Text>
            </View>
          </View>
        )}
        // Header seksi -> gaya visual berbeda (background gelap, huruf besar)
        renderSectionHeader={({ section: { title, data } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
            {data.length === 0 && (
              <Text style={styles.sectionHeaderEmpty}>Tidak ada jadwal</Text>
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerBox}>
            <Text style={styles.pageTitle}>Jadwal per Hari</Text>
            <Text style={styles.pageSubtitle}>Kelas 6D (VID)</Text>
          </View>
        )}
        stickySectionHeadersEnabled
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  headerBox: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  pageTitle: { fontSize: 22, fontWeight: '700', color: '#1F2937' },
  pageSubtitle: { fontSize: 13, color: '#6B7280', marginTop: 2 },

  // Header seksi (nama hari) -> tampil jelas beda dari item biasa
  sectionHeader: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeaderText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  sectionHeaderEmpty: { color: '#9CA3AF', fontSize: 12, fontStyle: 'italic' },

  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  matkul: { fontSize: 15, fontWeight: '700', color: '#111827' },
  ruangan: { fontSize: 13, color: '#4B5563', marginTop: 2 },
  jamBox: { alignItems: 'center', marginLeft: 10 },
  jam: { fontSize: 13, fontWeight: '700', color: '#4F46E5' },
  jamDash: { fontSize: 11, color: '#9CA3AF' },
});
