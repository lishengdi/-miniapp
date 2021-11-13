// pages/TranceRecord/TranceRecord.js
var time=['2021.4.6 12:11','2021.4.7 11:25','2021.4.8 9:38']
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  superInfo:"C01 ",
  show: false,
  pesent:70,
  steps: [
    
    {
      text: '到达 【浙江杭州下沙公司】',
      desc: '2021.3.17 17.14',
    },
    {
      text: '【惠州市转运中心】已发出 下一站：【浙江杭州转运中心】',
      desc: '2021.3.16 05:28',
    },
    {
      text: '【广东省惠州市】已收入',
      desc: '2021.3.16 ',
    },
  ],
    // 绿色：#2ecc71
  // 红色：#EA2027
  // 黄码：#f1c40f
  
        actions: [
          {
            name: '广州惠州S10019',
            subname: '该节点已接受'+' '+time[0],
            color:"#2ecc71"
          },
          {
            name: '浙江杭州S20439',
            subname: '该节点已接受'+' '+time[1],
            color:"#2ecc71"
          },
          {
            name: '杭州下沙S20413',
            subname: '该节点已拒绝'+' '+time[2],
            color:"#EA2027"
          },
        ],
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

  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
  },
  seechain(){
    this.setData({
      show:true
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