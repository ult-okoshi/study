import { Repository } from "../repositories/repository.js";
import { TimeRepository } from "../repositories/time-repository.js";
export class TimeListFillerMigration {
  static lengthFill() {
    const postList = Repository.getPosts();
    const timeList = TimeRepository.getTimes().toReversed();
    if (postList.length <= timeList.length) {
      return
    }
    const filledTimeList = postList.map((_, i) => timeList[i] || "").toReversed();
    localStorage.setItem("date", JSON.stringify(filledTimeList));
  }
}
if (!localStorage.getItem("isTimeListMigrated")) {
  TimeListFillerMigration.lengthFill();
  localStorage.setItem("isTimeListMigrated", "true");
}