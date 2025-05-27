<script setup lang="ts">
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Расписание', href: '/schedule' },
  { name: 'План помещения', href: '/floor-plan' },
  { name: 'Информационный портал', href: '/info-portal' },
  { name: 'Новости', href: '/news' },
  { name: 'Контакты', href: '/contact' },
]
</script>

<template>
  <Disclosure as="nav" class="shadow-lg">
    <div class="max-w-full mx-auto px-0">
      <div class="flex justify-between h-20">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center pl-4">
            <img class="h-12 w-auto" src="../assets/school-logo.svg" alt="Школьный портал" />
            <span class="ml-4 text-3xl font-bold text-custom-title tracking-wide">Сайт навигатор</span>
          </div>
        </div>
        <div class="hidden sm:flex sm:space-x-0">
          <router-link v-for="item in navigation"
                       :key="item.name"
                       :to="item.href"
                       class="inline-flex items-center px-8 py-2 text-xl font-semibold text-custom-link hover:bg-custom-link-hover hover:text-white transition duration-300 border-b-4 border-transparent hover:border-custom-highlight">
            {{ item.name }}
          </router-link>
        </div>
        <div class="flex items-center sm:hidden pr-4">
          <DisclosureButton class="inline-flex items-center justify-center p-4 rounded-full bg-custom-button hover:bg-custom-button-hover text-white shadow-md transition duration-300">
            <span class="sr-only">Открыть меню</span>
            <Bars3Icon v-if="!open" class="block h-10 w-10" aria-hidden="true" />
            <XMarkIcon v-else class="block h-10 w-10" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="py-6 space-y-2 bg-custom-panel">
        <router-link v-for="item in navigation"
                     :key="item.name"
                     :to="item.href"
                     class="block px-6 py-4 text-2xl font-semibold text-custom-panel-link hover:bg-custom-panel-link-hover hover:text-white transition duration-300 border-l-4 border-transparent hover:border-custom-highlight">
          {{ item.name }}
        </router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.bg-custom-nav {
  background: none;
}

.text-custom-title {
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.text-custom-link {
  color: #2c3e50;
}

.bg-custom-link-hover {
  background-color: #e74c3c;
}

.border-custom-highlight {
  border-color: #f1c40f;
}

.bg-custom-button {
  background-color: #e74c3c;
}

.bg-custom-button-hover {
  background-color: #c0392b;
}

.bg-custom-panel {
  background: #ffffff;
}

.text-custom-panel-link {
  color: #2c3e50;
}

.bg-custom-panel-link-hover {
  background-color: #e74c3c;
}

.transition {
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.rounded-full {
  border-radius: 9999px;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}
</style>