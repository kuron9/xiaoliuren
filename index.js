// 小六壬查询表
var liurenArr = ['大安', '留连', '速喜', '赤口', '小吉', '空亡']
liurenArr[0] = {
    gua: '大安',
    guaci: '身不动时，五行属木，颜色青色，方位东方。临青龙，谋事主一、五、七。有静止、心安。吉祥之含',
    jue: '大安事事昌，求谋在东方，失物去不远，宅舍保安康。行人身未动，病者主无妨。将军回田野，仔细好推详'
}
liurenArr[1] = {
    gua: '留连',
    guaci: '人未归时，五行属水，颜色黑色，方位北方，临玄武，凡谋事主二、八、十。有喑味不明，延迟。纠缠．拖延、漫长之含义',
    jue: '留连事难成，求谋日未明。官事只宜缓，去者来回程，失物南方去，急寻方心明。更需防口舌，人事且平平'
}
liurenArr[2] = {
    gua: '速喜',
    guaci: '人即至时，五行属火，颜色红色方位南方，临朱雀，谋事主三，六，九。有快速、喜庆，吉利之含义。指时机已到',
    jue: '速喜喜来临，求财向南行。失物申未午，逢人要打听。官事有福德，病者无须恐。田宅六畜吉，行人音信明'
}
liurenArr[3] = {
    gua: '赤口',
    guaci: '官事凶时，五行属金，颜色白色，方位西方，临白虎，谋事主四、七，十。有不吉、惊恐，凶险、口舌是非之含义',
    jue: '赤口主口舌，官非切要防。失物急去寻，行人有惊慌。鸡犬多作怪，病者出西方。更须防咀咒，恐怕染瘟殃'
}
liurenArr[4] = {
    gua: '小吉',
    guaci: '人来喜时，五行属木，临六合，凡谋事主一、五、七有和合、吉利之含义',
    jue: '小吉最吉昌，路上好商量。阴人来报喜，失物在坤方。行人立便至，交易甚是强，凡事皆和合，病者祈上苍'
}
liurenArr[5] = {
    gua: '空亡',
    guaci: '音信稀时，五行属土，颜色黄色，方位中央；临勾陈。谋事主三、六、九。有不吉、无结果、忧虑之含义',
    jue: '空亡事不祥，阴人多乖张。求财无利益，行人有灾殃。失物寻不见，官事有刑伤。病人逢暗鬼，析解可安康'
}


// 获取时间日期
function myTime() {
    const time = new Date();
    const yyyy = time.getFullYear();
    const MM = time.getMonth() + 1;
    const dd = time.getDate();
    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();

    //填充时间
    document.getElementById('clock').innerText = Math.floor(hh / 10).toString() + hh % 10 + ':' +
        Math.floor(mm / 10) + mm % 10 + ':' + Math.floor(ss / 10) + ss % 10;

    //填充日期
    document.getElementById('nong_li').innerText = sloarToLunar(2021, 10, 10).lunarYear + "年" +
        sloarToLunar(yyyy, MM, dd).lunarMonth + "月" + sloarToLunar(yyyy, MM, dd).lunarDay + shichen(hh) + '时';

    //填充卦象
    document.getElementById('gua').innerText = "卦名" + ":" + liuren(lmm, ldd, hh).gua;
    document.getElementById('guaci').innerText = "卦词" + ":" + liuren(lmm, ldd, hh).guaci;
    document.getElementById('jue').innerText = "决曰" + ":" + liuren(lmm, ldd, hh).jue;

    console.log(hh, shichen(hh))
    console.log(lmm, ldd);
    console.log(liuren(lmm, ldd, hh))
}
myTime();
setInterval(myTime, 1000);



//小时转成时辰
function shichen(h) {
    var shichenArr = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
    // if (h > 1 && h <= 3) {
    //     return shichenArr[1];
    // } else if (h > 3 && h <= 5) {
    //     return shichenArr[2];
    // } else if (h > 5 && h <= 7) {
    //     return shichenArr[3];
    // } else if (h > 7 && h <= 9) {
    //     return shichenArr[4];
    // } else if (h > 9 && h <= 11) {
    //     return shichenArr[5];
    // } else if (h > 11 && h <= 13) {
    //     return shichenArr[6];
    // } else if (h > 13 && h <= 15) {
    //     return shichenArr[7];
    // } else if (h > 15 && h <= 17) {
    //     return shichenArr[8];
    // } else if (h > 17 && h <= 19) {
    //     return shichenArr[9];
    // } else if (h > 19 && h <= 21) {
    //     return shichenArr[10];
    // } else if (h > 21 && h <= 23) {
    //     return shichenArr[11];
    // } else {
    //     return shichenArr[0];
    // }
    for (i = 1, j = 1; i < 23; i += 2, j++) {
        if (h >= i && h < i + 2 ) {console.log(h,i,j)
            return shichenArr[j];
        }
    }
    return shichenArr[0];
}


// 起卦
function liuren(MM, dd, hh) {
    i = (MM % 6 + (dd % 6 - 1) + (hh % 6 - 1)) % 6;
    return liurenArr[i]
}





