const CatchAsync = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((e) => {
    console.log("Promise cannot break");
    next(e);
  })
}

module.exports = CatchAsync