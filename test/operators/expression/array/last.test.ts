import * as support from "../../../support";

support.runTest(support.testPath(__filename), {
  $last: [
    [[1, 2, 3], 3],
    [[[]], []],
    [[null], null],
    [[], undefined],
    [null, null],
    [undefined, null],
    [5, null, { err: true }],
  ],
});
