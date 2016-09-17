'use strict';

const assert = require('assert');
const oidcTokenHash = require('..');

/* eslint-disable max-len */

assert.equal('x7vk7f6BvQj0jQHYFIk4ag', oidcTokenHash.generate('YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw'));
assert.equal('x7vk7f6BvQj0jQHYFIk4ag', oidcTokenHash.generate('YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw', 'RS256'));
assert.equal('x7vk7f6BvQj0jQHYFIk4ag', oidcTokenHash.generate('YmJiZTAwYmYtMzgyOC00NzhkLTkyOTItNjJjNDM3MGYzOWIy9sFhvH8K_x8UIHj1osisS57f5DduL-ar_qw5jl3lthwpMjm283aVMQXDmoqqqydDSqJfbhptzw8rUVwkuQbolw', 'HS256'));

assert.equal('rEF91trffQGMQVyqcnZvwddyQGLs6GTF', oidcTokenHash.generate('NjlkNjk2ZGUtZWQ1YS00MmQ3LWExOGUtMjNiYTY2MDU4YjJhYmJls2NqVk9DX1z2vDl4MZMeF2XLfMwiXWmRYzUL0t_IY1nWFp6Moeu2GVmBoT_d0Acl4upDyfdGRjeR-ZIsUQ', 'RS384'));
assert.equal('rEF91trffQGMQVyqcnZvwddyQGLs6GTF', oidcTokenHash.generate('NjlkNjk2ZGUtZWQ1YS00MmQ3LWExOGUtMjNiYTY2MDU4YjJhYmJls2NqVk9DX1z2vDl4MZMeF2XLfMwiXWmRYzUL0t_IY1nWFp6Moeu2GVmBoT_d0Acl4upDyfdGRjeR-ZIsUQ', 'HS384'));

assert.equal('HgIOjpEKMhvtwzZvjUdUmMYayc0gOvaxkZEsautS1KM', oidcTokenHash.generate('N2IwZmM5Y2YtZWJiYS00ZjA5LTkyZTktZTc0MjY5NDlmZDUwv7m2UfVNLyXYhcEicgYZ5LsQbZ7huJNibUjqAmPAWhyyxWRgXdZp4iTl2lE2ezdC3W-x93gkIg00rNok1MYgqA', 'RS512'));
assert.equal('HgIOjpEKMhvtwzZvjUdUmMYayc0gOvaxkZEsautS1KM', oidcTokenHash.generate('N2IwZmM5Y2YtZWJiYS00ZjA5LTkyZTktZTc0MjY5NDlmZDUwv7m2UfVNLyXYhcEicgYZ5LsQbZ7huJNibUjqAmPAWhyyxWRgXdZp4iTl2lE2ezdC3W-x93gkIg00rNok1MYgqA', 'HS512'));