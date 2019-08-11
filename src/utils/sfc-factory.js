export function makeFactory(options, componentFactory) {
  return (...params) => ({
    ...options,
    beforeCreate() {},
    ...componentFactory(...params),
  });
}

export function makeGuard(options) {
  return Object.assign(options, {
    beforeCreate() {
      throw new Error(`Do not use the default export but use the factory function instead!`);
    },
  });
}
