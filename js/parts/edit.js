import { Repository } from "../repository.js";
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

  static getPostContent(index){
    return Repository.getPost(index);
  }

  static showPostContent(){
    const index = Edit.getIndex();
    const postContent = Edit.getPostContent(index);
    if (index !== null) {
      $('#post-content-edit').val(postContent);
    }
  }

  static saveButton() {
    $('#save-submit').on('click', (event) => {
      event.preventDefault();
      Edit.postEdit();
    });
  }

  static postEdit() {
    const postContentEdit = $('#post-content-edit').val();
    const index = Edit.getIndex();
    const result = EditValidater.validatePostContent(postContentEdit);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      return
    }
    ErrorMessageShow.showCreateErrorMessage('');
    Repository.update(index, postContentEdit);
    window.location.href = '../../html/list.html';
  }
}
$(document).ready(function() {
  Edit.postEditButton();
  Edit.showPostContent();
  Edit.saveButton();
});