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
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postContent = $('#post-content').val();
    if (postContent.trim() !== '') {
      posts.push(postContent);
      localStorage.setItem('posts', JSON.stringify(posts));
      console.log(localStorage.getItem('posts'));
    }else{
      console.log("投稿内容が空です");
    }
  }
}

$(document).ready(function() {
  new PostForm();
});