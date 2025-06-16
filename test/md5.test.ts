import { md5 } from '../src';

describe('md5', () => {
  it('md5', () => {
    expect(md5('abcdefg')).toBe('7ac66c0f148de9519b8bd264312c4d64');
    expect(md5('가나다라마바사')).toBe('a50f04139ca4d976d7c997adbe931fc5');
  });
});
