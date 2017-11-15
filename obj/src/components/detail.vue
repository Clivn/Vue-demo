<template>
    <div id="wrap" class="clearfix overflow mg-auto">
        <!--------------------顶部---------------------->
        <div class="apply-nav overflow mg-auto area">
            <div class="overflow clearfix apply-top border-bom">
                <router-link to="/home" tag="a" class="apply-return">返回</router-link>
                <h2>产品详情</h2>
                <a href="#" class="apply-sou" id="apply-sou">搜索</a>
            </div>
        </div>

        <div class="crumbs">
            <router-link to="/home" tag="a">首页</router-link> > <router-link to="/summer" tag="a">夏装</router-link> > 丘比熊
        </div>

        <!--------------------图片切换---------------------->
        <div class="roll-slide clearfix overflow border">
            <div class="swiper-container swiper-free-mode" id="roll-wrap">
                <div class="swiper-wrapper" id="roll-img">
                    <div class="swiper-slide"><img src="../assets/images/pro.jpg" alt=""></div>
                    <div class="swiper-slide"><img src="../assets/images/pro.jpg" alt=""></div>
                </div>
                <div class="pagination"></div>
            </div>
        </div>

        <div class="hot-detail clearfix overflow">
            <h2>产品介绍:</h2>
            <div class="clearfix hot-detail-wrap" id="hot-detail">
                <p v-for="val in msg">{{val}}</p>
                <b class='detail-more'>查看更多</b>
            </div>
        </div>


        <div class="title2 clearfix area mg-auto" >
            <h2>猜你喜欢</h2>
            <a href="javascript:void(0);" class="title-Swap" id="huan">换一换</a>
        </div>

        <div class="hot-icon mg-auto overflow area clearfix">
            <ul class="clearfix" id="smore">
                <li v-for="val in arr"><a href="javascript:;" class="i-icon-tao"><img :src="val.img" title=" " alt=" "><span>{{val.title}}</span></a></li>
               <!-- <li><a href="javascript:;" class="i-icon-tao"><img src="../assets/images/pro.jpg" title=" " alt=" "><span>丘比熊</span></a></li>
                <li><a href="javascript:;" class="i-icon-tao"><img src="../assets/images/pro.jpg" title=" " alt=" "><span>丘比熊</span></a></li>
                <li><a href="javascript:;" class="i-icon-tao"><img src="../assets/images/pro.jpg" title=" " alt=" "><span>丘比熊</span></a></li>-->
            </ul>
        </div>
        <!--底部-->
        <div style="margin-top:15px;display: block;border-bottom: solid 1px #FFF;border-top: solid 1px #cacaca;text-indent: -9999px;height: 0px;">line</div>
        <div style="width: 100%; height: 3.8em; line-height: 3.8em; text-align: center; color:#666">省心购幼教品手机版</div>

    </div>

</template>
<script>
    export default {
        data(){
            return {
                msg:[],
                arr:[]
            }
        },
        mounted(){
            this.$http.get('src/data/detail.data').then((res)=>{
                console.log(res.data.describe);
                this.msg = res.data.describe;
                this.arr = res.data.show;
            }).catch((res)=>{
                alert(res.state);
            })
            var newSlideSize = function slideSize(){
                var w = Math.ceil($(".swiper-container").width());
                $(".swiper-container,.swiper-slide").height('15em');
            };
            newSlideSize();
            $(window).resize(function(){
                newSlideSize();
            });
            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                paginationClickable: true,
                freeMode: false,
                freeModeFluid: true
            });
            //内容提要 点击加载更多
            var more = true;
            $(".detail-more").click(function(){
                if(more == true){
                    $('#short').css('display','none');
                    $('#all').css('display','block');
                    $(this).addClass("detail-more2");
                    more = false;
                }else{
                    $(this).removeClass("detail-more2");
                    $('#short').css('display','block');
                    $('#all').css('display','none');
                    more = true;
                }
            });
        }
    }

</script>
<style>
    .swiper-container{ padding:1.8em 0 3em 0;}
    .swiper-container .pagination{ bottom:0.8em;}
    .crumbs{height: 3em;line-height: 3em;width: 100%;padding-left: 1em;font-family: microsoft yahei;font-size: 1.5em;color: #696666;}
    .crumbs a{color:#65BAF1;}
</style>