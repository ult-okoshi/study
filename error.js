export class ErrorMessageShow {
  static noError() {
    $('#form-error-message').text('');
  }
  static spaceError() {
    $('#form-error-message').text('投稿内容が空です');
  }
  static limitError() {
    $('#form-error-message').text('これ以上投稿できません');
  }
}