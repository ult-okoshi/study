import { PostRepository } from "./post-repository.js";
import { ErrorMessageShow } from "./error.js";
class PostEdit {
  static PostEditButton() {
    $('#post-list').on('click', '.post-edit', (event) => {
      event.preventDefault();
      const listCount = $(event.target).parent().siblings().length;
      const index = listCount - $(event.target).parent().index();
      window.location.href = `post-edit.html?index=${index}`;
      this.LoadPostContent();
    });
  }

  static LoadPostContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');
    if (index !== null) {
      const postContent = PostRepository.getOnePost(index);
      $('#post-content-edit').val(postContent);
    }
    return index;
  }

  static SaveButton() {
    $('#save-submit').on('click', (event) => {
      event.preventDefault();
      this.PostEdit();
    });
  }

  static PostEdit() {
    const postContentEdit = $('#post-content-edit').val();
    const index = this.LoadPostContent();
    if (postContentEdit.trim() === '') {
      ErrorMessageShow.spaceError();
      return false;
    }
    ErrorMessageShow.noError();
    PostRepository.update(index, postContentEdit);
    window.location.href = 'show.html';
  }
}
$(document).ready(function() {
  PostEdit.PostEditButton();
  PostEdit.LoadPostContent();
  PostEdit.SaveButton();
});