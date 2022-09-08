import formatFilesize from './formatFilesize';

describe('formatFilesize', () => {
  it('shold format as MB on really large file', () => {
    expect(formatFilesize(123456789)).toBe('120.6 MB');
  });

  it('shold format as KB on not so large file', () => {
    expect(formatFilesize(12345)).toBe('12 KB');
  });
});
