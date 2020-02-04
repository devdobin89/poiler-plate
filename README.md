# poiler-plate
# 웹 검색 도중 알게 된 것들
1. Express를 쓸 때에는, 바디 파서(body-parser)를 따라 임포트하지 않아도 된다. express.js도 빌트인 body parser를 넣었다고 한다.
<br><p>즉 app.use(bodyParser.json())을 app.use(express.json())라고 써도 된다.</p>
2. body-parser는 node.js 모듈이다. 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출한다.
<br>바디 파서가 없으면 console.log(req.body)를 실행할 때 undefined Error를 마주하게 된다고 한다. req.body는 body-parser를 사용하기 전에는 디폴트 값으로 Undefined이 설정되기 때문이라고 한다.