import { PostRepository } from "./post-repository.js";
class PostForm {
  constructor() {
    this.initialize();
  }

  initialize() {
    $('#post-submit').on('click', (event) => {
      event.preventDefault();
      console.log("投稿ボタンクリック");
      this.postSave();
    });
  }

  postSave(){
    const postRepository = new PostRepository();
    const { postContent } = postRepository.getPost();
    if (postContent.trim() !== '') {
      postRepository.saveLocalStorage();
      const formClear = $('#post-content').val('');
    }else{
      console.log("投稿内容が空です");
    }
  }
}

$(document).ready(function() {
  new PostForm();
});