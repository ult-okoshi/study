import { PostRepository } from "./post-repository.js";
import { ErrorMessageShow } from "./error.js";
class PostEdit {
  static postEditButton() {
    $('#post-list').on('click', '.post-edit', (event) => {
      event.preventDefault();
      const listCount = $(event.target).parent().siblings().length;
      const index = listCount - $(event.target).parent().index();
      window.location.href = `post-edit.html?index=${index}`;
    });
  }

  static getIndex(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('index');
  }

  static getPostContent(index){
    return PostRepository.getPost(index);
  }

  static showPostContent(){
    const index = PostEdit.getIndex();
    const postContent = PostEdit.getPostContent(index);
    if (index !== null) {
      $('#post-content-edit').val(postContent);
    }
  }

  static saveButton() {
    $('#save-submit').on('click', (event) => {
      event.preventDefault();
      PostEdit.postEdit();
    });
  }

  static postEdit() {
    const postContentEdit = $('#post-content-edit').val();
    const index = PostEdit.getIndex();
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
  PostEdit.postEditButton();
  PostEdit.showPostContent();
  PostEdit.saveButton();
});