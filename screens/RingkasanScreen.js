import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { mataKuliahList } from '../data/scheduleData';

export default function RingkasanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Ringkasan Mata Kuliah</Text>
      <Text style={styles.pageSubtitle}>Semester 6 - Total {mataKuliahList.length} mata kuliah</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* ================= .map() DI SINI ================= */}
        {mataKuliahList.map((mk) => (
          <View key={mk.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.namaMatkul}>{mk.nama}</Text>
              <View style={styles.sksBadge}>
                <Text style={styles.sksText}>{mk.sks} SKS</Text>
              </View>
            </View>
            <Text style={styles.kode}>Kode: {mk.kode}</Text>
            <Text style={styles.dosen}>Dosen: {mk.dosen}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA', paddingHorizontal: 16, paddingTop: 16 },
  pageTitle: { fontSize: 22, fontWeight: '700', color: '#1F2937' },
  pageSubtitle: { fontSize: 13, color: '#6B7280', marginBottom: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  namaMatkul: { fontSize: 16, fontWeight: '700', color: '#111827', flexShrink: 1, marginRight: 8 },
  sksBadge: { backgroundColor: '#4F46E5', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 },
  sksText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  kode: { fontSize: 13, color: '#4B5563', marginTop: 6 },
  dosen: { fontSize: 13, color: '#4B5563', marginTop: 2 },
});
