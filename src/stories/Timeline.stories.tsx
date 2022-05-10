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

export const DefaultTimeline = () => {
  return (
    <TimelineContainer>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <Text color={'black'}>Hello</Text>
        </TimelineContent>
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
export const DefaultTimelinePosition = () => {
  return (
    <TimelineContainer position={'left'}>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <Text color={'black'}>Hello</Text>
        </TimelineContent>
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
export const DefaultTimelineMix = () => {
  return (
    <TimelineContainer position={'mix'}>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <Text color={'black'}>Hello</Text>
        </TimelineContent>
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
