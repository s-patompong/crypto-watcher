import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export default function CoinCard() {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <h1 className="font-semibold text-3xl">NANO/USDT</h1>
    </Card>
  );
}