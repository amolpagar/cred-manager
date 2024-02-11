import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Mock data for demonstration
const mockData = [
  { env: 'dev', clientId: 1, app_name: 'app1', secret: 'secret1' },
  { env: 'dev', clientId: 2, app_name: 'app2', secret: 'secret2' },
  { env: 'dev', clientId: 3, app_name: 'app3', secret: 'secret1' },
  { env: 'qa', clientId: 4, app_name: 'app4', secret: 'secret2' },
  { env: 'qa', clientId: 5, app_name: 'app1', secret: 'secret1' },
  { env: 'qa', clientId: 6, app_name: 'app2', secret: 'secret2' },
  // Add more mock data as needed
];

const TableScreen = () => {
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter data based on search term
    const filtered = data.filter(item =>
      item.env.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.app_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.clientId.toString().includes(searchTerm.toLowerCase()) ||
      item.secret.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <Text style={styles.cell}>{item.env}</Text>
      <Text style={styles.cell}>{item.app_name}</Text>
      <Text style={styles.cell}>{item.clientId}</Text>
      <Text style={styles.cell}>{item.secret}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search by Env, App Name, clientId, or Secret"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button title="Add" onPress={() => console.log('Add button clicked')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Env</Text>
        <Text style={styles.headerText}>App Name</Text>
        <Text style={styles.headerText}>clientId</Text>
        <Text style={styles.headerText}>Secret</Text>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.clientId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWclientIdth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  evenRow: {
    backgroundColor: '#E3F2FD',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default TableScreen;
