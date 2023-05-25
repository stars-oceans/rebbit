// 测试函数返回值
const index =   function(){
  const a = '1'
  function b(){
    console.log('你好世界');
  }

  return { a, b }
}


const { a, b } = index()


console.log(a);
b()