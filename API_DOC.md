# Setup Instructions</br>

git clone <repo-url></br>
cd project-root</br>
npm install</br>
npm run dev</br>
</br>
MongoDB URL: set in .env</br>
Runs on: localhost:3000</br>
</br>
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

- Course :</br>
    {</br>
        "id": "CSE201",</br>
        "name": "Data Structures and Algorithms",</br>
        "code": "CSE201",</br>
        "description": "Covers fundamental data structures and algorithmic techniques used in solving problems.",</br>
        "credits": 4,</br>
        "department": "Computer Science",</br>
        "prerequisites": [],</br>
        "faculty_id": "F102"</br>
    }</br>
- Faculty : </br>
    {</br>
        "id": "F106",</br>
        "first_name": "Nikhil",</br>
        "last_name": "Bansal",</br>
        "email": "nikhil.bansal@iiitdm.ac.in",</br>
        "department": "Computer Science",</br>
        "specialization": ["Machine Learning", "Artificial Intelligence"],</br>
        "office_location": "Block B - Room 308",</br>
        "office_hours": "Tue/Thu 1-3PM"</br>
    }</br>
    
    
