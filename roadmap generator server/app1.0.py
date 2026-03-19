# from flask import Flask, request, jsonify
# import os
# from langchain.prompts import PromptTemplate
# from langchain.chains import LLMChain
# from langchain_ollama import OllamaLLM
# from flask_cors import CORS


# app = Flask(__name__)
# CORS(app)

# # Define the prompt template
# prompt = PromptTemplate(
#     input_variables=["course_name"],
#     template="""
#     You are an AI assistant that generates structured course content like a teacher. 
#     Create a course structure for "{course_name}" with a maximum of 6 chapters.
#     Each chapter should contain 4-6 topics.

#     Example:

#     Course Name: {course_name}

#     Chapter 1: <Chapter Name>
#       - Topic 1: <Topic Name>
#       - Topic 2: <Topic Name>
    
#     ...
#     """
# )

# # Load the LLM model
# llm = OllamaLLM(model="mistral", temperature=0.7)

# @app.route("/", methods=["GET"])
# def home():
#     return "Flask is running!"

# @app.route("/generate_course", methods=["POST"])
# def generate_course():
#     """Only allows POST requests to generate course content."""
    
#     # Ensure JSON request
#     if request.content_type != "application/json":
#         return jsonify({"error": "Content-Type must be application/json"}), 400

#     data = request.get_json()
#     if not data or "course_name" not in data:
#         return jsonify({"error": "Missing 'course_name' in request"}), 400

#     course_name = data["course_name"]
#     chain = LLMChain(llm=llm, prompt=prompt)
#     result = chain.invoke({"course_name": course_name})

#     return jsonify({"course_outline": result})

# # Only allow POST requests, block other methods
# @app.route("/generate_course", methods=["GET", "PUT", "DELETE", "PATCH", "OPTIONS"])
# def method_not_allowed():
#     return jsonify({"error": "Method Not Allowed"}), 405

# if __name__ == "__main__":
#     app.run(debug=True)


import os
from flask import Flask, request, jsonify
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_ollama import OllamaLLM
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Prompt Template
prompt = PromptTemplate(
    input_variables=["course_name"],
    template="""
    You are an AI assistant that generates structured course content like a teacher. 
    Create a course structure for "{course_name}" with a maximum of 6 chapters.
    Each chapter should contain 4-6 topics.

    Example:

    Course Name: {course_name}

    Chapter 1: <Chapter Name>
      - Topic 1: <Topic Name>
      - Topic 2: <Topic Name>
    
    ...
    """
)

# Load the LLM model
llm = OllamaLLM(model="mistral", temperature=0.7)

@app.route("/", methods=["GET"])
def home():
    return "Flask is running!"

@app.route("/generate_course", methods=["POST"])
def generate_course():
    if request.content_type != "application/json":
        return jsonify({"error": "Content-Type must be application/json"}), 400

    data = request.get_json()
    if not data or "course_name" not in data:
        return jsonify({"error": "Missing 'course_name' in request"}), 400

    course_name = data["course_name"]

    # === Set up file path ===
    base_dir = r"C:\Users\Mohak Singh\Desktop\Desktop Main\Projects\Learnify_project\Global Storage"
    roadmap_dir = os.path.join(base_dir, "roadmaps")
    os.makedirs(roadmap_dir, exist_ok=True)

    # Sanitize course_name for filename
    safe_filename = "".join(c for c in course_name if c.isalnum() or c in (" ", "_", "-")).rstrip()
    file_path = os.path.join(roadmap_dir, f"{safe_filename}.txt")

    # === Check if roadmap already exists ===
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            existing_roadmap = file.read()
        return jsonify({"course_outline": {"text": existing_roadmap}, "source": "cached"})

    # === Generate new roadmap ===
    chain = LLMChain(llm=llm, prompt=prompt)
    result = chain.invoke({"course_name": course_name})
    course_outline = result["text"]

    with open(file_path, "w", encoding="utf-8") as file:
        file.write(course_outline)

    return jsonify({"course_outline": result, "source": "generated"})

# Block other methods
@app.route("/generate_course", methods=["GET", "PUT", "DELETE", "PATCH", "OPTIONS"])
def method_not_allowed():
    return jsonify({"error": "Method Not Allowed"}), 405

if __name__ == "__main__":
    app.run(debug=True)
