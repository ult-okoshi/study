export class SessionNameRepository {
  static getName(){
    return sessionStorage.getItem('name');
  }
  static save(displayName){
    sessionStorage.setItem('name', displayName);
  }
}