import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function TabBarIcon(props: { name: string; color: string }) {
    return (
        <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
    )
}

const styles = StyleSheet.create({})
