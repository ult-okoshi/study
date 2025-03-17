import { Repository } from "../repository.js";
import { CreateValidater } from "./create-validater.js";
import { ErrorMessageShow } from "./error.js";
class Create {
  static initialize() {
    $('#post-submit').on('click', (event) => {
      event.preventDefault();
      this.postSave();
    });
  }

  static postSave(){
    const postContent = $('#post-content').val();
    const postList = Repository.getPosts();
    const result = CreateValidater.validatePostContent(postContent, postList);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      $('#post-content').val('');
      return
    }
    ErrorMessageShow.showCreateErrorMessage('');
    Repository.create(postContent);
    $('#post-content').val('');
  }
}

$(document).ready(function() {
  Create.initialize();
});