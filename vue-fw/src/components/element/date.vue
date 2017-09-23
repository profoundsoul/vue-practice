<template>
  <div>
    <el-row>

    <label >Range Disable Date</label>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      format="dd/MM/yyyy"
      :picker-options="pickerOptions">
    </el-date-picker>
    </el-row>
    <el-row>
      <label>Deafult Date</label>
      <el-date-picker
      v-model="value2"
      type="date"
      format="dd/MM/yyyy"
      :default-value="defaultvalue2"
      ></el-date-picker>
    </el-row>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        value1:'',
        value2:'',
        defaultvalue2:new Date().setMonth(new Date().getMonth()-1),
        pickerOptions:{
          disabledDate(x,y){
            return +x < +new Date();
          }
        }
      }
    },
    methods:{
    }
  }
</script>
<style>

</style>
