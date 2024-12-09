<template>
    <div  class="px-10 w-full h-16 bg-white dark:bg-gray-800 flex items-center justify-between border-solid border-b-2 border-gray-200">
        <div class="flex items-center">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
            <div class="text-xl ml-4 font-semibold text-slate-700">王某人的网站11</div>
        </div>
        <div>
            <ul class="flex items-center">
                <li class="px-6 py-2 mx-1 rounded-full cursor-pointer relative"
                    :class="selectedOneIndex === index ? 'bg-slate-400' : 'bg-slate-100'"
                    v-for="(item, index) in topNavList" :key="index" @click="toSelectOneIndex(item, index)"
                    @mouseover="toMouseOverOne(item, index)" @mouseout="toMouseOutOne(item, index)">
                    {{ item.label }}

                    <div class="absolute top-10 pt-6 -left-4 w-40">
                        <ul :class="item.children.length > 0 && hoverOneIndex === index
                            ? 'block'
                            : 'hidden'
                            " class="rounded-lg bg-white border-solid border border-gray-300 shadow-md">
                            <li class="px-4 py-2" v-for="(childrenItem, childrenIndex) in item.children"
                                :class="hoverTwoIndex === childrenIndex ? 'bg-slate-400' : 'bg-slate-100'"
                                :key="childrenIndex" @click="toSelectTwoIndex(childrenItem, childrenIndex)"
                                @mouseover="toMouseOverTwo(childrenItem, childrenIndex)"
                                @mouseout="toMouseOutTwo(childrenItem, childrenIndex)">
                                {{ childrenItem.label }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>


        <div class="flex items-center">
            <div class="mr-4 p-1 flex border-2 border-[#0ea5e9] border-solid rounded-lg" @click="toggleDarkMode()">
                <RiSunLine v-show="!isDark" size="20px" color="#0ea5e9" class="my-icon" />
                <RiMoonLine v-show="isDark" size="20px" color="#0ea5e9" class="my-icon" />
            </div>
            <p>Wzw Top Nav111</p>

        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { RiSunLine, RiMoonLine } from '@remixicon/vue';
const topNavList = ref<any[]>([
    {
        name: "index",
        navIndex: 0,
        label: "首页",
        children: [],
    },
    {
        name: "front",
        navIndex: 1,
        label: "前端小食堂",
        children: [
            { name: "html", label: "HTML" },
            { name: "css", label: "CSS" },
            { name: "javascript", label: "JavaScript" },
        ],
    },
    {
        name: "behind",
        navIndex: 2,
        label: "后端自习室",
        children: [
            { name: "java", label: "Java" },
            { name: "golang", label: "GoLang" },
            { name: "mysql", label: "MySql" },
        ],
    },
    {
        name: "tool",
        navIndex: 3,
        label: "巨人的肩膀",
        children: [
            { name: "html", label: "HTML" },
            { name: "css", label: "CSS" },
            { name: "javascript", label: "JavaScript" },
        ],
    },
    {
        name: "bug",
        navIndex: 4,
        label: "bug集中营",
        children: [
            { name: "html", label: "HTML" },
            { name: "css", label: "CSS" },
            { name: "javascript", label: "JavaScript" },
        ],
    },
]);

const selectedOneIndex = ref<number>(0);
const hoverOneIndex = ref<number>(-1);

const selectedTwoIndex = ref<number>(0)
const hoverTwoIndex = ref<number>(-1);

const isDark = ref<boolean>(false)

onMounted(() => {
    selectedOneIndex.value = 0;
});

const toggleDarkMode = () =>{
  document.documentElement.classList.toggle('my-app-dark');
  isDark.value = !isDark.value
}

/**
 * @description 鼠标点击选中一级菜单
 * @param item 
 * @param index 
 */
const toSelectOneIndex = (item: any, index: number) => {
    selectedOneIndex.value = index;
};

/**
 * @description 鼠标移入一级菜单
 * @param item 
 * @param index 
 */
const toMouseOverOne = (item: any, index: number) => {
    hoverOneIndex.value = index;
};

/**
 * @description 鼠标移出一级菜单
 * @param item 
 * @param index 
 */
const toMouseOutOne = (item: any, index: number) => {
    hoverOneIndex.value = -1;
};

/**
 * @description 鼠标点击选中二级菜单
 * @param item 
 * @param index 
 */
const toSelectTwoIndex = (item: any, index: number) => {
    selectedTwoIndex.value = index;
};

/**
 * @description 鼠标移入二级菜单
 * @param item 
 * @param index 
 */
const toMouseOverTwo = (item: any, index: number) => {
    hoverTwoIndex.value = index;
};

/**
 * @description 鼠标移出二级菜单
 * @param item 
 * @param index 
 */
const toMouseOutTwo = (item: any, index: number) => {
    hoverTwoIndex.value = -1;
};




</script>

<style lang="scss" scoped></style>
