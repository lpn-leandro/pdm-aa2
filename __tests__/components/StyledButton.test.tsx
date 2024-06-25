import React from 'react';
import { render } from "@testing-library/react-native";
import StyledButton from '../../src/app/components/StyledButton';

describe('StyledButton', () => {
  it('button can receive a title', () => {
    const { getByText } = render(<StyledButton title="Teste" />);
    const buttonText = getByText('Teste');
    expect(buttonText).toBeTruthy();
  });
});
