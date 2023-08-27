function isJavaScriptFile(filename) {
  if (typeof filename !== "string") {
    return "please provide me a valid file name (string).";
  } else {
    const arr = filename.split(".");
    const lastElement = arr.pop();

    return lastElement.toLowerCase() === "js";
  }
}

console.log(isJavaScriptFile("index.j"));