function getErrorMessage(errorCode) {
  const errorMap = {
    E01: "Invalid username or password",
    E02: "Too many attempts",
  };

  return errorMap[errorCode] || "Something went wrong";
}

console.log(getErrorMessage("E03"));
