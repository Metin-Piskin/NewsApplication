import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import NewCard from '../../src/Components/NewCard';
import NewCardStyles from '../../src/Components/NewCard/NewCard-Styles';

test('renders correctly', () => {
    const comp = render(<NewCard />);
    expect(comp).toMatchSnapshot();
});

test('renders correctly', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    expect(comp).toMatchSnapshot();
});

test('should render press correctly', () => {
    const test = 'test';
    const mockFunction = jest.fn();
    const comp = render(<NewCard news={test} onPress={mockFunction} />);

    const NewCardPress = comp.getByTestId('new-card-press');
    fireEvent(NewCardPress, 'press');

    expect(mockFunction).toBeCalled();
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardAllContainerStyle = comp.getByTestId('new-card-press').props.style;

    expect(NewCardAllContainerStyle).toMatchObject(NewCardStyles.allcontainer);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardTitleStyle = comp.getByTestId('new-card-title').props.style;

    expect(NewCardTitleStyle).toMatchObject(NewCardStyles.title);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardContentStyle = comp.getByTestId('new-card-content').props.style;

    expect(NewCardContentStyle).toMatchObject(NewCardStyles.content);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardAuthorStyle = comp.getByTestId('new-card-author').props.style;

    expect(NewCardAuthorStyle).toMatchObject(NewCardStyles.author);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardInnerContainerStyle = comp.getByTestId('new-card-innercontainer').props.style;

    expect(NewCardInnerContainerStyle).toMatchObject(NewCardStyles.innercontainer);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardDateStyle = comp.getByTestId('new-card-date').props.style;

    expect(NewCardDateStyle).toMatchObject(NewCardStyles.date);
});

test('should render default theme style', () => {
    const test = 'test'
    const comp = render(<NewCard news={test} />);
    const NewCardTimeStyle = comp.getByTestId('new-card-time').props.style;

    expect(NewCardTimeStyle).toMatchObject(NewCardStyles.time);
});