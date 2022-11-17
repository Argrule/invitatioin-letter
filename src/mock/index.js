// debug
import Mock from 'mockjs'  //导入mockjs

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
const testData = Mock.mock(/test/,'get',{
	status:200, //请求成功状态码
	dataList:[1,2,3,4,5,6,7,8,9,10] //模拟的请求数据
})
Mock.mock('https://api.va1entine.com/login', 'post', (config) => {
    //需要注意返回的 json 格式数据
  const obj = JSON.parse(config.body)
  // 判断用户名密码
  if (obj.username === 'admin' && obj.password === '123123') {
    return {
      code: 200,
      message: '登录成功'
    }
  } else {
    return {
      code: 500,
      message: '用户名或密码错误'
    }
  }
})

//导出
export default testData
