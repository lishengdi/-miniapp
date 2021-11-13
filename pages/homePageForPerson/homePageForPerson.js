// pages/homePageForPerson/homePageForPerson.js
const AUTH_MODE ='facial'
var QRCode = require('../../utils/weapp-qrcode.js')
var qrcode;
Page({

  /**
   * 页面的初始数据
   */
  // status: 未打卡->danger,已打卡->success
   // 绿色：#2ecc71
  // 红色：#EA2027
  // 黄码：#f1c40f
  
  data: {
    active:1,
    status:"success",
    status_text:"今日已打卡",
    color:"#2ecc71",
    text:"this is the demo of the personal QRcode",
    rights:"仓库管理员",
    time:""
  },
  startAuth(){
    wx.checkIsSupportSoterAuthentication({
      success: (result) => {
        console.log(result)
        if(result.supportMode=="facial"){
         checkIsEnrolled_facial()
        }
        if(result.supportMode=="fingerPrint"){
         checkIsEnrolled_finger()
        }
      },
      fail:(err)=>{
        wx.showModal({
          title:'错误',
          content:'您的设备不支持生物认证',
          showCancel:false
      })
    }
   })
     // faseID
   const checkIsEnrolled_facial=()=>{
     wx.checkIsSoterEnrolledInDevice({
       checkAuthMode: AUTH_MODE,
       success:(res)=>{
           console.log(res)
           if(parseInt(res.isEnrolled)<=0){
             wx.showModal({
               title:'错误',
               content:'您的设备还没有面容信息记录',
               showCancel:false
           })
               return
           }
               startSoterAuthentication_facial();
       },
       fail:(err)=>{
         console.log(err)
       }
     })

       const startSoterAuthentication_facial =()=>{
         wx.startSoterAuthentication({
           challenge: 'challenge',
           requestAuthModes: [AUTH_MODE],
           authContent:'李晟迪生物认证',
           success:(res)=>{
             console.log(res)
             wx.showToast({
               title: '认证成功',
               duration:3000
             })
           },
           fail:(err)=>{
             console.log(err)
             wx.showModal({
               title:'失败',
               content:'认证失败',
               showCancel:false
             })
           }
         })
       }
   }
     //TouchID
     const checkIsEnrolled_finger=()=>{
       wx.checkIsSoterEnrolledInDevice({
         checkAuthMode: 'fingerPrint',
         success:(res)=>{
             console.log(res)
             if(parseInt(res.isEnrolled)<=0){
               wx.showModal({
                 title:'错误',
                 content:'您的设备还没有面容信息记录',
                 showCancel:false
             })
                 return
             }
                 startSoterAuthentication_finger();
         },
         fail:(err)=>{
           console.log(err)
         }
       })

       const startSoterAuthentication_finger =()=>{
         wx.startSoterAuthentication({
           challenge: 'challenge',
           requestAuthModes: ['fingerPrint'],
           authContent:'李晟迪生物认证',
           success:(res)=>{
             console.log(res)
             wx.showToast({
               title: '认证成功',
               duration:3000
             })
           },
           fail:(err)=>{
             console.log(err)
             wx.showModal({
               title:'失败',
               content:'认证失败',
               showCancel:false
             })
           }
         })
       }
     }
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
      colorDark: this.data.color,
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
  })
   var that = this;  
  setInterval(function() {
    var date = new Date();
    var year = date.getFullYear(); //获取当前年份   
    var mon = date.getMonth() + 1; //获取当前月份   
    var day = date.getDate(); //获取当前日     
    var h = date.getHours(); //获取小时   
    var m = date.getMinutes(); //获取分钟   
    var s = date.getSeconds(); //获取秒   
             //判断当数字小于等于9时 显示 01 02 ----- 08 09
    if (mon >= 1 && mon <= 9) {
      mon = "0" + mon;
    };
    if (day >= 0 && day<= 9) {
      day = "0" + day;
    }
    if (h >= 0 && h <= 9) {
      h = "0" + h;
    }
    if (m >= 0 && m <= 9) {
      m = "0" + m;
    }
    if (s >= 0 && s <= 9) {
      s = "0" + s;
    } ;
       that.setData({
         time:year+"年"+mon+"月"+day+"日"+" "+h+":"+m+":"+s
       })
  }, 1000)

  },
  clearTimeInterval: function (that) {
    var interval = that.data.interval;
    clearInterval(interval)
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
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    if(this.data.active==0)
    {
      wx.redirectTo({
        url: '../../pages/homePageForUser/homePageForUser',
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
    that.clearTimeInterval(that)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that = this;
    that.clearTimeInterval(that)
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