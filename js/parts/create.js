import { Repository } from "../repository.js";
import { NameRepository } from "../name-repository.js";
import { CreateValidater } from "./create-validater.js";
import { ErrorMessageShow } from "./error.js";
import { SessionNameRepository } from "../session-name-repository.js";
class Create {
  static initialize() {
    const saveName = SessionNameRepository.getName();
    if(saveName){
      $('#display-name').val(saveName);
    }
    document.getElementById('display-name').classList.remove('hidden');
    $('#post-submit').on('click', (event) => {
      event.preventDefault();
      this.postSave();
    });
  }

  static postSave(){
    const displayPost = $('#display-post').val();
    const displayName = $('#display-name').val();
    const postList = Repository.getPosts();
    ErrorMessageShow.showCreateErrorMessage('');
    const validations = []
    validations.push(CreateValidater.validateDisplayPost(displayPost, postList))
    validations.push(CreateValidater.validateDisplayName(displayName))
    const errors = validations.filter((error) => !error.isValid)
    if(errors.length > 0){
      ErrorMessageShow.showCreateErrorMessage(errors.map((error) => error.message).join("\n"));
      return
    }
    Repository.create(displayPost);
    NameRepository.create(displayName);
    SessionNameRepository.save(displayName);
    $('#display-post').val('');
  }
}

$(document).ready(function() {
  Create.initialize();
});