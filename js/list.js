import { Repository } from "./repository.js";
export class List {
  static postView() {
    const postList = Repository.getPosts();
    if (postList === null || postList.length === 0) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
    if (postList !== null) {
      for (let i = postList.length - 1; i >= 0; i--) {
        $('#post-list').append(
          `<li>${postList[i]}<input type="submit" class="post-edit" value="編集"><input type="submit" class="post-delete" value="削除"></li>`
        );
      }
    }
  }
}

$(document).ready(function() {
  List.postView();
});