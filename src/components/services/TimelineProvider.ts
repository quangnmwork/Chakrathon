import { createContext } from 'react';
interface TimelineType {
  position: 'left' | 'right' | 'mix';
}
export const TimelineContext = createContext<TimelineType>({
  position: 'right'
});
