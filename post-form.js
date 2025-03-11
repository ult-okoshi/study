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
    if (postContent.trim() === '') {
      ErrorMessageShow.spaceError();
      $('#post-content').val('');
      return false;
    }
    if (postList.length >= 50) {
      ErrorMessageShow.limitError();
      $('#post-content').val('');
      return false;
    }
      ErrorMessageShow.noError();
      PostRepository.create(postContent);
      $('#post-content').val('');
  }
}

$(document).ready(function() {
  PostForm.initialize();
});