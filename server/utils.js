/**
 * parsePathParameters
 *
 * この関数は二つの文字列を与えられます。
 * path parameters を見極めてオブジェクトを返しましょう。
 * path parameters は pathWithParams 文字列の/の間にある:xxx がパラメターとなります。
 * 下記の例をご覧ください：
 *
 * 入力: '/posts/3/comments/4', '/posts/:postId/comments/:commentId'
 * 出力: {
 *   postId: 3,
 *   commentId: 4
 * }
 */

const parsePathParameters = function(originalPath, pathWithParams) {
  const result = {};
  const splittedPathWithParams = pathWithParams.split('/');
  const splittedOriginalPath = originalPath.split('/');
  if (splittedPathWithParams.length !== splittedOriginalPath.length) return {};
  const splittedArrayMarged = [splittedPathWithParams, splittedOriginalPath];
  for (let i = 0, len = splittedArrayMarged[0].length; i < len; i += 1) {
    const elemOfsplittedPathWithParams = splittedArrayMarged[0][i];
    const elemOfsplittedOriginalPath = splittedArrayMarged[1][i];
    if (elemOfsplittedPathWithParams[0] === ':') {
      if (Number.isNaN(Number(elemOfsplittedOriginalPath))) {
        result[elemOfsplittedPathWithParams.slice(1)] = elemOfsplittedOriginalPath;
      } else {
        result[elemOfsplittedPathWithParams.slice(1)] = Number(elemOfsplittedOriginalPath);
      }
    } else if (elemOfsplittedPathWithParams !== elemOfsplittedOriginalPath) {
      return {};
    }
  }

  return result;
};

module.exports = {
  parsePathParameters,
};
