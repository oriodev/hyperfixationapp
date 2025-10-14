// REMOVES ERROR/LOGS WHEN TESTING
// COMMENT OUT TO SEE THEM
beforeEach(() => {
  jest.spyOn(console, 'error')
  jest.spyOn(console, 'log')
  // @ts-expect-error jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
  // @ts-expect-error jest.spyOn adds this functionallity
  console.log.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-expect-error jest.spyOn adds this functionallity
  console.error.mockRestore()
})