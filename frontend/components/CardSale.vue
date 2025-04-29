<template>
  <div>
    <Card>
      <CardHeader class="px-4">
        <div class="flex items-center justify-between">
          <p>{{ cardDetail.title }}</p>
          <Badge class="bg-green-400">{{
            "+" + cardDetail.progression + "%"
          }}</Badge>
        </div>
      </CardHeader>
      <CardContent class="flex items-center justify-end px-4 border-b">
        <div class="text-[48px] font-[700]">
          <span class="text-neutral-300">$</span>
          <span>{{ cardDetail.amount }}</span>
        </div>
      </CardContent>
      <CardFooter class="flex items-center justify-between gap2 px-4">
        <div>
          <Icon size="20" :name="cardDetail.icon" />
        </div>
        <p class="text-xs grow mx-1">{{ cardDetail.description }}</p>
        <Button variant="outline">{{ cardDetail.label }}</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
export interface CardDetail {
  title: string;
  progression: number;
  description: string;
  amount: number;
  label: string;
  icon: string;
}

interface CardSaleProps {
  cardDetail: CardDetail;
}

const props = defineProps<CardSaleProps>();
</script>

<style scoped></style>
