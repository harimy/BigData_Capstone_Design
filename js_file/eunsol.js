const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = express.Router()

app.use(bodyParser.json())
app.use('/api', apiRouter)

apiRouter.post('/eunsol', (req,res) =>{
	const question = req.body.userRequest.block.name
    const responseBody1 = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "건축기사",
          "description": "일정한 크기 이상의 건축을 설계 시공하는 데 필요한 자격",
          
        
        
          "buttons": [
            
            {
              "action":  "webLink",
              "label": "시험 일정",
              "webLinkUrl": ("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + question + " 시험일정")
            },
         {
              "action":  "webLink",
              "label": "시험 자격 및 합격기준",
              "webLinkUrl": "http://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=&jmCd=1630&examInstiCd=1"
            },
         {
           "action": "block",
           "label": "응시료 및 준비물",
           "blockId": "5f6ebd4219af3d48a46cb5df"   
         }  
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "유사자격증 추천",
        "blockId": "5f81e0526471930bbcc9b034"
      }]
  }
}
    
           

    res.send(responseBody1)
})


app.listen(3000,() =>{
    console.log('3000')
})