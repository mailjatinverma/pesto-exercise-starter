function cacheFunction(cb) {
  // cb - callback function
  let cache = [];
  return (args) => {
    if (cache.includes(args)) {
      return null;
    }
    cache.push(args);
    return cb(args);
  };
}

export {
  cacheFunction,
};
