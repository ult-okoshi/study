import { Repository } from "../repository.js";
import { NameRepository } from "../name-repository.js";
import { List } from "../list.js";
class Delete {
  static postDeleteButton() {
    $('#post-list').on('click','.post-delete', (event) => {
      event.preventDefault();
      const deleteConfirm = confirm("削除しますか？");
      if (deleteConfirm === false){
        return false;
      }
      const listCount = $(event.target).parent().siblings().length;
      const index = listCount - $(event.target).parent().index();
      Repository.delete(index);
      NameRepository.delete(index);
      $('#post-list').empty();
      List.postView();
    });
  }
}

$(document).ready(function() {
  Delete.postDeleteButton();
});