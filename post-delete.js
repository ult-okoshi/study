import { PostRepository } from "./post-repository.js";
import { PostShow } from "./post-show.js";
class PostDelete {
  static PostDeleteButton() {
    $('#post-list').on('click','.post-delete', (event) => {
      event.preventDefault();
      const deleteConfirm = confirm("削除しますか？");
      if (deleteConfirm === false){
        return false;
      }
      const listCount = $(event.target).parent().siblings().length;
      const index = listCount - $(event.target).parent().index();
      PostRepository.deleteLocalStorage(index);
      $('#post-list').empty();
      PostShow.postView();
    });
  }
}

$(document).ready(function() {
  // new PostDelete();
  PostDelete.PostDeleteButton();
});