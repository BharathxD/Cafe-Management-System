exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error/error", {
      message: err.message,
      error: req.app.get("env") === "development" ? err : {},
    });
  };
  