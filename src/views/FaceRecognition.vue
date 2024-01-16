<template>
  <div class="class_face_recognition">
    <el-container>
      <el-header>
        <div class="class_title">人脸识别</div>
      </el-header>

      <el-main>

        <div style="display:flex">

          <!-- 左侧图片展示位置 -->
          <div>
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

            <div class="class_select" style="margin-top: 20px">

              <el-upload
                  class="upload-demo"
                  :before-upload="beforeUpload"
                  accept="image/png, image/jpeg">
                <el-button type="primary">上传本地照片检测</el-button>
              </el-upload>

            </div>
          </div>
        
          <div style="width: 150px;"></div>

          <!-- 根据检测结果返回的个人信息 -->
          <div class = "information">
            <div v-if="recognitionList.length != 0">
              <!-- 人脸识别结果 -->
              <div v-for="(item, index) in recognitionList" :key="index">

                <div v-if="item.name !== null">
                  <!-- 展示信息平铺 -->
                  <div style="display: flex; border: 2px solid #cccccc; border-radius: 20px; padding: 20px; width: 300px;" >
                  
                    <!-- 头像 -->
                    <div>
                      <!-- <img src="images/logo.png" alt="头像" width="100" height="100" /> -->
                      <img :src="item.photo" alt="头像" width="100" height="100" />
                    </div>

                    <div style="width: 50px;"></div>

                    <!-- 基本信息 -->
                    <div>
                      <p>姓名: {{ item.name }}</p>
                      <p>性别: {{ item.sex }}</p>
                      <p>工位: {{ item.desk }}</p>
                      <p>省份: {{ item.province }}</p>
                    </div>
                  
                  </div>

                  <p style="height: 20px;"></p>
                </div>

                <!-- <img :src="item.photo" alt="头像" width="100" height="100" /> -->
                <!-- <p>姓名：{{item.name}}</p> -->
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, toRefs, reactive, ref} from 'vue'
import axios from '@/utils/axios'

const state = reactive({
  selectValue: 'images/zhaoyang.jpg',
  imageSrc: '',
  imageOption: [{
    value: 'images/zhaoyang.jpg',
    label: '赵丽颖&杨紫',
  }]
})

const recognitionList = ref([]); // 使用ref创建响应式数据

onMounted(() => {
  // responseDrawImage(state.selectValue)
})

const selectChange = (value: string) => {
  // responseDrawImage(value)
}

const beforeUpload = (file: Blob) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);//读取图像文件 result 为 DataURL, DataURL 可直接 赋值给 img.src
  reader.onload = function (event: any) {
    responseDrawImage(event.target.result)
  }
}

const responseDrawImage = (src: string) => {

  let image = new Image();
  image.src = src;
  image.onload = function () {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let ctx: any = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, image.width, image.height)
    axios.post("/faceRecognition", {image: canvas.toDataURL()})
        .then((response: any) => {
          if (response.code == 1 && response.data.length > 0) {
            // 画人脸位置信息
            response.data.forEach((r: any) => {

              let rect = r.rect;
              let x = rect.left;
              let y = rect.top;
              let w = rect.right - rect.left;
              let h = rect.bottom - rect.top;
              ctx.strokeStyle = "#FF0000";
              ctx.lineWidth = 5;
              ctx.strokeRect(x, y, w, h);
              ctx.fillStyle = "#FF0000";
              let maxSize = Math.max(image.width, image.height);
              let size = maxSize / 40;
              ctx.font = size + "px Georgia";
              ctx.fillText(r.name == undefined ? '未知' : r.name, x, y - 10);

            });

            recognitionList.value = response.data;

            console.log(recognitionList.value);

          }
          state.imageSrc = canvas.toDataURL("image/jpeg");

        });
  }

}
</script>

<style scoped>

.class_face_recognition .class_title {
  font-size: 25px;
  margin-top: 20px;
  margin-left: 20px;
  width: 800px;
  text-align: center;
}

.class_face_recognition .class_image__lazy {

  width: 800px;
  height: 500px;
  margin-left: 20px;
  border: 1px solid black;
}

.class_face_recognition .image__lazy {
  width: 800px;
  height: 500px;
}

.class_face_recognition .class_select {
  margin-left: 20px;
  width: 800px;
  text-align: center;
}

</style>