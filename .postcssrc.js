// ESM javascript 표준명칭  
// 여기서 사용하는 javascript 모듈개념이다

// node.js 환경 사용안함
//import
//export

// .postcssrc.js 파일같은 경우 번들러를 통해서 변환한는 용도 이기때문에 브라우저에서 사용하는게 아니라 , node.js에서 사용하는 방식이다.
// CommonJs

// import
// import 이름은 autoprefixer from 'autoprefixer' 패키지를 가지고 오겠다 아래 동일

//const autoprefixer = require('autoprefixer')

// export
//export {
//  Plugin: [
//    autoprefixer
//  ]
// }
module.exports = {
    Plugin: [
        require('autoprefixer') // 함수를 바로 싱행 
        //autoprefixer 변수를 사용안하고 
    ]
}