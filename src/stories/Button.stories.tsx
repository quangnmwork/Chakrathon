import { storiesOf } from "@storybook/react";
import Button from "../components/Button/Button";

const stories = storiesOf("App test", module);
stories.add("App", () => {
  return <Button textDisplay="Testing" />;
});
