<template>
  <div class="form-item" :class="[formLayout]">
    <label v-if="title">{{title}}</label>
    <div class="item-content">
      <input
        v-if="type"
        :type="type"
        v-model="val"
        :placeholder="placeholder"
      />
      <div class="">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  inject: ['formLayout'],
  watch: {
    val (newValue) {
      console.log(newValue)

      this.$emit('input', newValue)
    },
    value (newValue) {
      this.val = newValue
    }
  },
  mounted () {
    console.log(this.formLayout)
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  border-bottom: 1px solid #ccc;
  &.inline {
    flex-direction: row;
  }
  &.column {
    flex-direction: column;
  }
  label {
    width: 80px;
    text-align: left;
    font-size: 14px;
  }
  .item-content {
    flex: 1;
    display: flex;
    input {
      border: 0;
      background: transparent;
      display: block;
      width: 100%;
      height: 80px;
      outline: none;
    }
    div {
      flex-shrink: 0;
    }
  }
}
</style>
