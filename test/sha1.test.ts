import { sha1 } from '../src';

describe('sha1', () => {
  it('sha1', () => {
    expect(sha1('abcde')).toBe('03de6c570bfe24bfc328ccd7ca46b76eadaf4334');
    expect(sha1('abcde', 'base64')).toBe('A95sVwv+JL/DKMzXyka3bq2vQzQ=');
    expect(sha1('abcde', 'base64url')).toBe('A95sVwv-JL_DKMzXyka3bq2vQzQ');
  });
});
