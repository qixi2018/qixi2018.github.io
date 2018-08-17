function randomData() {
    return 0;
}
var mydata = [{
        name: '北京',
        value: randomData()
    }, {
        name: '天津',
        value: randomData()
    },
    {
        name: '上海',
        value: 5
    }, {
        name: '重庆',
        value: randomData()
    },
    {
        name: '河北',
        value: randomData()
    }, {
        name: '河南',
        value: randomData()
    },
    {
        name: '云南',
        value: randomData()
    }, {
        name: '辽宁',
        value: randomData()
    },
    {
        name: '黑龙江',
        value: randomData()
    }, {
        name: '湖南',
        value: randomData()
    },
    {
        name: '安徽',
        value: randomData()
    }, {
        name: '山东',
        value: 1
    },
    {
        name: '新疆',
        value: randomData()
    }, {
        name: '江苏',
        value: 3
    },
    {
        name: '浙江',
        value: 2
    }, {
        name: '江西',
        value: randomData()
    },
    {
        name: '湖北',
        value: 2
    }, {
        name: '广西',
        value: 5
    },
    {
        name: '甘肃',
        value: randomData()
    }, {
        name: '山西',
        value: randomData()
    },
    {
        name: '内蒙古',
        value: randomData()
    }, {
        name: '陕西',
        value: randomData()
    },
    {
        name: '吉林',
        value: randomData()
    }, {
        name: '福建',
        value: 2
    },
    {
        name: '贵州',
        value: 1
    }, {
        name: '广东',
        value: randomData()
    },
    {
        name: '青海',
        value: randomData()
    }, {
        name: '西藏',
        value: randomData()
    },
    {
        name: '四川',
        value: randomData()
    }, {
        name: '宁夏',
        value: randomData()
    },
    {
        name: '海南',
        value: randomData()
    }, {
        name: '台湾',
        value: randomData()
    },
    {
        name: '香港',
        value: randomData()
    }, {
        name: '澳门',
        value: randomData()
    }
];
var optionMap = {
    backgroundColor: '',
    title: {
        text: '一起去过',
        subtext: '',
        x: 'center',
        show: false
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: false,
        x: 'left',
        y: 'center',
        splitList: [{
                start: 5,
                end: 6
            }, {
                start: 4,
                end: 4
            },
            {
                start: 3,
                end: 3
            }, {
                start: 2,
                end: 2
            },
            {
                start: 1,
                end: 1
            }, {
                start: 0,
                end: 0
            },
        ],
        color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#f0f0f0']
    },

    //配置属性
    series: [{
        name: '数据',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: false //省份名称  
            },
            emphasis: {
                show: false
            },
            show: false
        },
        show: false,
        data: mydata //数据
    }]
};
//初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

//使用制定的配置项和数据显示图表
myChart.setOption(optionMap);