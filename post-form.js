import { PostRepository } from "./post-repository.js";
class PostForm {
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
      console.log("投稿内容が空です");
      return false;
    }
    if (postList.length >= 50) {
      console.log("投稿数が上限です");
      return false;
    }
    if (postContent.trim() !== '' && postList.length < 50) {
      PostRepository.create(postContent);
      $('#post-content').val('');
    }
  }
}

$(document).ready(function() {
  PostForm.initialize();
});