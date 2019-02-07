function errorHandler( err, req, res, next) {
  console.log(err)
  if(err.name === 'validationError'){
    const errors ={}
    for(const key in err.errors) {
      errors[key] = err.errors[key].message
    }
    res.status(422).json(errors)
  }

  res.status(500).json(err.message)

  next(err)
}

module.exports = errorHandler
