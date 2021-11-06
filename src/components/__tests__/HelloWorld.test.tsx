import { render } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('render <HelloWorld />', () => {
  const { container } = render(<HelloWorld />);
  expect(container).toMatchSnapshot();
});
