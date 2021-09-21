export default class ApiService {
  issues = [
    {
      id: 1,
      name: 'Issue 542',
      priority: 'Low Priority',
    },
    {
      id: 2,
      name: 'Issue 543',
      priority: 'High Priority',
    },
    {
      id: 3,
      name: 'Issue 544',
      priority: 'High Priority',
    },
  ];

  getIssuesData = (): Promise<any> => {
    return Promise.resolve(this.issues);
  };
}
