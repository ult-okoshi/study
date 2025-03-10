import { PostRepository } from "./post-repository.js";
import { ErrorMessages } from "./error.js";
class PostForm {
  static errorCount = 0;
  static initialize() {
    $('#post-submit').on('click', (event) => {
      event.preventDefault();
      console.log("投稿ボタンクリック");
      this.postSave();
    });
  }

  static postSave(){
    const postContent = $('#post-content').val();
    const postList = PostRepository.getPosts();
    if (postContent.trim() === '') {
      ErrorMessages.spaceError();
      this.errorCount === 1;
      $('#post-content').val('');
      return false;
    }
    if (postList.length >= 50) {
      ErrorMessages.limitError();
      this.errorCount === 1;
      $('#post-content').val('');
      return false;
    }
    if (this.errorCount === 0) {
      ErrorMessages.noError();
      PostRepository.create(postContent);
      $('#post-content').val('');
    }
  }
}

$(document).ready(function() {
  PostForm.initialize();
});