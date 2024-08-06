<template>
  <view class="layout">
    <!-- 顶部 -->
    <view class="header">
      <view class="title"><text>计划航班</text></view>
      <view class="iconBox">
        <uni-icons class="icon" type="search" color="#c5c5c5" :size="iconFontSize"></uni-icons>
        <uni-icons class="icon notification" type="notification" color="#c5c5c5" :size="iconFontSize">
          <template v-if="badge > 0">
            <view class="message-bubble" @click="removeMsg">{{ badge }}</view>
          </template>
        </uni-icons>


      </view>
    </view>
    <!-- 中部 -->
    <view class="main">
      <view class="table">
        <view class="tr">
          <view class="th" @click="sortByFlightSchedule()"><text>航班时间</text>
            <view class="diamond"></view>
          </view>
          <view class="th"><text>航班号</text></view>
          <view class="th"><text>飞机号</text></view>
          <view class="th"><text>起降机场</text></view>
          <view class="th"><text>机位-准备室</text></view>
          <view class="th"><text>机组</text></view>
        </view>
        <scroll-view class="scroll" scroll-x="false" scroll-y="true" upper-threshold="50" lower-threshold="50"
          scroll-top="0" scroll-left="0" refresher-enabled="true" refresher-background="#25324F"
          :refresher-triggered="refresherTriggered" @refresherpulling="refresherFlight"
          @scrolltolower="refresherFlight">

          <template v-if="flight.length === 0">
            <view class="null-Info" @click="refresherFlight">暂无航班信息~~点击刷新~~</view>
          </template>
          <template v-else>
            <view v-for="(item, index) in flight" :key="item.flightNumber" class="tr"
              @touchstart="startTouch(index, $event)" @touchmove="onTouchMove" @touchend="endTouch"
              @mousedown="startDrag(index, $event)">
              <view class="td" title="flightSchedule">
                <text>{{ item.flightSchedule.substr(0, 2) }}/{{ item.flightSchedule.substr(2, 2) }}<br>{{
                  item.flightSchedule.substr(4, 2) }}:{{ item.flightSchedule.substr(6, 2) }}</text>
              </view>
              <view class="td" title="flightNumber"><text>{{ item.flightNumber }}</text></view>
              <view class="td" title="aircraftNumber"><text>{{ item.aircraftNumber }}</text></view>
              <view class="td" title="airport"><text>{{ item.airport }}</text></view>
              <view class="td" title="boardingGate"><text>{{ item.boardingGate }}</text></view>
              <view class="td" title="aircrew"><text class="view" @click="open(item.flightNumber)">查看</text>
              </view>
              <template v-if="isShow[index]">
                <template v-if="!item.favorite">
                  <view class="td favorite" title="favorite" @click="handleFavorite(index)">
                    <text>收藏</text>
                  </view>
                </template>
                <template v-else>
                  <view class="td favorite active" title="favorite" @click="handleFavorite(index)">
                    <text>取消收藏</text>
                  </view>
                </template>
              </template>
            </view>
          </template>

        </scroll-view>


      </view>
    </view>
    <!-- 提示信息弹窗 -->
    <uni-popup ref="message" type="message">
      <uni-popup-message :type="msgType" :message="messageText" :duration="1000"></uni-popup-message>
    </uni-popup>
    <!-- 查看机组详情弹窗 -->
    <uni-popup ref="popup" type="center" :animation="true" :is-mask-click="false">
      <view class="datails-box">
        <view class="close" @click="close"><uni-icons type="close" :size="iconFontSize" color="#c5c5c5"></uni-icons>
        </view>
        <view class="table-box">
          <text>机组人员</text>
          <view class="table">
            <!-- 表头行 -->
            <view class="tr">
              <view class="th"><text></text></view>
              <view v-for="(item, index) in datails" :key="index" class="th"><text>{{ item.name }}</text>
              </view>
            </view>
            <!-- 表格数据行 -->
            <view class="tr">
              <view class="td"><text>机上岗位</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index"><text>{{ item.post }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>技术等级</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index">
                <text>{{ item.skillLevel }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>左座飞行经历时间</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index"><text>{{ item.LExpTime }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>右座飞行经历时间</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index"><text>{{ item.RExpTime }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>责任机长飞行经历时间</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index">
                <text>{{ item.CaptainExpTime }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>左座次数</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index">
                <text>{{ item.LSeatCount }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>右座次数</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index">
                <text>{{ item.RSeatCount }}</text>
              </view>
            </view>
            <view class="tr">
              <view class="td"><text>着陆提纵次数</text></view>
              <view class="td" v-for="(item, index) in datails" :key="index">
                <text>{{ item.LandingCount }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </uni-popup>
    <!-- 自定义底部导航栏组件，传入activeIndex为当前页面索引 -->
    <tarbar :activeIndex="0"></tarbar>
  </view>

</template>

<script setup>
import { getFlightData, getBadge, getDatails } from "@/common/js/mock-data.js"

let screenWidth = uni.getSystemInfoSync().windowWidth;// 获取屏幕宽度
const iconFontSize = ref(32 * (screenWidth / 750) > 32 ? 16 : 32 * (screenWidth / 750));//根据屏幕宽度，设置图标大小
//初始化函数和变量
const flight = ref([]); //首页航班信息
//机组详情信息
const datails = ref(new Array(3).fill({
  name: '', // 	name: 姓名
  post: '', // 	post: 机上岗位
  skillLevel: '', // 	skillLevel:技术等级
  LExpTime: '', // 	LExpTime:左座飞行经历时间
  RExpTime: '', // 	RExpTime:左座飞行经历时间
  CaptainExpTime: '', // 	CaptainExpTime:责任机长飞行经历时间
  LSeatCount: '', // 	LSeatCount:左座次数
  RSeatCount: '', // 	RSeatCount:右座次数
  LandingCount: '' // 	LandingCount:着陆提纵次数
}));
const badge = ref(0); //右上角显示未读消息的数量
const refresherTriggered = ref(false); //航班列表滚动条下拉刷新状态

onLoad(() => {
  // 获取flight数据
  // flightSchedule: 航班时间
  // flightNumber: 航班号
  // aircraftNumber: 飞机号
  // airport:起降机场
  // boardingGate: 机位-准备室
  // favorite: 收藏状态,0-该用户未收藏,1-该用户已收藏
  flight.value = getFlightData().items1;

  //获取右上角消息气泡badge数据
  badge.value = getBadge().badge;
})

onResize(() => {
  screenWidth = uni.getSystemInfoSync().windowWidth;// 获取屏幕宽度
  iconFontSize.value = 32 * (screenWidth / 750) > 32 ? 16 : 32 * (screenWidth / 750);//根据屏幕宽度，设置图标大小
})

//航班信息刷新
let count = 1;
function refresherFlight() {
  refresherTriggered.value = true;
  setTimeout(() => { //定时器模拟网络延迟
    refresherTriggered.value = false;
    if (count == 1) {
      flight.value = getFlightData().items2; //第一次刷新
    } else if (count == 2) {
      flight.value = getFlightData().items3; //第二次刷新
    } else if (count == 3) {
      flight.value = getFlightData().items4; //第三次刷新
    }
    count++;
  }, 1000)

}

// 用户点击查看机组详情
// 获取组件引用
const popup = ref(null);
// 打开弹窗的方法
function open(flightNum, type) {

  // 根据 航班号flightNum 获取 机组信息datails数据
  // 	name: 姓名
  // 	post: 机上岗位
  // 	skillLevel:技术等级
  // 	LExpTime:左座飞行经历时间
  // 	RExpTime:左座飞行经历时间
  // 	CaptainExpTime:责任机长飞行经历时间
  //  LSeatCount:左座次数
  // 	RSeatCount:右座次数
  // 	LandingCount:着陆提纵次数
  setTimeout(() => {//模拟网络延迟
    datails.value = getDatails(flightNum).data;
  }, 0)
  popup.value.open(); // 调用组件的 open 方法

};
// 关闭弹窗的方法
function close() {
  popup.value.close();
  datails.value = new Array(3).fill({
    name: '', // 	name: 姓名
    post: '', // 	post: 机上岗位
    skillLevel: '', // 	skillLevel:技术等级
    LExpTime: '', // 	LExpTime:左座飞行经历时间
    RExpTime: '', // 	RExpTime:左座飞行经历时间
    CaptainExpTime: '', // 	CaptainExpTime:责任机长飞行经历时间
    LSeatCount: '', // 	LSeatCount:左座次数
    RSeatCount: '', // 	RSeatCount:右座次数
    LandingCount: '' // 	LandingCount:着陆提纵次数
  });
};

// 显示&隐藏收藏
// 定义 refs 和初始变量
let startX = 0; // 鼠标或触摸的起始位置
let isDragging = false; // 标志变量，用于确定是否正在拖动
let key = 0; //标志变量，用于确定当前点击的是key行
const isShow = ref(new Array(flight.value.length).fill(false)); //标志变量，用于标志第key行收藏是否显示

// 鼠标事件处理函数
const startDrag = (index, event) => {
  startX = event.clientX; // 记录鼠标按下时的 X 坐标
  isDragging = true; // 设置拖动标志为 true
  key = index; // 记录鼠标按下时的行数
  document.addEventListener('mousemove', onMouseMove); // 监听鼠标移动事件
  document.addEventListener('mouseup', stopDrag); // 监听鼠标释放事件
};

const onMouseMove = (event) => {
  if (!isDragging) return; // 如果不是拖动状态，直接返回
  const deltaX = event.clientX - startX; // 计算拖动的水平距离
  if (deltaX > -50) { // 鼠标拖动向右，关闭收藏夹
    isShow.value[key] = false;
  } else { // 鼠标拖动向左，显示收藏夹
    isShow.value[key] = true;
  }
};

const stopDrag = () => {
  isDragging = false; // 结束拖动状态
  document.removeEventListener('mousemove', onMouseMove); // 移除鼠标移动事件监听器
  document.removeEventListener('mouseup', stopDrag); // 移除鼠标释放事件监听器
};

// 触摸事件处理函数
const startTouch = (index, event) => {
  startX = event.touches[0].clientX; // 记录触摸开始时的 X 坐标
  key = index; // 记录触摸开始时的行数
};

const onTouchMove = (event) => {
  const currentTouchX = event.touches[0].clientX; // 当前触摸点的 X 坐标
  const deltaX = currentTouchX - startX; // 计算触摸滑动的水平距离
  if (deltaX > -50) { // 触摸滑动向右，关闭收藏夹
    isShow.value[key] = false;
  } else { // 触摸滑动向左，显示收藏夹
    isShow.value[key] = true;
  }
};

const endTouch = () => {
  // 触摸结束时的处理
};

// 用户点击收藏
const message = ref(null);
const messageText = ref(0);
const msgType = ref(0);

function handleFavorite(index) {
  //根据用户id和航班号flightNumber发出收藏&取消收藏请求
  let isSuccess = true;
  if (isSuccess) {

    messageText.value = flight.value[index].favorite ? "收藏取消" : "收藏成功";
    msgType.value = flight.value[index].favorite ? "warn" : "success";
    message.value.open();

    flight.value[index].favorite = (flight.value[index].favorite + 1) % 2;
  } else {

    messageText.value = "收藏失败，请稍后再试";
    msgType.value = "error";
    message.value.open();

  }

}

// 用户点击排序
let isDown = true; //初始默认降序
function sortByFlightSchedule() {
  if (isDown) {
    flight.value.sort((a, b) => a.flightSchedule - b.flightSchedule);

  } else {
    flight.value.sort((a, b) => b.flightSchedule - a.flightSchedule);
  }
  isDown = !isDown;
}

//用户点击消息气泡
function removeMsg() {
  badge.value = 0;
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/self.scss";
@import "@/common/scss/index.scss";
</style>