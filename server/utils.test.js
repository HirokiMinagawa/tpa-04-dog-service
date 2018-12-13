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
  test('invalid path', () => {
    expect(parsePathParameters('/posts/3/comments/4', '/post/:postId/comment/:commentId')).toEqual(
      {},
    );
  });
  test('invalid length', () => {
    expect(parsePathParameters('/posts/3/comments/4/user/5', '/posts/:postId/comments/:commentId')).toEqual(
      {},
    );
  });
  test('parameters is not number', () => {
    expect(parsePathParameters('/posts/three/comments/four', '/posts/:postId/comments/:commentId')).toEqual(
      {
        postId: 'three',
        commentId: 'four',
      },
    );
  });
});
