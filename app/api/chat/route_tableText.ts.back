import { NextResponse } from 'next/server';
import { BedrockAgentRuntimeClient, InvokeAgentCommand } from '@aws-sdk/client-bedrock-agent-runtime';

const client = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: Request) {
  const { message, accessToken } = await request.json();

  // Request 로깅
  console.log('[Chat API Request]', {
    message,
    accessToken: '******' // 보안을 위해 토큰 마스킹
  });

  try {
    const command = new InvokeAgentCommand({
      agentId: process.env.AGENT_ID!,
      agentAliasId: process.env.AGENT_ALIAS_ID!,
      sessionId: 'test-session',
      inputText: JSON.stringify({
        userMessage: message,
        authToken: accessToken
      })
    });

    const response = await client.send(command);
    
    // Bedrock Response 로깅
    console.log('[Bedrock Response]', response);

    // MessageStream 내용 로깅
    let messageText = '';
    if (response.completion) {
      for await (const chunk of response.completion) {
        if ('chunk' in chunk && chunk.chunk?.bytes) {
          messageText += new TextDecoder().decode(chunk.chunk.bytes);
        }
      }
      console.log('[Bedrock Message]', messageText);

      // @@ 구분자로 메시지와 테이블 데이터 분리
      const [textMessage, tableText] = messageText.split('@@');
      
      console.log('[Split Message]', {
        textMessage: textMessage.trim(),
        tableText: tableText?.trim()
      });

      // 응답 구조화
      let parsedTableData;
      if (tableText) {
        try {
          parsedTableData = JSON.parse(tableText.trim());
          console.log('[Parsed Table Data]', parsedTableData);
        } catch (e) {
          console.error('Table parsing error:', e);
          console.log('Failed to parse:', tableText);
        }
      }

      const responseData = {
        completion: `${textMessage.trim()}\n\n${tableText?.trim() || ''}`,  // 메시지와 테이블 텍스트 합치기
        tableData: parsedTableData ? JSON.stringify(parsedTableData) : undefined
      };
      
      console.log('[Final Response Data]', responseData);
      return NextResponse.json(responseData);
    }

    return NextResponse.json({ error: 'No completion in response' }, { status: 500 });
  } catch (error) {
    // 에러 로깅
    console.error('[Bedrock Error]', error);
    return NextResponse.json({ error: 'Failed to get response from Bedrock' }, { status: 500 });
  }
} 