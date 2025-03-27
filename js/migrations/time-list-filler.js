import { Repository } from "../repositories/repository.js";
import { TimeRepository } from "../repositories/time-repository.js";
export class TimeListFiller {
  static lengthFill() {
    const postList = Repository.getPosts();
    const timeList = TimeRepository.getTimes().toReversed();
    const filledTimeList = postList.map((_, i) => timeList[i] || "").toReversed();
    localStorage.setItem("date", JSON.stringify(filledTimeList));
  }
}