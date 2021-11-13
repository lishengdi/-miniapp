// pages/healthReport/healthReport.js
import area from '../../pages/js/area.js';
import Toast from '@vant/weapp/toast/toast';
const location_index= "点击选择今日居住地"
const dangerPlace_index= "未去过高危地区"
var location_lock=false
Page({

  /**
   * 页面的初始数据
   */
  data: {
      location:location_index,
      toDangerPlace:false,
      backDate:"",
      ifFever:false,
      ifContact:false,
      others:"",
      show:false,
      areaList:area,
      arrArea:null, //存放地区数组
      dangerPlace:dangerPlace_index,
      
  },
  showPopup() {
    this.setData({ show: true });
  },
  sendMessage(event){
   this.setData({
      others: event.detail
   })
   console.log(this.data.others);
  },
  chooseLocation(){
    this.showPopup()
    location_lock=true
  },
  onClose() {
    this.setData({ show: false});
    location_lock=false
  },
        onCancel(){
          this.setData({ show: false ,
            toDangerPlace:false,
            dangerPlace:dangerPlace_index           
      });
          var bt=findView
        },
   
  locationConfirm(val){
    this.setData({
      show:false
    });
    this.arrArea = val; 
    var addrInfo = val.detail.values[0].name+' '+val.detail.values[1].name+' '+val.detail.values[2].name
      if(location_lock){
          this.setData({
            location:addrInfo
          })
          location_lock=false
      }
       
       if(this.data.toDangerPlace==true){
         this.setData({
           dangerPlace:addrInfo
         })
         console.log(this.data.toDangerPlace)
       }
  },

  toDangerPlace(event) {
    this.setData({
      toDangerPlace: event.detail,
    });
    if(this.data.toDangerPlace==true)
      this.showPopup()
      else{
        this.setData({
          dangerPlace:dangerPlace_index
        })
      }
  },
  ifFever(event){
    this.setData({
      ifFever: event.detail,
    });
  },
  ifContact(event){
    this.setData({
      ifContact: event.detail,
    });
  },
checkForSubmit(){
   if(this.data.location==location_index || (this.data.toDangerPlace && this.data.dangerPlace==dangerPlace_index))
     Toast.fail("失败请检查")
   else{
       Toast.success("申报成功")
       wx.navigateBack({
         delta: 1,
       })
   }
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