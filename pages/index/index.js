//index.js
Page({
  data: {
    hello_onload: '',
    hello_onshow: '',
    hello_onready: '',
    hello_onhide: '',
    hello_onunload: ''
  },
  onLoad: function() {
    this.setData({
      hello_onload: 'Hello onLoad 頁面載入'
    });
  },
  onShow: function() {
    this.setData({
      hello_onshow: 'Hello onShow 頁面顯示'
    });
  },
  onReady: function()  {
    this.setData({
      hello_onready: 'Hello onReady 頁面顯示完成'
    });
  },
  onHide: function() {
    this.setData({
      hello_onhide: 'Hello onHide 頁面隱藏'
    });
  },
  onUnload: function() {
    this.setData({
      hello_onunload: 'Hello onUnload 頁面卸載'
    });
  }
})
