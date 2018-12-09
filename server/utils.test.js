const { parsePathParameters } = require('./utils');


describe('parsePathParameters', () => {
  test('should return an object', () => {
    expect(parsePathParameters('', '')).toBeDefined();
    expect(typeof parsePathParameters('', '')).toBe('object');
  });
  test('output sample object', () => {
    expect(parsePathParameters('/posts/3/comments/4', '/posts/:postId/comments/:commentId')).toEqual(
      {
        postId: 3,
        commentId: 4,
      },
    );
  });
});
