import React from 'react';
import { render } from '@testing-library/react-native';

import Home from '../../src/Pages/Home';
import HomeStyles from '../../src/Pages/Home/Home-styles';


test('renders correctly', () => {
    const comp = render(<Home />);
    expect(comp).toMatchSnapshot();
});

test('should render default theme style', () => {
    const comp = render(<Home />);
    const HomeLottieContainerStyle = comp.getByTestId('home-page-lottiecontainer').props.style;

    expect(HomeLottieContainerStyle).toMatchObject(HomeStyles.Lottiecontainer);
});