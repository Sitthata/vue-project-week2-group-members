export interface Student {
  studentId: number;
  studentName: string;
}

export interface Group {
  ID: number;
  section: number;
  groupName: string;
  repo: string;
  members: Student[];
}

