import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import productImage from "../../../image/product_main.png";

export default function Main() {
  return (
    <Container
      size="lg"
      style={{
        padding: "60px",
        position: "relative",
        // marginTop: "50px",
      }}
    >
      <Grid>
        {/* Left Section */}
        <Grid.Col
          span={4}
          style={{
            position: "relative",
            background: `url(${productImage}) center / cover no-repeat`,
            borderRadius: "16px",
          }}
        ></Grid.Col>

        {/* Right Section */}
        <Grid.Col
          span={8}
          style={{
            // backgroundColor: "#00A3B6",
            color: "#050419",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "619px",
            width: "817px",
            gap: "60px",
          }}
        >
          <Title order={1} style={{ fontSize: "32px", marginBottom: "16px" }}>
            Empowering Businesses with Innovative IT Solutions
          </Title>

          <Text size="md" style={{ marginBottom: "24px", lineHeight: 1.6 }}>
            [Company Name] is a leading IT company in Nepal, dedicated to
            providing businesses with cutting-edge technology solutions. Since
            our founding in 2017, we’ve made it our mission to bridge the gap
            between traditional business processes and the ever-evolving needs
            of the digital world.
          </Text>

          <Text size="md" style={{ marginBottom: "24px", lineHeight: 1.6 }}>
            At [Company Name], we believe in practical, hands-on
            problem-solving. Our team of experienced professionals goes beyond
            delivering technology; we provide end-to-end solutions, helping
            businesses streamline operations, enhance security, and unlock
            growth potential. Whether you need software development, cloud
            solutions, or data analytics, we have the expertise to drive your
            success.
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
