import { PostRepository } from "./post-repository.js";
class PostEdit {
  static PostEditButton() {
    $('#post-list').on('click', '.post-edit', (event) => {
      event.preventDefault();
      window.location.href = 'post-edit.html';
      this.loadPostContent();
    });
  }

  static loadPostContent() {
  }

  static postEdit() {
  }
}
$(document).ready(function() {
  PostEdit.PostEditButton();
});