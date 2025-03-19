import { Repository } from "../repository.js";
import { NameRepository } from "../name-repository.js";
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
    const displayName = $('#display-name').val();
    const postList = Repository.getPosts();
    const result = CreateValidater.validateDisplay(displayPost, displayName);
    const resultPost = CreateValidater.validateDisplayPost(displayPost, postList);
    const resultName = CreateValidater.validateDisplayName(displayName);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      return
    }
    if (resultPost.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(resultPost.message);
      return
    }
    if (resultName.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(resultName.message);
      return
    }
    ErrorMessageShow.showCreateErrorMessage('');
    Repository.create(displayPost);
    NameRepository.create(displayName);
    $('#display-post').val('');
    $('#display-name').val('');
  }
}

$(document).ready(function() {
  Create.initialize();
});