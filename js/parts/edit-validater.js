export class EditValidater {
  static validatePostContent(postContentEdit) {
    if (postContentEdit.trim() === '') {
      return { isValid: false, message: '投稿内容が空です' };
    }
    return { isValid: true, message: '' };
  }
}