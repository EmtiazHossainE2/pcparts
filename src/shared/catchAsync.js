const catchAsync = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
      //catch
    }
  };
  
  export default catchAsync;
  