// import Toast from '../../node_modules/@vant/weapp/dist/toast/toast'
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    depature:"浙江省嘉兴市海宁市",
    destnation:"浙江省杭州市江干区",
    goodsID:"c001001",
    visual:"hidden",  //visible
    text:"this is the demo of the personal QRcode \n Code by ZJGSU 李晟迪 China",
    showCode: false,
    color:"#2ecc71",
    active:0
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


  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */openCode(){
    this.setData({
      showCode:true
    })
  },
  closeCode(){
      this.setData({
        showCode:false,
        loading:false
      })

  },
  confirm(){
    wx.showToast({
      title: '交接成功',
      icon: 'success',
      duration: 2000
    })
  }
,
  onShow: function () {

  },
onChange(event){
  this.setData({
    active:event.detail
  })
  if(this.data.active==1)
  {
    wx.redirectTo({
      url: '../goodsHandOver_d2s/goodsHandOver_d2s',
    })
  }
  if(this.data.active==3){
    wx.redirectTo({
      url: '../goodsHandOver_d2d/goodHandOver_d2d',
    })
  }

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