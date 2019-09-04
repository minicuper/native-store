import AsyncStorage from '@react-native-community/async-storage'

function NativeStore() {
}

NativeStore.prototype.getItem = function (key) {
  return AsyncStorage.getItem(key)
}

NativeStore.prototype.setItem = function (key, value) {
  return AsyncStorage.setItem(key, value)
}

NativeStore.prototype.removeItem = function (key) {
  return AsyncStorage.removeItem(key)
}

NativeStore.prototype.getItemIds = function () {
  return AsyncStorage.getAllKeys()
}

NativeStore.prototype.clean = function () {
  return AsyncStorage.clear()
}

module.exports = NativeStore
