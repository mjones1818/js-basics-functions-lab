// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return distance < 42 ? (42 -distance) : (distance - 42)
}

function distanceFromHqInFeet (distance) {
  return distance < 42 ? ((42 - distance)* 264) : ((distance - 42) * 264)
}

function distanceTravelledInFeet (firstStreet, secondStreet) {
  if (firstStreet > secondStreet) {
    return ((firstStreet - secondStreet)*264)
  } else {
    return ((secondStreet - firstStreet)*264)
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
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