test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('two object with same value', ()=>{
  var o1 = {name: 'ball'}
  var o2 = {name: 'ball'}
  var o3 = o1

  expect(o1).toEqual(o2)
  expect(o1).not.toBe(o2)
  expect(o1).toBe(o3)

})

test('assign calue to object', ()=>{
  var data = {one: 1}
  data.two = 2
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2})
})

test('Zero', ()=>{
  var n=0
  var m= -1
  var z = 1

  expect(n).not.toBeTruthy()
  expect(m).toBeTruthy()
  expect(z).toBe(1)
})

test('number value', ()=> {
  var n = 5

  expect(n).toBeGreaterThan(0)
})

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('null', () => {
  const n = null
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
