// pages/goodsHandOver_d2s/goodsHandOver_d2s.js
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
Page({

  /**
   * 页面的初始数据
   *    // 绿色：#2ecc71
  // 红色：#EA2027
  // 黄码：#f1c40f
   */
  data: {
    visual:"hidden",  //visible
    text:"this is the demo of the personal QRcode \n Code by ZJGSU 李晟迪 China",
    show: false,
    color:"#2ecc71",
    active:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: this.data.text,
      width: 150,
      height: 150,
      colorDark:this.data.color,
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
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

  },
  openCode(){
    this.setData({
      show:true
    })
  },
  closeCode(){
      this.setData({
        show:false,
        visual:"visible"
      })

  },
  onChange(event){
     this.setData({
       active:event.detail
     })
     if(this.data.active==0)
     {
       wx.redirectTo({
         url: '../goodsHandOver_s2d/goodsHandOver_s2d',
       })
     }
     if(this.data.active==2)
     wx.redirectTo({
       url: '../goodsHandOver_d2d/goodHandOver_d2d',
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