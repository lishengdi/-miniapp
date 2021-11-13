// pages/TraceRecord/TraceRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImgSrc:"../../images/TranceRecord/TranceRecord.jpg",
    Items:["C01","C02","C03","C04"],
    selectedID:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  selectChange:function(e){
     var index=e.detail.value;
     var value=this.data.Items[index];
     this.setData({selectedID:value});
     console.log(value)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  click(){
     wx.navigateTo({
       url: '../TranceRecord/TranceRecord',
     })
  },
  onReady: function () {

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
    alert("正在刷新！")
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