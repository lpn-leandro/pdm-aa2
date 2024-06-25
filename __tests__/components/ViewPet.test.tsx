import React from 'react';
import { render } from "@testing-library/react-native";
import ViewPet from '../../src/app/components/ViewPet';

  const pet = {
    id: '1',
    name: 'Cah',
    type: 'Chorro',
    age: '3',
  };

  const mockDelete = jest.fn();

  describe('ViewPet', () => {
    test('display pet details', () => {
      const {getByText}  = render(<ViewPet pet={pet} onDelete={mockDelete}/>);
      
      expect(getByText(`id: ${pet.id}`)).toBeTruthy();
      expect(getByText(`Title: ${pet.name}`)).toBeTruthy();
      expect(getByText(`Type: ${pet.type}`)).toBeTruthy();
      expect(getByText(`Age: ${pet.age}`)).toBeTruthy();
    });
});
