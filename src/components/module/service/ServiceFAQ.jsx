import React from "react";
import { Container, Title, Accordion, Text } from "@mantine/core";
import classes from "./ServiceFAQ.module.css";

const placeholder =
  "We provide diverse software development services, including custom web and mobile apps, enterprise solutions, SaaS platforms, e-commerce systems, and cloud applications, serving industries like healthcare, finance, e-commerce, and education.";

const placeholder1 =
  "We collaborate closely with clients to understand their objectives, conduct detailed requirement analyses, and ensure alignment through regular progress reviews, feedback sessions, and agile adjustments. Our focus remains on delivering tailored solutions that meet business goals and drive measurable success.";

const placeholder2 =
  "Yes, we offer comprehensive post-launch support, including bug fixes, system updates, and enhancements. Our dedicated team ensures software remains secure, functional, and up-to-date, providing ongoing maintenance to adapt to evolving business needs and technologies.";

const placeholder3 =
  "We primarily use agile methodologies like Scrum or Kanban to ensure flexibility, iterative development, and client involvement. Depending on project requirements, we also employ waterfall or hybrid approaches, guaranteeing a tailored and effective development process.";

const placeholder4 =
  "We integrate various payment systems, including Stripe, PayPal, Square, and direct bank integrations. Our team customizes payment solutions to meet client needs, ensuring security, compliance, and seamless user experiences across platforms.";

export const ServiceFAQ = () => {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        F. A. Q.
      </Title>

      <Text ta="center" className={classes.text}>
        Do you have any additional question?
      </Text>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            {" "}
            What types of software development projects do you specialize in?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            How do you ensure that the project aligns with our business goals?
          </Accordion.Control>
          <Accordion.Panel>{placeholder1}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            Do you provide support and maintenance after the software is
            launched?
          </Accordion.Control>
          <Accordion.Panel>{placeholder2}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            What development methodologies do you use?
          </Accordion.Control>
          <Accordion.Panel>{placeholder3}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder4}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default ServiceFAQ;
