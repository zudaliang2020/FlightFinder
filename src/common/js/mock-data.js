// 航班信息
// flightSchedule: 航班时间
// flightNumber: 航班号
// aircraftNumber: 飞机号
// airport:起降机场
// boardingGate: 机位-准备室
// favorite: 收藏状态,0-该用户未收藏,1-该用户已收藏
const FlightData = [{
    flightSchedule: "06200805",
    flightNumber: "S9801",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "221-02",
    favorite: 0
}, {
    flightSchedule: "06190805",
    flightNumber: "S9802",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06180805",
    flightNumber: "S9803",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "502-34",
    favorite: 0
}, {
    flightSchedule: "06180804",
    flightNumber: "S9804",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 1
}, {
    flightSchedule: "06180805",
    flightNumber: "S9805",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06170805",
    flightNumber: "S9806",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06160805",
    flightNumber: "S9807",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06150805",
    flightNumber: "S9808",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06150801",
    flightNumber: "S9809",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06140805",
    flightNumber: "S9810",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06130805",
    flightNumber: "S9811",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06120805",
    flightNumber: "S9812",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06110805",
    flightNumber: "S9813",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06100805",
    flightNumber: "S9814",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06090805",
    flightNumber: "S9815",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06080805",
    flightNumber: "S9816",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06070805",
    flightNumber: "S9817",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06060805",
    flightNumber: "S9818",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06050805",
    flightNumber: "S9819",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06040805",
    flightNumber: "S9820",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06030805",
    flightNumber: "S9821",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "06020805",
    flightNumber: "S9822",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "06010805",
    flightNumber: "S9823",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}, {
    flightSchedule: "05290805",
    flightNumber: "S9824",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "-",
    favorite: 0
}, {
    flightSchedule: "05200805",
    flightNumber: "S9825",
    aircraftNumber: "B2972",
    airport: "ZBAA-ZGSZ",
    boardingGate: "602-34",
    favorite: 0
}]

// 根据 航班号flightNum 获取 机组信息datails数据
// 	name: 姓名
// 	post: 机上岗位
// 	skillLevel:技术等级
// 	LExpTime:左座飞行经历时间
// 	RExpTime:左座飞行经历时间
// 	CaptainExpTime:责任机长飞行经历时间
//  LSeatCount:左座次数
// 	RSeatCount:右座次数
// 	LandingCount:着陆提纵次数

const datails = [{
    flightNum: '001',
    data: [{
        name: '张三',
        post: '责任机长',
        skillLevel: 'TB',
        LExpTime: '2345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: '423',
        RSeatCount: '543',
        LandingCount: '293'
    },
    {
        name: '李四',
        post: '副驾',
        skillLevel: 'TB',
        LExpTime: '1345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    {
        name: 'xxx',
        post: '跟班学员',
        skillLevel: 'F3',
        LExpTime: '345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    ]
},{
    flightNum: '002',
    data: [{
        name: '王五',
        post: '责任机长',
        skillLevel: 'TB',
        LExpTime: '2345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: '423',
        RSeatCount: '543',
        LandingCount: '293'
    },
    {
        name: '张三',
        post: '副驾',
        skillLevel: 'TB',
        LExpTime: '1345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    {
        name: '小刘',
        post: '跟班学员',
        skillLevel: 'F3',
        LExpTime: '345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    ]
},
{
    flightNum: '003',
    data: [{
        name: '张伟',
        post: '责任机长',
        skillLevel: 'TB',
        LExpTime: '2345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: '423',
        RSeatCount: '543',
        LandingCount: '293'
    },
    {
        name: '李德',
        post: '副驾',
        skillLevel: 'TB',
        LExpTime: '1345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    {
        name: '王国强',
        post: '跟班学员',
        skillLevel: 'F3',
        LExpTime: '345.5h',
        RExpTime: 'xx',
        CaptainExpTime: 'xx',
        LSeatCount: 'xx',
        RSeatCount: 'xx',
        LandingCount: 'xx'
    },
    ]
}];
export function getFlightData() {
    return {
        userId: 1001,
        items1: [],
        items2: FlightData.slice(0, 4),
        items3: FlightData.slice(0, 20),
        items4: FlightData.slice(0, 25)
    };
}

export function getBadge() {
    return {
        userId: 1001,
        badge: 22
    }
}

export function getDatails(flightNum){
    console.log("已获取航班号"+flightNum);
    return {
        data:datails[Math.floor(Math.random() * 3)].data
    }
}