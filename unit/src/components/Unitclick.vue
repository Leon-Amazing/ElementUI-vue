<template>
  <div calss="unit_wrap">
    <el-input v-model="val" placeholder="请选择单位" style="width: 118px;" @focus="getFocus()"></el-input>
    <div class="unit" v-if="show">
      <el-tabs type="border-card">
        <el-tab-pane label="度量">
          <span :class="{active:index===flag}" v-for="(item,index) in this.lengthUnit" :key="'span_1'+index" @click="le(index,item)">{{item.Good_unit_name}}</span>
          <br>
          <span :class="{active:index===flag1}" v-for="(item,index) in this.areaUnit" :key="'span_2'+index" @click="le1(index,item)">{{item.Good_unit_name}}</span>
          <br>
          <span :class="{active:index===flag2}" v-for="(item,index) in this.volumeUnit" :key="'span_3'+index" @click="le2(index,item)">{{item.Good_unit_name}}</span>
          <br>
          <span :class="{active:index===flag3}" v-for="(item,index) in this.weightUnit" :key="'span_4'+index" @click="le3(index,item)">{{item.Good_unit_name}}</span>
        </el-tab-pane>

        <el-tab-pane label="其他">
          <span :class="{active:index===flag4}" v-for="(item,index) in this.otherUnit" :key="index" @click="ot(index,item)">{{item.Good_unit_name}}</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Unit',
  data () {
    return {
      unitArr: [],
      lengthUnit: [],
      areaUnit: [],
      volumeUnit: [],
      weightUnit: [],
      otherUnit: [],
      flag: -1,
      flag1: -1,
      flag2: -1,
      flag3: -1,
      flag4: -1,
      val: '',
      show: false
    }
  },
  created () {
    this.$http.get('../static/unit.json').then(res => {
      this.unitArr = res.body
      this.unitArr.forEach(item => {
        let num = Number(item.Good_unit_id)
        if (num < 200) {
          this.lengthUnit.push(item)
        }
        if (num > 200 && num < 300) {
          this.areaUnit.push(item)
        }
        if (num > 300 && num < 400) {
          this.volumeUnit.push(item)
        }
        if (num > 400 && num < 500) {
          this.weightUnit.push(item)
        }
        if (num > 700 && num < 900) {
          this.otherUnit.push(item)
        }
      })
    })
  },
  methods: {
    le (index, item) {
      this.flag = index
      this.flag1 = -1
      this.flag2 = -1
      this.flag3 = -1
      this.flag4 = -1
      this.val = item.Good_unit_name
      this.show = false
    },
    le1 (index, item) {
      this.flag1 = index
      this.flag = -1
      this.flag2 = -1
      this.flag3 = -1
      this.flag4 = -1
      this.val = item.Good_unit_name
      this.show = false
    },
    le2 (index, item) {
      this.flag2 = index
      this.flag1 = -1
      this.flag = -1
      this.flag3 = -1
      this.flag4 = -1
      this.val = item.Good_unit_name
      this.show = false
    },
    le3 (index, item) {
      this.flag3 = index
      this.flag1 = -1
      this.flag2 = -1
      this.flag = -1
      this.flag4 = -1
      this.val = item.Good_unit_name
      this.show = false
    },
    ot (index, item) {
      this.flag4 = index
      this.flag = -1
      this.flag1 = -1
      this.flag2 = -1
      this.flag3 = -1
      this.val = item.Good_unit_name
      this.show = false
    },
    getFocus () {
      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .unit{
    width:  118px;
    font-size: 6px;
    z-index: 999;
    position: absolute;
  }
  span{
   text-align:center;
   border:1px solid #ccc;
   margin-right:-1px;
   margin-bottom:-1px;
   display: inline-block;
   padding: 5px 5px;
  }
   .active{
      color: rgb(64,158,255);
  }
</style>
<style>
  .el-tabs__item {
    padding:0 14px;
    height: 30px;
    line-height: 30px;
  }
  .unit .el-tabs--border-card>.el-tabs__content{
    padding: 0px;
    height: 109px;
    overflow: auto;
    text-align: left;
  }
  .unit .el-tabs--border-card>.el-tabs__content::-webkit-scrollbar {display:none}
  .unit .el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(1){
      padding-left: 15px;
  }
  .unit el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
      padding-right: 15px;
  }
  .el-input__inner{
    text-align: center;
  }
</style>
