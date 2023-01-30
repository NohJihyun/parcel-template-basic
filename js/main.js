console.log('Hello Parcel!')

// 영화정보 api 활용할때 비동기 함수를 만들었는데, async 비동기 함수 만들기
async function test() {
    const promise = Promise.resolve(123)
    console.log(await promise)
}
// 호출및실행
test()