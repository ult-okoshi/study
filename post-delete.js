import { PostRepository } from "./post-repository.js";
class PostDelete {
  constructor() {
    this.PostDeleteButton();
  }

  PostDeleteButton() {
    $('#post-list').on('click','.post-delete', (event) => {
      event.preventDefault();
      const deleteConfirm = confirm("削除しますか？");
      if (deleteConfirm === false){
        return false;
      }
      if (deleteConfirm === true){
        new PostRepository().deleteLocalStorage(event);
        $(event.target).parent().remove();
      }
    });
  }
}

$(document).ready(function() {
  new PostDelete();
});