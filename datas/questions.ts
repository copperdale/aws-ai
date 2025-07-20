export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'Step 1' | 'Step 2' | 'Step 3' | 'Step 4' | 'Step 5';

export interface Question {
  question_id: number;
  question: string;
  options: Partial<Record<OptionKey | string, string>>;
  correct_answer: OptionKey[] | string[];
  hasError?: boolean;
  explanation?: string;
}

export const questions: Question[] = [
  {
    "question_id": 1,
    "question": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts. An AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders. What should the AI practitioner include in the report to meet the transparency and explainability requirements?",
    "options": {
      "A": "Code for model training",
      "B": "Partial dependence plots (PDPs)",
      "C": "Sample data for training",
      "D": "Model convergence tables"
    },
    "correct_answer": ["B"],
    "explanation": "Partial Dependence Plots (PDPs) show how each feature affects model predictions and help stakeholders understand the model’s behavior, improving transparency and explainability."
  },
  {
    "question_id": 2,
    "question": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents. Which solution meets these requirements?",
    "options": {
      "A": "Build an automatic named entity recognition system.",
      "B": "Create a recommendation engine.",
      "C": "Develop a summarization chatbot.",
      "D": "Develop a multi-language translation system."
    },
    "correct_answer": ["C"],
    "explanation": "A summarization chatbot can process legal documents and generate concise summaries that highlight key points, fulfilling the firm’s requirements."
  },
  {
    "question_id": 3,
    "question": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output. Which ML algorithm meets these requirements?",
    "options": {
      "A": "Decision trees",
      "B": "Linear regression",
      "C": "Logistic regression",
      "D": "Neural networks"
    },
    "correct_answer": ["A"],
    "explanation": "Decision trees are interpretable models that clearly document how features influence outcomes, making them ideal for transparent classification."
  },
  {
    "question_id": 4,
    "question": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly. Which evaluation metric should the company use to measure the model's performance?",
    "options": {
      "A": "R-squared score",
      "B": "Accuracy",
      "C": "Root mean squared error (RMSE)",
      "D": "Learning rate"
    },
    "correct_answer": ["B"],
    "explanation": "Accuracy measures the proportion of correctly classified instances, making it a suitable evaluation metric for image classification tasks."
  },
  {
    "question_id": 5,
    "question": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language. Which solution will align the LLM response quality with the company's expectations?",
    "options": {
      "A": "Adjust the prompt.",
      "B": "Choose an LLM of a different size.",
      "C": "Increase the temperature.",
      "D": "Increase the Top K value."
    },
    "correct_answer": ["A"],
    "explanation": "Adjusting the prompt helps control the length and style of the model’s response, ensuring it meets requirements for tone and language."
  },
  {
    "question_id": 6,
    "question": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?",
    "options": {
      "A": "Real-time inference",
      "B": "Serverless inference",
      "C": "Asynchronous inference",
      "D": "Batch transform"
    },
    "correct_answer": ["C"],
    "explanation": "Asynchronous inference is ideal for long-running jobs and large payloads, offering near real-time responses without blocking requests."
  },
  {
    "question_id": 7,
    "question": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks. Which ML strategy meets these requirements?",
    "options": {
      "A": "Increase the number of epochs.",
      "B": "Use transfer learning.",
      "C": "Decrease the number of epochs.",
      "D": "Use unsupervised learning."
    },
    "correct_answer": ["B"],
    "explanation": "Transfer learning allows reusing pre-trained models for new tasks, reducing development time and cost."
  },
  {
    "question_id": 8,
    "question": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations. Which solution will meet these requirements?",
    "options": {
      "A": "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus",
      "B": "Data augmentation by using an Amazon Bedrock knowledge base",
      "C": "Image recognition by using Amazon Rekognition",
      "D": "Data summarization by using Amazon QuickSight Q"
    },
    "correct_answer": ["A"],
    "explanation": "Human-in-the-loop validation ensures quality and accuracy in labeling by involving human reviewers, which is essential for sensitive use cases like protective equipment."
  },
  {
    "question_id": 9,
    "question": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3). The FM encounters a failure when attempting to access the S3 bucket data. Which solution will meet these requirements?",
    "options": {
      "A": "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key.",
      "B": "Set the access permissions for the S3 buckets to allow public access to enable access over the internet.",
      "C": "Use prompt engineering techniques to tell the model to look for information in Amazon S3.",
      "D": "Ensure that the S3 data does not contain sensitive information."
    },
    "correct_answer": ["A"],
    "explanation": "The foundation model needs the appropriate permissions to decrypt the encrypted data in the S3 bucket. Ensuring that the role used by Amazon Bedrock has permission to access and decrypt the data will resolve the access failure. The other options are not suitable for addressing the encryption and permission issue."
  },
  {
    "question_id": 10,
    "question": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible. Which solution will meet these requirements?",
    "options": {
      "A": "Deploy optimized small language models (SLMs) on edge devices.",
      "B": "Deploy optimized large language models (LLMs) on edge devices.",
      "C": "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices.",
      "D": "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices."
    },
    "correct_answer": ["A"],
    "explanation": "Deploying small optimized models directly on edge devices provides local computation, eliminating latency from network communication."
  },
  {
    "question_id": 11,
    "question": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams. Which SageMaker feature meets these requirements?",
    "options": {
      "A": "Amazon SageMaker Feature Store",
      "B": "Amazon SageMaker Data Wrangler",
      "C": "Amazon SageMaker Clarify",
      "D": "Amazon SageMaker Model Cards"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker Feature Store is a centralized repository that allows teams to store, manage, and share features across ML workflows."
  },
  {
    "question_id": 12,
    "question": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer. What can Amazon Q Developer do to help the company meet these requirements?",
    "options": {
      "A": "Create software snippets, reference tracking, and open source license tracking.",
      "B": "Run an application without provisioning or managing servers.",
      "C": "Enable voice commands for coding and providing natural language search.",
      "D": "Convert audio files to text documents by using ML models."
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Q Developer can generate code snippets, track references, and manage open source licenses, thereby improving developer productivity."
  },
  {
    "question_id": 13,
    "question": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic. Which AWS service or feature will meet these requirements?",
    "options": {
      "A": "AWS PrivateLink",
      "B": "Amazon Macie",
      "C": "Amazon CloudFront",
      "D": "Internet gateway"
    },
    "correct_answer": ["A"],
    "explanation": "AWS PrivateLink enables private connectivity between VPCs and AWS services without requiring internet access, meeting compliance needs."
  },
  {
    "question_id": 14,
    "question": "A company wants to develop an educational game where users answer questions such as the following: 'A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?' Which solution meets these requirements with the LEAST operational overhead?",
    "options": {
      "A": "Use supervised learning to create a regression model that will predict probability.",
      "B": "Use reinforcement learning to train a model to return the probability.",
      "C": "Use code that will calculate probability by using simple rules and computations.",
      "D": "Use unsupervised learning to create a model that will estimate probability density."
    },
    "correct_answer": ["C"],
    "explanation": "Calculating simple probabilities is a task best handled by basic rules and computations, not machine learning. This approach minimizes operational complexity."
  },
  {
    "question_id": 15,
    "question": "Which metric measures the runtime efficiency of operating AI models?",
    "options": {
      "A": "Customer satisfaction score (CSAT)",
      "B": "Training time for each epoch",
      "C": "Average response time",
      "D": "Number of training instances"
    },
    "correct_answer": ["C"],
    "explanation": "Average response time measures how quickly an AI model produces an output, which directly reflects the runtime efficiency of the model."
  },
  {
    "question_id": 16,
    "question": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls. Which solution meets these requirements?",
    "options": {
      "A": "Build a conversational chatbot by using Amazon Lex.",
      "B": "Transcribe call recordings by using Amazon Transcribe.",
      "C": "Extract information from call recordings by using Amazon SageMaker Model Monitor.",
      "D": "Create classification labels by using Amazon Comprehend."
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Transcribe converts audio recordings into text, allowing analysis and information extraction from customer conversations."
  },
  {
    "question_id": 17,
    "question": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products. Which methodology should the company use to meet these requirements?",
    "options": {
      "A": "Supervised learning",
      "B": "Unsupervised learning",
      "C": "Reinforcement learning",
      "D": "Reinforcement learning from human feedback (RLHF)"
    },
    "correct_answer": ["B"],
    "explanation": "Unsupervised learning is ideal for clustering unlabeled data, such as customer segmentation for marketing."
  },
  {
    "question_id": 18,
    "question": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images. Which type of FM should the AI practitioner use to power the search application?",
    "options": {
      "A": "Multi-modal embedding model",
      "B": "Text embedding model",
      "C": "Multi-modal generation model",
      "D": "Image generation model"
    },
    "correct_answer": ["A"],
    "explanation": "A multi-modal embedding model can process and represent both text and image inputs in a shared vector space, enabling unified search."
  },
  {
    "question_id": 19,
    "question": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data. Which strategy will successfully fine-tune the model?",
    "options": {
      "A": "Provide labeled data with the prompt field and the completion field.",
      "B": "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format.",
      "C": "Purchase Provisioned Throughput for Amazon Bedrock.",
      "D": "Train the model on journals and textbooks."
    },
    "correct_answer": ["A"],
    "explanation": "Fine-tuning requires labeled datasets with prompt-completion pairs to guide the model’s behavior effectively."
  },
  {
    "question_id": 20,
    "question": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source. Which solution meets these requirements?",
    "options": {
      "A": "Build a speech recognition system.",
      "B": "Create a natural language processing (NLP) named entity recognition system.",
      "C": "Develop an anomaly detection system.",
      "D": "Create a fraud forecasting system."
    },
    "correct_answer": ["C"],
    "explanation": "Anomaly detection can identify unusual patterns, such as suspicious IP addresses, making it suitable for threat detection."
  }, {
    "question_id": 21,
    "question": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
    "options": {
      "A": "Integration with Amazon S3 for object storage",
      "B": "Support for geospatial indexing and queries",
      "C": "Scalable index management and nearest neighbor search capability",
      "D": "Ability to perform real-time analysis on streaming data"
    },
    "correct_answer": ["C"],
    "explanation": "The scalable index management and nearest neighbor search capability in Amazon OpenSearch Service enables companies to build vector database applications for similarity search and AI use cases."
  },
  {
    "question_id": 22,
    "question": "Which option is a use case for generative AI models?",
    "options": {
      "A": "Improving network security by using intrusion detection systems",
      "B": "Creating photorealistic images from text descriptions for digital marketing",
      "C": "Enhancing database performance by using optimized indexing",
      "D": "Analyzing financial data to forecast stock market trends"
    },
    "correct_answer": ["B"],
    "explanation": "Generative AI models are designed to create new content, such as generating images from text prompts, which is ideal for digital marketing."
  },
  {
    "question_id": 23,
    "question": "A company wants to build a generative AI application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt. Which consideration will inform the company's decision?",
    "options": {
      "A": "Temperature",
      "B": "Context window",
      "C": "Batch size",
      "D": "Model size"
    },
    "correct_answer": ["B"],
    "explanation": "The context window determines how many tokens (words or characters) a foundation model can process at once. This affects the length of a prompt that can be submitted."
  }, {
    "question_id": 24,
    "question": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention. The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone. Which solution meets these requirements?",
    "options": {
      "A": "Set a low limit on the number of tokens the FM can produce.",
      "B": "Use batch inferencing to process detailed responses.",
      "C": "Experiment and refine the prompt until the FM produces the desired responses.",
      "D": "Define a higher number for the temperature parameter."
    },
    "correct_answer": ["C"],
    "explanation": "Experimenting and refining the prompt allows you to guide the FM to produce responses that align with the company's desired tone. This approach helps to shape the behavior of the chatbot. The other options do not directly ensure adherence to company tone."
  }, {
    "question_id": 25,
    "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative. Which prompt engineering strategy meets these requirements?",
    "options": {
      "A": "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified",
      "B": "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt",
      "C": "Provide the new text passage to be classified without any additional context or examples",
      "D": "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering"
    },
    "correct_answer": ["A"],
    "explanation": "Providing examples with labels in the prompt helps the LLM understand the context of sentiment analysis, improving its accuracy in classifying the new text passage as positive or negative. The other options do not effectively guide the LLM for sentiment analysis."
  },
  {
    "question_id": 26,
    "question": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs. Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
    "options": {
      "A": "AWS Audit Manager",
      "B": "AWS CloudTrail",
      "C": "Amazon Fraud Detector",
      "D": "AWS Trusted Advisor"
    },
    "correct_answer": ["B"],
    "explanation": "AWS CloudTrail records API activity and provides a log of access attempts, which helps identify unauthorized users trying to access Amazon Bedrock. The other services are not specifically used for tracking unauthorized access attempts in this context."
  },
  {
    "question_id": 27,
    "question": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model. The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure. Which solution will meet these requirements?",
    "options": {
      "A": "Use Amazon SageMaker Serverless Inference to deploy the model",
      "B": "Use Amazon CloudFront to deploy the model",
      "C": "Use Amazon API Gateway to host the model and serve predictions",
      "D": "Use AWS Batch to host the model and serve predictions"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker Serverless Inference allows the company to deploy the ML model without managing any underlying infrastructure, making it suitable for hosting the model and serving predictions. The other options do not directly provide serverless model deployment capabilities."
  },
  {
    "question_id": 28,
    "question": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available. Which AWS service can the company use to meet this requirement?",
    "options": {
      "A": "AWS Audit Manager",
      "B": "AWS Artifact",
      "C": "AWS Trusted Advisor",
      "D": "AWS Data Exchange"
    },
    "correct_answer": ["B"],
    "explanation": "AWS Artifact provides access to compliance reports, including those from independent software vendors (ISVs). The company can use AWS Artifact to receive notifications when new compliance reports are available. The other services are not used for accessing and notifying about compliance reports."
  },
  {
    "question_id": 29,
    "question": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information. Which action will reduce these risks?",
    "options": {
      "A": "Create a prompt template that teaches the LLM to detect attack patterns",
      "B": "Increase the temperature parameter on invocation requests to the LLM",
      "C": "Avoid using LLMs that are not listed in Amazon SageMaker",
      "D": "Decrease the number of input tokens on invocations of the LLM"
    },
    "correct_answer": ["A"],
    "explanation": "Creating a prompt template that helps the LLM detect common attack patterns can reduce the risk of prompt injection and other undesirable manipulations. The other options do not effectively address the risk of prompt manipulation or unauthorized use."
  },
  {
    "question_id": 30,
    "question": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix. Which solution scope gives the company the MOST ownership of security responsibilities?",
    "options": {
      "A": "Using a third-party enterprise application that has embedded generative AI features",
      "B": "Building an application by using an existing third-party generative AI foundation model (FM)",
      "C": "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business",
      "D": "Building and training a generative AI model from scratch by using specific data that a customer owns"
    },
    "correct_answer": ["D"],
    "explanation": "Building and training a generative AI model from scratch gives the company the most ownership of security responsibilities, as it involves full control over data, training, deployment, and security measures. The other options involve varying levels of dependency on third-party tools and services, which reduces the company's ownership of security."
  },
  {
    "question_id": 31,
    "question": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort. Which strategy meets these requirements?",
    "options": {
      "A": "Object detection",
      "B": "Anomaly detection",
      "C": "Named entity recognition",
      "D": "Inpainting"
    },
    "correct_answer": ["A"],
    "explanation": "Object detection is used to automatically identify and categorize objects (in this case, animals) in photos. It can detect the presence of animals and classify them accordingly. The other strategies are not suitable for identifying and categorizing animals in images."
  },
  {
    "question_id": 32,
    "question": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment. Which Amazon Bedrock pricing model meets these requirements?",
    "options": {
      "A": "On-Demand",
      "B": "Model customization",
      "C": "Provisioned Throughput",
      "D": "Spot Instance"
    },
    "correct_answer": ["A"],
    "explanation": "The On-Demand pricing model provides flexibility without requiring a long-term commitment, allowing the company to pay only for the resources used, which fits well with a limited budget. The other options are either not relevant to pricing flexibility or involve specific resource commitments."
  },
  {
    "question_id": 33,
    "question": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team’s VPC?",
    "options": {
      "A": "Amazon Personalize",
      "B": "Amazon SageMaker JumpStart",
      "C": "PartyRock, an Amazon Bedrock Playground",
      "D": "Amazon SageMaker endpoints"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon SageMaker JumpStart provides pre-built models, including foundation models, that can be quickly deployed and consumed within a VPC, helping teams get started faster. The other options are not designed for deploying foundation models in this context."
  },
  {
    "question_id": 34,
    "question": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
    "options": {
      "A": "Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access",
      "B": "Enable AWS Audit Manager for automatic model evaluation jobs",
      "C": "Enable Amazon Bedrock automatic model evaluation jobs",
      "D": "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias"
    },
    "correct_answer": ["A"],
    "explanation": "Designing clear prompts and using IAM roles with least privilege access ensures secure use of LLMs on Amazon Bedrock by minimizing access risks and preventing misuse. The other options do not directly address securing the use of LLMs."
  },
  {
    "question_id": 35,
    "question": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology. Which solution meets these requirements?",
    "options": {
      "A": "Generative pre-trained transformers (GPT)",
      "B": "Residual neural network",
      "C": "Support vector machine",
      "D": "WaveNet"
    },
    "correct_answer": ["A"],
    "explanation": "GPT models are well-suited for converting natural language input into structured queries like SQL, making them ideal for building an AI-based application that translates employee-provided text into SQL queries. The other options are not designed for natural language understanding and query generation tasks."
  },
  {
    "question_id": 36,
    "question": "A company built a deep learning model for object detection and deployed the model to production. Which AI process occurs when the model analyzes a new image to identify objects?",
    "options": {
      "A": "Training",
      "B": "Inference",
      "C": "Model deployment",
      "D": "Bias correction"
    },
    "correct_answer": ["B"],
    "explanation": "Inference is the process where the model analyzes new data (in this case, a new image) to make predictions or identify objects. The other options are related to different stages of the AI lifecycle, such as building or preparing the model."
  },
  {
    "question_id": 37,
    "question": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model. Which technique will solve the problem?",
    "options": {
      "A": "Data augmentation for imbalanced classes",
      "B": "Model monitoring for class distribution",
      "C": "Retrieval Augmented Generation (RAG)",
      "D": "Watermark detection for images"
    },
    "correct_answer": ["A"],
    "explanation": "Data augmentation for imbalanced classes helps address bias by creating a more balanced dataset, ensuring that different attributes are equally represented. This reduces bias in image generation. The other options do not directly address data bias issues."
  },
  {
    "question_id": 38,
    "question": "A company is using an Amazon Titan foundation model (FM) in Amazon Bedrock. The company needs to supplement the model by using relevant data from the company’s private data sources. Which solution will meet this requirement?",
    "options": {
      "A": "Use a different FM",
      "B": "Choose a lower temperature value",
      "C": "Create an Amazon Bedrock knowledge base",
      "D": "Enable model invocation logging"
    },
    "correct_answer": ["C"],
    "explanation": "Creating an Amazon Bedrock knowledge base allows the company to supplement the foundation model with relevant data from their private data sources. This ensures that the model has access to the additional, context-specific information needed. The other options do not directly address supplementing the model with private data."
  },
  {
    "question_id": 39,
    "question": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements. Which solution will meet these requirements?",
    "options": {
      "A": "Configure the security and compliance by using Amazon Inspector",
      "B": "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify",
      "C": "Encrypt and secure training data by using Amazon Macie",
      "D": "Gather more data. Use Amazon Rekognition to add custom labels to the data"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon SageMaker Clarify helps with transparency and explainability by generating metrics, reports, and examples that show how the model makes decisions, which is essential for meeting regulatory requirements. The other options are not directly related to improving the model's transparency or explainability."
  },
  {
    "question_id": 40,
    "question": "A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks. Which capabilities can the company show compliance for? (Choose two.)",
    "options": {
      "A": "Auto scaling inference endpoints",
      "B": "Threat detection",
      "C": "Data protection",
      "D": "Cost optimization",
      "E": "Loosely coupled microservices"
    },
    "correct_answer": ["B", "C"],
    "explanation": "Threat detection: Ensuring security measures are in place to detect threats is important for compliance with regulatory frameworks. Data protection: Proper data handling and protection measures are key compliance aspects, especially in applications dealing with sensitive customer information."
  },
  {
    "question_id": 41,
    "question": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level. Which solution will meet these requirements?",
    "options": {
      "A": "Decrease the batch size",
      "B": "Increase the epochs",
      "C": "Decrease the epochs",
      "D": "Increase the temperature parameter"
    },
    "correct_answer": ["B"],
    "explanation": "Increasing the number of epochs allows the model to train for more iterations, improving its accuracy until the model reaches an optimal level. The other options are either less effective or unrelated to improving accuracy."
  },
  {
    "question_id": 42,
    "question": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions. Which business objective should the company use to evaluate the effect of the LLM chatbot?",
    "options": {
      "A": "Website engagement rate",
      "B": "Average call duration",
      "C": "Corporate social responsibility",
      "D": "Regulatory compliance"
    },
    "correct_answer": ["B"],
    "explanation": "Reducing the average call duration directly indicates how effectively the LLM chatbot is helping call center employees answer customer questions, thus reducing the number of actions needed. The other options are not directly related to the performance of a call center chatbot."
  },
  {
    "question_id": 43,
    "question": "Which functionality does Amazon SageMaker Clarify provide?",
    "options": {
      "A": "Integrates a Retrieval Augmented Generation (RAG) workflow",
      "B": "Monitors the quality of ML models in production",
      "C": "Documents critical details about ML models",
      "D": "Identifies potential bias during data preparation"
    },
    "correct_answer": ["D"],
    "explanation": "Amazon SageMaker Clarify helps detect potential bias in datasets and models during data preparation, training, and deployment. It also provides tools for explainability. The other options are functionalities that do not directly match SageMaker Clarify’s core features."
  },
  {
    "question_id": 44,
    "question": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model’s performance decreased significantly. What should the company do to mitigate this problem?",
    "options": {
      "A": "Reduce the volume of data that is used in training",
      "B": "Add hyperparameters to the model",
      "C": "Increase the volume of data that is used in training",
      "D": "Increase the model training time"
    },
    "correct_answer": ["C"],
    "explanation": "Increasing the volume of data used in training helps the model generalize better to new, unseen data, reducing overfitting and improving performance in production. The other options either do not address the issue of model generalization or are unlikely to effectively solve the problem."
  },
  {
    "question_id": 45,
    "question": "An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products. Which AWS services meet these requirements? (Choose two.)",
    "options": {
      "A": "Amazon Lex",
      "B": "Amazon Comprehend",
      "C": "Amazon Polly",
      "D": "Amazon Bedrock",
      "E": "Amazon Rekognition"
    },
    "correct_answer": ["B", "D"],
    "explanation": "Amazon Comprehend: This service is specifically designed for natural language processing (NLP) tasks, including sentiment analysis, making it ideal for analyzing customer reviews. Amazon Bedrock: Bedrock can be used to leverage foundation models, which can also be employed for sentiment analysis tasks."
  },
  {
    "question_id": 46,
    "question": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files. Which solution meets these requirements MOST cost-effectively?",
    "options": {
      "A": "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock",
      "B": "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock",
      "C": "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts",
      "D": "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock"
    },
    "correct_answer": ["D"],
    "explanation": "Using an Amazon Bedrock knowledge base allows the model to efficiently access relevant information from the PDF manuals when needed, reducing the cost compared to continuously fine-tuning a model or providing all PDFs as context in each prompt. This approach ensures that only necessary context is provided, making it cost-effective."
  },
  {
    "question_id": 47,
    "question": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals. Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
    "options": {
      "A": "User-generated content",
      "B": "Moderation logs",
      "C": "Content moderation guidelines",
      "D": "Benchmark datasets"
    },
    "correct_answer": ["D"],
    "explanation": "Benchmark datasets are standardized datasets specifically designed for evaluating models for bias and fairness, allowing for efficient assessment with minimal administrative effort. The other options would require more manual processing and might not provide a consistent basis for evaluating bias and discrimination."
  },
  {
    "question_id": 48,
    "question": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements. Which solution meets these requirements?",
    "options": {
      "A": "Optimize the model's architecture and hyperparameters to improve the model's overall performance",
      "B": "Increase the model's complexity by adding more layers to the model's architecture",
      "C": "Create effective prompts that provide clear instructions and context to guide the model's generation",
      "D": "Select a large, diverse dataset to pre-train a new generative model"
    },
    "correct_answer": ["C"],
    "explanation": "Creating effective prompts helps guide the pre-trained generative AI model to produce content that aligns with the company's brand voice and messaging. The other options either involve model architecture changes or require extensive training, which are not necessary for aligning content generation."
  },
  {
    "question_id": 49,
    "question": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers. Which actions should the company take to meet these requirements? (Choose two.)",
    "options": {
      "A": "Detect imbalances or disparities in the data",
      "B": "Ensure that the model runs frequently",
      "C": "Evaluate the model's behavior so that the company can provide transparency to stakeholders",
      "D": "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate",
      "E": "Ensure that the model's inference time is within the accepted limits"
    },
    "correct_answer": ["A", "C"],
    "explanation": "Detect imbalances or disparities in the data: Identifying and addressing data imbalances helps minimize biases that could negatively affect customers. Evaluate the model's behavior so that the company can provide transparency to stakeholders: Evaluating the model and ensuring transparency is important for responsible AI usage, as it helps stakeholders understand how decisions are made."
  },
  {
    "question_id": 50,
    "question": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality. Which action must the company take to use the custom model through Amazon Bedrock?",
    "options": {
      "A": "Purchase Provisioned Throughput for the custom model",
      "B": "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference",
      "C": "Register the model with the Amazon SageMaker Model Registry",
      "D": "Grant access to the custom model in Amazon Bedrock"
    },
    "correct_answer": ["A"],
    "explanation": "Purchase Provisioned Throughput for the custom model."
  },
  {
    "question_id": 51,
    "question": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer. What should the company do to meet these requirements?",
    "options": {
      "A": "Evaluate the models by using built-in prompt datasets.",
      "B": "Evaluate the models by using a human workforce and custom prompt datasets.",
      "C": "Use public model leaderboards to identify the model.",
      "D": "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
    },
    "correct_answer": ["B"],
    "explanation": "Evaluating models using a human workforce and custom prompt datasets ensures that the model generates responses in the style that aligns with the company's preferences. The other options either do not provide direct feedback on style preferences or are not specific enough for determining suitability based on employee preferences."
  },
  {
    "question_id": 52,
    "question": "A student at a university is copying content from generative AI to write essays. Which challenge of responsible generative AI does this scenario represent?",
    "options": {
      "A": "Toxicity",
      "B": "Hallucinations",
      "C": "Plagiarism",
      "D": "Privacy"
    },
    "correct_answer": ["C"],
    "explanation": "Copying content from generative AI to write essays without proper attribution constitutes plagiarism, which is a key challenge of responsible generative AI. The other options are unrelated to this specific issue."
  },
  {
    "question_id": 53,
    "question": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process. Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
    "options": {
      "A": "Amazon EC2 C series",
      "B": "Amazon EC2 G series",
      "C": "Amazon EC2 P series",
      "D": "Amazon EC2 Tm series"
    },
    "correct_answer": ["D"],
    "explanation": "Amazon EC2 Tm series instances (powered by AWS Trainium chips) are designed to provide efficient and environmentally friendly training of large machine learning models. They are optimized for energy efficiency, which reduces the environmental impact of the training process. The other instance types are not specifically optimized for minimizing environmental effects during training."
  },
  {
    "question_id": 54,
    "question": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children. Which AWS service or feature will meet these requirements?",
    "options": {
      "A": "Amazon Rekognition",
      "B": "Amazon Bedrock playgrounds",
      "C": "Guardrails for Amazon Bedrock",
      "D": "Agents for Amazon Bedrock"
    },
    "correct_answer": ["C"],
    "explanation": "Guardrails for Amazon Bedrock can help ensure that the output generated by Amazon Bedrock is appropriate for children. Guardrails are used to apply content moderation, guidelines, and ensure safety by filtering potentially harmful or inappropriate content, which is essential when building an interactive application for children."
  },
  {
    "question_id": 55,
    "question": "A company is building an application that needs to generate synthetic data that is based on existing data. Which type of model can the company use to meet this requirement?",
    "options": {
      "A": "Generative adversarial network (GAN)",
      "B": "XGBoost",
      "C": "Residual neural network",
      "D": "WaveNet"
    },
    "correct_answer": ["A"],
    "explanation": "Generative adversarial networks (GANs) are specifically designed to generate synthetic data that resembles real data distributions."
  },
  {
    "question_id": 56,
    "question": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data. Which solution will meet these requirements?",
    "options": {
      "A": "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3.",
      "B": "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms.",
      "C": "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe.",
      "D": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas."
    },
    "correct_answer": ["D"],
    "explanation": "Amazon SageMaker Canvas is a no-code tool that allows users to build ML models and make predictions without requiring programming knowledge. It is ideal for users with no coding experience, providing an easy interface for importing data and generating predictive models."
  },
  {
    "question_id": 57,
    "question": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group. Which type of bias is affecting the model output?",
    "options": {
      "A": "Measurement bias",
      "B": "Sampling bias",
      "C": "Observer bias",
      "D": "Confirmation bias"
    },
    "correct_answer": ["B"],
    "explanation": "Sampling bias occurs when the training data is not representative of the overall population, leading to disproportionate flagging of specific groups. In this case, the model may have been trained on biased data that did not adequately represent all ethnic groups, resulting in skewed predictions."
  },
  {
    "question_id": 58,
    "question": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources. Which AI learning strategy provides this self-improvement capability?",
    "options": {
      "A": "Supervised learning with a manually curated dataset of good responses and bad responses",
      "B": "Reinforcement learning with rewards for positive customer feedback",
      "C": "Unsupervised learning to find clusters of similar customer inquiries",
      "D": "Supervised learning with a continuously updated FAQ database"
    },
    "correct_answer": ["B"],
    "explanation": "Reinforcement learning allows the chatbot to learn from interactions by receiving rewards for positive customer feedback, which helps the model self-improve over time. The other options do not directly provide a mechanism for continuous self-improvement based on interactions."
  },
  {
    "question_id": 59,
    "question": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance. Which metric will help the AI practitioner evaluate the performance of the model?",
    "options": {
      "A": "Confusion matrix",
      "B": "Correlation matrix",
      "C": "R2 score",
      "D": "Mean squared error (MSE)"
    },
    "correct_answer": ["A"],
    "explanation": "A confusion matrix provides detailed insights into the performance of a classification model by showing the true positives, false positives, true negatives, and false negatives. This metric helps evaluate how well the model classifies the different types of materials in images."
  },
  {
    "question_id": 60,
    "question": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
    "options": {
      "A": "Implement moderation APIs.",
      "B": "Retrain the model with a general public dataset.",
      "C": "Perform model validation.",
      "D": "Automate user feedback integration."
    },
    "correct_answer": ["A"],
    "explanation": "Implementing moderation APIs can help filter and block inappropriate or unwanted images before they are returned by the chatbot. The other options do not directly address ensuring that the chatbot avoids returning inappropriate images."
  },
  {
    "question_id": 61,
    "question": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
    "options": {
      "A": "Configure AWS CloudTrail as the logs destination for the model.",
      "B": "Enable model invocation logging in Amazon Bedrock.",
      "C": "Configure AWS Audit Manager as the logs destination for the model.",
      "D": "Configure model invocation logging in Amazon EventBridge."
    },
    "correct_answer": ["B"],
    "explanation": "Enabling invocation logging in Amazon Bedrock allows the AI practitioner to monitor and store the input and output data for model invocations. The other options are not directly used for logging model invocations in Amazon Bedrock."
  },
  {
    "question_id": 62,
    "question": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
    "options": {
      "A": "Batch transform",
      "B": "Real-time inference",
      "C": "Serverless inference",
      "D": "Asynchronous inference"
    },
    "correct_answer": ["A"],
    "explanation": "Batch transform is ideal for processing large datasets that do not require real-time predictions. It allows the company to perform inference on multiple GBs of data efficiently without needing immediate results."
  },
  {
    "question_id": 63,
    "question": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
    "options": {
      "A": "Embeddings",
      "B": "Tokens",
      "C": "Models",
      "D": "Binaries"
    },
    "correct_answer": ["A"],
    "explanation": "Embeddings are numerical representations of real-world objects and concepts that help AI and NLP models understand and work with textual information more effectively by capturing relationships and similarities between words or phrases."
  },
  {
    "question_id": 64,
    "question": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
    "options": {
      "A": "Use few-shot prompting to define how the FM can answer the questions.",
      "B": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
      "C": "Change the FM inference parameters.",
      "D": "Clean the research paper data to remove complex scientific terms."
    },
    "correct_answer": ["B"],
    "explanation": "Domain adaptation fine-tuning allows the FM to better understand the complex scientific terms by training it with domain-specific data, improving its performance on such specialized content."
  },
  {
    "question_id": 65,
    "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
    "options": {
      "A": "Decrease the temperature value.",
      "B": "Increase the temperature value.",
      "C": "Decrease the length of output tokens.",
      "D": "Increase the maximum generation length."
    },
    "correct_answer": ["A"],
    "explanation": "Decreasing the temperature value makes the model's output more deterministic and consistent by reducing randomness in response generation."
  },
  {
    "question_id": 66,
    "question": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers. Which solution will meet these requirements?",
    "options": {
      "A": "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.",
      "B": "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
      "C": "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
      "D": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
    },
    "correct_answer": ["A"],
    "explanation": "Creating a custom Amazon Bedrock service role for each team with restricted access to only the team's customer data ensures compliance with the security policy, providing the necessary data segregation and access control."
  },
  {
    "question_id": 67,
    "question": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur. Which solution meets these requirements?",
    "options": {
      "A": "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations.",
      "B": "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information.",
      "C": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations.",
      "D": "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades."
    },
    "correct_answer": ["C"],
    "explanation": "Guardrails for Amazon Bedrock can be used to filter content and ensure that personal patient information is not included in model responses. Setting up Amazon CloudWatch alarms allows the company to receive notifications when policy violations occur."
  },
  {
    "question_id": 68,
    "question": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing. Which AWS service meets this requirement?",
    "options": {
      "A": "Amazon Textract",
      "B": "Amazon Personalize",
      "C": "Amazon Lex",
      "D": "Amazon Transcribe"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Textract can extract text from PDF documents, making it suitable for converting resumes into plain text for further processing."
  },
  {
    "question_id": 69,
    "question": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question. Which solution meets these requirements with the LEAST implementation effort?",
    "options": {
      "A": "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support.",
      "B": "Add a role description to the prompt context that instructs the model of the age range that the response should target.",
      "C": "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user.",
      "D": "Summarize the response text depending on the age of the user so that younger users receive shorter responses."
    },
    "correct_answer": ["B"],
    "explanation": "Adding a role description to the prompt is the simplest and most effective way to adjust the model's response style based on the user's age range. It requires minimal implementation effort and effectively tailors the output."
  },
  {
    "question_id": 70,
    "question": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
    "options": {
      "A": "Calculate the total cost of resources used by the model.",
      "B": "Measure the model's accuracy against a predefined benchmark dataset.",
      "C": "Count the number of layers in the neural network.",
      "D": "Assess the color accuracy of images processed by the model."
    },
    "correct_answer": ["B"],
    "explanation": "Evaluating a foundation model's accuracy by measuring its performance against a predefined benchmark dataset is the standard approach for assessing accuracy in image classification tasks."
  },
  {
    "question_id": 71,
    "question": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Choose two.)",
    "options": {
      "A": "Include fairness metrics for model evaluation.",
      "B": "Adjust the temperature parameter of the model.",
      "C": "Modify the training data to mitigate bias.",
      "D": "Avoid overfitting on the training data.",
      "E": "Apply prompt engineering techniques."
    },
    "correct_answer": ["A", "C"],
    "explanation": "Include fairness metrics for model evaluation: Fairness metrics help ensure that the LLM is unbiased and treats all cases equitably, which is essential for responsible AI use. Modify the training data to mitigate bias: Adjusting the training data helps reduce any inherent bias that might exist, contributing to a more fair and responsible LLM."
  },
  {
    "question_id": 72,
    "question": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
    "options": {
      "A": "Data pre-processing",
      "B": "Feature engineering",
      "C": "Exploratory data analysis",
      "D": "Hyperparameter tuning"
    },
    "correct_answer": ["C"],
    "explanation": "The company is currently in the exploratory data analysis (EDA) stage, which involves summarizing data through statistics, visualizations, and correlation matrices to understand the dataset before moving on to modeling."
  },
  {
    "question_id": 73,
    "question": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
    "options": {
      "A": "Topic modeling",
      "B": "Clustering models",
      "C": "Prescriptive ML models",
      "D": "BERT-based models"
    },
    "correct_answer": ["D"],
    "explanation": "BERT-based models are well-suited for natural language understanding tasks, including filling in missing words, because they use contextual information to predict missing tokens in a text."
  },
  {
    "question_id": 74,
    "question": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months. Which AWS solution should the company use to automate the generation of graphs?",
    "options": {
      "A": "Amazon Q in Amazon EC2",
      "B": "Amazon Q Developer",
      "C": "Amazon Q in Amazon QuickSight",
      "D": "Amazon Q in AWS Chatbot"
    },
    "correct_answer": ["C"],
    "explanation": "Amazon Q in Amazon QuickSight allows users to ask questions in natural language and automatically generate graphs and visualizations to display insights, such as total sales for top-selling products."
  },
  {
    "question_id": 75,
    "question": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
    "options": {
      "A": "Pairs of chatbot responses and correct user intents",
      "B": "Pairs of user messages and correct chatbot responses",
      "C": "Pairs of user messages and correct user intents",
      "D": "Pairs of user intents and correct chatbot responses"
    },
    "correct_answer": ["C"],
    "explanation": "Few-shot learning involves providing the model with a few examples to help it understand how to perform the task. For intent detection, the company needs pairs of user messages and the correct user intents, which will help the LLM improve its accuracy in detecting user intents."
  },
  {
    "question_id": 76,
    "question": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
    "options": {
      "A": "Customize the model by using fine-tuning.",
      "B": "Decrease the number of tokens in the prompt.",
      "C": "Increase the number of tokens in the prompt.",
      "D": "Use Provisioned Throughput."
    },
    "correct_answer": ["B"],
    "explanation": "Decreasing the number of tokens in the prompt reduces the amount of data being processed, thereby lowering the cost of using the model. Since the model is performing well, reducing the prompt size is a cost-effective way to maintain performance while lowering expenses."
  },
  {
    "question_id": 77,
    "question": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
    "options": {
      "A": "Data leakage",
      "B": "Hallucination",
      "C": "Overfitting",
      "D": "Underfitting"
    },
    "correct_answer": ["B"],
    "explanation": "Hallucination occurs when a large language model generates content that appears plausible and factual but is incorrect or fabricated. This is a common issue with LLMs."
  },
  {
    "question_id": 78,
    "question": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
    "options": {
      "A": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model.",
      "B": "Mask the confidential data in the inference responses by using dynamic data masking.",
      "C": "Encrypt the confidential data in the inference responses by using Amazon SageMaker.",
      "D": "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
    },
    "correct_answer": ["A"],
    "explanation": "To ensure that the custom model does not generate responses based on confidential data, the best approach is to retrain the model without including the confidential data. This prevents the model from learning patterns associated with that sensitive information, thereby avoiding its use in inference."
  },
  {
    "question_id": 79,
    "question": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
    "options": {
      "A": "Bilingual Evaluation Understudy (BLEU)",
      "B": "Root mean squared error (RMSE)",
      "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
      "D": "F1 score"
    },
    "correct_answer": ["A"],
    "explanation": "The BLEU (Bilingual Evaluation Understudy) score is a common metric used to evaluate the accuracy of machine translation by comparing the generated translation with reference translations. It is specifically designed for translation tasks."
  },
  {
    "question_id": 80,
    "question": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
    "options": {
      "A": "Generation of custom foundation models (FMs) to predict customer needs",
      "B": "Automation of repetitive tasks and orchestration of complex workflows",
      "C": "Automatically calling multiple foundation models (FMs) and consolidating the results",
      "D": "Selecting the foundation model (FM) based on predefined criteria and metrics"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Bedrock agents help automate repetitive tasks and orchestrate complex workflows, which is ideal for handling thousands of customer support inquiries efficiently. This helps reduce response times and improves productivity."
  },
  {
    "question_id": 81,
    "question": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
    "options": {
      "A": "Helps decrease the model's complexity",
      "B": "Improves model performance over time",
      "C": "Decreases the training time requirement",
      "D": "Optimizes model inference time"
    },
    "correct_answer": ["B"],
    "explanation": "Ongoing pre-training helps enhance a foundation model's performance by continuously updating it with new data, thereby improving its ability to generalize and perform well on different tasks."
  },
  {
    "question_id": 82,
    "question": "What are tokens in the context of generative AI models?",
    "options": {
      "A": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
      "B": "Tokens are the mathematical representations of words or concepts used in generative AI models.",
      "C": "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
      "D": "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
    },
    "correct_answer": ["A"],
    "explanation": "Tokens are the smallest units (e.g., words, subwords, or characters) that generative AI models use to process text. They form the basis of both the input given to and the output generated by the model."
  },
  {
    "question_id": 83,
    "question": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
    "options": {
      "A": "Number of tokens consumed",
      "B": "Temperature value",
      "C": "Amount of data used to train the LLM",
      "D": "Total training time"
    },
    "correct_answer": ["A"],
    "explanation": "Inference costs for large language models are typically driven by the number of tokens processed during input and output, as each token incurs computational resources."
  },
  {
    "question_id": 84,
    "question": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
    "options": {
      "A": "Use Amazon Inspector to monitor SageMaker Studio.",
      "B": "Use Amazon Macie to monitor SageMaker Studio.",
      "C": "Configure SageMaker to use a VPC with an S3 endpoint.",
      "D": "Configure SageMaker to use S3 Glacier Deep Archive."
    },
    "correct_answer": ["C"],
    "explanation": "Configuring Amazon SageMaker to use a VPC with an S3 endpoint ensures secure, direct, and managed data flow between Amazon S3 and SageMaker Studio notebooks. This setup avoids public internet exposure and maintains data integrity during transfers."
  },
  {
    "question_id": 85,
    "question": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon S3",
      "B": "Amazon Elastic Block Store (Amazon EBS)",
      "C": "Amazon Elastic File System (Amazon EFS)",
      "D": "AWS Snowcone"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon S3 is the most suitable AWS service for uploading and storing datasets used for validation purposes. It is highly scalable and integrated with Amazon Bedrock, allowing easy access to data for model validation."
  },
  {
    "question_id": 86,
    "question": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
    "options": {
      "A": "Prompted persona switches",
      "B": "Exploiting friendliness and trust",
      "C": "Ignoring the prompt template",
      "D": "Extracting the prompt template"
    },
    "correct_answer": ["D"],
    "explanation": "\"Extracting the prompt template\" is a type of prompting attack that involves directly exposing the configured behavior or the underlying system prompt of a large language model (LLM). This attack can reveal sensitive details about how the model operates, including its internal instructions or restrictions, which are typically not intended to be disclosed to the user."
  },
  {
    "question_id": 87,
    "question": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock. Which security aspect will the company be responsible for?",
    "options": {
      "A": "Patching and updating the versions of Amazon Bedrock",
      "B": "Protecting the infrastructure that hosts Amazon Bedrock",
      "C": "Securing the company's data in transit and at rest",
      "D": "Provisioning Amazon Bedrock within the company network"
    },
    "correct_answer": ["C"],
    "explanation": "According to the AWS Shared Responsibility Model, AWS manages the security of the cloud, including the infrastructure and services like Amazon Bedrock. Customers are responsible for security in the cloud, which encompasses protecting their data, managing access controls, and configuring security settings for their applications."
  },
  {
    "question_id": 88,
    "question": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models. Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
    "options": {
      "A": "Crowd-sourced evaluation",
      "B": "Automatic model evaluation",
      "C": "Model evaluation with human workers",
      "D": "Reinforcement learning from human feedback (RLHF)"
    },
    "correct_answer": ["B"],
    "explanation": "Automatic model evaluation is the strategy that allows the company to evaluate the LLMs with the least operational overhead. This method leverages automated tools and processes to assess the toxicity or quality of the generated output without the need for manual intervention or crowd-sourced input."
  },
  {
    "question_id": 89,
    "question": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content. Which security technique is this an example of?",
    "options": {
      "A": "Fuzzing training data to find vulnerabilities",
      "B": "Denial of service (DoS)",
      "C": "Penetration testing with authorization",
      "D": "Jailbreak"
    },
    "correct_answer": ["D"],
    "explanation": "\"Jailbreaking\" refers to attempts to bypass or disable the built-in safety features and restrictions of a system, in this case, a foundation model (FM). This technique involves trying to circumvent the safeguards that prevent the model from generating harmful or unsafe content."
  },
  {
    "question_id": 90,
    "question": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access. Which solution will meet these requirements?",
    "options": {
      "A": "Run SageMaker training and inference by using SageMaker Experiments.",
      "B": "Run SageMaker training and inference by using network isolation.",
      "C": "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities.",
      "D": "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs."
    },
    "correct_answer": ["B"],
    "explanation": "Network isolation in Amazon SageMaker allows you to run training and inference jobs in an environment that does not have access to the internet. This helps ensure that the data and the model do not inadvertently access external resources, meeting regulatory compliance requirements for isolated environments."
  }, {
    "question_id": 91,
    "question": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
    "options": {
      "A": "Create documents with the relevant information. Store the documents in Amazon S3.",
      "B": "Use AWS AI Service Cards for transparency and understanding models.",
      "C": "Create Amazon SageMaker Model Cards with intended uses and training and inference details.",
      "D": "Create model training scripts. Commit the model training scripts to a Git repository."
    },
    "correct_answer": ["C"],
    "explanation": "Amazon SageMaker Model Cards are designed to document the essential details about machine learning models, including their intended uses, training datasets, training parameters, evaluation metrics, and inference environment. This provides a centralized mechanism to store and audit the metadata of the models."
  },
  {
    "question_id": 92,
    "question": "A software company builds tools for customers. The company wants to use AI to increase software development productivity. Which solution will meet these requirements?",
    "options": {
      "A": "Use a binary classification model to generate code reviews.",
      "B": "Install code recommendation software in the company's developer tools.",
      "C": "Install a code forecasting tool to predict potential code issues.",
      "D": "Use a natural language processing (NLP) tool to generate code."
    },
    "correct_answer": ["D"],
    "explanation": "Natural language processing (NLP) tools can be used to generate code from high-level descriptions or suggestions, which can greatly enhance software development productivity by automating repetitive coding tasks."
  },
  {
    "question_id": 93,
    "question": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
    "options": {
      "A": "Text data",
      "B": "Image data",
      "C": "Time series data",
      "D": "Binary data"
    },
    "correct_answer": ["C"],
    "explanation": "The Amazon SageMaker DeepAR forecasting algorithm is specifically designed for forecasting scalar (one-dimensional) time series data using recurrent neural networks (RNNs)."
  },
  {
    "question_id": 94,
    "question": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
    "options": {
      "A": "Reduce the size of the training dataset.",
      "B": "Ensure that the ML model predictions are consistent with historical results.",
      "C": "Create a different ML model for each demographic group.",
      "D": "Measure class imbalance on the training dataset. Adapt the training process accordingly."
    },
    "correct_answer": ["D"],
    "explanation": "To develop an unbiased model, it's crucial to assess the class distribution and adjust the training process to address any imbalances through techniques such as oversampling the minority class or applying class weights."
  },
  {
    "question_id": 95,
    "question": "Which prompting technique can protect against prompt injection attacks?",
    "options": {
      "A": "Adversarial prompting",
      "B": "Zero-shot prompting",
      "C": "Least-to-most prompting",
      "D": "Chain-of-thought prompting"
    },
    "correct_answer": ["A"],
    "explanation": "Adversarial prompting is a technique used to defend against prompt injection attacks by crafting inputs that are specifically designed to identify and neutralize malicious prompts."
  },
  {
    "question_id": 96,
    "question": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model's accuracy. Which metric should the company use for the evaluation?",
    "options": {
      "A": "Precision",
      "B": "Time to first token",
      "C": "F1 score",
      "D": "Word error rate"
    },
    "correct_answer": ["C"],
    "explanation": "The F1 score is a metric that combines precision and recall into a single value, providing a balance between the two. It is particularly useful in evaluating models where there is an uneven class distribution."
  },
  {
    "question_id": 97,
    "question": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images. Which solution meets these requirements?",
    "options": {
      "A": "Increase the number of generation steps.",
      "B": "Use the MASK_IMAGE_BLACK mask source option.",
      "C": "Increase the classifier-free guidance (CFG) scale.",
      "D": "Increase the prompt strength."
    },
    "correct_answer": ["C"],
    "explanation": "In Stable Diffusion, the classifier-free guidance (CFG) scale parameter controls how closely the generated image adheres to the provided text prompt. By increasing the CFG scale, the model places more emphasis on the prompt, leading to images that more accurately reflect the specified details."
  },
  {
    "question_id": 98,
    "question": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers' inquiries. The company will use the company's policies as the knowledge base. Which solution will meet these requirements MOST cost-effectively?",
    "options": {
      "A": "Retrain the LLM on the company policy data.",
      "B": "Fine-tune the LLM on the company policy data.",
      "C": "Implement Retrieval Augmented Generation (RAG) for in-context responses.",
      "D": "Use pre-training and data augmentation on the company policy data."
    },
    "correct_answer": ["C"],
    "explanation": "Retrieval Augmented Generation (RAG) integrates external data sources with LLMs to produce accurate and contextually relevant outputs without the need for extensive retraining, making it cost-effective for using company policies as a knowledge base."
  },
  {
    "question_id": 99,
    "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
    "options": {
      "A": "Amazon Q Developer",
      "B": "AWS Config",
      "C": "Amazon Personalize",
      "D": "Amazon Comprehend"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Q Developer is a tool designed to help users with minimal programming experience to work with AWS Glue through a graphical user interface."
  },
  {
    "question_id": 100,
    "question": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible AI does the company demonstrate in this scenario?",
    "options": {
      "A": "Fairness",
      "B": "Explainability",
      "C": "Governance",
      "D": "Transparency"
    },
    "correct_answer": ["A"],
    "explanation": "The company is demonstrating fairness by ensuring the image classification model is trained on a diverse dataset that includes insect bite photos from various genders, ethnicities, and geographic locations, preventing biases that could lead to inaccurate diagnoses."
  },
  {
    "question_id": 101,
    "question": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions. Which solution will meet these requirements?",
    "options": {
      "A": "Amazon SageMaker Clarify",
      "B": "Amazon SageMaker Data Wrangler",
      "C": "Amazon SageMaker Model Cards",
      "D": "AWS AI Service Cards"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker Clarify helps detect bias in machine learning models and provides explainability for model predictions, which is essential for high-stakes applications like loan approvals."
  },
  {
    "question_id": 102,
    "question": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities. Which metric should the company use to evaluate the accuracy of the model?",
    "options": {
      "A": "Area Under the ROC Curve (AUC) score",
      "B": "F1 score",
      "C": "BERTScore",
      "D": "Real world knowledge (RWK) score"
    },
    "correct_answer": ["C"],
    "explanation": "BERTScore is a metric specifically designed for evaluating the quality of text generated by models, particularly in tasks like text summarization, by comparing generated text with reference text at the word level."
  },
  {
    "question_id": 103,
    "question": "An AI practitioner wants to predict the classification of flowers based on petal length, petal width, sepal length, and sepal width. Which algorithm meets these requirements?",
    "options": {
      "A": "K-nearest neighbors (k-NN)",
      "B": "K-mean",
      "C": "Autoregressive Integrated Moving Average (ARIMA)",
      "D": "Linear regression"
    },
    "correct_answer": ["A"],
    "explanation": "K-nearest neighbors (k-NN) is a supervised learning algorithm used for classification tasks like flower classification based on features such as petal and sepal measurements."
  },
  {
    "question_id": 104,
    "question": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create. Which AWS service meets these requirements?",
    "options": {
      "A": "AWS Key Management Service (AWS KMS)",
      "B": "Amazon Inspector",
      "C": "Amazon Macie",
      "D": "AWS Secrets Manager"
    },
    "correct_answer": ["A"],
    "explanation": "AWS Key Management Service (AWS KMS) allows you to create and control encryption keys used to encrypt your data, including model artifacts in Amazon Bedrock."
  },
  {
    "question_id": 105,
    "question": "A company wants to use large language models (LLMs) to produce code from natural language code comments. Which LLM feature meets these requirements?",
    "options": {
      "A": "Text summarization",
      "B": "Text generation",
      "C": "Text completion",
      "D": "Text classification"
    },
    "correct_answer": ["B"],
    "explanation": "Text generation is the feature of large language models (LLMs) that enables them to produce text (including code) based on a given prompt or input like natural language code comments."
  },
  {
    "question_id": 106,
    "question": "A company is introducing a mobile app that helps users learn foreign languages. The app makes text more coherent by calling a large language model (LLM). The company collected a diverse dataset of text and supplemented the dataset with examples of more readable versions. The company wants the LLM output to resemble the provided examples. Which metric should the company use to assess whether the LLM meets these requirements?",
    "options": {
      "A": "Value of the loss function",
      "B": "Semantic robustness",
      "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score",
      "D": "Latency of the text generation"
    },
    "correct_answer": ["C"],
    "explanation": "ROUGE is a set of metrics that evaluates the quality of summaries by comparing the overlap of n-grams, word sequences, and word pairs between the model output and reference examples. Since the company wants the LLM output to resemble provided readable versions (reference examples), ROUGE score is the appropriate metric to assess this similarity."
  },{
  "question_id": 107,
  "question": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts. The company wants to modify the prompt techniques to decrease unrelated images. Which solution meets these requirements?",
  "options": {
    "A": "Use zero-shot prompts.",
    "B": "Use negative prompts.",
    "C": "Use positive prompts.",
    "D": "Use ambiguous prompts."
  },
  "correct_answer": ["B"],
  "explanation": "Negative prompts are used to explicitly instruct the model about what to avoid or not generate. By providing the model with specific guidance on what is not desired (e.g., by including terms or concepts that should not appear in the image), the model can better focus on generating relevant and related content."
},{
    "question_id": 108,
    "question": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company's products. Which prompt engineering technique meets these requirements?",
    "options": {
      "A": "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product.",
      "B": "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response.",
      "C": "Include a diverse range of product features in each prompt to generate creative and unique descriptions.",
      "D": "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
    },
    "correct_answer": ["B"],
    "explanation": "Creating prompts tailored to specific product categories while highlighting key features and specifying the desired output format ensures the LLM generates concise, feature-specific descriptions."
  },
  {
    "question_id": 109,
    "question": "A company is developing an ML model to predict customer churn. The model performs well on the training dataset but does not accurately predict churn for new data. Which solution will resolve this issue?",
    "options": {
      "A": "Decrease the regularization parameter to increase model complexity.",
      "B": "Increase the regularization parameter to decrease model complexity.",
      "C": "Add more features to the input data.",
      "D": "Train the model for more epochs."
    },
    "correct_answer": ["B"],
    "explanation": "Increasing the regularization parameter helps reduce model complexity by penalizing large weights, thereby improving the model's ability to generalize to new data and reducing overfitting."
  },
  {
    "question_id": 110,
    "question": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database. Which AWS service will meet these requirements?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon Aurora PostgreSQL",
      "C": "Amazon Redshift",
      "D": "Amazon EMR"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Aurora PostgreSQL can be extended with vector search capabilities using extensions like pgvector, making it suitable for storing and querying embeddings as vectors for conversational search applications."
  },
  {
    "question_id": 111,
    "question": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution's decisions to be explainable. Which factor relates to the explainability of the AI solution's decisions?",
    "options": {
      "A": "Model complexity",
      "B": "Training time",
      "C": "Number of hyperparameters",
      "D": "Deployment time"
    },
    "correct_answer": ["A"],
    "explanation": "Model complexity plays a significant role in the explainability of an AI solution. Simpler models tend to be more explainable because it is easier to understand how they make decisions."
  },
  {
    "question_id": 112,
    "question": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication. Which solution meets these requirements?",
    "options": {
      "A": "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
      "B": "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
      "C": "Create a classification model that categorizes medications into different groups by using Amazon SageMaker.",
      "D": "Create medication review summaries by using Amazon Rekognition."
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Bedrock provides access to large language models (LLMs) that are well-suited for text summarization tasks, making it ideal for generating concise overviews of medication reviews."
  },
  {
    "question_id": 113,
    "question": "A company is building a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise. Which ML model type meets these requirements?",
    "options": {
      "A": "Logistic regression model",
      "B": "Deep learning model built on principal components",
      "C": "K-nearest neighbors (k-NN) model",
      "D": "Neural network"
    },
    "correct_answer": ["A"],
    "explanation": "A logistic regression model allows for easy interpretation and adjustment of feature weights, making it suitable for applications where domain knowledge needs to be incorporated."
  },
  {
    "question_id": 114,
    "question": "HOTSPOT\nA company wants to build an ML application.\nSelect and order the correct steps from the following list to develop a well-architected ML workload. Each step should be selected one time.",
    "options": {
      "Step 1": "Define business goal and frame ML problem",
      "Step 2": "Develop model",
      "Step 3": "Deploy model",
      "Step 4": "Monitor model"
    },
    "correct_answer": ["Step 1", "Step 2", "Step 3", "Step 4"],
    "explanation": "The typical sequence of steps in building an ML application involves defining the business goal, developing the model, deploying it, and then monitoring its performance."
  },
  {
    "question_id": 115,
    "question": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
    "options": {
      "A": "Evaluate the model's performance on benchmark datasets.",
      "B": "Analyze the model's architecture and hyperparameters.",
      "C": "Assess the model's alignment with specific use cases.",
      "D": "Measure the computational resources required for model deployment."
    },
    "correct_answer": ["C"],
    "explanation": "Assessing the model's alignment with specific use cases ensures that the model's capabilities are tailored to the tasks at hand, such as improving customer support or automating processes."
  },
  {
    "question_id": 116,
    "question": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
    "options": {
      "A": "Supervised learning",
      "B": "Unsupervised learning",
      "C": "Reinforcement learning",
      "D": "Active learning"
    },
    "correct_answer": ["A"],
    "explanation": "Supervised learning is appropriate for classification tasks where labeled data is available, as the model learns to classify images based on the provided labels."
  },
  {
    "question_id": 117,
    "question": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
    "options": {
      "A": "Feature engineering",
      "B": "Model training",
      "C": "Data collection",
      "D": "Business goal identification"
    },
    "correct_answer": ["C"],
    "explanation": "The data collection phase involves ensuring that the data complies with legal and regulatory standards, such as data privacy laws and ethical considerations."
  },
  {
    "question_id": 118,
    "question": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model’s accuracy. Which solution meets these requirements?",
    "options": {
      "A": "Use Amazon SageMaker and iterate with newer data.",
      "B": "Use Amazon Personalize and iterate with historical data.",
      "C": "Use Amazon CloudWatch to analyze customer orders.",
      "D": "Use Amazon Rekognition to optimize the model."
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker allows for efficient model training, deployment, and iteration with newer data, ensuring the model remains accurate and relevant over time."
  },
  {
    "question_id": 119,
    "question": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
    "options": {
      "A": "Deploy the model on an Amazon EC2 instance.",
      "B": "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
      "C": "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
      "D": "Deploy the model by using an Amazon SageMaker endpoint."
    },
    "correct_answer": ["D"],
    "explanation": "Amazon SageMaker provides a fully managed service for deploying ML models without needing to manage servers or infrastructure, making it ideal for serving predictions."
  },
  {
    "question_id": 120,
    "question": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
    "options": {
      "A": "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
      "B": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
      "C": "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
      "D": "Use Amazon SageMaker to build the application by training a new ML model."
    },
    "correct_answer": ["B"],
    "explanation": "Agents for Amazon Bedrock, combined with knowledge bases, allow the AI agent to access relevant information in real time, providing precise, context-driven answers based on claim-related data."
  },
  {
    "question_id": 121,
    "question": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
    "options": {
      "A": "Recommendation system",
      "B": "Natural language processing (NLP)",
      "C": "Computer vision",
      "D": "Image processing"
    },
    "correct_answer": ["C"],
    "explanation": "Computer vision is a field of AI that enables machines to interpret visual information, making it ideal for inspecting products for damages or defects."
  },
  {
    "question_id": 122,
    "question": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon Personalize",
      "B": "Amazon SageMaker",
      "C": "Amazon Athena",
      "D": "Amazon Comprehend"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon SageMaker provides automatic model tuning (hyperparameter optimization), which automates the process of finding the best hyperparameters for your ML model."
  },
  {
    "question_id": 123,
    "question": "Which technique can a company use to lower bias and toxicity in generative AI applications during the post-processing ML lifecycle?",
    "options": {
      "A": "Human-in-the-loop",
      "B": "Data augmentation",
      "C": "Feature engineering",
      "D": "Adversarial training"
    },
    "correct_answer": ["A"],
    "explanation": "Human-in-the-loop (HITL) involves human oversight to identify and mitigate biases or toxic outputs during the post-processing phase, ensuring responsible AI use."
  },
  {
    "question_id": 124,
    "question": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix this issue MOST cost-effectively?",
    "options": {
      "A": "Include more diverse training data. Fine-tune the model again by using the new data.",
      "B": "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
      "C": "Use AWS Trusted Advisor checks to eliminate bias.",
      "D": "Pre-train a new LLM with more diverse training data."
    },
    "correct_answer": ["A"],
    "explanation": "Including more diverse training data and fine-tuning the model again helps address bias by ensuring the model learns from a representative sample of all demographics."
  },
  {
    "question_id": 125,
    "question": "HOTSPOT\nA company has developed a large language model (LLM) and wants to make the LLM available to multiple internal teams. The company needs to select the appropriate inference mode for each team.",
    "options": {
      "The company's chatbot needs predictions from the LLM to understand users' intent with minimal latency.": "Real-time inference",
      "A data processing job needs to query the LLM to process gigabytes of text files on weekends.": "Batch transform",
      "The company's engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions.": "Real-time inference"
    },
    "correct_answer": ["Real-time inference", "Batch transform", "Real-time inference"],
    "explanation": "Real-time inference is suitable for low-latency needs like chatbots and APIs, while batch transform is ideal for processing large volumes of data offline."
  },
  {
    "question_id": 126,
    "question": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost. Which combination of AWS service and storage class meets these requirements? (Choose two.)",
    "options": {
      "A": "AWS CloudTrail",
      "B": "Amazon CloudWatch",
      "C": "AWS Audit Manager",
      "D": "Amazon S3 Intelligent-Tiering",
      "E": "Amazon S3 Standard"
    },
    "correct_answer": ["A", "D"],
    "explanation": "AWS CloudTrail logs API calls, and Amazon S3 Intelligent-Tiering provides cost-effective long-term storage for logs."
  },
  {
    "question_id": 127,
    "question": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company's ecommerce platform. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon Personalize",
      "B": "Amazon Kendra",
      "C": "Amazon Rekognition",
      "D": "Amazon Transcribe"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Personalize is designed to build and deploy personalized recommendations, making it ideal for customizing search results for individual users."
  },
  {
    "question_id": 128,
    "question": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
    "options": {
      "A": "Data residency",
      "B": "Data quality",
      "C": "Data discoverability",
      "D": "Data enrichment"
    },
    "correct_answer": ["A"],
    "explanation": "Data residency ensures that data is stored and processed within a specific geographical location to comply with regulations, protecting patient privacy."
  },
  {
    "question_id": 129,
    "question": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "AWS CloudTrail",
      "C": "AWS Trusted Advisor",
      "D": "AWS Config"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon CloudWatch provides scalable monitoring and observability for ML systems, including metrics, alarms, and automated actions."
  },
  {
    "question_id": 130,
    "question": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: \"Ask the model to show its work by explaining its reasoning step by step.\" Which prompt engineering technique is the AI practitioner using?",
    "options": {
      "A": "Chain-of-thought prompting",
      "B": "Prompt injection",
      "C": "Few-shot prompting",
      "D": "Prompt templating"
    },
    "correct_answer": ["A"],
    "explanation": "Chain-of-thought prompting encourages the model to break down its reasoning process step by step, improving accuracy and transparency for numerical reasoning tasks."
  },
  {
    "question_id": 131,
    "question": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
    "options": {
      "A": "Amazon Q Developer",
      "B": "Amazon Bedrock",
      "C": "Amazon Kendra",
      "D": "Amazon Comprehend"
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Bedrock is an AWS service that allows users to build and scale generative AI applications using foundation models (FMs) without the need to manage infrastructure."
  },
  {
    "question_id": 132,
    "question": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses. Which solution will meet these requirements?",
    "options": {
      "A": "Use a deep learning neural network to perform speech recognition.",
      "B": "Build ML models to search for patterns in numeric data.",
      "C": "Use generative AI summarization to generate human-like text.",
      "D": "Build custom models for image classification and recognition."
    },
    "correct_answer": ["A"],
    "explanation": "Using a deep learning neural network for speech recognition allows the app to convert spoken words into text and provide voice responses, which is essential for users with visual impairments."
  },
  {
    "question_id": 133,
    "question": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
    "options": {
      "A": "Few-shot prompting",
      "B": "Zero-shot prompting",
      "C": "Directional stimulus prompting",
      "D": "Chain-of-thought prompting"
    },
    "correct_answer": ["D"],
    "explanation": "Chain-of-thought prompting encourages the LLM to provide step-by-step explanations, improving reasoning and response quality for complex tasks."
  },
  {
    "question_id": 134,
    "question": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
    "options": {
      "A": "Batch learning",
      "B": "Continuous pre-training",
      "C": "Static training",
      "D": "Latent training"
    },
    "correct_answer": ["C"],
    "explanation": "Continuous pre-training involves regularly updating the FM with new data, ensuring it stays relevant and accurate over time."
  },
  {
    "question_id": 135,
    "question": "HOTSPOT: A company wants to develop ML applications to improve business operations and efficiency. Select the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.",
    "options": {
      "Binary classification": "Supervised learning",
      "Multi-class classification": "Supervised learning",
      "K-means clustering": "Unsupervised learning",
      "Dimensionality reduction": "Unsupervised learning"
    },
    "correct_answer": ["Binary classification: Supervised learning", "Multi-class classification: Supervised learning", "K-means clustering: Unsupervised learning", "Dimensionality reduction: Unsupervised learning"],
    "explanation": "Binary and multi-class classification require labeled data (supervised learning), while clustering and dimensionality reduction do not (unsupervised learning)."
  },
  {
    "question_id": 136,
    "question": "Which option is a characteristic of AI governance frameworks for building trust and deploying human-centered AI technologies?",
    "options": {
      "A": "Expanding initiatives across business units to create long-term business value",
      "B": "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
      "C": "Overcoming challenges to drive business transformation and growth",
      "D": "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
    },
    "correct_answer": ["D"],
    "explanation": "AI governance frameworks focus on policies for data, transparency, responsible AI, and compliance to build trust and ensure ethical deployment."
  },
  {
    "question_id": 137,
    "question": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company's operations. Which metric should the company use?",
    "options": {
      "A": "Number of customer inquiries handled",
      "B": "Cost of training AI models",
      "C": "Cost for each customer conversation",
      "D": "Average handled time (AHT)"
    },
    "correct_answer": ["C"],
    "explanation": "Cost per conversation directly quantifies the financial impact of the chatbot by measuring operational expenses."
  },
  {
    "question_id": 138,
    "question": "A company wants to find groups for its customers based on the customers' demographics and buying patterns. Which algorithm should the company use to meet this requirement?",
    "options": {
      "A": "K-nearest neighbors (k-NN)",
      "B": "K-means",
      "C": "Decision tree",
      "D": "Support vector machine"
    },
    "correct_answer": ["B"],
    "explanation": "K-means is an unsupervised clustering algorithm ideal for grouping customers based on similarities in demographics and behavior."
  },
  {
    "question_id": 139,
    "question": "A company's large language model (LLM) is experiencing hallucinations. How can the company decrease hallucinations?",
    "options": {
      "A": "Set up Agents for Amazon Bedrock to supervise the model training.",
      "B": "Use data pre-processing and remove any data that causes hallucinations.",
      "C": "Decrease the temperature inference parameter for the model.",
      "D": "Use a foundation model (FM) that is trained to not hallucinate."
    },
    "correct_answer": ["C"],
    "explanation": "Lowering the temperature reduces randomness in LLM outputs, decreasing the likelihood of hallucinations."
  },
  {
    "question_id": 140,
    "question": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times. Which solution gives the LLM the ability to use content from previous customer messages?",
    "options": {
      "A": "Turn on model invocation logging to collect messages.",
      "B": "Add messages to the model prompt.",
      "C": "Use Amazon Personalize to save conversation history.",
      "D": "Use Provisioned Throughput for the LLM."
    },
    "correct_answer": ["B"],
    "explanation": "Including previous messages in the prompt enables the LLM to maintain context across multiple interactions."
  },
  {
    "question_id": 141,
    "question": "A company's employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon Macie",
      "B": "Amazon Transcribe",
      "C": "Amazon Bedrock",
      "D": "Amazon Textract"
    },
    "correct_answer": ["C"],
    "explanation": "Amazon Bedrock provides access to FMs that can generate tailored recommendations based on customer location and other contextual data."
  },
  {
    "question_id": 142,
    "question": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found. Which solution fully automates the sensitive information detection process with the LEAST development effort?",
    "options": {
      "A": "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon S3.",
      "B": "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data.",
      "C": "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon SageMaker notebook.",
      "D": "Ask the customers to avoid sharing sensitive information in their email messages."
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Macie is a fully managed service that automatically detects and alerts on sensitive data in S3, requiring no custom development."
  },
  {
    "question_id": 143,
    "question": "HOTSPOT: A company is training its employees on how to structure prompts for foundation models. Select the correct prompt engineering technique from the following list for each prompt template. Each prompt engineering technique should be selected one time.",
    "options": {
      "Classify the following text as either sports, politics, or entertainment: [input text].": "Zero-shot learning",
      "A [image 1], [image 2], and [image 3] are examples of [target class]. Classify the following image as [target class]:": "Few-shot learning",
      "[Question.] [Instructions to follow.] Think step by step and walk me through your thinking.": "Chain-of-thought reasoning"
    },
    "correct_answer": [
      "Classify the following text as either sports, politics, or entertainment: [input text]. - Zero-shot learning",
      "A [image 1], [image 2], and [image 3] are examples of [target class]. Classify the following image as [target class]: - Few-shot learning",
      "[Question.] [Instructions to follow.] Think step by step and walk me through your thinking. - Chain-of-thought reasoning"
    ],
    "explanation": "Zero-shot learning requires no examples, few-shot provides examples, and chain-of-thought encourages step-by-step reasoning."
  },
  {
    "question_id": 144,
    "question": "HOTSPOT: A company is using Amazon Bedrock Guardrails to filter content for its generative AI application. Select the correct guardrail filter from the following list for each use case. Each guardrail filter should be selected one time.",
    "options": {
      "Block input prompts or model responses that contain harmful content such as hate, insults, violence, or misconduct": "Content filters",
      "Avoid subjects related to illegal investment advice or legal advice": "Denied topics",
      "Detect and block specific offensive terms": "Word filters",
      "Detect and filter out information in the model's responses that is not grounded in the provided source information": "Contextual grounding check"
    },
    "correct_answer": [
      "Block input prompts or model responses that contain harmful content such as hate, insults, violence, or misconduct - Content filters",
      "Avoid subjects related to illegal investment advice or legal advice - Denied topics",
      "Detect and block specific offensive terms - Word filters",
      "Detect and filter out information in the model's responses that is not grounded in the provided source information - Contextual grounding check"
    ],
    "explanation": "Content filters block harmful content, denied topics restrict high-level categories, word filters target specific terms, and contextual grounding ensures responses align with source data."
  },
  {
    "question_id": 145,
    "question": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
    "options": {
      "A": "Providing a visually appealing summary of a model's capabilities.",
      "B": "Standardizing information about a model's purpose, performance, and limitations.",
      "C": "Reducing the overall computational requirements of a model.",
      "D": "Physically storing models for archival purposes."
    },
    "correct_answer": ["B"],
    "explanation": "SageMaker Model Cards standardize documentation of model details, ensuring transparency and compliance."
  },
  {
    "question_id": 146,
    "question": "What does an F1 score measure in the context of foundation model (FM) performance?",
    "options": {
      "A": "Model precision and recall",
      "B": "Model speed in generating responses",
      "C": "Financial cost of operating the model",
      "D": "Energy efficiency of the model's computations"
    },
    "correct_answer": ["A"],
    "explanation": "The F1 score balances precision and recall, providing a single metric for classification performance."
  },
  {
    "question_id": 147,
    "question": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions. Which strategy will meet these requirements MOST cost-effectively?",
    "options": {
      "A": "Fine-tune the model regularly.",
      "B": "Train the model by using context data.",
      "C": "Pre-train and benchmark the model by using context data.",
      "D": "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
    },
    "correct_answer": ["D"],
    "explanation": "RAG dynamically retrieves relevant information from external sources, ensuring up-to-date answers without frequent retraining."
  },
  {
    "question_id": 148,
    "question": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics. Which core dimension of responsible AI does this scenario present?",
    "options": {
      "A": "Fairness",
      "B": "Explainability",
      "C": "Privacy and security",
      "D": "Transparency"
    },
    "correct_answer": ["A"],
    "explanation": "Non-representative data introduces bias, directly impacting fairness in AI decision-making."
  },
  {
    "question_id": 149,
    "question": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed. Which AWS services will help the company assess compliance requirements? (Choose two.)",
    "options": {
      "A": "AWS Audit Manager",
      "B": "AWS Config",
      "C": "Amazon Inspector",
      "D": "Amazon CloudWatch",
      "E": "AWS CloudTrail"
    },
    "correct_answer": ["A", "B"],
    "explanation": "AWS Audit Manager automates compliance assessments, and AWS Config tracks resource configurations for policy adherence."
  },
  {
    "question_id": 150,
    "question": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock. Which solution meets these requirements MOST cost-effectively?",
    "options": {
      "A": "Fine-tune the FM.",
      "B": "Retrain the FM.",
      "C": "Train a new FM.",
      "D": "Use prompt engineering."
    },
    "correct_answer": ["D"],
    "explanation": "Prompt engineering optimizes responses without the cost of retraining or fine-tuning the model."
  },
  {
    "question_id": 151,
    "question": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?",
    "options": {
      "A": "Use Amazon Rekognition moderation.",
      "B": "Use Amazon Comprehend toxicity detection.",
      "C": "Use Amazon SageMaker built-in algorithms to train the model.",
      "D": "Use Amazon Polly to monitor comments."
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Comprehend provides pre-trained NLP models, including toxicity detection, to analyze text for harmful language without requiring labeled training data."
  },
  {
    "question_id": 152,
    "question": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?",
    "options": {
      "A": "Amazon Rekognition",
      "B": "Amazon SageMaker Clarify",
      "C": "Amazon Comprehend",
      "D": "Amazon SageMaker Model Monitor"
    },
    "correct_answer": ["D"],
    "explanation": "Amazon SageMaker Model Monitor continuously tracks deployed ML models to detect data drift and quality degradation in production."
  },
  {
    "question_id": 153,
    "question": "A company is deploying AI/ML models by using AWS services. The company wants to offer transparency into the models' decision-making processes and provide explanations for the model outputs. Which AWS service or feature meets these requirements?",
    "options": {
      "A": "Amazon SageMaker Model Cards",
      "B": "Amazon Rekognition",
      "C": "Amazon Comprehend",
      "D": "Amazon Lex"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker Model Cards document model details like purpose, training data, and limitations to ensure transparency and explainability."
  },
  {
    "question_id": 154,
    "question": "A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?",
    "options": {
      "A": "Amazon Translate",
      "B": "Amazon Transcribe",
      "C": "Amazon Kendra",
      "D": "Amazon Polly"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Translate provides neural machine translation to automatically generate product descriptions in multiple languages."
  },
  {
    "question_id": 155,
    "question": "HOTSPOT: A company wants more customized responses to its generative AI models' prompts. Select the correct customization methodology from the following list for each use case. Each use case should be selected one time.",
    "options": {
      "The models must be taught a new domain-specific task": "Model fine-tuning",
      "A limited amount of labeled data is available and more data is needed": "Data augmentation",
      "Only unlabeled data is available": "Continued pre-training"
    },
    "correct_answer": [
      "The models must be taught a new domain-specific task - Model fine-tuning",
      "A limited amount of labeled data is available and more data is needed - Data augmentation",
      "Only unlabeled data is available - Continued pre-training"
    ],
    "explanation": "Fine-tuning adapts models to specific tasks, data augmentation expands limited labeled datasets, and continued pre-training leverages unlabeled data."
  },
  {
    "question_id": 156,
    "question": "Which AWS feature records details about ML instance data for governance and reporting?",
    "options": {
      "A": "Amazon SageMaker Model Cards",
      "B": "Amazon SageMaker Debugger",
      "C": "Amazon SageMaker Model Monitor",
      "D": "Amazon SageMaker JumpStart"
    },
    "correct_answer": ["A"],
    "explanation": "Amazon SageMaker Model Cards standardize documentation of model metadata for governance and compliance reporting."
  },
  {
    "question_id": 157,
    "question": "A financial company is using ML to help with some of the company's tasks. Which option is a use of generative AI models?",
    "options": {
      "A": "Summarizing customer complaints",
      "B": "Classifying customers based on product usage",
      "C": "Segmenting customers based on type of investments",
      "D": "Forecasting revenue for certain products"
    },
    "correct_answer": ["A"],
    "explanation": "Generative AI models create new content like text summaries, while other options involve classification or prediction tasks."
  },
  {
    "question_id": 158,
    "question": "A medical company wants to develop an AI application that can access structured patient records, extract relevant information, and generate concise summaries. Which solution will meet these requirements?",
    "options": {
      "A": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule-based logic to structure and format summaries.",
      "B": "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general purpose text summarization tool.",
      "C": "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction system to generate summaries.",
      "D": "Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based system to format summaries."
    },
    "correct_answer": ["A"],
    "explanation": "Amazon Comprehend Medical specializes in extracting medical information from unstructured data, which can then be formatted into summaries."
  },
  {
    "question_id": 159,
    "question": "Which option describes embeddings in the context of AI?",
    "options": {
      "A": "A method for compressing large datasets",
      "B": "An encryption method for securing sensitive data",
      "C": "A method for visualizing high-dimensional data",
      "D": "A numerical method for data representation in a reduced dimensionality space"
    },
    "correct_answer": ["D"],
    "explanation": "Embeddings convert data into numerical vectors in a lower-dimensional space while preserving semantic relationships."
  },
  {
    "question_id": 160,
    "question": "A company is building an AI application to summarize books of varying lengths. During testing, the application fails to summarize some books. Why does the application fail to summarize some books?",
    "options": {
      "A": "The temperature is set too high.",
      "B": "The selected model does not support fine-tuning.",
      "C": "The Top P value is too high.",
      "D": "The input tokens exceed the model's context size."
    },
    "correct_answer": ["D"],
    "explanation": "Books exceeding the model's maximum token limit cannot be fully processed, causing summarization failures."
  },
  {
    "question_id": 161,
    "question": "An airline company wants to build a conversational AI assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface. Which solution will meet these requirements with the LEAST development effort?",
    "options": {
      "A": "Train models on Amazon SageMaker Autopilot.",
      "B": "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock.",
      "C": "Create a Python application by using Amazon Q Developer.",
      "D": "Fine-tune models on Amazon SageMaker Jumpstart."
    },
    "correct_answer": ["B"],
    "explanation": "Amazon Bedrock's RAG architecture combines LLMs with knowledge bases for accurate responses without extensive custom development."
  },
  {
    "question_id": 162,
    "question": "What is tokenization used for in natural language processing (NLP)?",
    "options": {
      "A": "To encrypt text data",
      "B": "To compress text files",
      "C": "To break text into smaller units for processing",
      "D": "To translate text between languages"
    },
    "correct_answer": ["C"],
    "explanation": "Tokenization splits text into words, subwords, or characters for NLP model processing."
  },
  {
    "question_id": 163,
    "question": "Which option is a characteristic of transformer-based language models?",
    "options": {
      "A": "Transformer-based language models use convolutional layers to apply filters across an input to capture local patterns through filtered views.",
      "B": "Transformer-based language models can process only text data.",
      "C": "Transformer-based language models use self-attention mechanisms to capture contextual relationships.",
      "D": "Transformer-based language models process data sequences one element at a time in cyclic iterations."
    },
    "correct_answer": ["C"],
    "explanation": "Transformers use self-attention to weigh word importance across entire sequences, enabling deep contextual understanding."
  },
  {
    "question_id": 164,
    "question": "A financial company is using AI systems to obtain customer credit scores as part of the loan application process. The company wants to expand to a new market in a different geographic area. The company must ensure that it can operate in that geographic area. Which compliance laws should the company review?",
    "options": {
      "A": "Local health data protection laws",
      "B": "Local payment card data protection laws",
      "C": "Local education privacy laws",
      "D": "Local algorithm accountability laws"
    },
    "correct_answer": ["D"],
    "explanation": "Algorithm accountability laws regulate automated decision-making systems like credit scoring for fairness and transparency in new markets."
  },
  {
    "question_id": 165,
    "question": "A company uses Amazon Bedrock for its generative AI application. The company wants to use Amazon Bedrock Guardrails to detect and filter harmful user inputs and model-generated outputs. Which content categories can the guardrails filter? (Choose two.)",
    "options": {
      "A": "Hate",
      "B": "Politics",
      "C": "Violence",
      "D": "Gambling",
      "E": "Religion"
    },
    "correct_answer": ["A", "C"],
    "explanation": "Amazon Bedrock Guardrails can filter harmful content categories like hate speech and violence to ensure responsible AI usage."
  },
  {
    "question_id": 166,
    "question": "Which scenario describes a potential risk and limitation of prompt engineering in the context of a generative AI model?",
    "options": {
      "A": "Prompt engineering does not ensure that the model always produces consistent and deterministic outputs, eliminating the need for validation.",
      "B": "Prompt engineering could expose the model to vulnerabilities such as prompt injection attacks.",
      "C": "Properly designed prompts reduce but do not eliminate the risk of data poisoning or model hijacking.",
      "D": "Prompt engineering does not ensure that the model will consistently generate highly reliable outputs when working with real-world data."
    },
    "correct_answer": ["B"],
    "explanation": "Prompt injection attacks manipulate input prompts to alter model behavior, representing a key security risk in prompt engineering."
  },
  {
    "question_id": 167,
    "question": "A publishing company built a Retrieval Augmented Generation (RAG) based solution to give its users the ability to interact with published content. New content is published daily. The company wants to provide a near real-time experience to users. Which steps in the RAG pipeline should the company implement by using offline batch processing to meet these requirements? (Choose two.)",
    "options": {
      "A": "Generation of content embeddings",
      "B": "Generation of embeddings for user queries",
      "C": "Creation of the search index",
      "D": "Retrieval of relevant content",
      "E": "Response generation for the user"
    },
    "correct_answer": ["A", "C"],
    "hasError": true,
    "explanation": "Content embedding generation and search index creation can be processed offline in batches, while query processing requires real-time execution."
  },
  {
    "question_id": 168,
    "question": "Which technique breaks a complex task into smaller subtasks that are sent sequentially to a large language model (LLM)?",
    "options": {
      "A": "One-shot prompting",
      "B": "Prompt chaining",
      "C": "Tree of thoughts",
      "D": "Retrieval Augmented Generation (RAG)"
    },
    "correct_answer": ["B"],
    "explanation": "Prompt chaining divides complex tasks into sequential subtasks, allowing structured step-by-step execution by the LLM."
  },
  {
    "question_id": 169,
    "question": "An AI practitioner needs to improve the accuracy of a natural language generation model. The model uses rapidly changing inventory data. Which technique will improve the model's accuracy?",
    "options": {
      "A": "Transfer learning",
      "B": "Federated learning",
      "C": "Retrieval Augmented Generation (RAG)",
      "D": "One-shot prompting"
    },
    "correct_answer": ["C"],
    "explanation": "RAG retrieves up-to-date inventory data at inference time, ensuring accurate responses without frequent model retraining."
  },
  {
    "question_id": 170,
    "question": "A company wants to collaborate with several research institutes to develop an AI model. The company needs standardized documentation of model version tracking and a record of model development. Which solution meets these requirements?",
    "options": {
      "A": "Track the model changes by using Git.",
      "B": "Track the model changes by using Amazon Fraud Detector.",
      "C": "Track the model changes by using Amazon SageMaker Model Cards.",
      "D": "Track the model changes by using Amazon Comprehend."
    },
    "correct_answer": ["C"],
    "explanation": "Amazon SageMaker Model Cards provide versioned documentation of model metadata, training details, and performance metrics for collaborative development."
  },
  {
    "question_id": 171,
    "question": "A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues. Which AWS service or feature meets these requirements?",
    "options": {
      "A": "Amazon SageMaker JumpStart",
      "B": "Amazon SageMaker HyperPod",
      "C": "Amazon SageMaker Data Wrangler",
      "D": "Amazon SageMaker Model Monitor"
    },
    "correct_answer": ["D"],
    "explanation": "Amazon SageMaker Model Monitor continuously tracks model performance metrics to detect deviations from baseline quality."
  },
  {
    "question_id": 172,
    "question": "What is the purpose of chunking in Retrieval Augmented Generation (RAG)?",
    "options": {
      "A": "To avoid database storage limitations for large text documents by storing parts or chunks of the text",
      "B": "To improve efficiency by avoiding the need to convert large text into vector embeddings",
      "C": "To improve the contextual relevancy of results retrieved from the vector index",
      "D": "To decrease the cost of storage by storing parts or chunks of the text"
    },
    "correct_answer": ["C"],
    "explanation": "Chunking breaks documents into smaller segments to enhance retrieval precision by matching only relevant text portions to queries."
  },
  {
    "question_id": 173,
    "question": "A company is developing an editorial assistant application that uses generative AI. During the pilot phase, usage is low and application performance is not a concern. The company cannot predict application usage after the application is fully deployed and wants to minimize application costs. Which solution will meet these requirements?",
    "options": {
      "A": "Use GPU-powered Amazon EC2 instances.",
      "B": "Use Amazon Bedrock with Provisioned Throughput.",
      "C": "Use Amazon Bedrock with On-Demand Throughput.",
      "D": "Use Amazon SageMaker JumpStart."
    },
    "correct_answer": ["C"],
    "explanation": "On-Demand Throughput in Amazon Bedrock charges only for actual usage, minimizing costs for unpredictable workloads."
  },
  {
    "question_id": 174,
    "question": "A company deployed a Retrieval Augmented Generation (RAG) application on Amazon Bedrock that gathers financial news to distribute in daily newsletters. Users have recently reported politically influenced ideas in the newsletters. Which Amazon Bedrock guardrail can identify and filter this content?",
    "options": {
      "A": "Word filters",
      "B": "Denied topics",
      "C": "Sensitive information filters",
      "D": "Content filters"
    },
    "correct_answer": ["B"],
    "explanation": "Denied topics guardrails block predefined categories like politics from appearing in model outputs."
  },
  {
    "question_id": 175,
    "question": "A financial company is developing a fraud detection system that flags potential fraud cases in credit card transactions. Employees will evaluate the flagged fraud cases. The company wants to minimize the amount of time the employees spend reviewing flagged fraud cases that are not actually fraudulent. Which evaluation metric meets these requirements?",
    "options": {
      "A": "Recall",
      "B": "Accuracy",
      "C": "Precision",
      "D": "Lift chart"
    },
    "correct_answer": ["C"],
    "explanation": "High precision reduces false positives, ensuring most flagged cases are truly fraudulent and minimizing wasted review effort."
  },
  {
    "question_id": 176,
    "question": "A company designed an AI-powered agent to answer customer inquiries based on product manuals. Which strategy can improve customer confidence levels in the AI-powered agent's responses?",
    "options": {
      "A": "Writing the confidence level in the response",
      "B": "Including referenced product manual links in the response",
      "C": "Designing an agent avatar that looks like a computer",
      "D": "Training the agent to respond in the company's language style"
    },
    "correct_answer": ["B"],
    "explanation": "Providing source references allows customers to verify information directly, increasing trust in the agent's accuracy."
  },
  {
    "question_id": 177,
    "question": "A hospital developed an AI system to provide personalized treatment recommendations for patients. The AI system must provide the rationale behind the recommendations and make the insights accessible to doctors and patients. Which human-centered design principle does this scenario present?",
    "options": {
      "A": "Explainability",
      "B": "Privacy and security",
      "C": "Fairness",
      "D": "Data governance"
    },
    "correct_answer": ["A"],
    "explanation": "Explainability ensures AI decisions are interpretable by providing clear reasoning for outputs like treatment recommendations."
  },
  {
    "question_id": 178,
    "question": "Which statement presents an advantage of using Retrieval Augmented Generation (RAG) for natural language processing (NLP) tasks?",
    "options": {
      "A": "RAG can use external knowledge sources to generate more accurate and informative responses.",
      "B": "RAG is designed to improve the speed of language model training.",
      "C": "RAG is primarily used for speech recognition tasks.",
      "D": "RAG is a technique for data augmentation in computer vision tasks."
    },
    "correct_answer": ["A"],
    "explanation": "RAG enhances response quality by dynamically retrieving relevant information from external datasets during inference."
  },
  {
    "question_id": 179,
    "question": "A company has created a custom model by fine-tuning an existing large language model (LLM) from Amazon Bedrock. The company wants to deploy the model to production and use the model to handle a steady rate of requests each minute. Which solution meets these requirements MOST cost-effectively?",
    "options": {
      "A": "Deploy the model by using an Amazon EC2 compute optimized instance.",
      "B": "Use the model with on-demand throughput on Amazon Bedrock.",
      "C": "Store the model in Amazon S3 and host the model by using AWS Lambda.",
      "D": "Purchase Provisioned Throughput for the model on Amazon Bedrock."
    },
    "correct_answer": ["D"],
    "explanation": "Provisioned Throughput offers lower per-request costs for predictable, steady traffic compared to on-demand pricing."
  },
  {
    "question_id": 180,
    "question": "Which technique involves training AI models on labeled datasets to adapt the models to specific industry terminology and requirements?",
    "options": {
      "A": "Data augmentation",
      "B": "Fine-tuning",
      "C": "Model quantization",
      "D": "Continuous pre-training"
    },
    "correct_answer": ["B"],
    "explanation": "Fine-tuning continues training pre-trained models on domain-specific labeled data to specialize them for industry use cases."
  },
  {
    "question_id": 181,
    "question": "A company is creating an agent for its application by using Amazon Bedrock Agents. The agent is performing well, but the company wants to improve the agent's accuracy by providing some specific examples. Which solution meets these requirements?",
    "options": {
      "A": "Modify the advanced prompts for the agent to include the examples.",
      "B": "Create a guardrail for the agent that includes the examples.",
      "C": "Use Amazon SageMaker Ground Truth to label the examples.",
      "D": "Run a script in AWS Lambda that adds the examples to the training dataset."
    },
    "correct_answer": ["A"],
    "explanation": "Adding examples to the agent's prompts (few-shot learning) improves accuracy without retraining the underlying model."
  },
  {
    "question_id": 182,
    "question": "Which option is a benefit of using infrastructure as code (IaC) in machine learning operations (MLOps)?",
    "options": {
      "A": "IaC eliminates the need for hyperparameter tuning.",
      "B": "IaC always provisions powerful compute instances, contributing to the training of more accurate models.",
      "C": "IaC streamlines the deployment of scalable and consistent ML workloads in cloud environments.",
      "D": "IaC minimizes overall expenses by deploying only low-cost instances."
    },
    "correct_answer": ["C"],
    "explanation": "IaC automates infrastructure provisioning, ensuring reproducible and scalable ML environments across development stages."
  },
  {
    "question_id": 183,
    "question": "A company wants to fine-tune a foundation model (FM) to answer questions for a specific domain. The company wants to use instruction-based fine-tuning. How should the company prepare the training data?",
    "options": {
      "A": "Gather company internal documents and industry-specific materials. Merge the documents and materials into a single file.",
      "B": "Collect external company reviews from various online sources. Manually label each review as either positive or negative.",
      "C": "Create pairs of questions and answers that specifically address topics related to the company's industry domain.",
      "D": "Create few-shot prompts to instruct the model to answer only domain knowledge."
    },
    "correct_answer": ["C"],
    "explanation": "Instruction-based fine-tuning requires curated question-answer pairs to teach the model domain-specific response patterns."
  },
  {
    "question_id": 184,
    "question": "Which ML technique ensures data compliance and privacy when training AI models on AWS?",
    "options": {
      "A": "Reinforcement learning",
      "B": "Transfer learning",
      "C": "Federated learning",
      "D": "Unsupervised learning"
    },
    "correct_answer": ["C"],
    "explanation": "Federated learning trains models across decentralized devices without centralizing raw data, preserving privacy."
  },
  {
    "question_id": 185,
    "question": "HOTSPOT: A company needs to customize a base model that is hosted on Amazon Bedrock. Select the correct model customization method from the following list of company requirements. Each model customization method should be selected one or more times.",
    "options": {
      "The company wants to improve the model's performance on specific tasks and examples.": "Fine-tuning",
      "The company wants to improve the model's domain knowledge by providing specific documents.": "Continued pre-training",
      "The company wants to retrain the model by using more unlabeled data over time.": "Continued pre-training"
    },
    "correct_answer": [
      "The company wants to improve the model's performance on specific tasks and examples. - Fine-tuning",
      "The company wants to improve the model's domain knowledge by providing specific documents. - Continued pre-training",
      "The company wants to retrain the model by using more unlabeled data over time. - Continued pre-training"
    ],
    "explanation": "Fine-tuning adapts models to specific tasks with labeled data, while continued pre-training uses unlabeled data for domain adaptation."
  },
  {
    "question_id": 186,
    "question": "A manufacturing company has an application that ingests consumer complaints from publicly available sources. The application uses complex hard-coded logic to process the complaints. The company wants to scale this logic across markets and product lines. Which advantage do generative AI models offer for this scenario?",
    "options": {
      "A": "Predictability of outputs",
      "B": "Adaptability",
      "C": "Less sensitivity to changes in inputs",
      "D": "Explainability"
    },
    "correct_answer": ["B"],
    "explanation": "Generative AI models generalize across domains without rule updates, enabling scalable complaint processing."
  },
  {
    "question_id": 187,
    "question": "A financial company wants to flag all credit card activity as possibly fraudulent or non-fraudulent based on transaction data. Which type of ML model meets these requirements?",
    "options": {
      "A": "Regression",
      "B": "Diffusion",
      "C": "Binary classification",
      "D": "Multi-class classification"
    },
    "correct_answer": ["C"],
    "explanation": "Binary classification distinguishes between two classes (fraudulent/non-fraudulent) for transaction monitoring."
  },
  {
    "question_id": 188,
    "question": "HOTSPOT: A company is designing a customer service chatbot by using a fine-tuned large language model (LLM). The company wants to ensure that the chatbot uses responsible AI characteristics. Select the correct responsible AI characteristic from the following list for each application design action. Each responsible AI characteristic should be selected one time or not at all.",
    "options": {
      "Anonymize personal information during training data preparation": "Privacy and security",
      "Design the customer service chatbot to provide explainable decisions": "Transparency",
      "Use Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbot": "Safety"
    },
    "correct_answer": [
      "Anonymize personal information during training data preparation - Privacy and security",
      "Design the customer service chatbot to provide explainable decisions - Transparency",
      "Use Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbot - Safety"
    ],
    "explanation": "Privacy protects personal data, transparency explains decisions, and safety prevents harmful outputs in AI systems."
  },
  {
    "question_id": 189,
    "question": "A hospital wants to use a generative AI solution with speech-to-text functionality to help improve employee skills in dictating clinical notes. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon Q Developer",
      "B": "Amazon Polly",
      "C": "Amazon Rekognition",
      "D": "AWS HealthScribe"
    },
    "correct_answer": ["D"],
    "explanation": "AWS HealthScribe provides specialized clinical speech-to-text and note generation for healthcare documentation."
  },
  {
    "question_id": 190,
    "question": "Which type of AI model makes numeric predictions?",
    "options": {
      "A": "Diffusion",
      "B": "Regression",
      "C": "Transformer",
      "D": "Multi-modal"
    },
    "correct_answer": ["B"],
    "explanation": "Regression models predict continuous numerical values, unlike classification or generative models."
  },
  {
    "question_id": 191,
    "question": "HOTSPOT: A company wants to use Amazon SageMaker features for various use cases. Select the correct SageMaker feature from the following list for each use case. Each SageMaker feature should be selected one time or not at all.",
    "options": {
      "Preparing data through a visual interface without using code": "SageMaker Canvas",
      "Finding and using a prebuilt solution for fraud detection": "SageMaker JumpStart",
      "Create labeled datasets with human intervention": "SageMaker Ground Truth"
    },
    "correct_answer": [
      "Preparing data through a visual interface without using code - SageMaker Canvas",
      "Finding and using a prebuilt solution for fraud detection - SageMaker JumpStart",
      "Create labeled datasets with human intervention - SageMaker Ground Truth"
    ],
    "explanation": "SageMaker Canvas provides no-code data prep, JumpStart offers prebuilt solutions, and Ground Truth facilitates human-labeled datasets."
  },
  {
    "question_id": 192,
    "question": "What is the purpose of vector embeddings in a large language model (LLM)?",
    "options": {
      "A": "Splitting text into manageable pieces of data",
      "B": "Grouping a set of characters to be treated as a single unit",
      "C": "Providing the ability to mathematically compare texts",
      "D": "Providing the count of every word in the input"
    },
    "correct_answer": ["C"],
    "explanation": "Vector embeddings represent text as numerical vectors, enabling mathematical operations like similarity comparisons between texts."
  },
  {
    "question_id": 193,
    "question": "A company wants to fine-tune a foundation model (FM) by using AWS services. The company needs to ensure that its data stays private, safe, and secure in the source AWS Region where the data is stored. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
    "options": {
      "A": "Host the model on premises by using AWS Outposts.",
      "B": "Use the Amazon Bedrock API.",
      "C": "Use AWS PrivateLink and a VPC.",
      "D": "Host the Amazon Bedrock API on premises.",
      "E": "Use Amazon CloudWatch logs and metrics."
    },
    "correct_answer": ["B", "C"],
    "explanation": "Using Amazon Bedrock API keeps data in-region, and AWS PrivateLink with VPC ensures secure private network connectivity."
  },
  {
    "question_id": 194,
    "question": "A financial company uses AWS to host its generative AI models. The company must generate reports to show adherence to international regulations for handling sensitive customer data. Which AWS service meets these requirements?",
    "options": {
      "A": "Amazon Macie",
      "B": "AWS Artifact",
      "C": "AWS Secrets Manager",
      "D": "AWS Config"
    },
    "correct_answer": ["B"],
    "explanation": "AWS Artifact provides access to AWS compliance reports and certifications needed for regulatory adherence documentation."
  }
]








