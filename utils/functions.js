const handleServerError = (res, error) => {
  console.log(error);
  res.status(500).json({ message: "Interval Server Error" });
};

export { handleServerError };
