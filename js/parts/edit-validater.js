export class EditValidater {
  static validateDisplayPost(displayPostEdit) {
    if (displayPostEdit.trim() === '') {
      return { isValid: false, message: '投稿内容が空です' };
    }
    return { isValid: true, message: '' };
  }
}