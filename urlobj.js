const url =
  'https://codesandbox.io/s/little-darkness-qsymi?file=/src/index.js:205-267&name=saiteja';

  const urlObj = new URL(url)
  const name = urlObj.searchParams.get('name')
  console.log(name)