import React from "react";

import { Layout } from "#components/Layout/styles";
import Text from "#components/Text";
import { Header, Logo } from "#components/TopBar/styles";

import { MiddleAligned } from "#styles";
import { TextSize } from "#types";

const TopBar: React.FC = () => {
  return (
    <Header>
      <Layout>
        <MiddleAligned>
          <Logo isCircle size={40} src="/ale-serafini.jpg" />
          <Text size={TextSize.LARGE}>Alessandro Serafini</Text>
        </MiddleAligned>
      </Layout>
    </Header>
  );
};

export default TopBar;
