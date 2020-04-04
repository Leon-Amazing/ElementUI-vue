<template>
  <div class="unit">
    <el-cascader :options="options" :show-all-levels="false" placeholder="请选择单位"></el-cascader>
  </div>
</template>

<script>
export default {
  name: 'Unit',
  data () {
    return {
      options: [{
        value: '111',
        label: '长度单位',
        children: []
      },
      {
        value: '222',
        label: '面积单位',
        children: []
      },
      {
        value: '333',
        label: '体积单位',
        children: []
      },
      {
        value: '444',
        label: '重量单位',
        children: []
      },
      {
        value: '555',
        label: '物理单位',
        children: []
      },
      {
        value: '666',
        label: '其他单位',
        children: []
      }]
    }
  },
  created () {
    this.$http.get('../static/unit.json').then(res => {
      this.unitArr = res.body
      for (var i in this.unitArr) {
        for (var j in this.unitArr[i]) {
          if (j === 'Good_unit_id') {
            this.unitArr[i]['value'] = this.unitArr[i][j]// 修改属性名为“value”
            delete this.unitArr[i]['Good_unit_id']
          }
          if (j === 'Good_unit_name') {
            this.unitArr[i]['label'] = this.unitArr[i][j]// 修改属性名为“label”
            delete this.unitArr[i]['Good_unit_name']
          }
        }
      }
      this.unitArr.forEach(item => {
        let num = Number(item.value)
        if (num < 200) {
          this.options[0].children.push(item)
        }
        if (num > 200 && num < 300) {
          this.options[1].children.push(item)
        }
        if (num > 300 && num < 400) {
          this.options[2].children.push(item)
        }
        if (num > 400 && num < 500) {
          this.options[3].children.push(item)
        }
        if (num > 500 && num < 700) {
          this.options[4].children.push(item)
        }
        if (num > 700 && num < 900) {
          this.options[5].children.push(item)
        }
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
