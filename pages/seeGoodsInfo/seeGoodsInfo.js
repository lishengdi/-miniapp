// pages/seeGoodsInfo/seeGoodsInfo.js
Page({

  /**
   * 页面的初始数据
   */
  // type="danger" 红码 type="success" 绿码 type="warning" 黄码
  data: {
     goodsName:"xxx",
     tagcolor:"success",
     health_status:"健康",
     location:"浙江省杭州市江干区浙江工商大学钱江湾生活区",
     remark:"这是备注信息",
     demand:"电子物品"
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
  toTranceRecord(){
      wx.navigateTo({
        url: '../TranceRecord/TranceRecord',
      })
  },
  tohealthReport(){
      wx.navigateTo({
        url: '../healthReport_success/healthReport_success',
      })
  },
  editInfo(){
    wx.navigateTo({
      url: '../goodsInfoChange/goodsInfoChange',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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