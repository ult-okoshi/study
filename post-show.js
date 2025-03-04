class PostShow {
  #PostForm;
  constructor() {
    this.postView();
  }

  postView() {
    const postList = JSON.parse(localStorage.getItem('posts'));
    if (postList === null) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
    if (postList !== null) {
      for (let i = postList.length - 1; i >= 0; i--) {
        $('#post-list').append(`<li>${postList[i]}</li>`);
      }
    }
  }
}

$(document).ready(function() {
  new PostShow();
});