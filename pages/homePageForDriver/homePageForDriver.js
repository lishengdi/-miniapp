// pages/homePageForUser/homePageForUser.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    codeInfo:"",
    order_1:"库1 c10086 Apple iPhone 12 pro Max",
    order_2:"库2 c10010 Apple Macbook Pro 16 inch",
    order_3:"库3 c10000 Apple Watch SE nike+ ",
    order_4:"库4 c10100 Apple Airpods Pro" ,
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onSearch(){
      // wx.navigateTo({
      //   url: '../seeGoodsInfo/seeGoodsInfo',
      // })
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    if(this.data.active==1)
    {
      wx.redirectTo({
        url: '../../pages/userCenterForDriver/userCenterForDriver',
      })
    }
  },
  scan(){
     wx.scanCode({
       onlyFromCamera: true,
       success:(res)=>{
          this.setData({
            codeInfo:res.result
          })
          Toast(this.data.codeInfo)
       }
     })
  },
  seeOutinfo_1(){
    wx.navigateTo({
      url: '../../pages/seeGoodsInfo/seeGoodsInfo',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },
  toGoodsHandOver(){
    wx.navigateTo({
      url: '../goodsHandOver_s2d/goodsHandOver_s2d',
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

seeMore_out(){
    wx.navigateTo({
      url: '../more_out/more',
    })
},

toTranceRecord(){
  wx.navigateTo({
    url: '../../pages/TraceRecordSearch/TraceRecordSearch',
  })
},

toHealthReport(){
    wx.navigateTo({
      url: '../healthReport/healthReport',
    })
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