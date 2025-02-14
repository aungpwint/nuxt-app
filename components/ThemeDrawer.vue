<script setup lang="ts">
import { Paintbrush } from 'lucide-vue-next'
</script>

<template>
    <Drawer>
        <DrawerTrigger as-child>
            <Button variant="ghost" size="icon">
                <Paintbrush size="16" />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div class="mx-auto max-w-sm w-full">
                <ThemeCustomize class="p-4" />
            </div>
        </DrawerContent>
    </Drawer>
</template>
