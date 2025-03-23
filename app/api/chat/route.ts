import { smoothStream, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Define the cancer types
type CancerType = 
  | 'Breast' 
  | 'Lung' 
  | 'Colorectal' 
  | 'Prostate' 
  | 'Melanoma' 
  | 'Leukemia' 
  | 'Lymphoma' 
  | 'Pancreatic' 
  | 'Thyroid' 
  | 'Other';

// Data input types
type DataInputType =
  | 'Clinical Notes'
  | 'Pathology Reports'
  | 'Imaging Reports'
  | 'Genomic Data'
  | 'Lab Results'
  | 'Patient History'
  | 'Mixed Data';

// Data classification prompt
const dataClassifierPrompt = `
Analyze the following medical data and determine which type of unstructured medical data it contains:
- Clinical Notes: Doctor's notes, medical observations, treatment plans
- Pathology Reports: Tissue analysis, histology findings, cytology
- Imaging Reports: Radiology reports, MRI, CT, ultrasound interpretations
- Genomic Data: Gene expression, mutation analysis, sequencing results
- Lab Results: Blood work, urinalysis, biochemical markers
- Patient History: Medical history, family history, risk factors
- Mixed Data: Contains multiple types of the above data

Return ONLY the data type category name without explanation.

Data: 
`;

// Cancer classification prompt 
const cancerClassifierPrompt = `
Analyze the following medical data and determine which cancer type it most likely relates to:
- Breast: Breast tissue abnormalities, mammography findings
- Lung: Pulmonary nodules, respiratory symptoms, smoking history
- Colorectal: Colon or rectal abnormalities, GI symptoms
- Prostate: Prostate gland abnormalities, PSA levels
- Melanoma: Skin lesions, pigmentation changes
- Leukemia: Blood cell abnormalities, bone marrow findings
- Lymphoma: Lymph node abnormalities, immune system issues
- Pancreatic: Pancreatic lesions, digestive symptoms
- Thyroid: Thyroid gland abnormalities, hormone levels
- Other: For cases that don't clearly fit the above categories

Return ONLY the cancer type name without explanation.

Data: 
`;

// Data processing prompts for different input types
const dataProcessingPrompts: Record<DataInputType, string> = {
  'Clinical Notes': `You are analyzing clinical notes for cancer classification. Extract key symptoms, findings, and physician observations. Focus on terminology that suggests specific cancer types:`,
  
  'Pathology Reports': `You are analyzing pathology reports for cancer classification. Extract key histological findings, cell morphology, tissue characteristics, and pathological markers:`,
  
  'Imaging Reports': `You are analyzing imaging reports for cancer classification. Extract key radiological findings, location descriptions, sizes, and characteristics of abnormalities:`,
  
  'Genomic Data': `You are analyzing genomic data for cancer classification. Extract key gene mutations, expression patterns, and molecular markers associated with specific cancers:`,
  
  'Lab Results': `You are analyzing laboratory results for cancer classification. Extract key biomarkers, abnormal values, and cancer-specific indicators:`,
  
  'Patient History': `You are analyzing patient history for cancer classification. Extract key risk factors, family history patterns, and symptom progression relevant to cancer diagnosis:`,
  
  'Mixed Data': `You are analyzing mixed medical data for cancer classification. Extract key clinical findings, diagnostic results, and patient characteristics across multiple data sources:`
};

// Cancer type specific analysis prompts
const cancerAnalysisPrompts: Record<CancerType, string> = {
  'Breast': `You are a breast cancer specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of breast cancer. Consider typical markers like ER/PR status, HER2, histological patterns, and mammography findings:`,
  
  'Lung': `You are a lung cancer specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of lung cancer. Consider cell types (SCLC vs. NSCLC), nodule characteristics, and smoking history correlations:`,
  
  'Colorectal': `You are a colorectal cancer specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of colorectal cancer. Consider polyp characteristics, location, and relevant genetic markers like MSI status:`,
  
  'Prostate': `You are a prostate cancer specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of prostate cancer. Consider Gleason score interpretations, PSA trends, and imaging findings:`,
  
  'Melanoma': `You are a melanoma specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of melanoma. Consider ABCDE criteria, Breslow depth, ulceration status, and sentinel node findings:`,
  
  'Leukemia': `You are a leukemia specialist. Analyze the following data to estimate the likelihood, subtypes, and characteristics of leukemia. Consider blast percentages, immunophenotyping, and cytogenetic markers:`,
  
  'Lymphoma': `You are a lymphoma specialist. Analyze the following data to estimate the likelihood, subtypes, and characteristics of lymphoma. Consider node characteristics, B symptoms, and immunohistochemistry findings:`,
  
  'Pancreatic': `You are a pancreatic cancer specialist. Analyze the following data to estimate the likelihood, stage, and characteristics of pancreatic cancer. Consider mass location, CA 19-9 levels, and ductal involvement:`,
  
  'Thyroid': `You are a thyroid cancer specialist. Analyze the following data to estimate the likelihood, subtypes, and characteristics of thyroid cancer. Consider nodule characteristics, FNA results, and relevant genetic markers:`,
  
  'Other': `You are a general oncology specialist. Analyze the following data to estimate the likelihood, possible cancer types, and next diagnostic steps. Consider the overall pattern of findings and potential differential diagnoses:`
};

// Treatment recommendation prompts for each cancer type
const treatmentPrompts: Record<CancerType, string> = {
  'Breast': `Based on the analysis, provide a step-by-step treatment plan for breast cancer. Consider standard of care approaches including surgical options (lumpectomy vs. mastectomy), radiation therapy, chemotherapy protocols, hormone therapy (for ER/PR positive), targeted therapy (for HER2 positive), and immunotherapy options. Explain each step in clear, patient-friendly language:`,
  
  'Lung': `Based on the analysis, provide a step-by-step treatment plan for lung cancer. Consider surgical resection options, stereotactic radiation, chemotherapy regimens appropriate for SCLC vs. NSCLC, targeted therapies for specific mutations (EGFR, ALK, ROS1), and immunotherapy options (PD-1/PD-L1). Explain each step in clear, patient-friendly language:`,
  
  'Colorectal': `Based on the analysis, provide a step-by-step treatment plan for colorectal cancer. Consider surgical approaches, neoadjuvant/adjuvant chemotherapy, radiation for rectal cancers, targeted therapies for specific mutations (RAS, BRAF), and immunotherapy for MSI-high tumors. Explain each step in clear, patient-friendly language:`,
  
  'Prostate': `Based on the analysis, provide a step-by-step treatment plan for prostate cancer. Consider active surveillance criteria, surgical approaches, radiation therapy options, androgen deprivation therapy, and newer treatments for castration-resistant disease. Explain each step in clear, patient-friendly language:`,
  
  'Melanoma': `Based on the analysis, provide a step-by-step treatment plan for melanoma. Consider surgical approaches with appropriate margins, sentinel lymph node procedures, adjuvant therapies, targeted therapies for BRAF-mutated disease, and immunotherapy options. Explain each step in clear, patient-friendly language:`,
  
  'Leukemia': `Based on the analysis, provide a step-by-step treatment plan for leukemia. Consider induction chemotherapy regimens, consolidation approaches, stem cell transplantation criteria, targeted therapies for specific subtypes, and supportive care measures. Explain each step in clear, patient-friendly language:`,
  
  'Lymphoma': `Based on the analysis, provide a step-by-step treatment plan for lymphoma. Consider chemotherapy regimens appropriate for Hodgkin vs. non-Hodgkin subtypes, radiation therapy, immunotherapy including CAR-T approaches, stem cell transplantation, and novel targeted agents. Explain each step in clear, patient-friendly language:`,
  
  'Pancreatic': `Based on the analysis, provide a step-by-step treatment plan for pancreatic cancer. Consider surgical candidacy (Whipple vs. distal pancreatectomy), neoadjuvant/adjuvant approaches, chemotherapy options, radiation considerations, and palliative care strategies. Explain each step in clear, patient-friendly language:`,
  
  'Thyroid': `Based on the analysis, provide a step-by-step treatment plan for thyroid cancer. Consider surgical approaches (partial vs. total thyroidectomy), radioactive iodine therapy indications, thyroid hormone management, targeted therapies for advanced disease, and surveillance strategies. Explain each step in clear, patient-friendly language:`,
  
  'Other': `Based on the analysis, provide a step-by-step approach to further diagnosis and potential treatment. Consider additional diagnostic testing needed, specialist referrals, general principles of cancer management, and how treatment approaches would differ based on final diagnosis. Explain each step in clear, patient-friendly language:`
};

// Follow-up questions for each cancer type
const followUpQuestions: Record<CancerType, string[]> = {
  'Breast': [
    "Would you like me to provide more information about the different types of breast surgeries (lumpectomy vs. mastectomy) and how to decide between them?",
    "Are you interested in learning more about the side effects of hormone therapy and how to manage them?",
    "Would you like me to explain more about genetic testing for breast cancer (like BRCA1/2) and what the results might mean for your treatment?"
  ],
  
  'Lung': [
    "Would you like more information about the specific molecular testing that should be done for your type of lung cancer?",
    "Are you interested in learning more about the latest immunotherapy options for lung cancer and who typically qualifies?",
    "Would you like me to explain more about pulmonary rehabilitation and other supportive care measures during lung cancer treatment?"
  ],
  
  'Colorectal': [
    "Would you like to know more about the different surgical approaches for colorectal cancer and what recovery typically involves?",
    "Are you interested in learning about screening recommendations for family members of colorectal cancer patients?",
    "Would you like me to explain more about how genetic and molecular testing affects treatment decisions in colorectal cancer?"
  ],
  
  'Prostate': [
    "Would you like more information about the pros and cons of different prostate cancer treatments including active surveillance?",
    "Are you interested in learning more about managing the side effects of androgen deprivation therapy?",
    "Would you like me to explain more about newer imaging techniques like PSMA PET scans and how they're used in prostate cancer management?"
  ],
  
  'Melanoma': [
    "Would you like more information about the importance of regular skin examinations and what to look for?",
    "Are you interested in learning more about the role of immunotherapy in treating different stages of melanoma?",
    "Would you like me to explain more about the genetic factors that can increase melanoma risk and what preventative measures are recommended?"
  ],
  
  'Leukemia': [
    "Would you like more information about what to expect during induction chemotherapy and how to prepare?",
    "Are you interested in learning more about stem cell transplantation and how donors are matched?",
    "Would you like me to explain more about long-term follow-up care after leukemia treatment?"
  ],
  
  'Lymphoma': [
    "Would you like more information about the differences between Hodgkin and non-Hodgkin lymphoma treatments?",
    "Are you interested in learning more about CAR-T cell therapy and which lymphoma patients might benefit?",
    "Would you like me to explain more about managing lymphoma symptoms and treatment side effects?"
  ],
  
  'Pancreatic': [
    "Would you like more information about nutrition support during pancreatic cancer treatment?",
    "Are you interested in learning more about pain management strategies for pancreatic cancer?",
    "Would you like me to explain more about clinical trials that might be available for pancreatic cancer patients?"
  ],
  
  'Thyroid': [
    "Would you like more information about thyroid hormone replacement after thyroidectomy?",
    "Are you interested in learning more about radioactive iodine treatment and the precautions needed?",
    "Would you like me to explain more about long-term monitoring after thyroid cancer treatment?"
  ],
  
  'Other': [
    "Would you like more information about getting a second opinion for your diagnosis?",
    "Are you interested in learning more about comprehensive molecular testing to help narrow down the diagnosis?",
    "Would you like me to explain more about supportive care resources available during cancer diagnosis and treatment?"
  ]
};

// Function to select a random follow-up question
const getFollowUpQuestion = (cancerType: CancerType): string => {
  const questions = followUpQuestions[cancerType];
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

// Function to generate model recommendation
const generateModelRecommendation = (dataType: DataInputType, cancerType: CancerType): string => {
  const modelRecommendations: Record<DataInputType, Record<string, string>> = {
    'Clinical Notes': {
      'default': "BioClinicalBERT or ClinicalBERT would be optimal for processing free-text clinical notes. These models are pre-trained on large corpora of medical text and fine-tuned for medical NLP tasks.",
      'Breast': "A BioClinicalBERT model fine-tuned on breast oncology notes with attention to hormone receptor terminology would be effective.",
      'Lung': "ClinicalBERT with additional training on pulmonary oncology terminology and smoking history analysis would be recommended."
    },
    'Pathology Reports': {
      'default': "PathBERT or specialized BERT models trained on pathology reports would be most effective. Consider ensemble methods with CNN components for image-based pathology data.",
      'Prostate': "A specialized PathBERT model fine-tuned on Gleason score interpretation and prostate histopathology would be most effective.",
      'Melanoma': "PathBERT combined with image processing models for dermatopathology specimens would provide optimal classification."
    },
    'Imaging Reports': {
      'default': "RadBERT for textual reports combined with vision transformers or CNNs (ResNet, DenseNet) for actual medical images would be recommended.",
      'Breast': "Vision Transformers or EfficientNet combined with BERT for mammography report analysis would be optimal.",
      'Lung': "3D CNNs like 3D ResNet or 3D DenseNet combined with RadBERT for pulmonary nodule detection and classification."
    },
    'Genomic Data': {
      'default': "Graph Neural Networks or specialized transformers like GeneBERT would be optimal for genomic data processing.",
      'Breast': "Transformer models trained on breast cancer genomic datasets with attention to ER/PR/HER2 profiles.",
      'Leukemia': "Specialized GNNs trained on hematological malignancy genomic databases would be most effective."
    },
    'Lab Results': {
      'default': "Gradient Boosting models (XGBoost, LightGBM) or MLPs are effective for structured lab data. Consider autoencoders for dealing with missing values.",
      'Prostate': "Gradient Boosting models with specialized attention to PSA trajectories and ratios.",
      'Pancreatic': "Ensemble models combining XGBoost with deep learning for CA 19-9 and other pancreatic biomarkers."
    },
    'Patient History': {
      'default': "MedicalBERT or similar transformer models fine-tuned on EHR data would be most effective for extracting patterns from patient histories.",
      'Melanoma': "BERT models with additional training on dermatological risk factor terminology and family history patterns.",
      'Colorectal': "Specialized BERT models with attention to familial cancer syndrome patterns and GI symptom progression."
    },
    'Mixed Data': {
      'default': "Multimodal deep learning architectures combining transformer components for text with appropriate models for other data types. Consider models like MMBT (Multimodal BiTransformers).",
      'Breast': "Multimodal ensemble combining imaging, genomic, and textual models with attention fusion mechanisms.",
      'Lymphoma': "Multimodal architecture combining pathology image analysis, flow cytometry interpretation, and clinical note extraction."
    }
  };

  // Return specific recommendation if available, otherwise return default
  return modelRecommendations[dataType][cancerType] || modelRecommendations[dataType]['default'];
};

export async function POST(req: Request) {
  const { messages } = await req.json();
  const userData = messages[messages.length - 1].content as string;
  
  try {
    // Step 1: Classify the type of medical data
    const dataTypeResult = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [
        {
          role: 'user',
          content: dataClassifierPrompt + userData
        }
      ],
    });
    
    // Wait for the complete response and get the text
    const dataTypeResponse = await new Response(dataTypeResult.toDataStream()).text();
    
    // Check if the response is a valid data input type
    const dataType = isDataInputType(dataTypeResponse.trim()) 
      ? dataTypeResponse.trim() as DataInputType 
      : 'Mixed Data';
    
    // Step 2: Classify the cancer type
    const cancerTypeResult = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [
        {
          role: 'user',
          content: cancerClassifierPrompt + userData
        }
      ],
    });
    
    // Wait for the complete response and get the text
    const cancerTypeResponse = await new Response(cancerTypeResult.toDataStream()).text();
    
    // Check if the response is a valid cancer type
    const cancerType = isCancerType(cancerTypeResponse.trim()) 
      ? cancerTypeResponse.trim() as CancerType 
      : 'Other';
    
    // Step 3: Generate detailed analysis, treatment steps, and follow-up question
    const dataProcessingPrompt = dataProcessingPrompts[dataType];
    const cancerAnalysisPrompt = cancerAnalysisPrompts[cancerType];
    const treatmentPrompt = treatmentPrompts[cancerType];
    const followUpQuestion = getFollowUpQuestion(cancerType);
    const modelRecommendation = generateModelRecommendation(dataType, cancerType);
    
    const fullPrompt = `${dataProcessingPrompt}
    
${cancerAnalysisPrompt}

${treatmentPrompt}

Data: ${userData}

Please provide a detailed analysis and treatment plan using this structure:

1. Cancer Classification
   • Primary detection: ${cancerType} Cancer
   • Key findings from the data
   • Confidence level assessment

2. Step-by-Step Treatment Plan
   Step 1: [Explain first treatment step in detail, using patient-friendly language]
   Step 2: [Explain second treatment step in detail, using patient-friendly language]
   Step 3: [Explain third treatment step in detail, using patient-friendly language]
   [Additional steps as needed]

3. What to Expect
   • Typical timeline for treatment
   • Common side effects and management strategies
   • Success rates and prognosis information

4. Important Considerations
   • Key decisions the patient will need to make
   • Lifestyle recommendations during treatment
   • Support resources available

5. Next Steps
   • Immediate actions to take
   • Questions to ask your doctor
   • How to prepare for treatment

End your response with this follow-up question: "${followUpQuestion}"

Important: Explain each step in simple, clear language that a non-medical person can understand. Use analogies or comparisons where helpful to explain complex concepts.`;
    
    // Step 4: Generate and stream the response
    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages: [
        ...messages.slice(0, -1),
        {
          role: 'user',
          content: fullPrompt
        }
      ],
      experimental_transform: smoothStream(),
      onError({ error }) {
        console.error("Error generating cancer analysis:", error);
      },
    });
    
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Cancer classification error:", error);
    
    // Fallback response
    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages: [
        ...messages.slice(0, -1),
        {
          role: 'user',
          content: `Analyze this medical data, identify possible cancer type, and provide treatment steps in simple language: ${userData}`
        }
      ],
      experimental_transform: smoothStream(),
      onError({ error }) {
        console.error("Fallback error:", error);
      },
    });
    
    return result.toDataStreamResponse();
  }
}

// Type guard to check if a string is a valid DataInputType
function isDataInputType(value: string): value is DataInputType {
  return Object.keys(dataProcessingPrompts).includes(value);
}

// Type guard to check if a string is a valid CancerType
function isCancerType(value: string): value is CancerType {
  return Object.keys(cancerAnalysisPrompts).includes(value);
}