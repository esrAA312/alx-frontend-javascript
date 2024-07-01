export default function getListStudentIds(studentList) {
  if (!(students instanceof Array)) {
    return [];
  }

  return studentList.map((student) => student.id);
}
