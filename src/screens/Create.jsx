import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Create = ({ data, setData }) => {

    const [itemName, setitemName] = useState('');
    const [stockAmt, setStockAmt] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editItemId, setEditItemId] = useState(null)


    const addItemHandler = () => {
        const newItem = {
            id: Date.now(),
            item: itemName,
            stock: stockAmt
        }
        setData([...data, newItem])
        setitemName('')
        setStockAmt('')
        setIsEdit(false)
    }

    const deleteItemHandler = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const editItemHandler = (item) => {
        setIsEdit(true)
        setitemName(item.item)
        setStockAmt(item.stock)
        setEditItemId(item.id)

    }

    const updateItemHandler = () => {
        setData(data.map((item) => (item.id === editItemId ? {...item, item: itemName, stock: stockAmt} : item
        )))
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter an item name...'
                placeholderTextColor='#999'
                style={styles.input}
                value={itemName}
                onChangeText={(item) => setitemName(item)}
            />

            <TextInput
                placeholder='Enter stock amount...'
                placeholderTextColor='#999'
                style={styles.input}
                value={stockAmt}
                onChangeText={(item) => setStockAmt(item)}
            />

            <Pressable style={styles.btn} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
                <Text style={styles.btnText} > {isEdit ? 'EDIT ITEM' : 'ADD ITEM'}</Text>
            </Pressable>


            <View style={{ marginTop: 10 }}>

                <Text style={styles.headingText}>All Items</Text>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#ffcccc' : '#d7f68fff' }]}>
                            <Text style={styles.itemText}>{item.item}</Text>

                            <View style={{ flexDirection: 'row', gap: 20 }}>
                            <Text style={styles.itemText}>{item.stock}</Text>
                                <Pressable onPress={() => editItemHandler(item)}>
                                <Text style={styles.itemText}>Edit</Text>
                                </Pressable>
                                <Pressable onPress={() => deleteItemHandler(item.id)}>
                                <Text style={styles.itemText}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}

                    contentContainerStyle={{ gap: 10 }}
                />

            </View>


        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        paddingVertical: '4%',
        gap: 10
    },
    input: {
        borderWidth: 1.2,
        borderColor: 'green',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    btn: {
        backgroundColor: '#cabfeeff',
        // backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },

    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5
    },
    itemText: {
        fontSize: 14
    }
})








