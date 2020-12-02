const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = express.Router()

app.use(bodyParser.json())
app.use('/api', apiRouter)

apiRouter.post('/jingi', (req,res) =>{
	const question = req.body.userRequest.block.name
    const responseBody1 = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "정보처리기사",
          "description": "소프트웨어 개발 관련 자격증으로, 정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하는 직무로서 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있는 능력을 검증하는 시험이다.",
        
          "buttons": [
            
            {
              "action":  "webLink",
              "label": "시험 일정",
              "webLinkUrl": ("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + question + " 시험일정")
            },
         {
              "action":  "webLink",
              "label": "시험 자격 및 합격기준",
              "webLinkUrl": "http://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=&jmCd=1320&examInstiCd=1"
            },
         {
           "action": "block",
           "label": "응시료 및 준비물",
           "blockId": "5f7083dc8b158b029b16216d"   
         }  
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "유사자격증 추천",
        "blockId": "5f82a2b37bfe552b5b1a7545"
      }]
  }
}
    
           

    res.send(responseBody1)
})




app.listen(3000,() =>{
    console.log('3000')
})