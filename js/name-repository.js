export class NameRepository {
  static getNames() {
    const sessionStorageName = JSON.parse(sessionStorage.getItem('name')) || [];
    return sessionStorageName;
  }

  static create(displayName) {
    const sessionStorageName = this.getNames();
    sessionStorageName.push(displayName);
    sessionStorage.setItem('name', JSON.stringify(sessionStorageName));
  }

  static delete(index) {
    const sessionStorageName = this.getNames();
    sessionStorageName.splice(index, 1);
    sessionStorage.setItem('name', JSON.stringify(sessionStorageName));
  }
}