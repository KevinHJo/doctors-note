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

export const isDelete = key => (
  ['deleteContentBackward', 'deleteContentForward'].includes(key)
)

export const getDigits = str => (
  str.replace(/[^0-9]/g,'')
)

export const formatPhone = str => {
  let newStr = getDigits(str)
  let count = newStr.length
  if (count <= 3) return `(${newStr})`
  if (count > 3 && count < 7) return `(${newStr.slice(0, 3)}) ${newStr.slice(3)}`
  if (count >= 7) return `(${newStr.slice(0, 3)}) ${newStr.slice(3, 6)}-${newStr.slice(6)}`
  return null
}
