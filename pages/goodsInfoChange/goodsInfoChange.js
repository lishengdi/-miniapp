// pages/goodsInfoChange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsName:"",
    special:"",
    goodsCondition:"当前货物健康状态：绿码",
    goodsPlace:"",
    etc:"",
    tagcolor:'danger',
    health_status:'红码'
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  submit(){
    console.log(this.data.goodsName)
    console.log(this.data.goodsPlace)
     if((this.data.goodsName=='')||(this.data.goodsPlace=='')){
        wx.showModal({
          title:'修改失败',
          content:'货物名或所在地信息为空',
          showCancel:false
        })
     }
     else{
       wx.showToast({
              title: '修改成功',
              icon:'success',
              duration:2000,
              success:function(){
                  wx.navigateBack({
                    delta: 0,
                  })
              }
            })
     }
  },
  toHealthInfoChange(){
     wx.navigateTo({
       url: '../healthReport_success/healthReport_success',
     })
  },
  setGoodsName(event){
     this.setData({
       goodsName:event.detail
     })
  },
  setGoodsPlace(event){
    this.setData({
      goodsPlace:event.detail
    })
  },
  setEtc(event){
    this.setData({
      etc:event.detail
    })
  },
  setSpecial(event){
    this.setData({
      special:event.detail
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