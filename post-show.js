import { PostRepository } from "./post-repository.js";
export class PostShow {
  static postView() {
    const postList = PostRepository.getPosts();
    if (postList === null || postList.length === 0) {
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
  PostShow.postView();
});