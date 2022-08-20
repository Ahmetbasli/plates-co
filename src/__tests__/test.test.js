function sayHello() {
  return "hello";
}
test("test", () => {
  const a = sayHello();
  expect(a).toBe("hello");
});
