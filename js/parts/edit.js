import { Repository } from "../repositories/repository.js";
import { ErrorMessageShow } from "./error.js";
import { EditValidater } from "./edit-validater.js";
class Edit {
  static postEditButton() {
    $('#post-list').on('click', '.post-edit', (event) => {
      event.preventDefault();
      const listCount = $(event.target).parent().siblings().length;
      const index = listCount - $(event.target).parent().index();
      window.location.href = `../html/parts/edit.html?index=${index}`;
    });
  }

  static getIndex(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('index');
  }

  static getDisplayPost(index){
    return Repository.getPost(index);
  }

  static showDisplayPost(){
    const index = Edit.getIndex();
    const displayPost = Edit.getDisplayPost(index);
    if (index !== null) {
      $('#display-post-edit').val(displayPost);
    }
  }

  static saveButton() {
    $('#save-submit').on('click', (event) => {
      event.preventDefault();
      Edit.postEdit();
    });
  }

  static postEdit() {
    const displayPostEdit = $('#display-post-edit').val();
    const index = Edit.getIndex();
    const result = EditValidater.validateDisplayPost(displayPostEdit);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      return
    }
    ErrorMessageShow.showCreateErrorMessage('');
    Repository.update(index, displayPostEdit);
    window.location.href = '../../html/list.html';
  }
}
$(document).ready(function() {
  Edit.postEditButton();
  Edit.showDisplayPost();
  Edit.saveButton();
});