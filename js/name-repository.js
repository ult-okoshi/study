export class NameRepository {
  static getNames() {
    const localStorageName = JSON.parse(localStorage.getItem('name')) || [];
    return localStorageName;
  }

  static create(displayName) {
    const localStorageName = this.getNames();
    localStorageName.push(displayName);
    localStorage.setItem('name', JSON.stringify(localStorageName));
  }

  static delete(index) {
    const localStorageName = this.getNames();
    localStorageName.splice(index, 1);
    localStorage.setItem('name', JSON.stringify(localStorageName));
  }
}