import { Repository } from "./repositories/repository.js";
import { NameRepository } from "./repositories/name-repository.js";
import { TimeRepository } from "./repositories/time-repository.js";
import { TimeListFiller } from "./migrations/time-list-filler.js";
export class List {
  static migrationTimeList() {
    TimeListFiller.lengthFill();
  }
  static lists() {
    const postList = Repository.getPosts();
    const nameList = NameRepository.getNames();
    const timeList = TimeRepository.getTimes();
    return { postList, nameList, timeList };
  }
  static postView() {
    const { postList, nameList, timeList } = List.lists();
    if (postList === null || postList.length === 0) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
    if (postList !== null) {
      for (let i = postList.length - 1; i >= 0; i--) {
        $('#post-list').append(
          `<li>${nameList[i]}：${postList[i]}（${timeList[i]}）<input type="submit" class="post-edit" value="編集"><input type="submit" class="post-delete" value="削除"></li>`
        );
      }
    }
  }
}

if (!localStorage.getItem("timeListMigration")) {
  List.migrationTimeList();
  localStorage.setItem("timeListMigration", "true");
}

$(document).ready(function() {
  List.postView();
});