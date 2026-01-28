# Repository Review: 2023-rica-rebusit

## Repository Information
- **GitHub URL**: https://github.com/DATA-490/2023-rica-rebusit
- **Author**: Rica Rebusit
- **Academic Context**: Senior Project, Applied Mathematics, California State University, Chico (Spring 2023)
- **Contributors**: 2
- **Total Commits**: 5

## Project Overview

### Purpose
This project aims to predict the priority of activities for the **Center for Healthy Communities** based on text descriptions. The goal is to help the organization understand the impact of their activities and optimize resource allocation for campus partners.

### Problem Statement
The Center for Healthy Communities needed a way to classify and prioritize activities based on their textual descriptions to better allocate resources and understand program impacts.

## Technical Approach

### Machine Learning Methods
1. **Latent Dirichlet Allocation (LDA)**: Used for topic modeling and text analysis
2. **Random Forest Classification**: Primary machine learning model for priority prediction

### Workflow
1. Data cleaning and preprocessing
2. Text tokenization
3. Feature extraction using LDA
4. Classification using Random Forest model

## Repository Structure

### `/data/`
Contains the dataset used for the project. According to the documentation, access and details require consultation with Robin (likely a project advisor or data steward).

### `/documentations/`
Includes project documentation:
- Meeting notes tracking project progress
- Model flow documentation explaining the ML pipeline
- Python installation guides for project setup

### `/presentation/`
Materials for sharing project results:
- Poster session materials
- Stakeholder report for the Center for Healthy Communities

### `/scripts/`
Core implementation files:
- **`LDA.qmd`**: Handles data cleaning, preprocessing, and tokenization
- **`Random_Forest.qmd`**: Implements the Random Forest classification model

## Technologies Used

### Languages
- JavaScript: 54.3%
- HTML: 35.3%
- CSS: 10.4%

### Tools & Frameworks
- **Quarto**: Used for creating reproducible reports and presentations
- **Machine Learning Libraries**: LDA and Random Forest implementations
- **Text Processing**: Custom tokenization and cleaning pipelines

## Key Features

### Text Processing Pipeline
- Data cleaning procedures to handle noisy text
- Tokenization for breaking down activity descriptions
- Feature extraction for machine learning input

### Classification System
- Predicts activity priorities from text descriptions
- Provides actionable insights for resource allocation
- Supports decision-making for campus partnerships

## Future Enhancements

The project documentation identifies several areas for improvement:

1. **Data Collection**: Obtain more labeled data to improve model accuracy
2. **Preprocessing Refinement**: Enhance the cleaning and tokenization process
3. **Model Comparison**: Evaluate alternative machine learning models beyond Random Forest
4. **Feature Engineering**: Explore additional text features and representations

## Target Audience

- **Primary**: Center for Healthy Communities staff and administrators
- **Secondary**: Campus partners and stakeholders interested in activity prioritization
- **Academic**: Serves as a senior capstone project demonstrating applied mathematics skills

## Project Impact

This project provides the Center for Healthy Communities with:
- A data-driven approach to activity prioritization
- Better understanding of program impacts
- Tools for optimizing resource allocation
- Evidence-based decision-making support

## Academic Context

This repository represents a DATA-490 senior project, demonstrating the application of:
- Machine learning techniques
- Natural language processing
- Statistical analysis
- Software development
- Stakeholder communication

## Recommendations for Future Work

1. **Model Validation**: Implement cross-validation and performance metrics
2. **Deployment**: Create a user-friendly interface for non-technical users
3. **Real-time Updates**: Build a system to continuously learn from new data
4. **Interpretability**: Add explanations for model predictions to build stakeholder trust
5. **Scalability**: Ensure the system can handle growing volumes of activity descriptions

## Notes

- The project uses Quarto (`.qmd` files) for literate programming and reproducible research
- Data access is restricted and requires coordination with project supervisors
- The language distribution suggests web-based components or documentation (JavaScript, HTML, CSS)
- Limited commit history (5 commits) suggests this may be a focused, well-planned project with milestone-based commits

---

**Repository Last Accessed**: 2025-10-10
