const storage = localStorage;

export default function useLocalStorage() {
  function save<T>(data: T, key: string) {
    const string = JSON.stringify(data);
    storage.setItem(key, string);
  }

  function restore<T>(key: string, altValue: T) {
    const data = storage.getItem(key);
    return data ? JSON.parse(data) : altValue;
  }

  return {
    save,
    restore,
  };
}
