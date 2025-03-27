export class TimeRepository {
  static getTimes() {
    const localStorageDate = JSON.parse(localStorage.getItem('date')) || [];
    return localStorageDate;
  }
  static create(displayDate) {
    const localStorageDate = TimeRepository.getTimes();
    localStorageDate.push(displayDate);
    localStorage.setItem('date', JSON.stringify(localStorageDate));
  }
  static delete(index) {
    const localStorageDate = TimeRepository.getTimes();
    localStorageDate.splice(index, 1);
    localStorage.setItem('date', JSON.stringify(localStorageDate));
  }
}