terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1" # вкажіть свій регіон
}

# Створення S3 бакета
resource "aws_s3_bucket" "app_bucket" {
  bucket = "react-aws-app-s3-bucket" # назва має бути унікальною у всьому світі
}

import {
  id = "react-aws-app-s3-bucket"
  to = aws_s3_bucket.app_bucket
}

# Налаштування для хостингу статичного сайту
resource "aws_s3_bucket_website_configuration" "app_site" {
  bucket = aws_s3_bucket.app_bucket.id

  index_document {
    suffix = "index.html"
  }
}

import {
  id = "react-aws-app-s3-bucket"
  to = aws_s3_bucket.app_bucket
}

# Дозвіл на публічний доступ (щоб сайт було видно)
resource "aws_s3_bucket_public_access_block" "app_access" {
  bucket = aws_s3_bucket.app_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_instance" "backend_server" {
  ami           = "ami-0c7217cdde317cfec" # Ubuntu 22.04 (us-east-1)
  instance_type = "t2.micro"
  key_name      = "my-key-pair" 

  vpc_security_group_ids = [aws_security_group.backend_sg.id]

  # Автоматичне встановлення Node.js при запуску
  user_data = <<-EOF
              #!/bin/bash
              curl -fsSL https://nodesource.com | sudo -E bash -
              sudo apt-get install -y nodejs
              sudo npm install -g pm2
              EOF

  tags = { Name = "ExpressBackend" }
}

resource "aws_security_group" "backend_sg" {
  name = "backend_sg"

  # Порт для Express
  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # SSH доступ
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

