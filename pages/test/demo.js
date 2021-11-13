// pages/test/demo.js
const AUTH_MODE ='facial'
Page({
  
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
                  startSoterAuthentication_finger();
          },
          fail:(err)=>{
            console.log(err)
          }
        })

        const startSoterAuthentication_finger =()=>{
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
   },
  /**
   * 页面的初始数据
   */
  data: {

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