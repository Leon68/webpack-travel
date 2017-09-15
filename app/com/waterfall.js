define(["jquery"],function(){
  var Waterfall2=(function(){
    var Waterfall=function($ct,liWidth){
      this.init($ct,liWidth);
      this.bind();
    }
    Waterfall.prototype.init=function($ct,liWidth){
      this.$ct=$ct;
      this.liWidth=liWidth;
      this.curPage=0;
      // var html='<ul class="img clearfix"></ul>\
      //   <div class="btn">\
      //   <p class="more subject-bgcol">查看更多</p>\
      //   </div>';
      // this.$ct.append(html);
      this.isArrive=true;
    }
    Waterfall.prototype.bind=function(){
      var _this=this;
      $(window).on("resize",function(){
        _this.setLi();
        _this.start();
      });
      this.setLi();
      this.start();
      this.$ct.on("click",".more",function(){
        _this.start();
      });
    }
    Waterfall.prototype.setLi=function(){
      var ctWidth=this.$ct.width();
      this.liLength=Math.floor(ctWidth/this.liWidth);
      this.arr=[];
      for(var i=0;i<this.liLength;i++){
        this.$ct.append("<li></li>"); this.arr[i]=0;
      }
      this.$ct.find("li").css("width",this.liWidth);
    }
    Waterfall.prototype.start=function(){
      if(!this.isArrive) return;
      this.isArrive=false;
      this.curPage++;
      var _this=this;
      this.getData(function(dataArr){
        // console.log(dataArr);
        $.each(dataArr,function(index,value){
          var $node=_this.createHtmlStr(value);
          $node.load(function(){
             _this.imgPlace($node);
          });
        });
        _this.isArrive=true;
      });
    }
    Waterfall.prototype.getData=function(callback){
      var _this=this;
      $.ajax({
        url:"https://pixabay.com/api/",
        data:{
          key:"6313490-377b4286fb725b1e53ee66b03",
          q:"city",
          image_type:"all",
          page: _this.curPage
        }
      }).done(function(ret){
        callback(ret.hits);
      }).fail(function(ret){
        console.log(ret.status);
      });
    }
    Waterfall.prototype.createHtmlStr=function(data){
      var html='<img src='+data.webformatURL+'>';
      return $(html);
    }
    Waterfall.prototype.imgPlace=function($node){
      var minHeight=this.arr[0],col=0;
      for(var i=1;i<this.liLength;i++){
        if(minHeight>this.arr[i]){
          minHeight=this.arr[i]; col=i;
        }
      }
      this.$ct.find("li").eq(col).append($node);
      this.arr[col]+=$node.outerHeight(true);
    }
    return {
      init:function($ct){
        $ct.each(function(index,value){
          new Waterfall($(this),180);
        });
      }
    }
  })();
  return Waterfall2;
});

