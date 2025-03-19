export class ErrorMessageShow {
  static showCreateErrorMessage(message) {
    $('#form-error-message').text(message);
  }
  static showNameErrorMessage(message) {
    $('#name-error-message').text(message);
  }
}