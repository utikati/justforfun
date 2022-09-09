import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Text, Title } from "@mantine/core";

function AdviceComp() {
  const content = {
    color: "rgba(0,0,255)",
    padding: "10px",
  };

  const [value, setValue] = useState("");

  const justdiv = {
    marginBottom: "15px",
  };

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setValue(response.data.slip.advice);
    });
  }, []);

  return (
    <div style={content}>
      <div style={justdiv}>
        <Title color="dark">The Advicer</Title>
        <Text color="dark">{value}</Text>
      </div>

      <Button
        onClick={() => {
          axios.get("https://api.adviceslip.com/advice").then((response) => {
            setValue(response.data.slip.advice);
          });
        }}
        variant="outline"
        radius="xl"
        color="dark"
      >
        Next Advice
      </Button>
    </div>
  );
}

export default AdviceComp;
