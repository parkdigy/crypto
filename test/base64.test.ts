import { base64 } from '../src';

describe('base64', () => {
  it('base64', () => {
    expect(base64.encode('abcdefg')).toBe('YWJjZGVmZw==');
    expect(base64.encode('가나다라마바사')).toBe('6rCA64KY64uk652866eI67CU7IKs');
    expect(base64.encode('abc가나다def라마바ghi사아자')).toBe('YWJj6rCA64KY64ukZGVm652866eI67CUZ2hp7IKs7JWE7J6Q');
    expect(base64.encode('❤️▶️😁')).toBe('4p2k77iP4pa277iP8J+YgQ==');

    expect(base64.decode('YWJjZGVmZw==')).toBe('abcdefg');
    expect(base64.decode('6rCA64KY64uk652866eI67CU7IKs')).toBe('가나다라마바사');
    expect(base64.decode('YWJj6rCA64KY64ukZGVm652866eI67CUZ2hp7IKs7JWE7J6Q')).toBe('abc가나다def라마바ghi사아자');
    expect(base64.decode('4p2k77iP4pa277iP8J+YgQ==')).toBe('❤️▶️😁');
  });
});
