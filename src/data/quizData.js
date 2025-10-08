export const quizData = {
  'data-structure-algorithms': [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which data structure uses LIFO principle?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the worst-case time complexity of Quick Sort?",
      options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "Which algorithm is used for shortest path finding?",
      options: ["Dijkstra", "Bubble Sort", "Binary Search", "DFS"],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What does BST stand for?",
      options: ["Binary Search Tree", "Basic Sorting Technique", "Binary Storage Type", "Best Search Time"],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is a hash collision?",
      options: [
        "When two keys produce same hash value",
        "When hash table is full",
        "When hash function is too slow",
        "When keys are identical"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which data structure is best for implementing LRU cache?",
      options: ["Array", "Linked List", "Hash Map + Doubly Linked List", "Stack"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is the space complexity of merge sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "Which traversal gives sorted order in BST?",
      options: ["Pre-order", "In-order", "Post-order", "Level-order"],
      correctAnswer: 1
    }
  ],
  'computer-architecture': [
    {
      id: 1,
      question: "What is the function of ALU?",
      options: [
        "Store data",
        "Perform arithmetic and logical operations",
        "Control input/output",
        "Manage memory"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is cache memory?",
      options: [
        "Main memory",
        "Secondary memory",
        "Fast memory between CPU and main memory",
        "Virtual memory"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Which register holds the memory address of next instruction?",
      options: ["Accumulator", "Program Counter", "Instruction Register", "Memory Buffer Register"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is pipelining in computer architecture?",
      options: [
        "Multiple instructions execution in parallel",
        "Single instruction execution",
        "Memory management technique",
        "Cache optimization"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Which component performs fetch-decode-execute cycle?",
      options: ["ALU", "Control Unit", "Memory Unit", "I/O Unit"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What is the purpose of virtual memory?",
      options: [
        "Increase CPU speed",
        "Extend RAM using disk storage",
        "Improve cache performance",
        "Speed up I/O operations"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "Which bus carries memory addresses?",
      options: ["Data Bus", "Address Bus", "Control Bus", "System Bus"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What is RISC architecture?",
      options: [
        "Reduced Instruction Set Computer",
        "Random Instruction Set Computer",
        "Rapid Instruction Set Computer",
        "Reliable Instruction Set Computer"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "Which memory is volatile?",
      options: ["ROM", "RAM", "Hard Disk", "CD-ROM"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Program Unit",
        "Control Processing Unit"
      ],
      correctAnswer: 0
    }
  ],
  'programming-java': [
    {
      id: 1,
      question: "What is the default value of boolean in Java?",
      options: ["true", "false", "0", "null"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which keyword is used for inheritance in Java?",
      options: ["implements", "extends", "inherits", "super"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is JVM?",
      options: [
        "Java Virtual Machine",
        "Java Variable Method",
        "Java Verified Machine",
        "Java Visual Manager"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which collection class is synchronized?",
      options: ["ArrayList", "HashMap", "Vector", "HashSet"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What is the size of int in Java?",
      options: ["16 bits", "32 bits", "64 bits", "8 bits"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which method is the entry point of Java application?",
      options: ["start()", "init()", "main()", "run()"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is method overloading?",
      options: [
        "Same method name different parameters",
        "Same method name same parameters",
        "Different method name same parameters",
        "Inheriting methods"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which keyword is used to prevent method overriding?",
      options: ["static", "final", "private", "protected"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "What is an interface in Java?",
      options: [
        "A class that can have only abstract methods",
        "A blueprint of a class",
        "A type of class",
        "All of the above"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Which package contains Scanner class?",
      options: ["java.lang", "java.util", "java.io", "java.awt"],
      correctAnswer: 1
    }
  ],
  'programming-c': [
    {
      id: 1,
      question: "What is the correct syntax to output 'Hello World' in C?",
      options: [
        "printf('Hello World');",
        "printf(\"Hello World\");",
        "cout << 'Hello World';",
        "print('Hello World');"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which data type is used for storing single character in C?",
      options: ["char", "string", "character", "chr"],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is the size of int data type in C?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "Which operator is used to get memory address in C?",
      options: ["*", "&", "#", "@"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What does malloc() function do in C?",
      options: [
        "Memory allocation",
        "Memory deallocation",
        "Memory reallocation",
        "Memory optimization"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "Which header file is required for string operations?",
      options: ["<string.h>", "<strings.h>", "<str.h>", "<text.h>"],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "What is the return type of main() function in C?",
      options: ["void", "int", "char", "float"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "Which loop is guaranteed to execute at least once?",
      options: ["for", "while", "do-while", "if-else"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is a pointer in C?",
      options: [
        "Variable that stores address of another variable",
        "Variable that stores value",
        "Function that points to memory",
        "Data type for arrays"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "Which operator is used for pointer dereferencing?",
      options: ["&", "*", "->", "::"],
      correctAnswer: 1
    }
  ],
  'programming-python': [
    {
      id: 1,
      question: "Which of the following is used to define a function in Python?",
      options: ["function", "def", "define", "func"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is the output of 'hello'[1:4] in Python?",
      options: ["hell", "ello", "ell", "hel"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Which data type is mutable in Python?",
      options: ["tuple", "string", "list", "int"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What does PEP 8 refer to in Python?",
      options: [
        "Python Enhancement Proposal for code style",
        "Python Error Protocol",
        "Python Execution Process",
        "Python Extension Package"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Which keyword is used for exception handling in Python?",
      options: ["catch", "throw", "try", "error"],
      correctAnswer: 2
    },
    {
      id: 6,
      question: "What is the purpose of __init__ method?",
      options: [
        "To initialize object attributes",
        "To create a class",
        "To import modules",
        "To handle exceptions"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "Which module is used for regular expressions?",
      options: ["regex", "re", "regexp", "pattern"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "What does 'list comprehension' do in Python?",
      options: [
        "Creates list in a concise way",
        "Explains list contents",
        "Sorts the list",
        "Reverses the list"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "^^", "exp"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "What is the output of bool('False') in Python?",
      options: ["False", "True", "Error", "None"],
      correctAnswer: 1
    }
  ],
  'programming-cpp': [
    {
      id: 1,
      question: "Which operator is used for dynamic memory allocation in C++?",
      options: ["malloc", "new", "alloc", "create"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is cin in C++?",
      options: [
        "Standard input stream",
        "Standard output stream",
        "Class input",
        "Console input"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "Which concept allows function overloading in C++?",
      options: ["Virtual functions", "Templates", "Polymorphism", "Inheritance"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What is the default access specifier in a class?",
      options: ["public", "private", "protected", "package"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Which STL container uses LIFO principle?",
      options: ["queue", "stack", "vector", "list"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What does OOP stand for?",
      options: [
        "Object Oriented Programming",
        "Object Optimization Process",
        "Operational Object Protocol",
        "Oriented Object Programming"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "Which keyword is used for function templates?",
      options: ["template", "function", "generic", "type"],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "What is a constructor?",
      options: [
        "Function called when object is created",
        "Function called when object is destroyed",
        "Function to construct memory",
        "Function to initialize variables"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "Which operator is used for scope resolution?",
      options: [".", "->", "::", ":"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "What is function overriding?",
      options: [
        "Same function name in different classes",
        "Same function name with different parameters",
        "Redefining base class function in derived class",
        "Creating multiple functions"
      ],
      correctAnswer: 2
    }
  ],
  'operating-systems': [
    {
      id: 1,
      question: "What is the main purpose of an operating system?",
      options: [
        "Manage computer hardware and software resources",
        "Run applications only",
        "Provide internet connectivity",
        "Store data permanently"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which scheduling algorithm is preemptive?",
      options: ["FCFS", "SJF", "Round Robin", "Priority Non-preemptive"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is a deadlock?",
      options: [
        "Process waiting for resource held by another process",
        "System crash",
        "Memory leak",
        "CPU overheating"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which memory management technique uses pages?",
      options: ["Segmentation", "Paging", "Fragmentation", "Compaction"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is virtual memory?",
      options: [
        "Memory on virtual machine",
        "Extension of main memory using disk",
        "RAM memory",
        "Cache memory"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which is NOT an operating system?",
      options: ["Windows", "Linux", "Oracle", "macOS"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "What is thrashing?",
      options: [
        "Excessive paging",
        "High CPU usage",
        "Memory fragmentation",
        "Disk failure"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which command lists files in Linux?",
      options: ["list", "dir", "ls", "show"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is a process?",
      options: [
        "Program in execution",
        "Program on disk",
        "Hardware component",
        "User account"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "Which is a real-time operating system?",
      options: ["Windows 10", "Ubuntu", "VxWorks", "macOS"],
      correctAnswer: 2
    }
  ],
  'computer-networks': [
    {
      id: 1,
      question: "What does TCP stand for?",
      options: [
        "Transmission Control Protocol",
        "Transfer Control Process",
        "Technical Communication Protocol",
        "Transmission Communication Process"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which layer is responsible for routing?",
      options: ["Physical", "Data Link", "Network", "Transport"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the purpose of DNS?",
      options: [
        "Domain Name System - translates domain to IP",
        "Data Network Service",
        "Digital Naming System",
        "Domain Network Service"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which protocol is used for email?",
      options: ["FTP", "HTTP", "SMTP", "SNMP"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "What is an IP address?",
      options: [
        "Unique identifier for network device",
        "Internet password",
        "Website name",
        "Network cable type"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "Which topology uses a central device?",
      options: ["Bus", "Star", "Ring", "Mesh"],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What is HTTP?",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transfer Text Process",
        "High Technical Transfer Protocol"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which device operates at Network layer?",
      options: ["Hub", "Switch", "Router", "Bridge"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is bandwidth?",
      options: [
        "Maximum data transfer rate",
        "Network security",
        "Signal strength",
        "Connection type"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "Which is a private IP address?",
      options: ["192.168.1.1", "8.8.8.8", "172.217.167.4", "203.0.113.1"],
      correctAnswer: 0
    }
  ],
  'dbms': [
    {
      id: 1,
      question: "What does DBMS stand for?",
      options: [
        "Database Management System",
        "Data Basic Management System",
        "Digital Base Management System",
        "Database Memory System"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Which is NOT a type of database model?",
      options: ["Relational", "Hierarchical", "Network", "Linear"],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "What is a primary key?",
      options: [
        "Unique identifier for table records",
        "First column in table",
        "Foreign key reference",
        "Index key"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Which SQL command retrieves data?",
      options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is normalization?",
      options: [
        "Organizing data to reduce redundancy",
        "Making database faster",
        "Backing up data",
        "Encrypting data"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      question: "Which is ACID property?",
      options: ["Atomicity", "Availability", "Durability", "Both A and C"],
      correctAnswer: 3
    },
    {
      id: 7,
      question: "What is a foreign key?",
      options: [
        "Key that references primary key of another table",
        "Primary key of current table",
        "Encrypted key",
        "Backup key"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which command modifies table structure?",
      options: ["UPDATE", "MODIFY", "ALTER", "CHANGE"],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "What is a transaction?",
      options: [
        "Single logical unit of work",
        "Data transfer",
        "Table creation",
        "Query execution"
      ],
      correctAnswer: 0
    },
    {
      id: 10,
      question: "Which is NOT a SQL constraint?",
      options: ["NOT NULL", "UNIQUE", "PRIMARY KEY", "VALIDATE"],
      correctAnswer: 3
    }
  ]
};

export const categories = [
  {
    id: 'data-structure-algorithms',
    name: 'Data Structure & Algorithms',
    icon: '🧩',
    description: 'Test your knowledge of data structures and algorithms'
  },
  {
    id: 'computer-architecture',
    name: 'Computer Architecture',
    icon: '⚙️',
    description: 'Questions about computer organization and architecture'
  },
  {
    id: 'programming-java',
    name: 'Java Programming',
    icon: '☕',
    description: 'Java programming concepts and fundamentals'
  },
  {
    id: 'programming-c',
    name: 'C Programming',
    icon: '🔧',
    description: 'C programming language fundamentals'
  },
  {
    id: 'programming-python',
    name: 'Python Programming',
    icon: '🐍',
    description: 'Python programming concepts'
  },
  {
    id: 'programming-cpp',
    name: 'C++ Programming',
    icon: '⚡',
    description: 'C++ programming language'
  },
  {
    id: 'operating-systems',
    name: 'Operating Systems',
    icon: '💻',
    description: 'OS concepts and principles'
  },
  {
    id: 'computer-networks',
    name: 'Computer Networks',
    icon: '🌐',
    description: 'Networking fundamentals and protocols'
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    icon: '🗄️',
    description: 'Database concepts and SQL'
  }
];