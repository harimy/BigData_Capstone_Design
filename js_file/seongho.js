const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = express.Router()

app.use(bodyParser.json())
app.use('/api', apiRouter)

apiRouter.post('/seongho', (req,res) =>{
	const question = req.body.userRequest.block.name
    const responseBody1 = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "워드프로세서",
          "description": "컴퓨터의 기초사용법과 효율적인 문서작성을 위한 워드프로세서 프로그램 운영 및 편집능력을 평가하는 국가기술자격 시험입니다.",
          
        
        
          "buttons": [
            
            {
              "action":  "webLink",
              "label": "시험 일정",
              "webLinkUrl": ("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + question + " 시험일정")
            },
         {
              "action":  "webLink",
              "label": "시험 자격 및 합격기준",
              "webLinkUrl": "http://license.korcham.net/co/examguide.do?mm=22&cd=0102"
            },
         {
           "action": "block",
           "label": "응시료 및 준비물",
           "blockId": "5f755a6e45d0f74e82eff1ab"   
         }  
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "유사자격증 추천",
        "blockId": "5f82f284aff5eb13c40254a4"
      }]
  }
}
    
           

    res.send(responseBody1)
})



app.listen(3000,() =>{
    console.log('3000')
})