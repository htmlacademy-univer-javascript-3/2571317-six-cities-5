import {PlaceType} from './enums.ts';

export const placeTypeToString: Record<PlaceType, string> = {
  [PlaceType.Room]: 'Room',
  [PlaceType.Apartment]: 'Apartment',
};
