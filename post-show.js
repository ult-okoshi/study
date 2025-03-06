import { PostRepository } from "./post-repository.js";
class PostShow {
  constructor() {
    this.postView();
  }

  postView() {
    const postList = new PostRepository().getLocalStorage();
    if (postList === null) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
    if (postList !== null) {
      for (let i = postList.length - 1; i >= 0; i--) {
        $('#post-list').append(`<li>${postList[i]}　<input type="submit" class="post-delete" value="削除"></li>`);
      }
    }
  }
}

$(document).ready(function() {
  new PostShow();
});