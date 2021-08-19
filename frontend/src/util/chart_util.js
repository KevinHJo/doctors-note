export const getAge = dateString => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

export const getLastVisit = visits => {
  if (!visits) return null
  const visitsArr = Object.values(visits)
  visitsArr.sort((a, b) => (new Date(a.createdAt).getTime() / 1000) - (new Date(b.createdAt).getTime() / 1000))
  console.log(visitsArr)
  return visitsArr[visitsArr.length - 1]
}
