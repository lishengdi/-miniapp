// pages/healthReport_success/healthReport_success.js
import Toast from '@vant/weapp/toast/toast';
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   status:false,
   isChange:false,
   value:"",
   text: 'http://www.hzic.edu.cn',
   color:"#2ecc71"
  },
  /**
   * 生命周期函=--监听页面加载
   */
  // 绿色：#2ecc71
  // 红色：#EA2027
  // 黄码：#f1c40f
  
  onLoad: function (options) {
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: this.data.text,
      width: 150,
      height: 150,
      colorDark: this.data.color,
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
  })
},
confirmHandler: function (e) {
  var value = e.detail.value
  qrcode.makeCode(value)
},
inputHandler: function (e) {
  var value = e.detail.value
  this.setData({
      text: value
  })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(this.data.status && this.data.isChange)
    Toast.success('修改成功');
    if(!this.data.status && this.data.isChange)
    Toast.fail('修改失败');
  },
  onSearch(e){
      this.setData({
        value:e.detail,
      })
    Toast(this.data.value)
  },
  goback(){
     wx.navigateTo({
       url: '../homePageForUser/homePageForUser',
     })
  },
  toGreen(){
     this.setData({
       color:"#2ecc71"
     })
     qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: this.data.text,
      width: 150,
      height: 150,
      colorDark: this.data.color,
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
  })
    },
  toRed(){
    this.setData({
      color:"#EA2027"
    })
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: this.data.text,
      width: 150,
      height: 150,
      colorDark: this.data.color,
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
  })
 },
 toYellow(){
  this.setData({
    color:"#f1c40f"
  })
  qrcode = new QRCode('canvas', {
    // usingIn: this,
    text: this.data.text,
    width: 150,
    height: 150,
    colorDark: this.data.color,
    colorLight: "white",
    correctLevel: QRCode.CorrectLevel.H,
})
},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
