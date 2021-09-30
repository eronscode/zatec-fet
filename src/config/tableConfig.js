export const columns = [
    {
      Header: "Repository",
      accessor: "repo_name",
      style: {
        width: "20%",
      },
      width: 100,
      isSortedDesc: true,
    },
    {
      Header: "Open Issues",
      accessor: "repo_issue",
    },
    {
      Header: "Stars",
      accessor: "repo_stars",
    },
  ];