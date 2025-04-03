"use client"
import secureLocalStorage from "react-secure-storage"

export const secureStorage = {
    setItem: (key, value) => {
        secureLocalStorage.setItem(key,value)
    },
    getItem: (key) => {
        return secureLocalStorage.getItem(key)
    },
    removeItem: (key) => {
        secureLocalStorage.removeItem(key)
    },
    clear: () => {
        secureLocalStorage.clear()
    }
}