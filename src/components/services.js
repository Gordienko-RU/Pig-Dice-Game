const copyObject = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

const services = {
  copyObject,
  getRandom
}

export default services
