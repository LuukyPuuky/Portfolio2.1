<script setup lang="ts">
interface ProductLink {
  text: string;
  to: string;
}

defineProps<{
  title?: string;
  products: ProductLink[];
}>();
</script>

<template>
  <div id="products" class="mb-12">
    <h2 class="text-4xl font-bold mb-6">{{ title || "Producten" }}</h2>
    <ul class="space-y-2">
      <li v-for="(product, index) in products" :key="index">
        <NuxtLink
          :href="product.to"
          class="text-green-500 hover:text-green-400 text-xl transition-colors duration-200 relative group"
        >
          {{ product.text }}
          <span
            class="absolute left-0 bottom-[-3px] w-full h-0.5 bg-purple-400 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"
          ></span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
