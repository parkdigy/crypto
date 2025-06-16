import { sha256 } from '../src';

describe('sha256', () => {
  it('sha256', () => {
    expect(sha256('abcde')).toBe('36bbe50ed96841d10443bcb670d6554f0a34b761be67ec9c4a8ad2c0c44ca42c');
    expect(sha256('abcde', 'base64')).toBe('NrvlDtloQdEEQ7y2cNZVTwo0t2G+Z+ycSorSwMRMpCw=');
    expect(sha256('abcde', 'base64url')).toBe('NrvlDtloQdEEQ7y2cNZVTwo0t2G-Z-ycSorSwMRMpCw');
  });
});
