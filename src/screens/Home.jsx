import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import Create from './Create'

const Home = () => {


  const [view, setView] = useState(0)
  const [data, setData] = useState([
    { id: 1, item: 'Wheat', stock: 5, unit: 'kg' },
    { id: 2, item: 'Rice', stock: 15, unit: 'kg' },
    { id: 3, item: 'Pulse', stock: 25, unit: 'kg' },
    { id: 4, item: 'Corn', stock: 50, unit: 'kg' },
    { id: 5, item: 'Basmati Rice', stock: 20, unit: 'kg' },
  ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable style={[styles.button, view === 0 ? { backgroundColor: '#72c37aff' } : 'null']} onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? { color: 'white' } : 'null']}> All Items </Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? { backgroundColor: '#72c37aff' } : 'null']} onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? { color: 'white' } : 'null']}> Low Stock </Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? { backgroundColor: '#72c37aff' } : 'null']} onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? { color: 'white' } : 'null']}> Create </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}
      {view === 2 && <Create data={data} setData={setData} />}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: '4%'

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.8,
    borderRadius: 50,
    borderColor: 'green'
  },
  btnText: {
    color: 'green',
    fontSize: 13
  }
})