import { usersArray, User } from "./users";
import { usersInfoArray } from "./usersInfo";
interface UserPosition {
  name: string;
  position: string;
  age: number;
  gender: string;
}
function getUsersJobPositions(usersArray: User[]): UserPosition[] {
  return usersArray.map((user) => {
    const userInfo = usersInfoArray.find((info) => {
      return info.userid === user.userid;
    });

    return {
      name: user.name,
      position: userInfo!.organization.position,
      age: userInfo!.age,
      gender: user.gender,
    };
  });
}
const usersPositions = getUsersJobPositions(usersArray);
console.log("userPositions", usersPositions);
