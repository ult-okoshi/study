class PostForm {
  constructor() {
    this.initialize();
  }

  initialize() {
    $('#post-submit').on('click', function(event) {
      event.preventDefault();
      console.log("投稿ボタンクリック");
      const post = JSON.parse(localStorage.getItem('post')) || [];
      const postContent = $('#post-content').val();
      if (postContent.trim() !== '') {
        post.push(postContent);
        localStorage.setItem('post', JSON.stringify(post));
        console.log(localStorage.getItem('post'));
      }else{
        console.log("投稿内容が空です");
      }
    });
  }
}

$(document).ready(function() {
  new PostForm();
});