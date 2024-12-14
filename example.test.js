// example.test.js
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('failing test', () => {
    expect(1 + 1).toBe(3); // This will fail
  });
  