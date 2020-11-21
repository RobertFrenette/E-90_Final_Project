# CSCI E-90: Cloud Services, Infrastructure, and Computing (AWS)
## Harvard Extension School, Fall 2020

## Continuous Integration / Continuous Delivery (CI / CD) using AWS CodePipeline

The focus of my final project is automated code build and deployment from a GitHub repository to an S3 Bucket, configured for static web hosting, using [AWS CodePipeline](https://aws.amazon.com/codepipeline/).

![Diagram](img/img_1.png?raw=true "Diagram")

In order to maintain a competitive advantage, and meet the needs of customers, businesses have to quickly enhance and release their software. However, keeping up with new feature releases and bug fixes can be challenging, especially using traditional release processes which are manual and prone to error.

AWS CodePipeline is a continuous delivery service that orchestrates the automatic building, testing and deployment of code in a serverless environment. CodePipeline replaces the manual process with an automated implementation which allows development teams to innovate faster, deliver rapidly and improve quality.


## Implementation
For my project, I'll implement two CodePipeline pipelines:

- CodePipeline to deploy code for a static website (HTML / CSS / JavaScript / images) in a GitHub Repo to an S3 Bucket. The site will be accessed via a CloudFront Distribution.

![Diagram](img/img_2.jpg?raw=true "Diagram")

[Staic Site](https://github.com/RobertFrenette/E-90_Final_Project/tree/master/MyContacts-static-demo)


- CodePipeline to build and deploy code for an Angular Application in a GitHub Repo to an S3 Bucket. The site will be accessed via a CloudFront Distribution.

![Diagram](img/img_3.jpg?raw=true "Diagram")


[Angular Site](https://github.com/RobertFrenette/E-90_Final_Project/tree/master/MyContacts-Angular-demo)
