API URL : http://4.144.198.168/api/auth/ims-persons/login

Input :

```json
{
  "username": "admin",
  "password": "admin"
}
```

Output :

{
    "transactionTime": "2025-02-07T12:32:47.471Z",
    "status": "OK",
    "data": {
        "code": "00",
        "message": "정상적으로 로그인처리 되었습니다.",
        "result": "success",
        "myPageUrl": "/sup/SDSTR003.L01.cmd?rootMenu=MNU081104000053",
        "token": {
            "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJwZXJJZCI6Imtpb19jdXN0b21lcjEiLCJjb21wQ2QiOiIwMDAxMiIsImJyb3dzZXJJZCI6ImRXNXJibTkzYm5WdWEyNXZkMjQ9IiwiaWF0IjoxNzM4OTMxNTY3LCJleHAiOjE3Mzg5MzMzNjd9.kcDZe64XNocrV3IPchiYxMmPKWXlYRzkKmF3tq_JzVs",
            "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJwZXJJZCI6Imtpb19jdXN0b21lcjEiLCJjb21wQ2QiOiIwMDAxMiIsImJyb3dzZXJJZCI6ImRXNXJibTkzYm5WdWEyNXZkMjQ9IiwiaWF0IjoxNzM4OTMxNTY3LCJleHAiOjE3Mzg5Mzg3Njd9.XL8u5W3udJUdtI-OKyHV-tURV1WXIKKu7vY54eIUKeo"
        },
        "category": {
            "wogNo": "WOG081029000001",
            "scnNo": "/sup/SDSTR003.L01.cmd",
            "catNo": "1",
            "wogPri": "30"
        },
        "changePass": true,
        "corps": [],
        "oprSwitchUrl": "/sup/SDSTR003.L01.cmd"
    }
}