import { PostRepository } from "./post-repository.js";
import { ErrorMessageShow } from "./error.js";
class PostForm {
  static initialize() {
    $('#post-submit').on('click', (event) => {
      event.preventDefault();
      this.postSave();
    });
  }

  static postSave(){
    const postContent = $('#post-content').val();
    const postList = PostRepository.getPosts();
    let errorCount = 0;
    if (postContent.trim() === '') {
      ErrorMessageShow.spaceError();
      errorCount = 1;
      $('#post-content').val('');
      return false;
    }
    if (postList.length >= 50) {
      ErrorMessageShow.limitError();
      errorCount = 1;
      $('#post-content').val('');
      return false;
    }
    if (errorCount === 0) {
      ErrorMessageShow.noError();
      PostRepository.create(postContent);
      $('#post-content').val('');
    }
  }
}

$(document).ready(function() {
  PostForm.initialize();
});