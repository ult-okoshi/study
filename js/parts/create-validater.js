export class CreateValidater {
  static validatePostContent(postContent, postList) {
    if (postContent.trim() === '') {
      return { isValid: false, message: '投稿内容が空です' };
    }
    if (postList.length >= 50) {
      return { isValid: false, message: 'これ以上投稿できません' };
    }
    return { isValid: true, message: '' };
  }
}