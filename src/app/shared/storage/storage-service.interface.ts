export interface IStorageService {
  getItem(key: string);
  setItem(key: string, value: string);
  removeItem(key: string);
}
