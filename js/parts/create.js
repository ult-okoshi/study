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
    const displayPost = $('#display-post').val();
    const postList = Repository.getPosts();
    const result = CreateValidater.validateDisplayPost(displayPost, postList);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      $('#display-post').val('');
      return
    }
    ErrorMessageShow.showCreateErrorMessage('');
    Repository.create(displayPost);
    $('#display-post').val('');
  }
}

$(document).ready(function() {
  Create.initialize();
});