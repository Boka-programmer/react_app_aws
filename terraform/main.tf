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
  bucket = "my-unique-app-bucket-name" # назва має бути унікальною у всьому світі
}

# Налаштування для хостингу статичного сайту
resource "aws_s3_bucket_website_configuration" "app_site" {
  bucket = aws_s3_bucket.app_bucket.id

  index_document {
    suffix = "index.html"
  }
}

# Дозвіл на публічний доступ (щоб сайт було видно)
resource "aws_s3_bucket_public_access_block" "app_access" {
  bucket = aws_s3_bucket.app_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
