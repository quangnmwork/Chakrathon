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

const CardContent = () => {
  return (
    <Flex flexDirection={'column'} color={'black'}>
      <Text fontWeight={'bold'}>Timeline</Text>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </Flex>
  );
};

export const DefaultTimeline = () => {
  return (
    <TimelineContainer>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot variant={'solid'} />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot variant={'solid'} />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
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
          <TimelineDot variant={'outline'} />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot variant={'outline'} />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
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
          <CardContent />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
        </TimelineContent>
      </TimelineItem>
    </TimelineContainer>
  );
};
export const DefaultTimelineWithSize = () => {
  return (
    <TimelineContainer position={'mix'} size={'sm'}>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeperator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeperator>
        <TimelineContent>
          <CardContent />
        </TimelineContent>
      </TimelineItem>
    </TimelineContainer>
  );
};
