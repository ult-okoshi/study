class PostShow {
  #PostForm;
  constructor() {
    this.postView();
  }

  postView() {
    const postList = JSON.parse(localStorage.getItem('posts'));
    if (postList !== null) {
      const postListReverse = postList.reverse();
      postListReverse.forEach((post) => {
        $('#post-list').append(`<li>${post}</li>`);
      });
    }
    if (postList === null) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
  }
}

$(document).ready(function() {
  new PostShow();
});