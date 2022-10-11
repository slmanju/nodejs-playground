async function getUserCommits(id) {
  const user = await getUser(id);
  const commits = await getCommits(user.username);
  return commits;
}

function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
	  resolve({ id: userId, username: 'AName' });
	}, 1000);
  });
}

function getCommits(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
	  resolve([ 'commit-1', 'commit-2']);
	}, 1000);
  });
}

getUserCommits(1).then(commits => console.log(commits));
