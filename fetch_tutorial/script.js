// https://zipcloud.ibsnet.co.jp/api/search?zipcode=1240013
// urlからデータを読み込む
fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=1240013')

//データを受け取って加工（整形）
.then(response => {  //.thenはPromiseに付随するもの

  // jsonはオブジェクト（連想配列）
  //textはテキスト
  return response.json()
})

.then(data  => {
  console.log(data.results[0].address1);
  console.log(data.results[0].address2);
  console.log(data.results[0].address3);
  // const a = document.createElement('a')
  // a.textContent = data.name
  // a.href = data.url
  // document.getElementById('test').appendChild(a)
})


//通信にエラーが発生した場合
.catch(error => {
  console.log(error)
})