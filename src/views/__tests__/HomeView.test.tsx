import { render } from '@testing-library/react';
import HomeView from '../HomeView';

test('render <HomeView />', () => {
  const { container } = render(<HomeView />);
  expect(container).toMatchSnapshot();
});
