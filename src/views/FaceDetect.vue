<template>
  <div class="class_face_detect">
    <el-container>
      <el-header>
        <div class="class_title">人脸录入</div>
      </el-header>
  
      <el-container>

        <!-- 前端主体 -->
        <el-main>

        <div style="display:flex">

          <!-- 图片 -->
          <div class="class_image__lazy">
            <el-image class="image__lazy" fit="contain" :src="state.imageSrc">
              <template #error>
                <div class="image-slot">
                  <el-icon>
                    <icon-picture/>
                  </el-icon>
                </div>
              </template>
            </el-image>
          </div>

          <div style="width: 150px;"></div>

          <!-- 表单 -->
          <div class="form">
            <el-form :model="formValues" :rules="formRules">

              <!-- 姓名 -->
              <el-form-item label="姓名:" prop="name">
                <el-input v-model="formValues.name"></el-input>
              </el-form-item>

              <!-- 电话 -->
              <el-form-item label="&nbsp&nbsp电话:" prop="phone">
                <el-input type="text" id="phone" v-model="formValues.phone"></el-input>
              </el-form-item>

              <!-- 性别 -->
              <el-form-item label="性别：" prop="sex">
                <el-radio-group v-model="formValues.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>

              <!-- 年级 -->
              <!-- <el-form-item label="&nbsp&nbsp年级：" prop="grade">
                <el-select v-model="formValues.grade" placeholder="请选择年级：">
                  <el-option label="大一" value="大一"></el-option>
                  <el-option label="大二" value="大二"></el-option>
                  <el-option label="大三" value="大三"></el-option>
                  <el-option label="大四" value="大四"></el-option>
                  <el-option label="研一" value="研一"></el-option>
                  <el-option label="研二" value="研二"></el-option>
                  <el-option label="研三" value="研三"></el-option>
                </el-select>
              </el-form-item> -->

              <!-- 入学年份 -->
              <el-form-item label="入学年份:" prop="enrollmentYear">
                <el-input type="number" id="enrollmentYear" v-model="formValues.enrollmentYear"></el-input>
              </el-form-item>

              <!-- 工位 -->
              <el-form-item label="&nbsp&nbsp工位：">
                <el-select v-model="formValues.desk" placeholder="请选择工位：">
                  <el-option label="1-1" value="1-1"></el-option>
                  <el-option label="1-2" value="1-2"></el-option>
                  <el-option label="1-3" value="1-3"></el-option>
                  <el-option label="1-4" value="1-4"></el-option>
                  <el-option label="1-5" value="1-5"></el-option>
                  <el-option label="2-1" value="2-1"></el-option>
                  <el-option label="2-2" value="2-2"></el-option>
                  <el-option label="2-3" value="2-3"></el-option>
                  <el-option label="2-4" value="2-4"></el-option>
                  <el-option label="2-5" value="2-5"></el-option>
                  <el-option label="3-1" value="3-1"></el-option>
                  <el-option label="3-2" value="3-2"></el-option>
                  <el-option label="3-3" value="3-3"></el-option>
                  <el-option label="3-4" value="3-4"></el-option>
                  <el-option label="3-5" value="3-5"></el-option>
                  <el-option label="4-1" value="4-1"></el-option>
                  <el-option label="4-2" value="4-2"></el-option>
                  <el-option label="4-3" value="4-3"></el-option>
                  <el-option label="4-4" value="4-4"></el-option>
                  <el-option label="4-5" value="4-5"></el-option>
                  <el-option label="5-1" value="5-1"></el-option>
                  <el-option label="5-2" value="5-2"></el-option>
                  <el-option label="5-3" value="5-3"></el-option>
                  <el-option label="5-4" value="5-4"></el-option>
                  <el-option label="5-5" value="5-5"></el-option>
                  <el-option label="6-1" value="6-1"></el-option>
                  <el-option label="6-2" value="6-2"></el-option>
                  <el-option label="6-3" value="6-3"></el-option>
                  <el-option label="6-4" value="6-4"></el-option>
                  <el-option label="6-5" value="6-5"></el-option>
                  <el-option label="暂无座位" value="暂无座位"></el-option>
                </el-select>
              </el-form-item>

              <!-- 省份 -->
              <el-form-item label="省份：" prop="province">
                <el-select v-model="formValues.province" placeholder="请选择省份：">
                  <el-option label="北京市" value="北京市"></el-option>
                    <el-option label="天津市" value="天津市"></el-option>
                    <el-option label="河北省" value="河北省"></el-option>
                    <el-option label="山西省" value="山西省"></el-option>
                    <el-option label="内蒙古自治区" value="内蒙古自治区"></el-option>
                    <el-option label="辽宁省" value="辽宁省"></el-option>
                    <el-option label="吉林省" value="吉林省"></el-option>
                    <el-option label="黑龙江省" value="黑龙江省"></el-option>
                    <el-option label="上海市" value="上海市"></el-option>
                    <el-option label="江苏省" value="江苏省"></el-option>
                    <el-option label="浙江省" value="浙江省"></el-option>
                    <el-option label="安徽省" value="安徽省"></el-option>
                    <el-option label="福建省" value="福建省"></el-option>
                    <el-option label="江西省" value="江西省"></el-option>
                    <el-option label="山东省" value="山东省"></el-option>
                    <el-option label="河南省" value="河南省"></el-option>
                    <el-option label="湖北省" value="湖北省"></el-option>
                    <el-option label="湖南省" value="湖南省"></el-option>
                    <el-option label="广东省" value="广东省"></el-option>
                    <el-option label="广西壮族自治区" value="广西壮族自治区"></el-option>
                    <el-option label="海南省" value="海南省"></el-option>
                    <el-option label="重庆市" value="重庆市"></el-option>
                    <el-option label="四川省" value="四川省"></el-option>
                    <el-option label="贵州省" value="贵州省"></el-option>
                    <el-option label="云南省" value="云南省"></el-option>
                    <el-option label="西藏自治区" value="西藏自治区"></el-option>
                    <el-option label="陕西省" value="陕西省"></el-option>
                    <el-option label="甘肃省" value="甘肃省"></el-option>
                    <el-option label="青海省" value="青海省"></el-option>
                    <el-option label="宁夏回族自治区" value="宁夏回族自治区"></el-option>
                    <el-option label="新疆维吾尔自治区" value="新疆维吾尔自治区"></el-option>
                    <el-option label="台湾省" value="台湾省"></el-option>
                    <el-option label="香港特别行政区" value="香港特别行政区"></el-option>
                    <el-option label="澳门特别行政区" value="澳门特别行政区"></el-option>
                </el-select>
              </el-form-item>
              
              <!-- 提交 -->
              <el-button type="primary" @click="handleSubmit">提交</el-button>

              <!-- 重置 -->
              <el-button @click="resetSubmit">重置</el-button>
            </el-form>
          </div>
        </div>

      </el-main>
      </el-container>

      <el-footer>

        <div class="class_select">
          <span style="margin-left: 20px;margin-right: 10px">选择下拉照片</span>
          <el-select v-model="state.selectValue" @change="selectChange" placeholder="Select">
            <el-option
                v-for="item in state.imageOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>

        <div class="class_select" style="margin-top: 20px">

          <el-upload
              class="upload-demo"
              :before-upload="beforeUpload"
              accept="image/png, image/jpeg"
              :show-file-list="false"
          >
            <el-button type="primary">上传本地照片检测</el-button>
          </el-upload>

        </div>

      </el-footer>


    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, toRefs, ref, watch} from 'vue'
import { ElFormItem, ElInput, ElButton, ElMessageBox } from 'element-plus';
import { ElForm } from 'element-plus';
import axios from '@/utils/axios'

const state = reactive({
  selectValue: 'images/Image1-1.jpg',
  imageSrc: '',
  imageOption: [{
    value: 'images/Image1-1.jpg',
    label: 'Image1-1.jpg',
  },
    {
      value: 'images/Image2-1.jpg',
      label: 'Image2-1.jpg'
    },
    {
      value: 'images/Image3-1.jpg',
      label: 'Image3-1.jpg',
    },]
})

/**
 * 关联输入内容
 */
const formValues = ref({
  name: '',
  phone:'',
  sex:'',
  grade:'',
  enrollmentYear:2024,
  desk:'暂无座位',
  province:'',
  photo:''
});

/**
 * 关联规则
 */
const formRules = {
  name: [
    {required: true, message: '姓名不能为空', trigger: 'blur'},
    {max: 50, message: '长度在50个字符以内', trigger: 'blur'}
  ],
  phone: [
    {min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur'}
  ],
  sex: [
    {required: true, message: '性别不能为空', trigger:'blur'}
  ],
  // grade: [
  //   {required: true, message: '年级不能为空', trigger: 'blur'}
  // ],
  enrollmentYear: [
    {required: true, messsage: '入学年份', trigger: 'blur'}
  ],
  province: [
    {required: true, message: '省份不能为空', trigger: 'blur'}
  ]
};

/**
 * 自动填充入学年份
 */
// watch( () => formValues.value.grade, (newValue) => {
//     switch(newValue){
//       case '研三':
//         formValues.value.enrollmentYear = 2021;
//         break;
//       case '研二':
//         formValues.value.enrollmentYear = 2022;
//         break;
//       case '研一':
//         formValues.value.enrollmentYear = 2023;
//         break;
//       case '大四':
//         formValues.value.enrollmentYear = 2024;
//         break;
//       case '大三':
//         formValues.value.enrollmentYear = 2025;
//         break;
//       case '大二':
//         formValues.value.enrollmentYear = 2026;
//         break;
//       case '大一':
//         formValues.value.enrollmentYear = 2027;
//         break;
//     }
//   }
// );

/**
 * 表单提交
 */
const handleSubmit = () => {
  // 这里是表单提交的逻辑

  // 检查姓名逻辑
  if(formValues.value.name == '' || formValues.value.name.length >= 50){
    console.log("姓名不能为空");
    ElMessageBox.alert('姓名不能为空！');
    return false;
  }

  // 检查手机号码逻辑
  if(formValues.value.phone != '' && formValues.value.phone.length != 11){
    console.log("请输入正确的手机号");
    ElMessageBox.alert('请输入正确的手机号！');
    return false;
  }

  // 检查性别逻辑
  if(formValues.value.sex == ''){
    console.log("性别不能为空");
    ElMessageBox.alert('性别不能为空！');
    return false;
  }

  // 检查年级逻辑
  // if(formValues.value.grade == ''){
  //   console.log("年级不能为空");
  //   ElMessageBox.alert('年级不能为空！');
  //   return false;
  // }

    // 检查年级逻辑
  if(formValues.value.enrollmentYear == ''){
    console.log("入学年份不能为空");
    ElMessageBox.alert('入学年份不能为空！');
    return false;
  }

  // 检查省份逻辑
  if(formValues.value.province == ''){
    console.log("省份不能为空");
    ElMessageBox.alert('省份不能为空！');
    return false;
  }

  // 检查人脸图片逻辑
  if(formValues.value.photo == ''){
    console.log("照片不能为空");
    ElMessageBox.alert("照片不能为空！");
    return false;
  }

  // 可以通过 formValues.value 获取表单数据
  console.log('Form submitted with values:', formValues.value);
  axios.post('/informationSubmit', formValues.value)
    .then((response: any) => {
      console.log(response.data);
      // 未检测到人脸
      if(response.data == 0){
        ElMessageBox.alert("未检测到人脸，请重新上传照片！");
        return false;
      }

      // 人脸数量过多
      if(response.data > 1){
        ElMessageBox.alert("人脸数量过多，请重新上传照片！");
        return false;
      }

      ElMessageBox.alert("提交成功！");
    });
}

/**
 * 表单重置
 */
 const resetSubmit = () => {
  // 表单重置
  formValues.value.name = '';
  formValues.value.phone = '';
  formValues.value.sex = '';
  formValues.value.grade = '';
  formValues.value.enrollmentYear = 2024;
  formValues.value.desk = '';
  formValues.value.province = '';
}

/**
 * 默认选择图片
 */
onMounted(() => {
  // responseDrawImage(state.selectValue)
  // getFaceFeature(state.selectValue)
})

/**
 * 
 * @param value 下拉列表选择图片
 */
const selectChange = (value: string) => {
  responseDrawImage(value)
  // getFaceFeature(value)
}

/**
 * 
 * @param file 读取电脑本地文件选择图片
 */
const beforeUpload = (file: Blob) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);//读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
  reader.onload = function (event: any) {
    formValues.value.photo = event.target.result;
    responseDrawImage(event.target.result);
    // getFaceFeature(event.target.result);
  }
}

/**
 * 自定义属性
 */
const props = defineProps({
  input_name:{
    type: String,
    default: ''
  }
});




/**
 * 1 向后端发送请求，获取人脸信息
 * 2 将人脸信息绘制在前端界面
 * @param src 
 */
const responseDrawImage = (src: string) => {
  let image = new Image();
  image.src = src;
  image.onload = function () {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx: any = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height)
    axios.post("/faceDetect", {image: canvas.toDataURL()})
        .then((response: any) => {
          if (response.code === 1 && response.data.length > 0) {
            response.data.forEach((r: any) => {
              let rect = r.rect;
              let x = rect.left;
              let y = rect.top;
              let w = rect.right - rect.left;
              let h = rect.bottom - rect.top;
              ctx.strokeStyle = "#FF0000";
              ctx.lineWidth = 5;
              ctx.strokeRect(x, y, w, h);
              let gender = '未知'
              if (r.gender === 0) {
                gender = '男'
              } else if (r.gender === 1) {
                gender = '女'
              }

              let liveness = '-';
              if (r.liveness == 1) {
                liveness = '活体'
              } else if (r.liveness == 0) {
                liveness = '非活体'
              }

              let txt = '性别:' + gender + '，年龄:' + r.age;
              let maxSize = Math.max(image.width, image.height);
              let size = maxSize / 50;
              ctx.fillStyle = "#FF0000";
              ctx.font = size + "px Georgia";
              ctx.fillText(txt, x, y - 10);
              console.info("detectSuccess")

            });
          }
          state.imageSrc = canvas.toDataURL("image/jpeg");

        });
  }
}

const getFaceFeature = (src: string) => {
  let image = new Image();
  image.src = src;
  image.onload = function () {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx: any = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height)
    axios.post("/getFaceFeature", {image: canvas.toDataURL()})
  }
}

</script>

<style scoped>

.class_face_detect .class_title {
  font-size: 25px;
  margin-top: 20px;
  margin-left: 20px;
  width: 800px;
  text-align: center;
}

.class_face_detect .class_image__lazy {

  width: 800px;
  height: 500px;
  margin-left: 20px;
  border: 1px solid black;
}

.class_face_detect .image__lazy {
  width: 800px;
  height: 500px;
}

.class_face_detect .class_select {
  margin-left: 20px;
  width: 800px;
  text-align: center;
}

</style>