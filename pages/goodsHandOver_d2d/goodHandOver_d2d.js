// pages/goodsHandOver_d2d/goodHandOver_d2d.js
const goodsID_index="点击选择"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    depature:"浙江省嘉兴市海宁市",
    destnation:"浙江省杭州市江干区",
    goodsID:goodsID_index,
    show:false,
    Items: ['c001001','c001002','gm99801','gc190897'],
    codeInfo:"",
    active:2
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  selectChange:function(e){
    var index=e.detail.value;
    var value=this.data.Items[index];
    this.setData({goodsID:value});
 },
 showInfo(){
    wx.scanCode({
      onlyFromCamera: true,
      success:(res)=>{
        this.setData({
          codeInfo:res.result,
          loading:false
        }) 
     }
    })
  
 },
 confirm(){
  wx.showToast({
    title: '交接成功',
    icon: 'success',
    duration: 2000
  })
 },
  onReady: function () {

  },
onChange(event){
  this.setData({ active: event.detail });
  if(this.data.active==0)
  {
    wx.redirectTo({
      url: '../../pages/goodsHandOver_s2d/goodsHandOver_s2d',
    })
  }
  if(this.data.active==1)
  {
    wx.redirectTo({
      url: '../../pages/goodsHandOver_d2s/goodsHandOver_d2s',
    })
  }
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