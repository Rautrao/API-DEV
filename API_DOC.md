# Setup Instructions

git clone <repo-url>
cd project-root
npm install
npm run dev

MongoDB URL: set in .env
Runs on: localhost:3000

# Endpoint Rreference

| Method | Endpoint                    | Description       |
| ------ | --------------------------- | ----------------- |
| GET    | `/api/v1/tasks/courses`     | Get all courses   |
| POST   | `/api/v1/tasks/courses`     | Add new course    |
| GET    | `/api/v1/tasks/course/:id`  | Get course by ID  |
| PATCH  | `/api/v1/tasks/course/:id`  | Update course     |
| DELETE | `/api/v1/tasks/course/:id`  | Delete course     |
| GET    | `/api/v1/tasks/faculties`   | Get all faculties |
| POST   | `/api/v1/tasks/faculties`   | Add new faculty   |
| GET    | `/api/v1/tasks/faculty/:id` | Get faculty by ID |
| PATCH  | `/api/v1/tasks/faculty/:id` | Update faculty    |
| DELETE | `/api/v1/tasks/faculty/:id` | Delete faculty    |

# Data Model

- Course :
    {
        "id": "CSE201",
        "name": "Data Structures and Algorithms",
        "code": "CSE201",
        "description": "Covers fundamental data structures and algorithmic techniques used in solving problems.",
        "credits": 4,
        "department": "Computer Science",
        "prerequisites": [],
        "faculty_id": "F102"
    }
- Faculty : 
    {
        "id": "F106",
        "first_name": "Nikhil",
        "last_name": "Bansal",
        "email": "nikhil.bansal@iiitdm.ac.in",
        "department": "Computer Science",
        "specialization": ["Machine Learning", "Artificial Intelligence"],
        "office_location": "Block B - Room 308",
        "office_hours": "Tue/Thu 1-3PM"
    }
    
    