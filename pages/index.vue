<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
</script>

<template>
    <Card class="w-[350px]">
        <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent> </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
            <Button variant="outline"> Cancel </Button>
            <Button>Deploy</Button>
        </CardFooter>
    </Card>
</template>
