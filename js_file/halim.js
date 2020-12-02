const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = express.Router()

app.use(bodyParser.json())
app.use('/api', apiRouter)

apiRouter.post('/halim', (req,res) => {
	const question = req.body.userRequest.block.name
    const responseBody1 = {
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "토익(TOEIC)",
          "description": "영어를 모국어로 하지 않는 사람들을 대상으로 일상생활 또는 국제업무 등에 필요한 실용영어 능력을 평가하는 글로벌 평가 시험.",
          
        
        
          "buttons": [
            
            {
              "action":  "webLink",
              "label": "시험 일정",
              "webLinkUrl": ("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + question + " 시험일정")
            },
         {
              "action":  "webLink",
              "label": "시험 자격 및 합격기준",
              "webLinkUrl": "https://exam.toeic.co.kr/common/template/viewContents.php?contentsCode=19"
            },
         {
           "action": "block",
           "label": "응시료 및 준비물",
           "blockId": "5f65ce23674d034fe3e2ae8b"   
         }  
          ]
        }
      }
    ],
    "quickReplies": [
      {
        "action": "block",
        "label": "유사자격증 추천",
        "blockId": "5f83d2617bfe552b5b1a7912"
      }]
  }
}
    
           

    res.send(responseBody1)
})


app.listen(3000,() =>{
    console.log('3000')
})