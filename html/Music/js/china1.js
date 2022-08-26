﻿$(function($){
	// Settings
	$(".maxsize").css({ top : ($(window).width() - $(".maxsize").height())/2  });
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'true',
		continous = true,
		autoplay = true,
		playlist = [
{title:"ALin-给我一个理由忘记",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/ALin-给我一个理由忘记.mp3",},
{title:"ALin-有一种悲伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/ALin-有一种悲伤.mp3",},
{title:"Beyond-光辉岁月",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Beyond-光辉岁月.mp3",},
{title:"Beyond-喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Beyond-喜欢你.mp3",},
{title:"Beyond-真的爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Beyond-真的爱你.mp3",},
{title:"Ella[陈嘉桦]-都几岁了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Ella[陈嘉桦]-都几岁了.mp3",},
{title:"S.H.E-SuperStar",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/S.H.E-SuperStar.mp3",},
{title:"S.H.E-波斯猫",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/S.H.E-波斯猫.mp3",},
{title:"S.H.E-中国话",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/S.H.E-中国话.mp3",},
{title:"TFBOYS-青春修炼手册",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/TFBOYS-青春修炼手册.mp3",},
{title:"Twins-莫斯科没有眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Twins-莫斯科没有眼泪.mp3",},
{title:"Twins-下一站天后",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/Twins-下一站天后.mp3",},
{title:"阿杜-坚持到底",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿杜-坚持到底.mp3",},
{title:"阿杜-离别",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿杜-离别.mp3",},
{title:"阿杜-撕夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿杜-撕夜.mp3",},
{title:"阿杜-他一定很爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿杜-他一定很爱你.mp3",},
{title:"阿杜-天黑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿杜-天黑.mp3",},
{title:"阿木-有一种爱叫做放手",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿木-有一种爱叫做放手.mp3",},
{title:"阿悄-陪我去流浪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿悄-陪我去流浪.mp3",},
{title:"阿桑-疯了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿桑-疯了.mp3",},
{title:"阿桑-寂寞在唱歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿桑-寂寞在唱歌.mp3",},
{title:"阿桑-受了点伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿桑-受了点伤.mp3",},
{title:"阿桑-叶子",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿桑-叶子.mp3",},
{title:"阿桑-一直很安静",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/阿桑-一直很安静.mp3",},
{title:"安琥-天使的翅膀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/安琥-天使的翅膀.mp3",},
{title:"蔡健雅-红色高跟鞋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡健雅-红色高跟鞋.mp3",},
{title:"蔡琴-把悲伤留给自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡琴-把悲伤留给自己.mp3",},
{title:"蔡琴-被遺忘的時光",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡琴-被遺忘的時光.mp3",},
{title:"蔡幸娟-问情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡幸娟-问情.mp3",},
{title:"蔡徐坤-WaitWaitWait",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡徐坤-WaitWaitWait.mp3",},
{title:"蔡依林、陶喆-今天你要嫁给我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林、陶喆-今天你要嫁给我.mp3",},
{title:"蔡依林-LOVELOVELOVE",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-LOVELOVELOVE.mp3",},
{title:"蔡依林-爱情三十六计",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-爱情三十六计.mp3",},
{title:"蔡依林-布拉格广场",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-布拉格广场.mp3",},
{title:"蔡依林-看我72变",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-看我72变.mp3",},
{title:"蔡依林-日不落",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-日不落.mp3",},
{title:"蔡依林-我知道你很难过",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-我知道你很难过.mp3",},
{title:"蔡依林-舞娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蔡依林-舞娘.mp3",},
{title:"草蜢-宝贝对不起",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/草蜢-宝贝对不起.mp3",},
{title:"草蜢-失恋阵线联盟",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/草蜢-失恋阵线联盟.mp3",},
{title:"岑雨桥、萧全-触电(爱的魔力转圈圈)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/岑雨桥、萧全-触电(爱的魔力转圈圈).mp3",},
{title:"曾春年-最幸福的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/曾春年-最幸福的人.mp3",},
{title:"陈百强-偏偏喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈百强-偏偏喜欢你.mp3",},
{title:"陈百强-一生何求",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈百强-一生何求.mp3",},
{title:"陈楚生-有没有人告诉你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈楚生-有没有人告诉你.mp3",},
{title:"陈妃平-永远到底有多远",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈妃平-永远到底有多远.mp3",},
{title:"陈冠蒲-就让你走",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈冠蒲-就让你走.mp3",},
{title:"陈冠蒲-太多",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈冠蒲-太多.mp3",},
{title:"陈光荣-再见...警察...再见",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈光荣-再见...警察...再见.mp3",},
{title:"陈红-走过长安街",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈红-走过长安街.mp3",},
{title:"陈慧琳-不如跳舞",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈慧琳-不如跳舞.mp3",},
{title:"陈慧琳-记事本",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈慧琳-记事本.mp3",},
{title:"陈慧娴-千千阙歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈慧娴-千千阙歌.mp3",},
{title:"陈慧娴-人生何处不相逢",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈慧娴-人生何处不相逢.mp3",},
{title:"陈琳-爱就爱了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈琳-爱就爱了.mp3",},
{title:"陈琳-你的柔情我永远不懂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈琳-你的柔情我永远不懂.mp3",},
{title:"陈明-等你爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈明-等你爱我.mp3",},
{title:"陈明-快乐老家",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈明-快乐老家.mp3",},
{title:"陈明-为你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈明-为你.mp3",},
{title:"陈明-我要找到你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈明-我要找到你.mp3",},
{title:"陈明真-变心的翅膀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈明真-变心的翅膀.mp3",},
{title:"陈升、刘佳慧-北京一夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈升、刘佳慧-北京一夜.mp3",},
{title:"陈淑桦-梦醒时分",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈淑桦-梦醒时分.mp3",},
{title:"陈淑桦-情关",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈淑桦-情关.mp3",},
{title:"陈淑桦-笑红尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈淑桦-笑红尘.mp3",},
{title:"陈伟霆、宝石Gem-野狼Disco",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈伟霆、宝石Gem-野狼Disco.mp3",},
{title:"陈小春-没那种命",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈小春-没那种命.mp3",},
{title:"陈小春-你好毒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈小春-你好毒.mp3",},
{title:"陈小春-神啊救救我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈小春-神啊救救我.mp3",},
{title:"陈小春-算你狠",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈小春-算你狠.mp3",},
{title:"陈晓东-比我幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈晓东-比我幸福.mp3",},
{title:"陈旭-哥只是个传说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈旭-哥只是个传说.mp3",},
{title:"陈奕迅-浮夸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陈奕迅-浮夸.mp3",},
{title:"成龙、范晓萱-身不由己",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙、范晓萱-身不由己.mp3",},
{title:"成龙、金喜善-无尽的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙、金喜善-无尽的爱.mp3",},
{title:"成龙、苏慧伦-在我生命中的每一天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙、苏慧伦-在我生命中的每一天.mp3",},
{title:"成龙-男儿当自强",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙-男儿当自强.mp3",},
{title:"成龙-你给我一片天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙-你给我一片天.mp3",},
{title:"成龙-英雄故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙-英雄故事.mp3",},
{title:"成龙-真的用了心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙-真的用了心.mp3",},
{title:"成龙-壮志在我胸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/成龙-壮志在我胸.mp3",},
{title:"程琳-信天游",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/程琳-信天游.mp3",},
{title:"崔子格-卜卦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/崔子格-卜卦.mp3",},
{title:"大鹏-都选C",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/大鹏-都选C.mp3",},
{title:"大张伟-倍儿爽",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/大张伟-倍儿爽.mp3",},
{title:"大张伟-我怎么这么好看",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/大张伟-我怎么这么好看.mp3",},
{title:"大壮-我们不一样",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/大壮-我们不一样.mp3",},
{title:"戴佩妮-爱疯了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/戴佩妮-爱疯了.mp3",},
{title:"戴佩妮-街角的祝福",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/戴佩妮-街角的祝福.mp3",},
{title:"戴佩妮-你要的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/戴佩妮-你要的爱.mp3",},
{title:"刀郎-2002年的第一场雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刀郎-2002年的第一场雪.mp3",},
{title:"刀郎-爱是你我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刀郎-爱是你我.mp3",},
{title:"刀郎-冲动的惩罚",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刀郎-冲动的惩罚.mp3",},
{title:"刀郎-披着羊皮的狼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刀郎-披着羊皮的狼.mp3",},
{title:"邓丽君-独上西楼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓丽君-独上西楼.mp3",},
{title:"邓丽君-小城故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓丽君-小城故事.mp3",},
{title:"邓丽欣、方力申-十分爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓丽欣、方力申-十分爱.mp3",},
{title:"邓紫棋-光年之外",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓紫棋-光年之外.mp3",},
{title:"邓紫棋-你把我灌醉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓紫棋-你把我灌醉.mp3",},
{title:"邓紫棋-泡沫",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓紫棋-泡沫.mp3",},
{title:"邓紫棋-喜欢你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邓紫棋-喜欢你.mp3",},
{title:"迪克牛仔-有多少爱可以重来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/迪克牛仔-有多少爱可以重来.mp3",},
{title:"迪丽热巴、汪苏泷-偏偏",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/迪丽热巴、汪苏泷-偏偏.mp3",},
{title:"电影原声-沧海一声笑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/电影原声-沧海一声笑.mp3",},
{title:"丁当-猜不透",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/丁当-猜不透.mp3",},
{title:"丁当-手掌心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/丁当-手掌心.mp3",},
{title:"动力火车-背叛情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-背叛情歌.mp3",},
{title:"动力火车-当",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-当.mp3",},
{title:"动力火车-第一滴泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-第一滴泪.mp3",},
{title:"动力火车-明天的明天的明天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-明天的明天的明天.mp3",},
{title:"动力火车-无情的情书",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-无情的情书.mp3",},
{title:"动力火车-忠孝东路走九遍",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/动力火车-忠孝东路走九遍.mp3",},
{title:"杜德伟-情人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杜德伟-情人.mp3",},
{title:"范玮琪-一个像夏天一个像秋天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/范玮琪-一个像夏天一个像秋天.mp3",},
{title:"范玮琪-最初的梦想",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/范玮琪-最初的梦想.mp3",},
{title:"范玮琪-最重要的决定",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/范玮琪-最重要的决定.mp3",},
{title:"范晓萱-雪人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/范晓萱-雪人.mp3",},
{title:"范逸臣-放生",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/范逸臣-放生.mp3",},
{title:"飞儿乐团-你的微笑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/飞儿乐团-你的微笑.mp3",},
{title:"飞儿乐团-千年之恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/飞儿乐团-千年之恋.mp3",},
{title:"飞儿乐团-我们的爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/飞儿乐团-我们的爱.mp3",},
{title:"费玉清-梦驼铃",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/费玉清-梦驼铃.mp3",},
{title:"费玉清-一剪梅",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/费玉清-一剪梅.mp3",},
{title:"冯晓泉-冰糖葫芦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/冯晓泉-冰糖葫芦.mp3",},
{title:"凤飞飞-莫让红颜守空尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/凤飞飞-莫让红颜守空尘.mp3",},
{title:"凤飞飞-追梦人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/凤飞飞-追梦人.mp3",},
{title:"付笛声、任静-知心爱人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/付笛声、任静-知心爱人.mp3",},
{title:"甘萍-潮湿的心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/甘萍-潮湿的心.mp3",},
{title:"高安,黑鸭子-红尘情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/高安,黑鸭子-红尘情歌.mp3",},
{title:"高胜美、左宏元-渡情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/高胜美、左宏元-渡情.mp3",},
{title:"高胜美-千年等一回",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/高胜美-千年等一回.mp3",},
{title:"高胜美-青青河边草",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/高胜美-青青河边草.mp3",},
{title:"高晓松-一个北京人在北京",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/高晓松-一个北京人在北京.mp3",},
{title:"格格-火苗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/格格-火苗.mp3",},
{title:"贡维特-想你想到眼泪流",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/贡维特-想你想到眼泪流.mp3",},
{title:"古巨基-好想好想",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/古巨基-好想好想.mp3",},
{title:"光头李进-你在他乡还好吗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/光头李进-你在他乡还好吗.mp3",},
{title:"郭富城-动起来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郭富城-动起来.mp3",},
{title:"郭富城-对你爱不完",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郭富城-对你爱不完.mp3",},
{title:"郭富城-我是不是该安静的走开",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郭富城-我是不是该安静的走开.mp3",},
{title:"郭富城-樱花之恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郭富城-樱花之恋.mp3",},
{title:"海伦-桥边姑娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/海伦-桥边姑娘.mp3",},
{title:"海鸣威-老人与海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/海鸣威-老人与海.mp3",},
{title:"韩宝仪-粉红色的回忆",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩宝仪-粉红色的回忆.mp3",},
{title:"韩宝仪-往事只能回味",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩宝仪-往事只能回味.mp3",},
{title:"韩红-天亮了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩红-天亮了.mp3",},
{title:"韩红-天路",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩红-天路.mp3",},
{title:"韩磊-等待",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩磊-等待.mp3",},
{title:"韩磊-向天再借五百年",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩磊-向天再借五百年.mp3",},
{title:"韩雪-飘雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩雪-飘雪.mp3",},
{title:"韩雪-想起",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/韩雪-想起.mp3",},
{title:"杭天琪-前门情思大碗茶",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杭天琪-前门情思大碗茶.mp3",},
{title:"浩瀚-分手在那个秋天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/浩瀚-分手在那个秋天.mp3",},
{title:"何洁-你一定要幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/何洁-你一定要幸福.mp3",},
{title:"何璐-让她降落",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/何璐-让她降落.mp3",},
{title:"何晟铭-佛说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/何晟铭-佛说.mp3",},
{title:"黑豹乐队-无地自容",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黑豹乐队-无地自容.mp3",},
{title:"侯旭-逃",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/侯旭-逃.mp3",},
{title:"后弦、sara-你还欠我一个拥抱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/后弦、sara-你还欠我一个拥抱.mp3",},
{title:"后弦、柳岩-孙尚香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/后弦、柳岩-孙尚香.mp3",},
{title:"胡夏、李玉刚-将进酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/胡夏、李玉刚-将进酒.mp3",},
{title:"胡夏、郁可唯-知否知否",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/胡夏、郁可唯-知否知否.mp3",},
{title:"胡杨林-香水有毒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/胡杨林-香水有毒.mp3",},
{title:"花儿乐队-嘻唰唰",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/花儿乐队-嘻唰唰.mp3",},
{title:"华晨宇-齐天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/华晨宇-齐天.mp3",},
{title:"黄安-东南西北风",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄安-东南西北风.mp3",},
{title:"黄安-新鸳鸯蝴蝶梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄安-新鸳鸯蝴蝶梦.mp3",},
{title:"黄安-样样红",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄安-样样红.mp3",},
{title:"黄磊-我想我是海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄磊-我想我是海.mp3",},
{title:"黄品源-你怎么舍得我难过",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄品源-你怎么舍得我难过.mp3",},
{title:"黄绮珊-剪爱(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄绮珊-剪爱(Live).mp3",},
{title:"黄小琥-伴",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄小琥-伴.mp3",},
{title:"黄小琥-没那么简单",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄小琥-没那么简单.mp3",},
{title:"黄小琥-顺其自然",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄小琥-顺其自然.mp3",},
{title:"黄小琥-重来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黄小琥-重来.mp3",},
{title:"火箭少女101-卡路里",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/火箭少女101-卡路里.mp3",},
{title:"霍尊-卷珠帘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/霍尊-卷珠帘.mp3",},
{title:"贾乃亮,甜馨-大王叫我来巡山",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/贾乃亮,甜馨-大王叫我来巡山.mp3",},
{title:"江美琪-亲爱的你怎么不在我身边",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/江美琪-亲爱的你怎么不在我身边.mp3",},
{title:"江美琪-下辈子如果我还记得你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/江美琪-下辈子如果我还记得你.mp3",},
{title:"江涛-愚公移山",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/江涛-愚公移山.mp3",},
{title:"姜鹏-问佛",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/姜鹏-问佛.mp3",},
{title:"姜育恒-梅花三弄",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/姜育恒-梅花三弄.mp3",},
{title:"姜育恒-驿动的心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/姜育恒-驿动的心.mp3",},
{title:"姜育恒-再回首",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/姜育恒-再回首.mp3",},
{title:"蒋雪儿-梦的翅膀受了伤",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蒋雪儿-梦的翅膀受了伤.mp3",},
{title:"蒋雪儿-谁在意我留下的泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/蒋雪儿-谁在意我留下的泪.mp3",},
{title:"降央卓玛-西海情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/降央卓玛-西海情歌.mp3",},
{title:"金海心-爱似水仙",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金海心-爱似水仙.mp3",},
{title:"金海心-把耳朵叫醒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金海心-把耳朵叫醒.mp3",},
{title:"金海心-悲伤的秋千",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金海心-悲伤的秋千.mp3",},
{title:"金海心-那么骄傲",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金海心-那么骄傲.mp3",},
{title:"金南玲-逆流成河",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金南玲-逆流成河.mp3",},
{title:"金莎-星月神话",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/金莎-星月神话.mp3",},
{title:"景岗山-我的眼里只有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/景岗山-我的眼里只有你.mp3",},
{title:"侃侃-滴答",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/侃侃-滴答.mp3",},
{title:"筷子兄弟-小苹果",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/筷子兄弟-小苹果.mp3",},
{title:"老狼-同桌的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/老狼-同桌的你.mp3",},
{title:"乐凡-你是我心里的宝",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/乐凡-你是我心里的宝.mp3",},
{title:"雷佳-芦花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/雷佳-芦花.mp3",},
{title:"冷漠-没有你陪伴我真的好孤单",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/冷漠-没有你陪伴我真的好孤单.mp3",},
{title:"黎明-深秋的黎明",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/黎明-深秋的黎明.mp3",},
{title:"李彩桦-我爱雨天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李彩桦-我爱雨天.mp3",},
{title:"李春波-小芳",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李春波-小芳.mp3",},
{title:"李慧珍-习惯",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李慧珍-习惯.mp3",},
{title:"李佳璐-如果下辈子还能遇见你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李佳璐-如果下辈子还能遇见你.mp3",},
{title:"李佳璐-无法原谅",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李佳璐-无法原谅.mp3",},
{title:"李健-贝加尔湖畔",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李健-贝加尔湖畔.mp3",},
{title:"李健-春风十里不如你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李健-春风十里不如你.mp3",},
{title:"李健-风吹麦浪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李健-风吹麦浪.mp3",},
{title:"李克勤-红日",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李克勤-红日.mp3",},
{title:"李克勤-月半小夜曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李克勤-月半小夜曲.mp3",},
{title:"李丽芬-爱江山更爱美人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李丽芬-爱江山更爱美人.mp3",},
{title:"李丽芬-得意的笑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李丽芬-得意的笑.mp3",},
{title:"李玟、周杰伦-刀马旦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟、周杰伦-刀马旦.mp3",},
{title:"李玟-Baby对不起",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-Baby对不起.mp3",},
{title:"李玟-DiDaDi",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-DiDaDi.mp3",},
{title:"李玟-好心情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-好心情.mp3",},
{title:"李玟-美丽笨女人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-美丽笨女人.mp3",},
{title:"李玟-想你的365天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-想你的365天.mp3",},
{title:"李玟-月光爱人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玟-月光爱人.mp3",},
{title:"李荣浩-不将就",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李荣浩-不将就.mp3",},
{title:"李荣浩-李白",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李荣浩-李白.mp3",},
{title:"李荣浩-麻雀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李荣浩-麻雀.mp3",},
{title:"李荣浩-模特",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李荣浩-模特.mp3",},
{title:"李荣浩-年少有为",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李荣浩-年少有为.mp3",},
{title:"李圣杰-痴心绝对",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李圣杰-痴心绝对.mp3",},
{title:"李圣杰-手放开",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李圣杰-手放开.mp3",},
{title:"李殊-原谅我过去不懂精卫填海主题曲",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李殊-原谅我过去不懂精卫填海主题曲.mp3",},
{title:"李晓杰-朋友的酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李晓杰-朋友的酒.mp3",},
{title:"李昕融、樊桐舟、李凯稠-你笑起来真好看",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李昕融、樊桐舟、李凯稠-你笑起来真好看.mp3",},
{title:"李翊君-风中的承诺",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李翊君-风中的承诺.mp3",},
{title:"李翊君-沙漠寂寞",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李翊君-沙漠寂寞.mp3",},
{title:"李翊君-婉君",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李翊君-婉君.mp3",},
{title:"李翊君-雨蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李翊君-雨蝶.mp3",},
{title:"李宇春-梨花香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李宇春-梨花香.mp3",},
{title:"李宇春-无价之姐",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李宇春-无价之姐.mp3",},
{title:"李雨儿、石头-雨花石",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李雨儿、石头-雨花石.mp3",},
{title:"李玉刚-刚好遇见你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玉刚-刚好遇见你.mp3",},
{title:"李玉刚-贵妃醉酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玉刚-贵妃醉酒.mp3",},
{title:"李玉刚-新贵妃醉酒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/李玉刚-新贵妃醉酒.mp3",},
{title:"梁静茹-爱你不是两三天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梁静茹-爱你不是两三天.mp3",},
{title:"梁静茹-分手快乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梁静茹-分手快乐.mp3",},
{title:"梁静茹-会呼吸的痛",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梁静茹-会呼吸的痛.mp3",},
{title:"梁静茹-可惜不是你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梁静茹-可惜不是你.mp3",},
{title:"梁静茹-勇气",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梁静茹-勇气.mp3",},
{title:"林宸希-不再问",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林宸希-不再问.mp3",},
{title:"林俊杰、蔡卓妍-小酒窝",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林俊杰、蔡卓妍-小酒窝.mp3",},
{title:"林俊杰-背对背拥抱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林俊杰-背对背拥抱.mp3",},
{title:"林俊杰-曹操",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林俊杰-曹操.mp3",},
{title:"林俊杰-江南",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林俊杰-江南.mp3",},
{title:"林俊杰-一千年以后",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林俊杰-一千年以后.mp3",},
{title:"林心如-落花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林心如-落花.mp3",},
{title:"林心如-倾听我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林心如-倾听我.mp3",},
{title:"林忆莲-爱上一个不回家的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林忆莲-爱上一个不回家的人.mp3",},
{title:"林忆莲-不必在乎我是谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林忆莲-不必在乎我是谁.mp3",},
{title:"林忆莲-伤痕",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林忆莲-伤痕.mp3",},
{title:"林忆莲-为你我受冷风吹",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林忆莲-为你我受冷风吹.mp3",},
{title:"林忆莲-至少还有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林忆莲-至少还有你.mp3",},
{title:"林宥嘉-你是我的眼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林宥嘉-你是我的眼.mp3",},
{title:"林志炫-operA",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志炫-opera.mp3",},
{title:"林志炫-单身情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志炫-单身情歌.mp3",},
{title:"林志炫-没离开过",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志炫-没离开过.mp3",},
{title:"林志炫-蒙娜丽莎的眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志炫-蒙娜丽莎的眼泪.mp3",},
{title:"林志炫-烟花易冷",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志炫-烟花易冷.mp3",},
{title:"林志颖-稻草人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志颖-稻草人.mp3",},
{title:"林志颖-十七岁的雨季",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林志颖-十七岁的雨季.mp3",},
{title:"林子祥-男儿当自强",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林子祥-男儿当自强.mp3",},
{title:"林子祥-长路漫漫伴你闯",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/林子祥-长路漫漫伴你闯.mp3",},
{title:"零点乐队-爱不爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/零点乐队-爱不爱我.mp3",},
{title:"零点乐队-相信自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/零点乐队-相信自己.mp3",},
{title:"刘德华&陈慧琳-我不够爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华&陈慧琳-我不够爱你.mp3",},
{title:"刘德华-爱你一万年",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-爱你一万年.mp3",},
{title:"刘德华-冰雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-冰雨.mp3",},
{title:"刘德华-男人哭吧不是罪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-男人哭吧不是罪.mp3",},
{title:"刘德华-世界第一等",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-世界第一等.mp3",},
{title:"刘德华-天意",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-天意.mp3",},
{title:"刘德华-忘情水",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-忘情水.mp3",},
{title:"刘德华-我恨我痴心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘德华-我恨我痴心.mp3",},
{title:"刘珂矣-半壶纱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘珂矣-半壶纱.mp3",},
{title:"刘珂矣-芙蓉雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘珂矣-芙蓉雨.mp3",},
{title:"刘若英-很爱很爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘若英-很爱很爱你.mp3",},
{title:"刘若英-后来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘若英-后来.mp3",},
{title:"刘若英-为爱痴狂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘若英-为爱痴狂.mp3",},
{title:"刘若英-一辈子的孤单",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘若英-一辈子的孤单.mp3",},
{title:"刘诗诗-等你的季节",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘诗诗-等你的季节.mp3",},
{title:"刘惜君-拆心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘惜君-拆心.mp3",},
{title:"刘惜君-我很快乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘惜君-我很快乐.mp3",},
{title:"刘亦菲、杨洋-三生三世十里桃花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/刘亦菲、杨洋-三生三世十里桃花.mp3",},
{title:"六哲-错错错",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/六哲-错错错.mp3",},
{title:"卢冠廷-一生所爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/卢冠廷-一生所爱.mp3",},
{title:"陆虎-雪落下的声音",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陆虎-雪落下的声音.mp3",},
{title:"陆思恒、陆可儿-千禧恋曲2020",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陆思恒、陆可儿-千禧恋曲2020.mp3",},
{title:"罗大佑、陈淑桦-滚滚红尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗大佑、陈淑桦-滚滚红尘.mp3",},
{title:"罗大佑-光阴的故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗大佑-光阴的故事.mp3",},
{title:"罗大佑-你的样子",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗大佑-你的样子.mp3",},
{title:"罗文、甄妮-铁血丹心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗文、甄妮-铁血丹心.mp3",},
{title:"罗志祥-狐狸精",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗志祥-狐狸精.mp3",},
{title:"罗志祥-恋爱达人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/罗志祥-恋爱达人.mp3",},
{title:"吕方-老情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/吕方-老情歌.mp3",},
{title:"马天宇-该死的温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/马天宇-该死的温柔.mp3",},
{title:"马旭东-入戏太深",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/马旭东-入戏太深.mp3",},
{title:"马郁-下辈子如果我还记得你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/马郁-下辈子如果我还记得你.mp3",},
{title:"马郁-一天死去一点",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/马郁-一天死去一点.mp3",},
{title:"满文军-懂你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/满文军-懂你.mp3",},
{title:"满文军-望乡",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/满文军-望乡.mp3",},
{title:"毛不易-消愁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/毛不易-消愁.mp3",},
{title:"毛宁-蓝蓝的夜蓝蓝的梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/毛宁-蓝蓝的夜蓝蓝的梦.mp3",},
{title:"毛宁-涛声依旧",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/毛宁-涛声依旧.mp3",},
{title:"梅艳芳-女人花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梅艳芳-女人花.mp3",},
{title:"萌萌哒天团-帝都",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萌萌哒天团-帝都.mp3",},
{title:"孟庭苇-冬季到台北来看雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孟庭苇-冬季到台北来看雨.mp3",},
{title:"孟庭苇-风中有朵雨做的云",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孟庭苇-风中有朵雨做的云.mp3",},
{title:"孟庭苇-谁的眼泪在飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孟庭苇-谁的眼泪在飞.mp3",},
{title:"梦然-没有你陪伴真的好孤单",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梦然-没有你陪伴真的好孤单.mp3",},
{title:"梦然-少年",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/梦然-少年.mp3",},
{title:"莫文蔚 张洪量-广岛之恋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚 张洪量-广岛之恋.mp3",},
{title:"莫文蔚-电台情歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚-电台情歌.mp3",},
{title:"莫文蔚-寂寞的恋人啊",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚-寂寞的恋人啊.mp3",},
{title:"莫文蔚-盛夏的果实",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚-盛夏的果实.mp3",},
{title:"莫文蔚-他不爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚-他不爱我.mp3",},
{title:"莫文蔚-阴天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/莫文蔚-阴天.mp3",},
{title:"慕容晓晓-爱情买卖",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/慕容晓晓-爱情买卖.mp3",},
{title:"欧得洋-孤单北半球",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/欧得洋-孤单北半球.mp3",},
{title:"潘安邦-外婆的澎湖湾",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘安邦-外婆的澎湖湾.mp3",},
{title:"潘美辰-我想有个家",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘美辰-我想有个家.mp3",},
{title:"潘玮柏、苏芮-我想更懂你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘玮柏、苏芮-我想更懂你.mp3",},
{title:"潘玮柏-不得不爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘玮柏-不得不爱.mp3",},
{title:"潘玮柏-快乐崇拜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘玮柏-快乐崇拜.mp3",},
{title:"潘越云-天天天蓝",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘越云-天天天蓝.mp3",},
{title:"潘越云-我是不是你最疼爱的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/潘越云-我是不是你最疼爱的人.mp3",},
{title:"庞龙-两只蝴蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庞龙-两只蝴蝶.mp3",},
{title:"庞龙-你是我的玫瑰花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庞龙-你是我的玫瑰花.mp3",},
{title:"彭佳慧-好久不见",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/彭佳慧-好久不见.mp3",},
{title:"彭佳慧-相见恨晚",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/彭佳慧-相见恨晚.mp3",},
{title:"朴树-白桦林",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/朴树-白桦林.mp3",},
{title:"朴树-那些花儿",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/朴树-那些花儿.mp3",},
{title:"戚薇、杨宗纬-为了遇见你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/戚薇、杨宗纬-为了遇见你.mp3",},
{title:"齐秦-不让我的眼泪陪我过夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/齐秦-不让我的眼泪陪我过夜.mp3",},
{title:"齐秦-大约在冬季",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/齐秦-大约在冬季.mp3",},
{title:"齐秦-往事随风",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/齐秦-往事随风.mp3",},
{title:"齐秦-无情的雨无情的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/齐秦-无情的雨无情的你.mp3",},
{title:"齐豫-橄榄树",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/齐豫-橄榄树.mp3",},
{title:"祁隆、乐凡-等你等了那么久",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/祁隆、乐凡-等你等了那么久.mp3",},
{title:"邱永传-十一年",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邱永传-十一年.mp3",},
{title:"裘海正-爱我的人和我爱的人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/裘海正-爱我的人和我爱的人.mp3",},
{title:"裘海正-九千九百九十九滴眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/裘海正-九千九百九十九滴眼泪.mp3",},
{title:"曲婉婷-我的歌声里",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/曲婉婷-我的歌声里.mp3",},
{title:"任妙音-风筝",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任妙音-风筝.mp3",},
{title:"任贤齐-沧海一声笑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-沧海一声笑.mp3",},
{title:"任贤齐-流着泪的你的脸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-流着泪的你的脸.mp3",},
{title:"任贤齐-伤心太平洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-伤心太平洋.mp3",},
{title:"任贤齐-我是一只鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-我是一只鱼.mp3",},
{title:"任贤齐-小雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-小雪.mp3",},
{title:"任贤齐-心太软",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/任贤齐-心太软.mp3",},
{title:"容祖儿-挥着翅膀的女孩",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/容祖儿-挥着翅膀的女孩.mp3",},
{title:"沙宝亮-暗香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/沙宝亮-暗香.mp3",},
{title:"沙宝亮-斑马斑马",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/沙宝亮-斑马斑马.mp3",},
{title:"斯琴高丽-犯错",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/斯琴高丽-犯错.mp3",},
{title:"苏芮-牵手",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/苏芮-牵手.mp3",},
{title:"苏永康-爱一个人好难",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/苏永康-爱一个人好难.mp3",},
{title:"苏永康-男人不该让女人流泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/苏永康-男人不该让女人流泪.mp3",},
{title:"苏运莹-野子",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/苏运莹-野子.mp3",},
{title:"孙国庆-代价",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙国庆-代价.mp3",},
{title:"孙国庆-上上签",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙国庆-上上签.mp3",},
{title:"孙楠、韩红-美丽的神话",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙楠、韩红-美丽的神话.mp3",},
{title:"孙楠-IBelieve",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙楠-IBelieve.mp3",},
{title:"孙楠-你快回来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙楠-你快回来.mp3",},
{title:"孙楠-缘分的天空",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙楠-缘分的天空.mp3",},
{title:"孙楠-拯救",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙楠-拯救.mp3",},
{title:"孙燕姿-风筝",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-风筝.mp3",},
{title:"孙燕姿-坏天气",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-坏天气.mp3",},
{title:"孙燕姿-开始懂了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-开始懂了.mp3",},
{title:"孙燕姿-绿光",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-绿光.mp3",},
{title:"孙燕姿-天黑黑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-天黑黑.mp3",},
{title:"孙燕姿-我要的幸福",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-我要的幸福.mp3",},
{title:"孙燕姿-遇见",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-遇见.mp3",},
{title:"孙燕姿-原来你什么都不要",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙燕姿-原来你什么都不要.mp3",},
{title:"孙悦-快乐指南",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙悦-快乐指南.mp3",},
{title:"孙悦-心情不错",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙悦-心情不错.mp3",},
{title:"孙悦-幸福快车",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙悦-幸福快车.mp3",},
{title:"孙悦-祝你平安",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/孙悦-祝你平安.mp3",},
{title:"邰正宵、孙悦-好人好梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵、孙悦-好人好梦.mp3",},
{title:"邰正宵-九百九十九朵玫瑰",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵-九百九十九朵玫瑰.mp3",},
{title:"邰正宵-千纸鹤",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵-千纸鹤.mp3",},
{title:"邰正宵-心要让你听见",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵-心要让你听见.mp3",},
{title:"邰正宵-一千零一夜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵-一千零一夜.mp3",},
{title:"邰正宵-找一个字代替",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/邰正宵-找一个字代替.mp3",},
{title:"谭咏麟-爱在深秋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谭咏麟-爱在深秋.mp3",},
{title:"谭咏麟-再见亦是泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谭咏麟-再见亦是泪.mp3",},
{title:"汤潮-狼爱上羊",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汤潮-狼爱上羊.mp3",},
{title:"汤潮-美了美了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汤潮-美了美了.mp3",},
{title:"唐磊-丁香花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/唐磊-丁香花.mp3",},
{title:"陶晶莹-太委屈",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陶晶莹-太委屈.mp3",},
{title:"陶喆-melody",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陶喆-melody.mp3",},
{title:"陶喆-爱我还是他",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陶喆-爱我还是他.mp3",},
{title:"陶喆-小镇姑娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/陶喆-小镇姑娘.mp3",},
{title:"腾格尔-天堂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/腾格尔-天堂.mp3",},
{title:"田馥甄-寂寞寂寞就好",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/田馥甄-寂寞寂寞就好.mp3",},
{title:"田馥甄-小幸运",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/田馥甄-小幸运.mp3",},
{title:"童安格-明天你是否依然爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/童安格-明天你是否依然爱我.mp3",},
{title:"屠洪刚-精忠报国",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/屠洪刚-精忠报国.mp3",},
{title:"汪峰-春天里",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪峰-春天里.mp3",},
{title:"汪峰-飞得更高",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪峰-飞得更高.mp3",},
{title:"汪峰-怒放的生命",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪峰-怒放的生命.mp3",},
{title:"汪峰-无处安放",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪峰-无处安放.mp3",},
{title:"汪峰-一起摇摆",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪峰-一起摇摆.mp3",},
{title:"汪明荃-万水千山总是情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪明荃-万水千山总是情.mp3",},
{title:"汪苏泷-不分手的恋爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪苏泷-不分手的恋爱.mp3",},
{title:"汪正正-超越梦想",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪正正-超越梦想.mp3",},
{title:"汪正正-重头再来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/汪正正-重头再来.mp3",},
{title:"王菲-传奇",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王菲-传奇.mp3",},
{title:"王菲-容易受伤的女人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王菲-容易受伤的女人.mp3",},
{title:"王菲-笑忘书",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王菲-笑忘书.mp3",},
{title:"王杰-你是我胸口永远的痛",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-你是我胸口永远的痛.mp3",},
{title:"王杰-伤心1999",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-伤心1999.mp3",},
{title:"王杰-忘记你不如忘记自己",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-忘记你不如忘记自己.mp3",},
{title:"王杰-忘了你忘了我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-忘了你忘了我.mp3",},
{title:"王杰-为了爱梦一生",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-为了爱梦一生.mp3",},
{title:"王杰-一场游戏一场梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-一场游戏一场梦.mp3",},
{title:"王杰-一无所有",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-一无所有.mp3",},
{title:"王杰-英雄泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王杰-英雄泪.mp3",},
{title:"王力宏 selina-你是我心内的一首歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王力宏 selina-你是我心内的一首歌.mp3",},
{title:"王力宏-爱的就是你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王力宏-爱的就是你.mp3",},
{title:"王力宏-唯一",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王力宏-唯一.mp3",},
{title:"王麟、完玛三智-唐古拉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王麟、完玛三智-唐古拉.mp3",},
{title:"王麟-QQ爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王麟-QQ爱.mp3",},
{title:"王麟-伤不起",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王麟-伤不起.mp3",},
{title:"王强-你把爱情给了谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王强-你把爱情给了谁.mp3",},
{title:"王蓉-哎呀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王蓉-哎呀.mp3",},
{title:"王心凌-honey",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王心凌-honey.mp3",},
{title:"王心凌-爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王心凌-爱你.mp3",},
{title:"王心凌-不哭",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王心凌-不哭.mp3",},
{title:"王心凌-心心相印",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王心凌-心心相印.mp3",},
{title:"王馨平-别问我是谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王馨平-别问我是谁.mp3",},
{title:"王娅-爱情错觉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王娅-爱情错觉.mp3",},
{title:"王铮亮-时间都去哪儿了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/王铮亮-时间都去哪儿了.mp3",},
{title:"乌兰托娅-火红的萨日朗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/乌兰托娅-火红的萨日朗.mp3",},
{title:"乌兰托娅-套马杆",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/乌兰托娅-套马杆.mp3",},
{title:"巫启贤-红尘来去一场梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/巫启贤-红尘来去一场梦.mp3",},
{title:"吴克群-为你写诗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/吴克群-为你写诗.mp3",},
{title:"吴奇隆-烟火",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/吴奇隆-烟火.mp3",},
{title:"五月天-你不是真正的快乐",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/五月天-你不是真正的快乐.mp3",},
{title:"五月天-突然好想你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/五月天-突然好想你.mp3",},
{title:"伍佰-挪威的森林",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/伍佰-挪威的森林.mp3",},
{title:"伍佰-突然的自我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/伍佰-突然的自我.mp3",},
{title:"伍思凯-特别的爱给特别的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/伍思凯-特别的爱给特别的你.mp3",},
{title:"希莉娜依、胡兵-归去来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/希莉娜依、胡兵-归去来.mp3",},
{title:"萧亚轩、韩庚-最佳听众",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩、韩庚-最佳听众.mp3",},
{title:"萧亚轩-Cappuccino",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-Cappuccino.mp3",},
{title:"萧亚轩-HoneyHoneyHoney",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-HoneyHoneyHoney.mp3",},
{title:"萧亚轩-窗外的天气",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-窗外的天气.mp3",},
{title:"萧亚轩-突然想起你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-突然想起你.mp3",},
{title:"萧亚轩-我爱你那么多",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-我爱你那么多.mp3",},
{title:"萧亚轩-一个人的精彩",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-一个人的精彩.mp3",},
{title:"萧亚轩-最熟悉的陌生人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/萧亚轩-最熟悉的陌生人.mp3",},
{title:"小虎队-爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/小虎队-爱.mp3",},
{title:"小虎队-青苹果乐园",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/小虎队-青苹果乐园.mp3",},
{title:"小虎队-十七岁的雨季",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/小虎队-十七岁的雨季.mp3",},
{title:"小潘潘、小峰峰-学猫叫",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/小潘潘、小峰峰-学猫叫.mp3",},
{title:"谢东-笑脸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢东-笑脸.mp3",},
{title:"谢军-心在跳情在烧",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢军-心在跳情在烧.mp3",},
{title:"谢娜-菠萝菠萝蜜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢娜-菠萝菠萝蜜.mp3",},
{title:"谢霆锋-谢谢你的爱1999",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢霆锋-谢谢你的爱1999.mp3",},
{title:"谢霆锋-因为爱所以爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢霆锋-因为爱所以爱.mp3",},
{title:"谢雨欣-步步高",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢雨欣-步步高.mp3",},
{title:"谢雨欣-第三天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢雨欣-第三天.mp3",},
{title:"谢雨欣-天仙子",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/谢雨欣-天仙子.mp3",},
{title:"辛晓琪-味道",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/辛晓琪-味道.mp3",},
{title:"信乐团-海阔天空",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/信乐团-海阔天空.mp3",},
{title:"信乐团-假如",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/信乐团-假如.mp3",},
{title:"信乐团-离歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/信乐团-离歌.mp3",},
{title:"信乐团-死了都要爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/信乐团-死了都要爱.mp3",},
{title:"熊天平-火柴天堂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/熊天平-火柴天堂.mp3",},
{title:"徐怀钰-叮咚",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐怀钰-叮咚.mp3",},
{title:"徐怀钰-分飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐怀钰-分飞.mp3",},
{title:"徐怀钰-踏浪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐怀钰-踏浪.mp3",},
{title:"徐良-那时雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐良-那时雨.mp3",},
{title:"徐千雅-彩云之南",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐千雅-彩云之南.mp3",},
{title:"徐誉滕-等一分钟 -",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/徐誉滕-等一分钟 -.mp3",},
{title:"许慧欣-七月七日晴",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许慧欣-七月七日晴.mp3",},
{title:"许佳慧-预谋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许佳慧-预谋.mp3",},
{title:"许美静-城里的月光",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-城里的月光.mp3",},
{title:"许美静-荡漾",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-荡漾.mp3",},
{title:"许美静-都是夜归人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-都是夜归人.mp3",},
{title:"许美静-快乐无罪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-快乐无罪.mp3",},
{title:"许美静-蔓延",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-蔓延.mp3",},
{title:"许美静-迷乱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-迷乱.mp3",},
{title:"许美静-迫在眉梢",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-迫在眉梢.mp3",},
{title:"许美静-铁窗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-铁窗.mp3",},
{title:"许美静-阳光总在风雨后",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-阳光总在风雨后.mp3",},
{title:"许美静-遗憾",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许美静-遗憾.mp3",},
{title:"许茹芸-独角戏",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-独角戏.mp3",},
{title:"许茹芸-泪海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-泪海.mp3",},
{title:"许茹芸-日光机场",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-日光机场.mp3",},
{title:"许茹芸-如果云知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-如果云知道.mp3",},
{title:"许茹芸-我依然爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-我依然爱你.mp3",},
{title:"许茹芸-一直是晴天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许茹芸-一直是晴天.mp3",},
{title:"许韶洋-花香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许韶洋-花香.mp3",},
{title:"许韶洋-幸福的瞬间",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许韶洋-幸福的瞬间.mp3",},
{title:"许嵩-半城烟沙",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许嵩-半城烟沙.mp3",},
{title:"许嵩-断桥残雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许嵩-断桥残雪.mp3",},
{title:"许巍-曾经的你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/许巍-曾经的你.mp3",},
{title:"薛之谦-暧昧",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/薛之谦-暧昧.mp3",},
{title:"薛之谦-丑八怪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/薛之谦-丑八怪.mp3",},
{title:"薛之谦-你还要我怎样",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/薛之谦-你还要我怎样.mp3",},
{title:"薛之谦-演员",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/薛之谦-演员.mp3",},
{title:"严艺丹-等你的季节",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/严艺丹-等你的季节.mp3",},
{title:"严艺丹-三寸天堂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/严艺丹-三寸天堂.mp3",},
{title:"央金兰泽-遇上你是我的缘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/央金兰泽-遇上你是我的缘.mp3",},
{title:"杨丞琳-暧昧",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨丞琳-暧昧.mp3",},
{title:"杨丞琳-一千零一个愿望",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨丞琳-一千零一个愿望.mp3",},
{title:"杨坤-那一天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨坤-那一天.mp3",},
{title:"杨坤-无所谓",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨坤-无所谓.mp3",},
{title:"杨幂-爱的供养",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨幂-爱的供养.mp3",},
{title:"杨培安-爱上你是一个错",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨培安-爱上你是一个错.mp3",},
{title:"杨培安-我相信",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨培安-我相信.mp3",},
{title:"杨千桦-小城大事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨千桦-小城大事.mp3",},
{title:"杨小曼-我爱你胜过你爱我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨小曼-我爱你胜过你爱我.mp3",},
{title:"杨钰莹、毛宁-心雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨钰莹、毛宁-心雨.mp3",},
{title:"杨钰莹-轻轻的告诉你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨钰莹-轻轻的告诉你.mp3",},
{title:"杨钰莹-我不想说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨钰莹-我不想说.mp3",},
{title:"杨宗纬 张碧晨-凉凉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨宗纬 张碧晨-凉凉.mp3",},
{title:"杨宗纬-洋葱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨宗纬-洋葱.mp3",},
{title:"杨宗纬-一次就好",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/杨宗纬-一次就好.mp3",},
{title:"叶蓓-想把我唱给你听",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/叶蓓-想把我唱给你听.mp3",},
{title:"叶丽仪-上海滩",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/叶丽仪-上海滩.mp3",},
{title:"叶倩文、林子祥-选择",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/叶倩文、林子祥-选择.mp3",},
{title:"叶倩文-潇洒走一回",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/叶倩文-潇洒走一回.mp3",},
{title:"游鸿明-下沙",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/游鸿明-下沙.mp3",},
{title:"俞灏明 简美妍-陷入爱里面",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/俞灏明 简美妍-陷入爱里面.mp3",},
{title:"宇桐非-感动天感动地",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/宇桐非-感动天感动地.mp3",},
{title:"羽·泉-奔跑",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-奔跑.mp3",},
{title:"羽·泉-彩虹",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-彩虹.mp3",},
{title:"羽·泉-感觉不到你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-感觉不到你.mp3",},
{title:"羽·泉-冷酷到底",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-冷酷到底.mp3",},
{title:"羽·泉-深呼吸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-深呼吸.mp3",},
{title:"羽·泉-心似狂潮",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-心似狂潮.mp3",},
{title:"羽·泉-最美",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/羽·泉-最美.mp3",},
{title:"庾澄庆-情非得已",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庾澄庆-情非得已.mp3",},
{title:"庾澄庆-让我一次爱个够",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庾澄庆-让我一次爱个够.mp3",},
{title:"庾澄庆-热情的沙漠",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庾澄庆-热情的沙漠.mp3",},
{title:"郁可唯-时间煮雨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郁可唯-时间煮雨.mp3",},
{title:"郁可唯-思慕",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郁可唯-思慕.mp3",},
{title:"袁成杰、戚薇-想我了吗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/袁成杰、戚薇-想我了吗.mp3",},
{title:"袁娅维-说散就散",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/袁娅维-说散就散.mp3",},
{title:"张柏芝-星语心愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张柏芝-星语心愿.mp3",},
{title:"张碧晨-年轮",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张碧晨-年轮.mp3",},
{title:"张栋梁-北极星的眼泪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张栋梁-北极星的眼泪.mp3",},
{title:"张栋梁-当你孤单你会想起谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张栋梁-当你孤单你会想起谁.mp3",},
{title:"张镐哲-好男人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张镐哲-好男人.mp3",},
{title:"张国荣-倩女幽魂",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张国荣-倩女幽魂.mp3",},
{title:"张含韵-闪亮亮",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张含韵-闪亮亮.mp3",},
{title:"张含韵-酸酸甜甜就是我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张含韵-酸酸甜甜就是我.mp3",},
{title:"张含韵-想唱就唱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张含韵-想唱就唱.mp3",},
{title:"张惠妹-BadBoy",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-BadBoy.mp3",},
{title:"张惠妹-剪爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-剪爱.mp3",},
{title:"张惠妹-姐妹",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-姐妹.mp3",},
{title:"张惠妹-可以抱你吗",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-可以抱你吗.mp3",},
{title:"张惠妹-哭不出来",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-哭不出来.mp3",},
{title:"张惠妹-听海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-听海.mp3",},
{title:"张惠妹-一想到你呀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-一想到你呀.mp3",},
{title:"张惠妹-原来你什么都不想要",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-原来你什么都不想要.mp3",},
{title:"张惠妹-站在高岗上",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张惠妹-站在高岗上.mp3",},
{title:"张杰-这,就是爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张杰-这,就是爱.mp3",},
{title:"张敬轩-断点",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张敬轩-断点.mp3",},
{title:"张靓颖-画心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张靓颖-画心.mp3",},
{title:"张靓颖-如果这就是爱情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张靓颖-如果这就是爱情.mp3",},
{title:"张靓颖-终于等到你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张靓颖-终于等到你.mp3",},
{title:"张明敏-龙的传人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张明敏-龙的传人.mp3",},
{title:"张明敏-我的中国心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张明敏-我的中国心.mp3",},
{title:"张娜拉-SweetDream韩文",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张娜拉-SweetDream韩文.mp3",},
{title:"张娜拉-泪流满面",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张娜拉-泪流满面.mp3",},
{title:"张韶涵-梦里花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-梦里花.mp3",},
{title:"张韶涵-呐喊",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-呐喊.mp3",},
{title:"张韶涵-欧若拉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-欧若拉.mp3",},
{title:"张韶涵-潘朵拉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-潘朵拉.mp3",},
{title:"张韶涵-隐形的翅膀",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-隐形的翅膀.mp3",},
{title:"张韶涵-寓言",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张韶涵-寓言.mp3",},
{title:"张卫健-孤独不苦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张卫健-孤独不苦.mp3",},
{title:"张卫健-你爱我像谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张卫健-你爱我像谁.mp3",},
{title:"张卫健-虚虚实实",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张卫健-虚虚实实.mp3",},
{title:"张卫健-一辈子一场梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张卫健-一辈子一场梦.mp3",},
{title:"张信哲、范文芳-别让情两难",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲、范文芳-别让情两难.mp3",},
{title:"张信哲、刘嘉玲-有一点动心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲、刘嘉玲-有一点动心.mp3",},
{title:"张信哲-爱不留",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-爱不留.mp3",},
{title:"张信哲-爱就一个字",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-爱就一个字.mp3",},
{title:"张信哲-爱如潮水",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-爱如潮水.mp3",},
{title:"张信哲-别怕我伤心",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-别怕我伤心.mp3",},
{title:"张信哲-不要对他说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-不要对他说.mp3",},
{title:"张信哲-从开始到现在",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-从开始到现在.mp3",},
{title:"张信哲-过火",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-过火.mp3",},
{title:"张信哲-宽容",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-宽容.mp3",},
{title:"张信哲-某某某",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-某某某.mp3",},
{title:"张信哲-难以抗拒你容颜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-难以抗拒你容颜.mp3",},
{title:"张信哲-太想爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-太想爱你.mp3",},
{title:"张信哲-信仰",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-信仰.mp3",},
{title:"张信哲-用情",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-用情.mp3",},
{title:"张信哲-直觉",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张信哲-直觉.mp3",},
{title:"张学友-当我想起你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-当我想起你.mp3",},
{title:"张学友-饿狼传说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-饿狼传说.mp3",},
{title:"张学友-烦恼歌",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-烦恼歌.mp3",},
{title:"张学友-分手总要在雨天",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-分手总要在雨天.mp3",},
{title:"张学友-李香兰",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-李香兰.mp3",},
{title:"张学友-你好毒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-你好毒.mp3",},
{title:"张学友-情书",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-情书.mp3",},
{title:"张学友-秋意浓",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-秋意浓.mp3",},
{title:"张学友-吻别",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-吻别.mp3",},
{title:"张学友-我等到花儿也谢了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-我等到花儿也谢了.mp3",},
{title:"张学友-心如刀割",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-心如刀割.mp3",},
{title:"张学友-一路上有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-一路上有你.mp3",},
{title:"张学友-一千个伤心的理由",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-一千个伤心的理由.mp3",},
{title:"张学友-只想一生跟你走",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-只想一生跟你走.mp3",},
{title:"张学友-只愿一生爱一人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张学友-只愿一生爱一人.mp3",},
{title:"张宇-一言难尽",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张宇-一言难尽.mp3",},
{title:"张宇-雨一直下",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张宇-雨一直下.mp3",},
{title:"张雨生-大海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张雨生-大海.mp3",},
{title:"张雨生-我的未来不是梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张雨生-我的未来不是梦.mp3",},
{title:"张雨生-一天到晚游泳的鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张雨生-一天到晚游泳的鱼.mp3",},
{title:"张云雷-探清水河",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张云雷-探清水河.mp3",},
{title:"张芸京-春泥",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张芸京-春泥.mp3",},
{title:"张芸京-偏爱",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/张芸京-偏爱.mp3",},
{title:"赵传-我很丑可是我很温柔",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵传-我很丑可是我很温柔.mp3",},
{title:"赵传-我是一只小小鸟",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵传-我是一只小小鸟.mp3",},
{title:"赵方婧-芒种",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵方婧-芒种.mp3",},
{title:"赵雷-成都",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵雷-成都.mp3",},
{title:"赵薇-爱情大魔咒",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵薇-爱情大魔咒.mp3",},
{title:"赵薇-好想好想",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵薇-好想好想.mp3",},
{title:"赵薇-情深深雨濛濛",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵薇-情深深雨濛濛.mp3",},
{title:"赵英俊-大王叫我来巡山",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵英俊-大王叫我来巡山.mp3",},
{title:"赵咏华-最浪漫的事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/赵咏华-最浪漫的事.mp3",},
{title:"甄妮-鲁冰花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/甄妮-鲁冰花.mp3",},
{title:"甄妮-我曾用心爱着你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/甄妮-我曾用心爱着你.mp3",},
{title:"郑钧-灰姑娘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郑钧-灰姑娘.mp3",},
{title:"郑钧-回到拉萨",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郑钧-回到拉萨.mp3",},
{title:"郑源-包容",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郑源-包容.mp3",},
{title:"郑源-寒江雪",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郑源-寒江雪.mp3",},
{title:"郑源-怎么会狠心伤害我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/郑源-怎么会狠心伤害我.mp3",},
{title:"钟镇涛-只要你过得比我好",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/钟镇涛-只要你过得比我好.mp3",},
{title:"周冰倩-真的好想你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周冰倩-真的好想你.mp3",},
{title:"周传雄-黄昏",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周传雄-黄昏.mp3",},
{title:"周华健-刀剑如梦",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周华健-刀剑如梦.mp3",},
{title:"周华健-风雨无阻",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周华健-风雨无阻.mp3",},
{title:"周华健-覆水难收",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周华健-覆水难收.mp3",},
{title:"周华健-难念的经",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周华健-难念的经.mp3",},
{title:"周华健-朋友",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周华健-朋友.mp3",},
{title:"周蕙-不想让你知道",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-不想让你知道.mp3",},
{title:"周蕙-风铃",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-风铃.mp3",},
{title:"周蕙-好想好好爱你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-好想好好爱你.mp3",},
{title:"周蕙-没有你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-没有你.mp3",},
{title:"周蕙-我看",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-我看.mp3",},
{title:"周蕙-相遇太早",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-相遇太早.mp3",},
{title:"周蕙-约定",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周蕙-约定.mp3",},
{title:"周杰伦、费玉清-千里之外",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦、费玉清-千里之外.mp3",},
{title:"周杰伦、温岚-屋顶",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦、温岚-屋顶.mp3",},
{title:"周杰伦-稻香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-稻香.mp3",},
{title:"周杰伦-东风破",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-东风破.mp3",},
{title:"周杰伦-告白气球",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-告白气球.mp3",},
{title:"周杰伦-菊花台",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-菊花台.mp3",},
{title:"周杰伦-龙卷风",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-龙卷风.mp3",},
{title:"周杰伦-七里香",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-七里香.mp3",},
{title:"周杰伦-青花瓷",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周杰伦-青花瓷.mp3",},
{title:"周深、胡夏-天涯尽处",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、胡夏-天涯尽处.mp3",},
{title:"周深、郎朗-幽灵公主(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、郎朗-幽灵公主(Live).mp3",},
{title:"周深、李琦-你要的爱(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、李琦-你要的爱(Live).mp3",},
{title:"周深、李维-偶然",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、李维-偶然.mp3",},
{title:"周深、陆虎-缘落",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、陆虎-缘落.mp3",},
{title:"周深、于文文-暗香(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深、于文文-暗香(Live).mp3",},
{title:"周深-LetItGo(九语男版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-LetItGo(九语男版).mp3",},
{title:"周深-白墙",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-白墙.mp3",},
{title:"周深-不说话",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-不说话.mp3",},
{title:"周深-曾经沧海",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-曾经沧海.mp3",},
{title:"周深-触不可及",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-触不可及.mp3",},
{title:"周深-此生惟你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-此生惟你.mp3",},
{title:"周深-达拉崩吧(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-达拉崩吧(Live).mp3",},
{title:"周深-大鱼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-大鱼.mp3",},
{title:"周深-胆小鬼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-胆小鬼.mp3",},
{title:"周深-等着我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-等着我.mp3",},
{title:"周深-东游",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-东游.mp3",},
{title:"周深-独白",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-独白.mp3",},
{title:"周深-放鹤图",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-放鹤图.mp3",},
{title:"周深-放心去飞",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-放心去飞.mp3",},
{title:"周深-风景",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-风景.mp3",},
{title:"周深-哥哥",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-哥哥.mp3",},
{title:"周深-归处",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-归处.mp3",},
{title:"周深-过尽千帆",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-过尽千帆.mp3",},
{title:"周深-海藏",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-海藏.mp3",},
{title:"周深-海上蝶",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-海上蝶.mp3",},
{title:"周深-和光同尘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-和光同尘.mp3",},
{title:"周深-花开",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-花开.mp3",},
{title:"周深-化身孤岛的鲸",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-化身孤岛的鲸.mp3",},
{title:"周深-画绢",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-画绢.mp3",},
{title:"周深-欢颜",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-欢颜.mp3",},
{title:"周深-荒城渡",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-荒城渡.mp3",},
{title:"周深-荒原星火",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-荒原星火.mp3",},
{title:"周深-回声",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-回声.mp3",},
{title:"周深-卷珠帘",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-卷珠帘.mp3",},
{title:"周深-卡布叻船长",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-卡布叻船长.mp3",},
{title:"周深-可它爱着这个世界",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-可它爱着这个世界.mp3",},
{title:"周深-渴望遇见",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-渴望遇见.mp3",},
{title:"周深-渴望遇见(情感版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-渴望遇见(情感版).mp3",},
{title:"周深-垃圾别烦我",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-垃圾别烦我.mp3",},
{title:"周深-来不及勇敢",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-来不及勇敢.mp3",},
{title:"周深-落花",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-落花.mp3",},
{title:"周深-没有说完的故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-没有说完的故事.mp3",},
{title:"周深-梅香如故(独唱版)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-梅香如故(独唱版).mp3",},
{title:"周深-美错",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-美错.mp3",},
{title:"周深-梦回神都",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-梦回神都.mp3",},
{title:"周深-梦留别",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-梦留别.mp3",},
{title:"周深-明月传说",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-明月传说.mp3",},
{title:"周深-妳",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-妳.mp3",},
{title:"周深-年轮(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-年轮(Live).mp3",},
{title:"周深-念",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-念.mp3",},
{title:"周深-浓情淡如你",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-浓情淡如你.mp3",},
{title:"周深-起风了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-起风了.mp3",},
{title:"周深-浅浅",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-浅浅.mp3",},
{title:"周深-亲爱的旅人啊",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-亲爱的旅人啊.mp3",},
{title:"周深-情不由衷",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-情不由衷.mp3",},
{title:"周深-情是何物",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-情是何物.mp3",},
{title:"周深-情意结",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-情意结.mp3",},
{title:"周深-水形物语",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-水形物语.mp3",},
{title:"周深-斯卡布罗集市(2018声入人心现场)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-斯卡布罗集市(2018声入人心现场).mp3",},
{title:"周深-随风",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-随风.mp3",},
{title:"周深-天地为念",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-天地为念.mp3",},
{title:"周深-瞳(出类拔萃)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-瞳(出类拔萃).mp3",},
{title:"周深-蜕",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-蜕.mp3",},
{title:"周深-微光海洋",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-微光海洋.mp3",},
{title:"周深-为爱追寻",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-为爱追寻.mp3",},
{title:"周深-我是你的谁",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-我是你的谁.mp3",},
{title:"周深-相守",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-相守.mp3",},
{title:"周深-小幸运",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-小幸运.mp3",},
{title:"周深-雪落下的声音(Live)",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-雪落下的声音(Live).mp3",},
{title:"周深-叶子",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-叶子.mp3",},
{title:"周深-一缕执念",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-一缕执念.mp3",},
{title:"周深-迎刃",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-迎刃.mp3",},
{title:"周深-与卿",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-与卿.mp3",},
{title:"周深-缘起",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-缘起.mp3",},
{title:"周深-愿",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-愿.mp3",},
{title:"周深-愿得一心人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-愿得一心人.mp3",},
{title:"周深-拙慕",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周深-拙慕.mp3",},
{title:"周迅-飘摇",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周迅-飘摇.mp3",},
{title:"周艳泓-要嫁就嫁灰太狼",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周艳泓-要嫁就嫁灰太狼.mp3",},
{title:"周治平-那一场风花雪月的故事",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/周治平-那一场风花雪月的故事.mp3",},
{title:"庄心妍、祁隆-一万个舍不得",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庄心妍、祁隆-一万个舍不得.mp3",},
{title:"庄心妍-爱囚",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庄心妍-爱囚.mp3",},
{title:"庄心妍-以后的以后",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庄心妍-以后的以后.mp3",},
{title:"庄心妍-再见只是陌生人",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庄心妍-再见只是陌生人.mp3",},
{title:"庄心妍-走着走着就散了",artist: "",album:" ",cover:"img/1.jpg",mp3:"http://music.asia.ga/OnedriveTJ/音乐视听/精选/庄心妍-走着走着就散了.mp3",}

];

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li>' + item.artist + ' - ' + item.title + '</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		audio, timeout, isPlaying, playCounts;

	var play = function () {
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	};

	var pause = function () {
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	};

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	};

	var updateProgress = function () {
		setProgress(audio.currentTime);
	};

	// Progress slider
	$('.progress .slider').slider({
		step: 0.1,
		slide: function (event, ui) {
			$(this).addClass('enable');
			setProgress(audio.duration * ui.value / 100);
			clearInterval(timeout);
		},
		stop: function (event, ui) {
			audio.currentTime = audio.duration * ui.value / 100;
			$(this).removeClass('enable');
			timeout = setInterval(updateProgress, 500);
		}
	});

	// Volume slider
	var setVolume = function (value) {
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	};

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({
		max: 1,
		min: 0,
		step: 0.01,
		value: volume,
		slide: function (event, ui) {
			setVolume(ui.value);
			$(this).addClass('enable');
			$('.mute').removeClass('enable');
		},
		stop: function () {
			$(this).removeClass('enable');
		}
	}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function () {
		if ($(this).hasClass('enable')) {
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	};

	// Shuffle
	var shufflePlay = function () {
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1) {
			play();
		} else {
			if (shuffle === 'true') {
				shufflePlay();
			} else {
				if (repeat == 2) {
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) + '%');
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');

		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.tag').html('<strong>' + item.title + '</strong><span class="artist">' + item.artist + '</span><span class="album">' + item.album + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function () {
		if (shuffle === 'true') {
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function (i) {
		var _i = i;
		$(this).on('click', function () {
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1) {
		$('.repeat').addClass('once');
	} else if (repeat == 2) {
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function () {
		if ($(this).hasClass('once')) {
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')) {
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function () {
		if ($(this).hasClass('enable')) {
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
		$(".download img").hover(function(){
		$(this).attr({ "src" : "img/link2.png" });
	}, function(){
		$(this).attr({ "src" : "img/link1.png" });
	});
});