from langchain import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
from langchain_community.llms import Ollama

load_dotenv()
# Initialize the HuggingFaceHub LLM with the Mistral model
llm = Ollama(
    model = "mistral",
    temperature = 0.7,
)

# Define the prompt template
prompt = PromptTemplate(
    input_variables=["course_name"],
    template="""
    You are an AI assistant that generates structured course content just like a teacher who want to teach topic to its student by breaking into chapters. 
    Create a course structure for "{course_name}" with a maximum of 6 chapters.
    Each chapter should contain 4-6 topics.

    Example format:
    
    Course Name: {course_name}

    Chapter 1: <Chapter Name>
      - Topic 1: <Topic Name>
      - Topic 2: <Topic Name>
      - Topic 3: <Topic Name>
    
    Chapter 2: <Chapter Name>
      - Topic 1: <Topic Name>
      - Topic 2: <Topic Name>

    Generate the course outline in the given format.
    """
)

# Create the LLM chain
chain = LLMChain(llm=llm, prompt=prompt)

# Input data
input_data = "GEN AI"

# Run the chain and get the response
response = chain.run(input_data)

# Print the response
print(response)

