const userList = [
  {
    name: '王一锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王二锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '近三天拉肚子,呕吐,发烧到38.5°,进食难',
    avatar: '',
    price: '￥ 58.80',
    state: '已收货',
    logistics:[{date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王三锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '腹部疼痛难忍',
    avatar: '',
    price: '￥ 58.80',
    state: '待审核',
    logistics:[{date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王四锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待审核',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王五锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待审核',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王六锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待付款',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王七锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待付款',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王八锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '已收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王九锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '王十锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '丁一锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '丁二锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '丁三锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '丁四锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
  {
    name: '丁五锤',
    age: 30,
    gender: '男',
    date: '2019年3月8',
    isproxy: '是',
    describe: '这两天头部神经一跳一跳地疼,让人心烦意乱。还失眠。晚上睡觉头也疼',
    avatar: '',
    price: '￥ 58.80',
    state: '待收货',
    logistics:[{ date: '6-11 11:30', state: '商品已下单' },
      { date: '6-11 11:30', state: '订单开始处理' },
      { date: '6-11 11:30', state: '深圳转运中心公司 已发出,下一站 西安转运中心' },
      { date: '6-11 11:30', state: '西安转运中心公司已打包' },
      { date: '运输中 6-11 11:30', state: '陕西省西安市长安二部 已收入' },
      { date: '派送中 6-11 11:30', state: '陕西省西安市长安二部 派件中' },
      { date: '已签收 6-11 11:30', state: '快递已从陕西省西安市长安二部取出 签收人:本人签收' },
    ]
  },
]
export default userList
JSON.stringify