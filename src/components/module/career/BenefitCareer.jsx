import React from "react";
import {
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Center,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./BenefitCareer.module.css";

const mockdata = [
  {
    title: "Collaborative Work Environment",
    description:
      "Work in a supportive team where ideas are shared, and everyone’s contributions are valued.",
    icon: IconGauge,
  },
  {
    title: "Continuous Learning Opportunities",
    description:
      "Stay ahead in the tech world with access to training, workshops, and cutting-edge tools.",
    icon: IconUser,
  },
  {
    title: "Flexible Work Options",
    description:
      "Enjoy the freedom of working remotely or with flexible hours to suit your lifestyle.",
    icon: IconCookie,
  },
  {
    title: "Career Growth",
    description:
      "Take advantage of clear career development paths and opportunities for advancement within the company.",
    icon: IconGauge,
  },
];

export function BenefitCareer() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50), marginLeft: "120px" }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Benefits
      </Title>

      <Text className={classes.description} ta="center" mt="md">
        Here are some of the perks of being a part of Software Company.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default BenefitCareer;
