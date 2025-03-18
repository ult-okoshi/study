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
    const result = CreateValidater.validateDisplayPost(displayPost, postList);
    const resultName = CreateValidater.validateDisplayName(displayName);
    if (result.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(result.message);
      $('#display-post').val('');
      return
    }
    if (resultName.isValid === false) {
      ErrorMessageShow.showCreateErrorMessage(resultName.message);
      $('#display-name').val('');
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