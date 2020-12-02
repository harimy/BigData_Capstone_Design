const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = express.Router()

app.use(bodyParser.json())
app.use('/api', apiRouter)

apiRouter.post('/daehwan', (req,res) =>{
	const question = req.body.userRequest.block.name
    const responseBody1 = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "복어조리기능사",
          "description": "복어메뉴 계획에 따라 식재료를 선정, 구매, 검수, 보관 및 저장하며 맛과 영양을 고려하여 안전하고 위생적으로 음식을 조리하고 조리기구와 시설관리를 수행하는 직무.",
          
        
        
          "buttons": [
            
            {
              "action":  "webLink",
              "label": "시험 일정",
              "webLinkUrl": ("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + question + " 시험일정")
            },
         {
              "action":  "webLink",
              "label": "시험 자격 및 합격기준",
              "webLinkUrl": "http://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=&jmCd=7914&examInstiCd=1"
            },
         {
           "action": "block",
           "label": "응시료 및 준비물",
           "blockId": "5f6deb56b3f81e17308cd31a"   
         }  
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "유사자격증 추천",
        "blockId": "5f8140c30b697c65dc56cb97"
      }]
  }
}
    
           

    res.send(responseBody1)
})


app.listen(3000,() =>{
    console.log('3000')
})