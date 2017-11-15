<template>
    <div id="wrap" class="clearfix overflow mg-auto">
        <div class="apply-nav overflow mg-auto area">
            <div class="overflow clearfix apply-top border-bom">
                <router-link to="/home" tag="a" class="apply-return">返回</router-link>
                <h2>精彩专题</h2>
                <a href="javascript:;" class="apply-sou" style="visibility:hidden">搜索</a>
                <a href="#" class="apply-pup">弹出</a>
            </div>
            <div class="i-icon mg-auto overflow area clearfix" id="apply-pup-icon">
                <ul class="clearfix">
                    <router-link to="/winter" tag="li"><a href="javascript:;" class="i-icon-tao"><img src="../assets/img/app_01.png"></a></router-link>
                    <router-link to="/summer" tag="li"><a href="javascript:;" class="i-icon-game"><img src="../assets/img/app_02.png"></a></router-link>
                    <router-link to="/other" tag="li"><a href="javascript:;" class="i-icon-bizhi"><img src="../assets/img/app_03.png"></a></router-link>
                    <router-link to="/news" tag="li"><a href="javascript:;" class="i-icon-zhuan"><img src="../assets/img/app_04.png"></a></router-link>
                </ul>
            </div>
        </div>

        <div class="txtimg overflow clearfix area mg-auto">
            <router-link to="/show" tag="a">
                <img src="../assets/images/2.jpg" title="">
                <span class="txtimg-title">CET冲刺 四六级英语复习必备app</span>
            </router-link>
        </div>
        <div class="title2 clearfix area mg-auto">
            <h2>往期回顾</h2>
        </div>
        <div class="img-list-wrap clearfix area overflow mg-auto">
            <ul class="clearfix">
                <li>
                    <router-link to="/show" tag="a">
                        <img src="../assets/images/3.jpg" alt="" title="">
                        <div class="imglist-title clearfix">
                            <span class="imglist-title-inner">经典游戏合集 致逝去的"六一"</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/show" tag="a">
                        <img src="../assets/images/4.jpg" alt="" title="">
                        <div class="imglist-title clearfix">
                            <span class="imglist-title-inner">网络电台评书荟萃</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/show" tag="a">
                        <img src="../assets/images/1.jpg" alt="" title="">
                        <div class="imglist-title clearfix">
                            <span class="imglist-title-inner">520！让我们大声说出我爱你</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--底部-->
        <div style="margin-top:15px;display: block;border-bottom: solid 1px #FFF;border-top: solid 1px #cacaca;text-indent: -9999px;height: 0px;">line</div>
        <div style="width: 100%; height: 3.8em; line-height: 3.8em; text-align: center; color:#666">省心购幼教品手机版</div>

    </div>

</template>
<script>

</script>
<style>

</style>