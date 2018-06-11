<template>
  <el-dropdown trigger="click" :show-timeout="100">
    <el-button plain>{{!comment_disabled?'댓글 비허용':'댓글 허용'}}
      <i class="el-icon-caret-bottom el-icon--right"></i>
    </el-button>
    <el-dropdown-menu class="no-padding" slot="dropdown">
      <el-dropdown-item>
        <el-radio-group style="padding: 10px;" v-model="comment_disabled">
          <el-radio :label="true">댓글 허용</el-radio>
          <el-radio :label="false">댓글 비허용</el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    comment_disabled: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
