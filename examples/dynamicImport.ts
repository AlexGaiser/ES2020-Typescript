const dynamicImport = async (shouldImport: boolean, object) => {
  if (shouldImport) {
    const { clone } = await import("./services/utils.service");
    const obj = clone(object);
    return obj;
  } else {
    return object;
  }
};

export default dynamicImport;
