// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-42)
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet(begin, destination){

    if (begin < destination) {
        return (destination - begin) * 264;
      } else {
        return (begin - destination) * 264;

}
}
function calculatesFarePrice(begin, destination){
const distance = distanceTravelledInFeet(begin,destination)
if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }


}