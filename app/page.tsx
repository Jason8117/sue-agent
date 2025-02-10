'use client';

import { useState, useEffect, useRef } from 'react';
import { User, Bot, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/utils/api';
import type { ILoginResponse } from '@/types';

interface TableData {
  [key: string]: string | number;
}

interface ChatResponse {
  text: string;
  isUser: boolean;
  timestamp: string;
  tableData?: TableData[];
}

export default function Chat() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState<ChatResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const performLogin = async () => {
      try {
        const loginResponse: ILoginResponse = await login({
          username: 'kio_customer1',
          password: '0'
        });

        if (loginResponse?.data?.token?.accessToken) {
          setAccessToken(loginResponse.data.token.accessToken);
          console.log('로그인 성공:', loginResponse.data.message);
        } else {
          console.error('로그인 응답 형식 오류:', loginResponse);
          throw new Error('Invalid login response format');
        }
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    };

    performLogin();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [responses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !accessToken) return;

    const timestamp = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    setResponses((prev) => [...prev, { text: message, isUser: true, timestamp }]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, accessToken }),
      });
      
      const data = await response.json();
      setLoading(false);

      if (data.completion) {
        const messageText = data.completion;
        let tableData: TableData[] | undefined;

        if (data.tableData) {
          try {
            tableData = JSON.parse(data.tableData);
          } catch (e) {
            console.error('Table parsing error:', e);
            console.log('Failed to parse:', data.tableData);
          }
        }

        setResponses((prev) => [...prev, { 
          text: messageText, 
          isUser: false, 
          timestamp,
          tableData
        }]);
      } else {
        throw new Error('No completion in response');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setResponses((prev) => [...prev, { 
        text: '챗봇: 응답을 생성하는 데 실패했습니다.', 
        isUser: false, 
        timestamp 
      }]);
    }
  };

  const renderTable = (data: TableData[]) => {
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    // 첫 번째 객체의 키를 컬럼으로 사용
    const columns = Object.keys(data[0]);

    return (
      <div className="mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
        <div className="overflow-x-auto max-w-full">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th key={column} className="px-4 py-2 whitespace-nowrap">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  {columns.map((column) => (
                    <td key={`${index}-${column}`} className="px-4 py-2 whitespace-nowrap">
                      {item[column]?.toString() || '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Card className="w-full max-w-2xl h-[800px] p-0 shadow-xl rounded-3xl overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center gap-3 p-4 border-b bg-white">
          <Bot className="w-10 h-10 p-2 text-white bg-blue-500 rounded-full" />
          <div>
            <h1 className="text-lg font-semibold">AWS Bedrock 챗봇</h1>
            <p className="text-sm text-gray-500">온라인</p>
          </div>
        </div>

        {/* 채팅 영역 */}
        <ScrollArea className="flex-1 h-[calc(800px-140px)] p-4 bg-gray-50">
          <div className="space-y-4">
            {responses.map((resp, index) => (
              <div key={index}>
                <div className={`flex items-end gap-2 ${resp.isUser ? 'justify-end' : 'justify-start'}`}>
                  {!resp.isUser && (
                    <div className="flex-shrink-0">
                      <Bot className="w-8 h-8 p-1.5 text-white bg-blue-500 rounded-full" />
                    </div>
                  )}
                  
                  <div className={`
                    relative group max-w-[80%] rounded-2xl px-4 py-2 
                    ${resp.isUser 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-white text-gray-700 rounded-bl-none shadow-sm'
                    }
                  `}>
                    {resp.text.split('\n').map((line, i) => (
                      <div key={i} className="mb-1 last:mb-0">{line}</div>
                    ))}

                    
                    <span className={`
                      absolute bottom-1 ${resp.isUser ? 'right-2' : 'left-2'}
                      text-[10px] opacity-0 group-hover:opacity-70 transition-opacity
                      ${resp.isUser ? 'text-blue-100' : 'text-gray-400'}
                    `}>
                      {resp.timestamp}
                    </span>
                  </div>

                  {resp.isUser && (
                    <div className="flex-shrink-0">
                      <User className="w-8 h-8 p-1.5 text-white bg-gray-400 rounded-full" />
                    </div>
                  )}
                </div>
                {!resp.isUser && resp.tableData && (
                  <div className="ml-10 mt-2">
                    {renderTable(resp.tableData)}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-500 animate-pulse">
                <Bot className="w-8 h-8 p-1.5 text-white bg-blue-500 rounded-full" />
                <div className="px-4 py-2 bg-white rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </ScrollArea>

        {/* 입력 영역 */}
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 h-12 px-4 text-base bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-blue-500"
            />
            <Button 
              type="submit" 
              size="icon"
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}