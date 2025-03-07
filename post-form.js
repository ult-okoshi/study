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
    if (postContent.trim() !== '') {
      PostRepository.create(postContent);
      $('#post-content').val('');
    }else{
      console.log("投稿内容が空です");
    }
  }
}

$(document).ready(function() {
  PostForm.initialize();
});