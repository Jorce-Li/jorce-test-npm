<template>
    <div class="test">
        <button>{{text}}</button>
    </div>
</template>

<script>
export default {
  name: 'test', // 组件的name属性（后面有提到这里有个坑）
    props: {
        text: { // 文本
            type: String,
            default () {
                return ''
            }
        }
    },
    data () {
        return {
        }
    }
}
</script>
