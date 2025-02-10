{  InvokeAgentResponse
   completion: {  ResponseStream Union: only one key present
     chunk: {  PayloadPart
       bytes: new Uint8Array(),
       attribution: {  Attribution
         citations: [  Citations
           {  Citation
             generatedResponsePart: {  GeneratedResponsePart
               textResponsePart: {  TextResponsePart
                 text: "STRING_VALUE",
                 span: {  Span
                   start: Number("int"),
                   end: Number("int"),
                 },
               },
             },
             retrievedReferences: [  RetrievedReferences
               {  RetrievedReference
                 content: {  RetrievalResultContent
                   type: "TEXT" || "IMAGE" || "ROW",
                   text: "STRING_VALUE",
                   byteContent: "STRING_VALUE",
                   row: [  RetrievalResultContentRow
                     {  RetrievalResultContentColumn
                       columnName: "STRING_VALUE",
                       columnValue: "STRING_VALUE",
                       type: "BLOB" || "BOOLEAN" || "DOUBLE" || "NULL" || "LONG" || "STRING",
                     },
                   ],
                 },
                 location: {  RetrievalResultLocation
                   type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT" || "CUSTOM" || "KENDRA" || "SQL",  required
                   s3Location: {  RetrievalResultS3Location
                     uri: "STRING_VALUE",
                   },
                   webLocation: {  RetrievalResultWebLocation
                     url: "STRING_VALUE",
                   },
                   confluenceLocation: {  RetrievalResultConfluenceLocation
                     url: "STRING_VALUE",
                   },
                   salesforceLocation: {  RetrievalResultSalesforceLocation
                     url: "STRING_VALUE",
                   },
                   sharePointLocation: {  RetrievalResultSharePointLocation
                     url: "STRING_VALUE",
                   },
                   customDocumentLocation: {  RetrievalResultCustomDocumentLocation
                     id: "STRING_VALUE",
                   },
                   kendraDocumentLocation: {  RetrievalResultKendraDocumentLocation
                     uri: "STRING_VALUE",
                   },
                   sqlLocation: {  RetrievalResultSqlLocation
                     query: "STRING_VALUE",
                   },
                 },
                 metadata: {  RetrievalResultMetadata
                   "<keys>": "DOCUMENT_VALUE",
                 },
               },
             ],
           },
         ],
       },
     },
     trace: {  TracePart
       sessionId: "STRING_VALUE",
       trace: {  Trace Union: only one key present
         guardrailTrace: {  GuardrailTrace
           action: "INTERVENED" || "NONE",
           traceId: "STRING_VALUE",
           inputAssessments: [  GuardrailAssessmentList
             {  GuardrailAssessment
               topicPolicy: {  GuardrailTopicPolicyAssessment
                 topics: [  GuardrailTopicList
                   {  GuardrailTopic
                     name: "STRING_VALUE",
                     type: "DENY",
                     action: "BLOCKED",
                   },
                 ],
               },
               contentPolicy: {  GuardrailContentPolicyAssessment
                 filters: [  GuardrailContentFilterList
                   {  GuardrailContentFilter
                     type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK",
                     confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH",
                     action: "BLOCKED",
                   },
                 ],
               },
               wordPolicy: {  GuardrailWordPolicyAssessment
                 customWords: [  GuardrailCustomWordList
                   {  GuardrailCustomWord
                     match: "STRING_VALUE",
                     action: "BLOCKED",
                   },
                 ],
                 managedWordLists: [  GuardrailManagedWordList
                   {  GuardrailManagedWord
                     match: "STRING_VALUE",
                     type: "PROFANITY",
                     action: "BLOCKED",
                   },
                 ],
               },
               sensitiveInformationPolicy: {  GuardrailSensitiveInformationPolicyAssessment
                 piiEntities: [  GuardrailPiiEntityFilterList
                   {  GuardrailPiiEntityFilter
                     type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER",
                     match: "STRING_VALUE",
                     action: "BLOCKED" || "ANONYMIZED",
                   },
                 ],
                 regexes: [  GuardrailRegexFilterList
                   {  GuardrailRegexFilter
                     name: "STRING_VALUE",
                     regex: "STRING_VALUE",
                     match: "STRING_VALUE",
                     action: "BLOCKED" || "ANONYMIZED",
                   },
                 ],
               },
             },
           ],
           outputAssessments: [
             {
               topicPolicy: {
                 topics: [
                   {
                     name: "STRING_VALUE",
                     type: "DENY",
                     action: "BLOCKED",
                   },
                 ],
               },
               contentPolicy: {
                 filters: [
                   {
                     type: "INSULTS" || "HATE" || "SEXUAL" || "VIOLENCE" || "MISCONDUCT" || "PROMPT_ATTACK",
                     confidence: "NONE" || "LOW" || "MEDIUM" || "HIGH",
                     action: "BLOCKED",
                   },
                 ],
               },
               wordPolicy: {
                 customWords: [
                   {
                     match: "STRING_VALUE",
                     action: "BLOCKED",
                   },
                 ],
                 managedWordLists: [
                   {
                     match: "STRING_VALUE",
                     type: "PROFANITY",
                     action: "BLOCKED",
                   },
                 ],
               },
               sensitiveInformationPolicy: {
                 piiEntities: [
                   {
                     type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER",
                     match: "STRING_VALUE",
                     action: "BLOCKED" || "ANONYMIZED",
                   },
                 ],
                 regexes: [
                   {
                     name: "STRING_VALUE",
                     regex: "STRING_VALUE",
                     match: "STRING_VALUE",
                     action: "BLOCKED" || "ANONYMIZED",
                   },
                 ],
               },
             },
           ],
         },
         preProcessingTrace: {  PreProcessingTrace Union: only one key present
           modelInvocationInput: {  ModelInvocationInput
             traceId: "STRING_VALUE",
             text: "STRING_VALUE",
             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING" || "ROUTING_CLASSIFIER",
             overrideLambda: "STRING_VALUE",
             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
             inferenceConfiguration: {  InferenceConfiguration
               temperature: Number("float"),
               topP: Number("float"),
               topK: Number("int"),
               maximumLength: Number("int"),
               stopSequences: [  StopSequences
                 "STRING_VALUE",
               ],
             },
             parserMode: "DEFAULT" || "OVERRIDDEN",
             foundationModel: "STRING_VALUE",
           },
           modelInvocationOutput: {  PreProcessingModelInvocationOutput
             traceId: "STRING_VALUE",
             parsedResponse: {  PreProcessingParsedResponse
               rationale: "STRING_VALUE",
               isValid: true || false,
             },
             rawResponse: {  RawResponse
               content: "STRING_VALUE",
             },
             metadata: {  Metadata
               usage: {  Usage
                 inputTokens: Number("int"),
                 outputTokens: Number("int"),
               },
             },
           },
         },
         orchestrationTrace: {  OrchestrationTrace Union: only one key present
           rationale: {  Rationale
             traceId: "STRING_VALUE",
             text: "STRING_VALUE",
           },
           invocationInput: {  InvocationInput
             traceId: "STRING_VALUE",
             invocationType: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH" || "ACTION_GROUP_CODE_INTERPRETER" || "AGENT_COLLABORATOR",
             actionGroupInvocationInput: {  ActionGroupInvocationInput
               actionGroupName: "STRING_VALUE",
               verb: "STRING_VALUE",
               apiPath: "STRING_VALUE",
               parameters: [  Parameters
                 {  Parameter
                   name: "STRING_VALUE",
                   type: "STRING_VALUE",
                   value: "STRING_VALUE",
                 },
               ],
               requestBody: {  RequestBody
                 content: {  ContentMap
                   "<keys>": [
                     {
                       name: "STRING_VALUE",
                       type: "STRING_VALUE",
                       value: "STRING_VALUE",
                     },
                   ],
                 },
               },
               function: "STRING_VALUE",
               executionType: "LAMBDA" || "RETURN_CONTROL",
               invocationId: "STRING_VALUE",
             },
             knowledgeBaseLookupInput: {  KnowledgeBaseLookupInput
               text: "STRING_VALUE",
               knowledgeBaseId: "STRING_VALUE",
             },
             codeInterpreterInvocationInput: {  CodeInterpreterInvocationInput
               code: "STRING_VALUE",
               files: [  Files
                 "STRING_VALUE",
               ],
             },
             agentCollaboratorInvocationInput: {  AgentCollaboratorInvocationInput
               agentCollaboratorName: "STRING_VALUE",
               agentCollaboratorAliasArn: "STRING_VALUE",
               input: {  AgentCollaboratorInputPayload
                 type: "TEXT" || "RETURN_CONTROL",
                 text: "STRING_VALUE",
                 returnControlResults: {  ReturnControlResults
                   invocationId: "STRING_VALUE",
                   returnControlInvocationResults: [  ReturnControlInvocationResults
                     {  InvocationResultMember Union: only one key present
                       apiResult: {  ApiResult
                         actionGroup: "STRING_VALUE",  required
                         httpMethod: "STRING_VALUE",
                         apiPath: "STRING_VALUE",
                         confirmationState: "CONFIRM" || "DENY",
                         responseState: "FAILURE" || "REPROMPT",
                         httpStatusCode: Number("int"),
                         responseBody: {  ResponseBody
                           "<keys>": {  ContentBody
                             body: "STRING_VALUE",
                           },
                         },
                         agentId: "STRING_VALUE",
                       },
                       functionResult: {  FunctionResult
                         actionGroup: "STRING_VALUE",  required
                         confirmationState: "CONFIRM" || "DENY",
                         function: "STRING_VALUE",
                         responseBody: {
                           "<keys>": {
                             body: "STRING_VALUE",
                           },
                         },
                         responseState: "FAILURE" || "REPROMPT",
                         agentId: "STRING_VALUE",
                       },
                     },
                   ],
                 },
               },
             },
           },
           observation: {  Observation
             traceId: "STRING_VALUE",
             type: "ACTION_GROUP" || "AGENT_COLLABORATOR" || "KNOWLEDGE_BASE" || "FINISH" || "ASK_USER" || "REPROMPT",
             actionGroupInvocationOutput: {  ActionGroupInvocationOutput
               text: "STRING_VALUE",
             },
             agentCollaboratorInvocationOutput: {  AgentCollaboratorInvocationOutput
               agentCollaboratorName: "STRING_VALUE",
               agentCollaboratorAliasArn: "STRING_VALUE",
               output: {  AgentCollaboratorOutputPayload
                 type: "TEXT" || "RETURN_CONTROL",
                 text: "STRING_VALUE",
                 returnControlPayload: {  ReturnControlPayload
                   invocationInputs: [  InvocationInputs
                     {  InvocationInputMember Union: only one key present
                       apiInvocationInput: {  ApiInvocationInput
                         actionGroup: "STRING_VALUE",  required
                         httpMethod: "STRING_VALUE",
                         apiPath: "STRING_VALUE",
                         parameters: [  ApiParameters
                           {  ApiParameter
                             name: "STRING_VALUE",
                             type: "STRING_VALUE",
                             value: "STRING_VALUE",
                           },
                         ],
                         requestBody: {  ApiRequestBody
                           content: {  ApiContentMap
                             "<keys>": {  PropertyParameters
                               properties: [  ParameterList
                                 "<Parameter>",
                               ],
                             },
                           },
                         },
                         actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
                         agentId: "STRING_VALUE",
                         collaboratorName: "STRING_VALUE",
                       },
                       functionInvocationInput: {  FunctionInvocationInput
                         actionGroup: "STRING_VALUE",  required
                         parameters: [  FunctionParameters
                           {  FunctionParameter
                             name: "STRING_VALUE",
                             type: "STRING_VALUE",
                             value: "STRING_VALUE",
                           },
                         ],
                         function: "STRING_VALUE",
                         actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
                         agentId: "STRING_VALUE",
                         collaboratorName: "STRING_VALUE",
                       },
                     },
                   ],
                   invocationId: "STRING_VALUE",
                 },
               },
             },
             knowledgeBaseLookupOutput: {  KnowledgeBaseLookupOutput
               retrievedReferences: [
                 {
                   content: {
                     type: "TEXT" || "IMAGE" || "ROW",
                     text: "STRING_VALUE",
                     byteContent: "STRING_VALUE",
                     row: [
                       {
                         columnName: "STRING_VALUE",
                         columnValue: "STRING_VALUE",
                         type: "BLOB" || "BOOLEAN" || "DOUBLE" || "NULL" || "LONG" || "STRING",
                       },
                     ],
                   },
                   location: {
                     type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT" || "CUSTOM" || "KENDRA" || "SQL",  required
                     s3Location: {
                       uri: "STRING_VALUE",
                     },
                     webLocation: {
                       url: "STRING_VALUE",
                     },
                     confluenceLocation: {
                       url: "STRING_VALUE",
                     },
                     salesforceLocation: {
                       url: "STRING_VALUE",
                     },
                     sharePointLocation: {
                       url: "STRING_VALUE",
                     },
                     customDocumentLocation: {
                       id: "STRING_VALUE",
                     },
                     kendraDocumentLocation: {
                       uri: "STRING_VALUE",
                     },
                     sqlLocation: {
                       query: "STRING_VALUE",
                     },
                   },
                   metadata: {
                     "<keys>": "DOCUMENT_VALUE",
                   },
                 },
               ],
             },
             finalResponse: {  FinalResponse
               text: "STRING_VALUE",
             },
             repromptResponse: {  RepromptResponse
               text: "STRING_VALUE",
               source: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "PARSER",
             },
             codeInterpreterInvocationOutput: {  CodeInterpreterInvocationOutput
               executionOutput: "STRING_VALUE",
               executionError: "STRING_VALUE",
               files: [
                 "STRING_VALUE",
               ],
               executionTimeout: true || false,
             },
           },
           modelInvocationInput: {
             traceId: "STRING_VALUE",
             text: "STRING_VALUE",
             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING" || "ROUTING_CLASSIFIER",
             overrideLambda: "STRING_VALUE",
             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
             inferenceConfiguration: {
               temperature: Number("float"),
               topP: Number("float"),
               topK: Number("int"),
               maximumLength: Number("int"),
               stopSequences: [
                 "STRING_VALUE",
               ],
             },
             parserMode: "DEFAULT" || "OVERRIDDEN",
             foundationModel: "STRING_VALUE",
           },
           modelInvocationOutput: {  OrchestrationModelInvocationOutput
             traceId: "STRING_VALUE",
             rawResponse: {
               content: "STRING_VALUE",
             },
             metadata: {
               usage: {
                 inputTokens: Number("int"),
                 outputTokens: Number("int"),
               },
             },
           },
         },
         postProcessingTrace: {  PostProcessingTrace Union: only one key present
           modelInvocationInput: {
             traceId: "STRING_VALUE",
             text: "STRING_VALUE",
             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING" || "ROUTING_CLASSIFIER",
             overrideLambda: "STRING_VALUE",
             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
             inferenceConfiguration: {
               temperature: Number("float"),
               topP: Number("float"),
               topK: Number("int"),
               maximumLength: Number("int"),
               stopSequences: [
                 "STRING_VALUE",
               ],
             },
             parserMode: "DEFAULT" || "OVERRIDDEN",
             foundationModel: "STRING_VALUE",
           },
           modelInvocationOutput: {  PostProcessingModelInvocationOutput
             traceId: "STRING_VALUE",
             parsedResponse: {  PostProcessingParsedResponse
               text: "STRING_VALUE",
             },
             rawResponse: {
               content: "STRING_VALUE",
             },
             metadata: {
               usage: {
                 inputTokens: Number("int"),
                 outputTokens: Number("int"),
               },
             },
           },
         },
         routingClassifierTrace: {  RoutingClassifierTrace Union: only one key present
           invocationInput: {
             traceId: "STRING_VALUE",
             invocationType: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH" || "ACTION_GROUP_CODE_INTERPRETER" || "AGENT_COLLABORATOR",
             actionGroupInvocationInput: {
               actionGroupName: "STRING_VALUE",
               verb: "STRING_VALUE",
               apiPath: "STRING_VALUE",
               parameters: [
                 "<Parameter>",
               ],
               requestBody: {
                 content: {
                   "<keys>": [
                     "<Parameter>",
                   ],
                 },
               },
               function: "STRING_VALUE",
               executionType: "LAMBDA" || "RETURN_CONTROL",
               invocationId: "STRING_VALUE",
             },
             knowledgeBaseLookupInput: {
               text: "STRING_VALUE",
               knowledgeBaseId: "STRING_VALUE",
             },
             codeInterpreterInvocationInput: {
               code: "STRING_VALUE",
               files: [
                 "STRING_VALUE",
               ],
             },
             agentCollaboratorInvocationInput: {
               agentCollaboratorName: "STRING_VALUE",
               agentCollaboratorAliasArn: "STRING_VALUE",
               input: {
                 type: "TEXT" || "RETURN_CONTROL",
                 text: "STRING_VALUE",
                 returnControlResults: {
                   invocationId: "STRING_VALUE",
                   returnControlInvocationResults: [
                     {  Union: only one key present
                       apiResult: {
                         actionGroup: "STRING_VALUE",  required
                         httpMethod: "STRING_VALUE",
                         apiPath: "STRING_VALUE",
                         confirmationState: "CONFIRM" || "DENY",
                         responseState: "FAILURE" || "REPROMPT",
                         httpStatusCode: Number("int"),
                         responseBody: {
                           "<keys>": {
                             body: "STRING_VALUE",
                           },
                         },
                         agentId: "STRING_VALUE",
                       },
                       functionResult: {
                         actionGroup: "STRING_VALUE",  required
                         confirmationState: "CONFIRM" || "DENY",
                         function: "STRING_VALUE",
                         responseBody: {
                           "<keys>": {
                             body: "STRING_VALUE",
                           },
                         },
                         responseState: "FAILURE" || "REPROMPT",
                         agentId: "STRING_VALUE",
                       },
                     },
                   ],
                 },
               },
             },
           },
           observation: {
             traceId: "STRING_VALUE",
             type: "ACTION_GROUP" || "AGENT_COLLABORATOR" || "KNOWLEDGE_BASE" || "FINISH" || "ASK_USER" || "REPROMPT",
             actionGroupInvocationOutput: {
               text: "STRING_VALUE",
             },
             agentCollaboratorInvocationOutput: {
               agentCollaboratorName: "STRING_VALUE",
               agentCollaboratorAliasArn: "STRING_VALUE",
               output: {
                 type: "TEXT" || "RETURN_CONTROL",
                 text: "STRING_VALUE",
                 returnControlPayload: {
                   invocationInputs: [
                     {  Union: only one key present
                       apiInvocationInput: {
                         actionGroup: "STRING_VALUE",  required
                         httpMethod: "STRING_VALUE",
                         apiPath: "STRING_VALUE",
                         parameters: [
                           {
                             name: "STRING_VALUE",
                             type: "STRING_VALUE",
                             value: "STRING_VALUE",
                           },
                         ],
                         requestBody: {
                           content: {
                             "<keys>": {
                               properties: [
                                 "<Parameter>",
                               ],
                             },
                           },
                         },
                         actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
                         agentId: "STRING_VALUE",
                         collaboratorName: "STRING_VALUE",
                       },
                       functionInvocationInput: {
                         actionGroup: "STRING_VALUE",  required
                         parameters: [
                           {
                             name: "STRING_VALUE",
                             type: "STRING_VALUE",
                             value: "STRING_VALUE",
                           },
                         ],
                         function: "STRING_VALUE",
                         actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
                         agentId: "STRING_VALUE",
                         collaboratorName: "STRING_VALUE",
                       },
                     },
                   ],
                   invocationId: "STRING_VALUE",
                 },
               },
             },
             knowledgeBaseLookupOutput: {
               retrievedReferences: [
                 {
                   content: {
                     type: "TEXT" || "IMAGE" || "ROW",
                     text: "STRING_VALUE",
                     byteContent: "STRING_VALUE",
                     row: [
                       {
                         columnName: "STRING_VALUE",
                         columnValue: "STRING_VALUE",
                         type: "BLOB" || "BOOLEAN" || "DOUBLE" || "NULL" || "LONG" || "STRING",
                       },
                     ],
                   },
                   location: {
                     type: "S3" || "WEB" || "CONFLUENCE" || "SALESFORCE" || "SHAREPOINT" || "CUSTOM" || "KENDRA" || "SQL",  required
                     s3Location: {
                       uri: "STRING_VALUE",
                     },
                     webLocation: {
                       url: "STRING_VALUE",
                     },
                     confluenceLocation: {
                       url: "STRING_VALUE",
                     },
                     salesforceLocation: {
                       url: "STRING_VALUE",
                     },
                     sharePointLocation: {
                       url: "STRING_VALUE",
                     },
                     customDocumentLocation: {
                       id: "STRING_VALUE",
                     },
                     kendraDocumentLocation: {
                       uri: "STRING_VALUE",
                     },
                     sqlLocation: {
                       query: "STRING_VALUE",
                     },
                   },
                   metadata: {
                     "<keys>": "DOCUMENT_VALUE",
                   },
                 },
               ],
             },
             finalResponse: {
               text: "STRING_VALUE",
             },
             repromptResponse: {
               text: "STRING_VALUE",
               source: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "PARSER",
             },
             codeInterpreterInvocationOutput: {
               executionOutput: "STRING_VALUE",
               executionError: "STRING_VALUE",
               files: [
                 "STRING_VALUE",
               ],
               executionTimeout: true || false,
             },
           },
           modelInvocationInput: {
             traceId: "STRING_VALUE",
             text: "STRING_VALUE",
             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING" || "ROUTING_CLASSIFIER",
             overrideLambda: "STRING_VALUE",
             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
             inferenceConfiguration: {
               temperature: Number("float"),
               topP: Number("float"),
               topK: Number("int"),
               maximumLength: Number("int"),
               stopSequences: [
                 "STRING_VALUE",
               ],
             },
             parserMode: "DEFAULT" || "OVERRIDDEN",
             foundationModel: "STRING_VALUE",
           },
           modelInvocationOutput: {  RoutingClassifierModelInvocationOutput
             traceId: "STRING_VALUE",
             rawResponse: {
               content: "STRING_VALUE",
             },
             metadata: {
               usage: {
                 inputTokens: Number("int"),
                 outputTokens: Number("int"),
               },
             },
           },
         },
         failureTrace: {  FailureTrace
           traceId: "STRING_VALUE",
           failureReason: "STRING_VALUE",
         },
         customOrchestrationTrace: {  CustomOrchestrationTrace
           traceId: "STRING_VALUE",
           event: {  CustomOrchestrationTraceEvent
             text: "STRING_VALUE",
           },
         },
       },
       agentId: "STRING_VALUE",
       agentAliasId: "STRING_VALUE",
       agentVersion: "STRING_VALUE",
       callerChain: [  CallerChain
         {  Caller Union: only one key present
           agentAliasArn: "STRING_VALUE",
         },
       ],
       collaboratorName: "STRING_VALUE",
     },
     returnControl: {
       invocationInputs: [
         {  Union: only one key present
           apiInvocationInput: {
             actionGroup: "STRING_VALUE",  required
             httpMethod: "STRING_VALUE",
             apiPath: "STRING_VALUE",
             parameters: [
               {
                 name: "STRING_VALUE",
                 type: "STRING_VALUE",
                 value: "STRING_VALUE",
               },
             ],
             requestBody: {
               content: {
                 "<keys>": {
                   properties: [
                     "<Parameter>",
                   ],
                 },
               },
             },
             actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
             agentId: "STRING_VALUE",
             collaboratorName: "STRING_VALUE",
           },
           functionInvocationInput: {
             actionGroup: "STRING_VALUE",  required
             parameters: [
               {
                 name: "STRING_VALUE",
                 type: "STRING_VALUE",
                 value: "STRING_VALUE",
               },
             ],
             function: "STRING_VALUE",
             actionInvocationType: "RESULT" || "USER_CONFIRMATION" || "USER_CONFIRMATION_AND_RESULT",
             agentId: "STRING_VALUE",
             collaboratorName: "STRING_VALUE",
           },
         },
       ],
       invocationId: "STRING_VALUE",
     },
     internalServerException: {  InternalServerException
       message: "STRING_VALUE",
       reason: "STRING_VALUE",
     },
     validationException: {  ValidationException
       message: "STRING_VALUE",
     },
     resourceNotFoundException: {  ResourceNotFoundException
       message: "STRING_VALUE",
     },
     serviceQuotaExceededException: {  ServiceQuotaExceededException
       message: "STRING_VALUE",
     },
     throttlingException: {  ThrottlingException
       message: "STRING_VALUE",
     },
     accessDeniedException: {  AccessDeniedException
       message: "STRING_VALUE",
     },
     conflictException: {  ConflictException
       message: "STRING_VALUE",
     },
     dependencyFailedException: {  DependencyFailedException
       message: "STRING_VALUE",
       resourceName: "STRING_VALUE",
     },
     badGatewayException: {  BadGatewayException
       message: "STRING_VALUE",
       resourceName: "STRING_VALUE",
     },
     modelNotReadyException: {  ModelNotReadyException
       message: "STRING_VALUE",
     },
     files: {  FilePart
       files: [  OutputFiles
         {  OutputFile
           name: "STRING_VALUE",
           type: "STRING_VALUE",
           bytes: new Uint8Array(),
         },
       ],
     },
   },
   contentType: "STRING_VALUE",  required
   sessionId: "STRING_VALUE",  required
   memoryId: "STRING_VALUE",
 };