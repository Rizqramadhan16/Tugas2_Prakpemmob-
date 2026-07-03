import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { pertemuanList } from '../data/scheduleData';

export default function PertemuanScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.badgeCol}>
        <Text style={styles.badgeText}>#{item.pertemuanKe}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.matkul}>{item.matkul}</Text>
        <Text style={styles.topik}>{item.topik}</Text>
        <Text style={styles.tanggal}>{item.tanggal}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pertemuanList}
        // 1. keyExtractor -> key unik per item pertemuan
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        // 2. ItemSeparatorComponent -> pemisah visual antar item
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // 3. ListHeaderComponent -> judul halaman di atas daftar
        ListHeaderComponent={() => (
          <View style={styles.headerBox}>
            <Text style={styles.pageTitle}>Daftar Pertemuan</Text>
            <Text style={styles.pageSubtitle}>
              Total {pertemuanList.length} pertemuan dari seluruh mata kuliah
            </Text>
          </View>
        )}
        // 4. ListEmptyComponent -> tampil jika data kosong
        ListEmptyComponent={() => (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Belum ada data pertemuan.</Text>
          </View>
        )}
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
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  badgeCol: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  badgeText: { color: '#4F46E5', fontWeight: '700', fontSize: 13 },
  matkul: { fontSize: 15, fontWeight: '700', color: '#111827' },
  topik: { fontSize: 13, color: '#4B5563', marginTop: 2 },
  tanggal: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  separator: { height: 10 },
  emptyBox: { padding: 40, alignItems: 'center' },
  emptyText: { color: '#9CA3AF', fontSize: 14 },
});
