module.exports = {
 intToBoolean,
 convertCompleted
};
function intToBoolean(int) {
 return int === 1 ? true : false;
}
function convertCompleted(item) {
    return {
      ...item,
      completed: intToBoolean(item.completed),
    };
  }