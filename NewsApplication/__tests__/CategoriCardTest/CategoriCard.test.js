import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import CategoriCard from '../../src/Components/CategoriCard';
import CategoriCardStyles from '../../src/Components/CategoriCard/CategoriCard-Styles';

test('renders correctly', () => {
    const comp = render(<CategoriCard />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const mockFunction = jest.fn();
    const comp = render(<CategoriCard onPress={mockFunction} />);

    const CategoriCardPress = comp.getByTestId('categori-card-press');
    fireEvent(CategoriCardPress, 'press');

    expect(mockFunction).toBeCalled();
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<CategoriCard categori={test} value={''} />);
    const CategoriCardNormalContainerStyle = comp.getByTestId('categori-card-press').props.style;

    expect(CategoriCardNormalContainerStyle).toMatchObject(CategoriCardStyles.btnNormalContainer);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<CategoriCard categori={test} value={test} />);
    const CategoriCardPressContainerStyle = comp.getByTestId('categori-card-press').props.style;

    expect(CategoriCardPressContainerStyle).toMatchObject(CategoriCardStyles.btnPressContainer);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<CategoriCard label={test} />);
    const CategoriCardLabel = comp.getByTestId('categori-card-label').children[0];

    expect(CategoriCardLabel).toBe(test);
});