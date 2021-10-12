<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input
          type="password"
          v-model="ruleForm.pwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="imgcode">
        <el-input
          type="text"
          v-model="ruleForm.imgcode"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginFun } from "../api/index";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var validateImgage = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "admin",
        pwd: "admin123",
        imgcode: "qwe1",
      },
      rules: {
        account: [{ validator: validateUser, trigger: "blur" }],
        pwd: [{ validator: validatePass, trigger: "blur" }],
        imgcode: [{ validator: validateImgage, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginFun({ ...this.ruleForm }).then((res) => {
            // console.log(res);
            this.$store.commit('get_token',res.data.token)
            this.$store.commit('get_menus',res.data.menus)
            this.$router.push('/')
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
.login {
  width: 100%;
}
</style>