import { BedrockAgentRuntimeClient, InvokeAgentCommand } from '@aws-sdk/client-bedrock-agent-runtime';

export const initializeAWS = (accessToken: string) => {
  const client = new BedrockAgentRuntimeClient({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const invokeAgent = async (input: string) => {
    const requestBody = {
      agentId: process.env.AGENT_ID!,
      agentAliasId: process.env.AGENT_ALIAS_ID!,
      sessionId: 'test-session',
      inputText: JSON.stringify({
        userMessage: input,
        authToken: accessToken
      })
    };

    console.log('[Bedrock Agent Request]', {
      ...requestBody,
      authToken: '******' // 보안을 위해 토큰 마스킹
    });

    const command = new InvokeAgentCommand(requestBody);
    const response = await client.send(command);
    
    console.log('[Bedrock Agent Response]', response);
    return response;
  };

  return { client, invokeAgent };
}; 