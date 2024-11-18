import React from "react";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./heroProduct.module.css";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Empowering Solutions for Every Need
        </Title>

        <Container size={800}>
          <Text
            size="lg"
            className={classes.description}
            style={{ color: "white" }}
          >
            Our software solutions deliver powerful functionality and seamless
            performance for users and businesses.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
