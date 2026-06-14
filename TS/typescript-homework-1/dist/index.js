import { usersArray } from "./users";
import { usersInfoArray } from "./usersInfo";
function getUsersJobPositions(usersArray) {
    return usersArray.map((user) => {
        const userInfo = usersInfoArray.find((info) => {
            return info.userid === user.userid;
        });
        return {
            name: user.name,
            position: userInfo.organization.position,
            age: userInfo.age,
            gender: user.gender,
        };
    });
}
const usersPositions = getUsersJobPositions(usersArray);
console.log("userPositions", usersPositions);
