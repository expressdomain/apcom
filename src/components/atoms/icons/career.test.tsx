import { render } from '@test-utils';
import Career from './career';

describe('Career', () => {
  it('renders a Career icon', () => {
    const { container } = render(<Career />);
    expect(container).toBeDefined();
  });
});
