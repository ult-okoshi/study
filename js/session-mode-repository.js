export class SessionModeRepository {
  static getMode() {
    return sessionStorage.getItem('mode') || 'light';
  }
  static save(mode) {
    sessionStorage.setItem('mode', mode);
  }
}