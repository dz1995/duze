/**
 * Created by tianhl on 2016/11/27.
 */
$(function(){
    var page = $('.section');

    $('#dowebok').fullpage({
        /*是否显示项目导航 默认值是false*/
        navigation : true,
        // 每一个section的背景颜色
        sectionsColor : ['red','green','blue','gold'],
        /*定义锚链接*/
        anchors: ['page1', 'page2', 'page3', 'page4'],
        /* 设置菜单导航 值对应菜单盒子的ID值*/
        menu: '#menu',
        navigationPosition : 'right',
        // 无缝滚动
        continuousVertical : false,
        /*滚动的速度*/
        scrollingSpeed : 700,
        // 当滚动到哪一屏的回调函数  接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad : function(anchorLink, index){
            var i = index - 1;
            page.eq(i).addClass('comeout').siblings().removeClass('comeout');
        },
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
        // index 是离开的“页面”的序号，从1开始计算；

        // nextIndex 是滚动到的“页面”的序号，从1开始计算；

        // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave : function(index,nextIndex,direction){

        },
        /*页面结构生成后的回调函数，或者说页面初始化完成后的回调函数*/
        afterRender : function(){

        }
    });
});