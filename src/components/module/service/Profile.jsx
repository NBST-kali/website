import React from "react";
import { Container, Grid, Title, Text, Button, Overlay } from "@mantine/core";

import servicePersonImage from "../../../image/service_person.jfif";

export default function Profile() {
  return (
    <Container size="lg" style={{ padding: 0, position: "relative" }}>
      <Grid>
        {/* Left Section */}
        <Grid.Col
          span={6}
          style={{
            backgroundColor: "#00A3B6",
            color: "white",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Title order={1} style={{ fontSize: "32px", marginBottom: "16px" }}>
            We Provide Truly Prominent IT Solutions
          </Title>
          <Text size="md" style={{ marginBottom: "24px", lineHeight: 1.6 }}>
            We provide industry-leading IT solutions designed to drive
            innovation and efficiency. Our team delivers customized software, IT
            consulting, and cutting-edge technology to help businesses solve
            complex challenges and achieve their goals. Let us help you elevate
            your business with tailored, reliable solutions.
          </Text>
          <Button
            size="md"
            color="dark"
            style={{ backgroundColor: "#000", borderRadius: "50px" }}
          >
            Let's Get Started
          </Button>
        </Grid.Col>

        {/* Right Section */}
        <Grid.Col
          span={6}
          style={{
            position: "relative",
            background: `url(${servicePersonImage}) center / cover no-repeat`,
          }}
        >
          <Overlay opacity={0} color="#000" zIndex={1} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
