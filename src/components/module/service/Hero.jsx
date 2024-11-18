import React from "react";
import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>OUR SERVICES</Title>

        <Container size={800}>
          <Text
            size="lg"
            className={classes.description}
            style={{ color: "white" }}
          >
            At our software company, we specialize in creating intuitive,
            user-centered designs that enhance digital experiences and drive
            engagement across all platforms.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
