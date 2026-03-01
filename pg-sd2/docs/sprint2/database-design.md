# Database Design — Book Swap (Sprint 2)

## Overview
- Users list page
- User profile page
- Listings page
- Listing detail page
- Tags/categories

## Tables

### 1) users
Purpose: store users of the Book Swap app.

Fields:
- id (PK, INT, auto increment)
- name (VARCHAR, required)
- email (VARCHAR, required, unique)
- password_hash (VARCHAR, required)
- bio (TEXT, optional)
- created_at (DATETIME, optional)

### 2) listings
Purpose: store books offered for swapping.

Fields:
- id (PK, INT, auto increment)
- user_id (FK → users.id, required)
- title (VARCHAR, required)
- author (VARCHAR, optional)
- isbn (VARCHAR, optional)
- description (TEXT, optional)
- book_condition (VARCHAR, optional; e.g. New/Good/Used)
- status (VARCHAR, required; e.g. available/reserved/swapped)
- created_at (DATETIME, optional)

### 3) categories
Purpose: store genres/tags.

Fields:
- id (PK, INT, auto increment)
- name (VARCHAR, required, unique)

### 4) listing_categories (junction table)
Purpose: allow a listing to have multiple categories/tags.

Fields:
- listing_id (PK, FK → listings.id)
- category_id (PK, FK → categories.id)

## Relationships
- One user can create many listings (users 1 → many listings).
- Listings and categories are many-to-many using listing_categories:
  - a listing can have many categories
  - a category can belong to many listings

##
- Users pages use the users table.
- Listings pages use the listings table.
- Tags/categories uses categories + listing_categories.