//index.js
Page({
  data: {
    hellos: []
  },

  addHello: function(message) {
    var hellos = this.data.hellos;
    hellos.push(message);
    this.setData({
      hellos: hellos
    });
  },

  onLoad: function() {
    this.addHello('Hello onLoad 頁面載入');
  },
  onShow: function() {
    this.addHello('Hello onShow 頁面顯示');
  },
  onReady: function()  {
    this.addHello('Hello onReady 頁面顯示完成');
  },
  onHide: function() {
    this.addHello('Hello onHide 頁面隱藏');
  },
  onUnload: function() {
    this.addHello('Hello onUnload 頁面卸載');
  }
})
