<template>
  <div>
    <AlertDialog :open="open">
      <AlertDialogTrigger>
        <Button @click="open = true">Add new product</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new product</AlertDialogTitle>
          <Input
            placeholder="Product name"
            class="border border-gray-300 rounded p-2 w-full"
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
          <AlertDialogAction @click="createNewProduct"
            >Create</AlertDialogAction
          >
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script setup lang="ts">
const { loading, open } = useHelpers();

const createNewProduct = async () => {
  try {
    loading.value = true;
    // Simulate an API call
  } catch (error) {
    console.error("Error creating new product:", error);
  } finally {
    loading.value = false;
    open.value = false;
  }
};
</script>

<style scoped></style>
