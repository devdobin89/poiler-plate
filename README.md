# poiler-plate
# 웹 검색 도중 알게 된 것들
1. Express를 쓸 때에는, 바디 파서(body-parser)를 따라 임포트하지 않아도 된다. express.js도 빌트인 body parser를 넣어다고 한다.
<p>즉 app.use(bodyParser.json())을 app.use(express.json())</p>