<script setup lang="ts">
import { Paintbrush } from 'lucide-vue-next'
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="ghost" size="icon">
                <Paintbrush size="16" />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-92" align="end">
            <ThemeCustomize />
        </PopoverContent>
    </Popover>
</template>
