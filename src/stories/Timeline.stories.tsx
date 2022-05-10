import {
  TimelineConnector,
  TimelineContainer,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeperator
} from '../components';

import { Box, Flex, Text } from '@chakra-ui/react';

export default {
  title: 'Timeline'
};

export const Default = () => {
  return (
    <TimelineContainer>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <Text color={'black'}>Hello</Text>
        </TimelineContent>
      </TimelineItem>
    </TimelineContainer>
  );
};
