아래 내용은 AWS SDK for JavaScript (v3)에서 제공하는 **Bedrock Agent Runtime** 클라이언트(`@aws-sdk/client-bedrock-agent-runtime`)의 `InvokeAgentCommand`에 대한 API 사양 요약입니다. 실제 사용 시에는 [공식 AWS 문서](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/bedrock-agent-runtime/command/InvokeAgentCommand/)를 반드시 참조하세요.

---

## 1. 명칭 및 개요

- **명칭**: `InvokeAgentCommand`
- **역할**: 지정된 Bedrock 에이전트(`agentId`)를 호출하여 입력(`body`)을 전달하고, 모델이 생성한 결과(응답)를 수신.

```typescript
import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";
```

---

## 2. 입력 타입: `InvokeAgentCommandInput`

`InvokeAgentCommandInput`는 다음과 같은 프로퍼티를 가집니다:

| 필드 이름         | 타입         | 필수 여부 | 설명                                                                                                                                                                               |
|-------------------|-------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **agentId**       | `string`    | 예       | Bedrock 에이전트의 식별자(ID).                                                                                                                                                      |
| **contentType?**  | `string`    | 아니오    | 요청 바디(`body`)의 콘텐츠 타입. 예) `"application/json"`, `"text/plain"`, etc.                                                                                                    |
| **accept?**       | `string`    | 아니오    | 서버 응답에 대해 기대하는 콘텐츠 타입. 예) `"application/json"`.                                                                                                                   |
| **body?**         | `Uint8Array` | 아니오    | 실제로 전달할 페이로드(바이너리 또는 텍스트). JSON 형태의 텍스트를 보내려면 `Uint8Array` 형태로 변환하거나, Node.js 환경에서 `Buffer.from(JSON.stringify(data))` 형태로 전달 가능. |
| **$metadata?**    | `SdkMetadata`| 아니오    | AWS SDK 내부에서 사용되는 메타데이터(요청 재시도 정보 등). 직접 설정할 일은 드물며, SDK가 자동 관리.                                                                               |

**예시** (JSON 메시지 전송 시)

```typescript
const input: InvokeAgentCommandInput = {
  agentId: "my-agent-id",
  contentType: "application/json",
  accept: "application/json",
  body: new TextEncoder().encode(JSON.stringify({ prompt: "Hello, Bedrock!" })),
};
```

---

## 3. 출력 타입: `InvokeAgentCommandOutput`

`InvokeAgentCommandOutput`는 다음과 같은 프로퍼티를 가집니다:

| 필드 이름         | 타입          | 설명                                                                                                              |
|-------------------|--------------|-------------------------------------------------------------------------------------------------------------------|
| **$metadata**     | `ResponseMetadata` | HTTP 응답 상태코드, 요청 식별자, 재시도 정보 등의 메타데이터가 포함됨.                                                           |
| **contentType?**  | `string`      | 응답 바디(`body`)의 실제 콘텐츠 타입. 예) `"application/json"`.                                                  |
| **body?**         | `Uint8Array` | Bedrock 에이전트로부터 반환된 응답 데이터. `contentType`가 JSON일 경우, 실제로는 JSON 문자열이 `Uint8Array`로 인코딩되어 있음. |

**출력 데이터 예시** (JSON 형식의 응답을 수신했다고 가정)

```typescript
{
  "$metadata": {
    httpStatusCode: 200,
    requestId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    // 그 외 메타데이터
  },
  "contentType": "application/json",
  "body": Uint8Array([...]) // JSON이 바이너리화되어 있음
}
```

JSON 파싱 예시:

```typescript
const response = await client.send(new InvokeAgentCommand(input));

if (response.body && response.contentType === "application/json") {
  const utf8Decoder = new TextDecoder("utf-8");
  const decoded = utf8Decoder.decode(response.body);
  try {
    const parsed = JSON.parse(decoded);
    console.log("Parsed response:", parsed);
  } catch (err) {
    console.error("Failed to parse JSON:", err);
  }
}
```

---

## 4. 사용 예시

```typescript
import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
  InvokeAgentCommandInput,
} from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({
  region: "us-west-2", 
  credentials: {
    accessKeyId: "<YOUR_ACCESS_KEY>",
    secretAccessKey: "<YOUR_SECRET_KEY>",
  },
});

(async () => {
  // 1) InvokeAgentCommand를 위한 파라미터 준비
  const input: InvokeAgentCommandInput = {
    agentId: "my-agent-id",
    contentType: "application/json",
    accept: "application/json",
    body: new TextEncoder().encode(JSON.stringify({ prompt: "Hello Bedrock!" })),
  };
  
  // 2) 커맨드 생성
  const command = new InvokeAgentCommand(input);

  // 3) 호출 및 응답 처리
  try {
    const response = await client.send(command);
    console.log("HTTP status code:", response.$metadata.httpStatusCode);
    console.log("Content-Type:", response.contentType);

    if (response.body) {
      const decoded = new TextDecoder("utf-8").decode(response.body);
      if (response.contentType === "application/json") {
        const json = JSON.parse(decoded);
        console.log("Response JSON:", json);
      } else {
        console.log("Response body:", decoded);
      }
    }
  } catch (error) {
    console.error("Error invoking agent:", error);
  }
})();
```

---

## 5. 에러(예외) 처리

AWS SDK에서 발생할 수 있는 대표적인 예외 상황은 다음과 같습니다. (Bedrock Agent Runtime용 특화 에러가 있을 수 있으나, 기본적으로 AWS SDK의 공통 예외와 유사합니다)

- **ServiceException**: 서비스 내부 오류  
- **ThrottlingException**: 요청이 너무 많아 제한이 걸린 경우 (클라이언트 측에서 재시도 로직 필요)  
- **ValidationException**: 입력 파라미터가 유효하지 않은 경우  
- **CredentialsError**: 인증 정보가 잘못되었거나 누락된 경우  

```typescript
try {
  const response = await client.send(command);
} catch (error) {
  if (error.name === "ServiceException") {
    // 내부 오류 처리
  } else if (error.name === "ThrottlingException") {
    // 재시도 로직
  } else {
    // 기타 에러 처리
  }
}
```

---

## 6. 정리

- **`InvokeAgentCommand`**는 Bedrock Agent에게 요청을 보내기 위한 핵심 메서드이며, `agentId`, `contentType`, `accept` 등을 포함한 **입력(`InvokeAgentCommandInput`)**과, `body`, `contentType` 등이 담긴 **출력(`InvokeAgentCommandOutput`)**으로 구성됩니다.
- 요청 파라미터(`body`)는 바이너리(`Uint8Array`) 형태이므로 JSON 문자열이나 텍스트를 전송하려면 인코딩/디코딩 과정을 거쳐야 합니다.
- `contentType`와 `accept`를 통해 요청/응답 형식을 명시할 수 있으며, JSON으로 주고받는 경우 응답 후 파싱 단계가 필요합니다.
- 에러 처리 시 AWS SDK 표준 예외 클래스(`ServiceException`, `ThrottlingException` 등)를 참고하세요.

이상으로 **`InvokeAgentCommand`** API 사양과 사용 예시를 요약했습니다. 실제 개발 환경에 맞추어 추가 옵션(예: 재시도 설정, HTTP 옵션 등)을 적절히 조정하여 사용하면 됩니다.