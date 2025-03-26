import { Repository } from "./repository.js";
import { NameRepository } from "./name-repository.js";
import { TimeRepository } from "./time-repository.js";
export class List {
  static lists() {
    const postList = Repository.getPosts();
    const nameList = NameRepository.getNames();
    const timeList = TimeRepository.getTimes();
    return { postList, nameList, timeList };
  }
  static lengthFill() {
    const { postList, nameList, timeList } = List.lists();
    const filledData = [];
    for (let i = 0; i < postList.length; i++) {
      filledData.push({
        nameList: nameList[nameList.length - 1 - i] || "名無し",
        timeList: timeList[timeList.length - 1 - i] || "時間なし",
      });
    }
    return filledData.toReversed();
  }
  static postView() {
    const postList = List.lists().postList;
    const filledData = List.lengthFill();
    if (postList === null || postList.length === 0) {
      $('#post-list').append(`<li>投稿はまだありません</li>`);
    }
    if (postList !== null) {
      for (let i = postList.length - 1; i >= 0; i--) {
        $('#post-list').append(
          `<li>${filledData[i].nameList}：${postList[i]}（${filledData[i].timeList}）<input type="submit" class="post-edit" value="編集"><input type="submit" class="post-delete" value="削除"></li>`
        );
      }
    }
  }
}

$(document).ready(function() {
  List.postView();
});