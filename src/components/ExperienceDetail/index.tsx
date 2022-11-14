import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";

import Box from "#components/Box";

dayjs.extend(relativeTime);

const ExperienceDetail: React.FC = () => {
  const BoxHeader = () => <span>ciaoone1</span>;

  return <Box header={<BoxHeader />}>ciaoone2</Box>;
};

export default ExperienceDetail;
