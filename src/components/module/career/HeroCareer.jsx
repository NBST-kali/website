import React from "react";
import { Title, Text, Container, Overlay } from "@mantine/core";
import classes from "./HeroCareer.module.css";

const HeroCareer = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Join Our Software Company</Title>

        <Container size={800}>
          <Text
            size="lg"
            className={classes.description}
            style={{ color: "white" }}
          >
            Join our team to drive innovation and create impactful digital
            solutions
          </Text>
        </Container>
      </div>
    </div>
  );
};

export default HeroCareer;
